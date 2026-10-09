"use client";

import { useEffect, useState } from "react";
import { supabasePublic } from "@/lib/supabase";

const GOAL_CENTS = 1_500_000; // €15,000

export function FundingProgress({ dark = false }: { dark?: boolean }) {
  const [raisedCents, setRaisedCents] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabasePublic()
          .from("pledge_totals")
          .select("total_cents")
          .single();
        if (!cancelled) setRaisedCents(data?.total_cents ?? 0);
      } catch {
        if (!cancelled) setRaisedCents(0);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const raised = raisedCents ?? 0;
  const pct = Math.min(100, Math.round((raised / GOAL_CENTS) * 100));

  return (
    <div className={`mx-auto mb-10 w-full max-w-md lg:mx-0 ${dark ? "text-white/40" : "text-foreground/40"}`}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em]">Raised</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em]">
          Goal: €{(GOAL_CENTS / 100).toLocaleString("de-DE")}
        </span>
      </div>
      <div className={`relative h-px w-full overflow-hidden ${dark ? "bg-white/15" : "bg-foreground/10"}`}>
        <div
          className="absolute inset-y-0 left-0 bg-riga-red transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 text-xs font-mono">
        €{(raised / 100).toLocaleString("de-DE")} raised · {pct}% funded
      </div>
    </div>
  );
}
