"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export function BackerLoginForm({ linkError }: { linkError?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const { error } = await supabaseBrowser().auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        shouldCreateUser: true,
      },
    });
    setStatus(error ? "error" : "sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded border border-riga-border border-l-[3px] border-l-riga-red bg-white px-6 py-5">
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-riga-slate">
          Check your inbox
        </p>
        <p className="text-[15px] leading-relaxed text-[#333]">
          We sent a sign-in link to <strong>{email}</strong>. Use the same email you backed the
          film with.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {linkError && (
        <p className="text-sm text-riga-red">
          That sign-in link has expired or was already used. Request a new one below.
        </p>
      )}
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === "sending"}
        className="border border-riga-border bg-white px-4 py-3 text-sm focus:border-riga-red focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-riga-red px-7 py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Email me a sign-in link"}
      </button>
      {status === "error" && (
        <p className="text-sm text-riga-slate">
          Something went wrong. Please try again or write to crowdfunding@rigabrothers.com.
        </p>
      )}
    </form>
  );
}
