import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { BackerSignOutButton } from "@/components/BackerSignOutButton";
import { pledgeTiers } from "@/lib/pledgeTiers";
import { supabaseAdmin } from "@/lib/supabase";
import { supabaseServer } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Backer area · Riga Brothers",
  robots: { index: false },
};

const redButton =
  "bg-riga-red px-7 py-4 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white hover:opacity-90";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-riga-mist px-6 py-16">
      <div className="mx-auto max-w-[480px]">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-riga-red">
          RIGA BROTHERS
        </p>
        <Suspense fallback={<p className="text-sm text-riga-slate">Loading...</p>}>
          <BackerContent />
        </Suspense>
      </div>
    </main>
  );
}

function Footer({ email }: { email?: string }) {
  return (
    <>
      <hr className="my-8 border-riga-border" />
      <p className="text-xs leading-relaxed text-riga-slate">
        {email && <>Signed in as {email}. </>}
        {email && <BackerSignOutButton />}
        {email && <br />}
        Questions? Write to{" "}
        <a href="mailto:crowdfunding@rigabrothers.com" className="text-riga-red">
          crowdfunding@rigabrothers.com
        </a>
      </p>
    </>
  );
}

// Reads the session, so it streams in behind the Suspense boundary above.
async function BackerContent() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email;
  if (!email) redirect("/backers");

  // Authorisation: the email comes from the verified session, never from the
  // client. The pledges table has no public read policy, so use the service role.
  const { data: pledges } = await supabaseAdmin()
    .from("pledges")
    .select("tier_id, amount_cents, backer_name")
    .eq("status", "paid")
    .ilike("backer_email", email);

  if (!pledges || pledges.length === 0) {
    return (
      <>
        <h1 className="mb-4 text-[28px] font-bold leading-tight tracking-tight text-riga-black">
          We could not find your pledge.
        </h1>
        <p className="mb-6 text-[15px] leading-relaxed text-[#333]">
          There is no confirmed pledge for <strong>{email}</strong>. Sign in with the exact email
          you used at checkout.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/backers" className={redButton}>
            Try another email
          </Link>
          <Link href="/" className={redButton}>
            Back to the site
          </Link>
        </div>
        <Footer email={email} />
      </>
    );
  }

  const name = pledges.find((p) => p.backer_name)?.backer_name;
  return (
    <>
      <h1 className="mb-4 text-[28px] font-bold leading-tight tracking-tight text-riga-black">
        {name ? `Thank you, ${name}.` : "Thank you."}
      </h1>
      <p className="mb-5 text-[15px] leading-relaxed text-[#333]">
        This film exists because of backers like you. Welcome to your backer area.
      </p>

      {pledges.map((p, i) => (
        <div
          key={i}
          className="mb-4 rounded border border-riga-border border-l-[3px] border-l-riga-red bg-white px-6 py-5"
        >
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-riga-slate">
            Your pledge
          </p>
          <p className="mb-1 text-lg font-semibold text-riga-black">
            {pledgeTiers.find((t) => t.id === p.tier_id)?.title ?? "Riga Brothers Pledge"}
          </p>
          <p className="text-2xl font-bold text-riga-red">
            €{(p.amount_cents / 100).toLocaleString("de-DE")}
          </p>
        </div>
      ))}

      <p className="mb-6 mt-6 text-[15px] leading-relaxed text-[#333]">
        Exclusive updates and behind-the-scenes material will appear here as production moves
        forward.
      </p>

      <div className="flex flex-col gap-3">
        <a href="/press/download" className={redButton}>
          Download the press kit
        </a>
        <Link href="/" className={redButton}>
          Back to the site
        </Link>
      </div>
      <Footer email={email} />
    </>
  );
}
