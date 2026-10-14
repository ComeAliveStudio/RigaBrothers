import type { Metadata } from "next";
import Link from "next/link";
import { BackerLoginForm } from "@/components/BackerLoginForm";

export const metadata: Metadata = {
  title: "Backers · Riga Brothers",
  description: "Sign in to access backer-only content",
};

export default async function Backers({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <div className="legal-wrap">
      <p className="legal-brand">RIGA BROTHERS</p>
      <h1>Backers</h1>
      <p>
        Backed the film? Enter the email you used at checkout and we will send you a
        one-time sign-in link. No password needed.
      </p>
      <BackerLoginForm linkError={error === "link"} />
      <p>
        <Link href="/">← Back to the campaign</Link>
      </p>
    </div>
  );
}
