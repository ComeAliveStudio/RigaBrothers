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
      <p>
        Check your inbox: we sent a sign-in link to <strong>{email}</strong>. Use the same
        email you backed the film with.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-3">
      {linkError && (
        <p>That sign-in link has expired or was already used. Request a new one below.</p>
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
        className="bg-riga-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Email me a sign-in link"}
      </button>
      {status === "error" && (
        <p>Something went wrong. Please try again or write to crowdfunding@rigabrothers.com.</p>
      )}
    </form>
  );
}
