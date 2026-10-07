"use client";

import { useState } from "react";

// Placeholder: collects the email client-side only. Wire this to a real
// list (e.g. the Mailchimp audience already used for app.comealive.vision)
// via an API route before relying on it.
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p className="text-sm text-white/70">Thanks — we&apos;ll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-riga-red hover:bg-white/90"
      >
        Notify me
      </button>
    </form>
  );
}
