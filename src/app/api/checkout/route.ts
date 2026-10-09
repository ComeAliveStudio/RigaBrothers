import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { pledgeTiers } from "@/lib/pledgeTiers";

// Created inside the handler, not at module scope, so Next.js can collect
// this route's config at build time without STRIPE_SECRET_KEY being set.
function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const { tierId } = await req.json();
    const tier = pledgeTiers.find((t) => t.id === tierId);

    if (!tier) {
      return NextResponse.json({ error: "Unknown pledge tier" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: tier.amount * 100,
            product_data: {
              name: `Riga Brothers - ${tier.title}`,
              description: tier.tagline,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        tier_id: tier.id,
      },
      success_url: `${origin}/?pledge=success`,
      cancel_url: `${origin}/?pledge=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed", err);
    return NextResponse.json({ error: "Could not start checkout" }, { status: 500 });
  }
}
