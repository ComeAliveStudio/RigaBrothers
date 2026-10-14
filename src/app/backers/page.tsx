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
    <main className="min-h-screen bg-riga-mist px-6 py-16">
      <div className="mx-auto max-w-[480px]">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-riga-red">
          RIGA BROTHERS
        </p>
        <h1 className="mb-4 text-[28px] font-bold leading-tight tracking-tight text-riga-black">
          Backers
        </h1>
        <p className="mb-6 text-[15px] leading-relaxed text-[#333]">
          Backed the film? Enter the email you used at checkout and we will send you a
          one-time sign-in link. No password needed.
        </p>
        {/* searchParams is request-time data, so it streams in behind Suspense. */}
        <Suspense fallback={<BackerLoginForm />}>
          <LoginWithLinkState searchParams={searchParams} />
        </Suspense>
        <hr className="my-8 border-riga-border" />
        <Link href="/" className="text-xs text-riga-red">
          ← Back to the site
        </Link>
      </div>
    </main>
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
