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

export default function Dashboard() {
  return (
    <div className="legal-wrap">
      <p className="legal-brand">RIGA BROTHERS</p>
      <h1>Backer area</h1>
      <Suspense fallback={<p className="legal-updated">Loading...</p>}>
        <BackerContent />
      </Suspense>
      <p>
        <Link href="/">← Back to the campaign</Link>
      </p>
    </div>
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
        <p>
          We could not find a confirmed pledge for <strong>{email}</strong>. Sign in with the
          exact email you used at checkout, or write to crowdfunding@rigabrothers.com.
        </p>
        <p>
          <BackerSignOutButton />
        </p>
      </>
    );
  }

  const name = pledges.find((p) => p.backer_name)?.backer_name;
  return (
    <>
      <p>Thank you{name ? `, ${name}` : ""}. This film exists because of you.</p>
      <h2>Your pledges</h2>
      <ul>
        {pledges.map((p, i) => (
          <li key={i}>
            {pledgeTiers.find((t) => t.id === p.tier_id)?.title ?? "Pledge"} - €
            {(p.amount_cents / 100).toLocaleString("de-DE")}
          </li>
        ))}
      </ul>
      <h2>Backer-only content</h2>
      <p>
        Exclusive updates, behind-the-scenes material and the full press kit will appear here
        as production moves forward. In the meantime, the{" "}
        <Link href="/press">press kit</Link> is already available.
      </p>
      <p>
        Signed in as {email}. <BackerSignOutButton />
      </p>
    </>
  );
}
