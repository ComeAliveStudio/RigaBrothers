import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PressKitContent } from "@/components/PressKitContent";

export const metadata: Metadata = {
  title: "Press Kit · Riga Brothers",
  description: "Press materials for the Riga Brothers documentary",
};

export default function Press() {
  return (
    <div className="legal-wrap">
      <p className="legal-brand">RIGA BROTHERS</p>
      <h1>Press Kit</h1>
      <div className="mb-8 flex max-w-md flex-col gap-3">
        <a
          href="/press/download"
          className="bg-riga-red px-7 py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] !text-white !no-underline hover:opacity-90"
        >
          Download the press kit
        </a>
        <Link
          href="/"
          className="bg-riga-red px-7 py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] !text-white !no-underline hover:opacity-90"
        >
          Back to the site
        </Link>
      </div>
      <Suspense fallback={<p className="legal-updated">Loading press kit…</p>}>
        <PressKitContent />
      </Suspense>
    </div>
  );
}
