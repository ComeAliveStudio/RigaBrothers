import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press Kit · Riga Brothers",
  description: "Press materials for the Riga Brothers documentary",
};

// Placeholder — the full press sheet copy (synopsis, filmmaker bios, stills,
// festival history) from riga-brothers-presssheet.html still needs to be
// ported in here. Keeping this as its own route so it's easy to drop in.
export default function Press() {
  return (
    <div className="legal-wrap">
      <p className="legal-brand">RIGA BROTHERS</p>
      <h1>Press Kit</h1>
      <p className="legal-updated">Content coming soon</p>
      <p>
        The full press sheet is still being migrated from the original design. In the
        meantime, reach out directly at{" "}
        <a href="mailto:crowdfunding@rigabrothers.com">crowdfunding@rigabrothers.com</a>.
      </p>
      <p>
        <Link href="/">← Back to the campaign</Link>
      </p>
    </div>
  );
}
