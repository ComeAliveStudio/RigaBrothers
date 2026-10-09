"use client";

import { useSearchParams } from "next/navigation";

export function PledgeStatusBanner() {
  const params = useSearchParams();
  const status = params.get("pledge");

  if (status === "success") {
    return (
      <div className="bg-riga-red px-6 py-4 text-center text-sm font-semibold text-white">
        Thank you for your pledge! A receipt is on its way to your inbox - we&apos;ll
        keep you posted on the campaign.
      </div>
    );
  }

  if (status === "cancelled") {
    return (
      <div className="bg-riga-black px-6 py-4 text-center text-sm text-white/70">
        Checkout was cancelled - no charge was made. Feel free to try again whenever you&apos;re ready.
      </div>
    );
  }

  return null;
}
