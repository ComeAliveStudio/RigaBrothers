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
      <Suspense fallback={<p className="legal-updated">Loading press kit…</p>}>
        <PressKitContent />
      </Suspense>
      <p>
        <Link href="/">← Back to the campaign</Link>
      </p>
    </div>
  );
}
