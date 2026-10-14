import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Stripe from "stripe";
import { pledgeTiers } from "@/lib/pledgeTiers";

export const metadata: Metadata = {
  title: "Thank you · Riga Brothers",
  robots: { index: false },
};

export default function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  return (
    <main className="min-h-screen bg-riga-mist px-6 py-16">
      <div className="mx-auto max-w-[480px]">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-riga-red">
          RIGA BROTHERS
        </p>
        <Suspense fallback={<Content />}>
          <ContentWithPledge searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

type Pledge = { name?: string | null; tierTitle: string; amount: number };

async function ContentWithPledge({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  let pledge: Pledge | undefined;
  if (session_id) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.payment_status === "paid") {
        const tier = pledgeTiers.find((t) => t.id === session.metadata?.tier_id);
        pledge = {
          name: session.customer_details?.name,
          tierTitle: tier?.title ?? "Riga Brothers Pledge",
          amount: (session.amount_total ?? 0) / 100,
        };
      }
    } catch {
      // Fall back to the generic message below.
    }
  }
  return <Content pledge={pledge} />;
}

function Content({ pledge }: { pledge?: Pledge }) {
  return (
    <>
      <h1 className="mb-4 text-[28px] font-bold leading-tight tracking-tight text-riga-black">
        {pledge?.name ? `Thank you, ${pledge.name}.` : "Thank you."}
      </h1>
      <p className="mb-5 text-[15px] leading-relaxed text-[#333]">
        Your pledge in support of the Riga Brothers documentary has been confirmed. This film
        exists because of backers like you. A confirmation email is on its way to your inbox.
      </p>

      {pledge && (
        <div className="mb-6 rounded border border-riga-border border-l-[3px] border-l-riga-red bg-white px-6 py-5">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-riga-slate">
            Your pledge
          </p>
          <p className="mb-1 text-lg font-semibold text-riga-black">{pledge.tierTitle}</p>
          <p className="text-2xl font-bold text-riga-red">
            €{pledge.amount.toLocaleString("de-DE")}
          </p>
        </div>
      )}

      <p className="mb-6 text-[15px] leading-relaxed text-[#333]">
        We will be in touch with updates as production moves forward, and with details on your
        reward closer to completion.
      </p>

      <div className="flex flex-col gap-3">
        <Link
          href="/press"
          className="bg-riga-red px-7 py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white hover:opacity-90"
        >
          Download the press kit
        </Link>
        <Link
          href="/"
          className="bg-riga-red px-7 py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white hover:opacity-90"
        >
          Back to the site
        </Link>
      </div>

      <hr className="my-8 border-riga-border" />
      <p className="text-xs leading-relaxed text-riga-slate">
        Questions? Write to{" "}
        <a href="mailto:crowdfunding@rigabrothers.com" className="text-riga-red">
          crowdfunding@rigabrothers.com
        </a>
      </p>
    </>
  );
}
