"use client";

import { useState } from "react";

export function ShareButton({ dark = false }: { dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "https://rigabrothers.com";
    if (navigator.share) {
      try {
        await navigator.share({ title: "Riga Brothers", url });
        return;
      } catch {
        // fall through to clipboard copy if the user cancels or share is unsupported
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no-op — clipboard access denied
    }
  }

  return (
    <button
      onClick={handleShare}
      className={
        dark
          ? "rounded-none border-2 border-white/25 px-10 py-[1.6rem] text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all hover:border-white"
          : "rounded-none border-2 border-riga-black/20 px-10 py-[1.6rem] text-sm font-semibold uppercase tracking-[0.25em] text-riga-black transition-all hover:border-riga-black"
      }
    >
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
