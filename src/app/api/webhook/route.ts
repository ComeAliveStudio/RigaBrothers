import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase";
import { getResend, PLEDGE_FROM_EMAIL } from "@/lib/resend";
import { pledgeTiers } from "@/lib/pledgeTiers";
import PledgeConfirmation from "@/emails/PledgeConfirmation";

// Created inside the handler, not at module scope, so Next.js can collect
// this route's config at build time without these env vars being set.
function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

// Stripe requires the raw request body to verify the signature, so this
// route must not use the default JSON body parsing.
export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const tierId = session.metadata?.tier_id ?? "unknown";

    const { error } = await supabaseAdmin().from("pledges").upsert(
      {
        stripe_session_id: session.id,
        stripe_payment_intent:
          typeof session.payment_intent === "string" ? session.payment_intent : null,
        tier_id: tierId,
        amount_cents: session.amount_total ?? 0,
        currency: session.currency ?? "eur",
        backer_email: session.customer_details?.email ?? null,
        backer_name: session.customer_details?.name ?? null,
        status: "paid",
      },
      { onConflict: "stripe_session_id" }
    );

    if (error) {
      console.error("Failed to write pledge to Supabase", error);
      // Still return 200 - Stripe doesn't need to retry over a DB write
      // issue on our side; this is logged for manual reconciliation.
    }

    const backerEmail = session.customer_details?.email;
    if (backerEmail) {
      try {
        const tier = pledgeTiers.find((t) => t.id === tierId);
        await getResend().emails.send({
          from: PLEDGE_FROM_EMAIL,
          to: backerEmail,
          subject: "Your pledge to Riga Brothers is confirmed",
          react: PledgeConfirmation({
            backerName: session.customer_details?.name,
            tierTitle: tier?.title ?? "Riga Brothers Pledge",
            amount: (session.amount_total ?? 0) / 100,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send pledge confirmation email", emailError);
        // Don't fail the webhook over an email delivery issue - the pledge
        // is already recorded in Supabase either way.
      }
    }
  }

  return NextResponse.json({ received: true });
}
