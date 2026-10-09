"use client";

import { useState } from "react";

export function ShareButton({ dark = false, fullWidth = false }: { dark?: boolean; fullWidth?: boolean }) {
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
      className={`${fullWidth ? "w-full" : ""} rounded-none border-2 px-10 py-[1.6rem] text-sm font-semibold uppercase tracking-[0.25em] transition-all ${
        dark
          ? "border-white/25 text-white hover:border-white"
          : "border-riga-black/20 text-riga-black hover:border-riga-black"
      }`}
    >
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
