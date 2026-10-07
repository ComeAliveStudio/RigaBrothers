"use client";

import { useState } from "react";

export function PledgeButton({ tierId, label }: { tierId: string; label?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full rounded-sm bg-riga-red px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#8a2024] disabled:opacity-60"
    >
      {loading ? "Redirecting…" : label ?? "Back this tier"}
    </button>
  );
}
