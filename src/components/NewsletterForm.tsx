"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Signup failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-white/70">Thanks - we&apos;ll be in touch.</p>;
  }

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "submitting"}
          className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-riga-red hover:bg-white/90 disabled:opacity-60"
        >
          {status === "submitting" ? "..." : "Notify me"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-white/60">
          Something went wrong, please try again or email{" "}
          <a href="mailto:crowdfunding@rigabrothers.com" className="underline">
            crowdfunding@rigabrothers.com
          </a>
          .
        </p>
      )}
    </div>
  );
}
