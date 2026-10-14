import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BackerLoginForm } from "@/components/BackerLoginForm";

export const metadata: Metadata = {
  title: "Backers · Riga Brothers",
  description: "Sign in to access backer-only content",
};

export default function Backers({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="legal-wrap">
      <p className="legal-brand">RIGA BROTHERS</p>
      <h1>Backers</h1>
      <p>
        Backed the film? Enter the email you used at checkout and we will send you a
        one-time sign-in link. No password needed.
      </p>
      {/* searchParams is request-time data, so it streams in behind Suspense. */}
      <Suspense fallback={<BackerLoginForm />}>
        <LoginWithLinkState searchParams={searchParams} />
      </Suspense>
      <p>
        <Link href="/">← Back to the campaign</Link>
      </p>
    </div>
  );
}

async function LoginWithLinkState({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return <BackerLoginForm linkError={error === "link"} />;
}
