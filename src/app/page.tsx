import Image from "next/image";
import Link from "next/link";
import { pledgeTiers } from "@/lib/pledgeTiers";
import { PledgeButton } from "@/components/PledgeButton";
import { CopyrightYear } from "@/components/CopyrightYear";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="bg-riga-black text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-[family-name:var(--font-hero)] text-lg font-semibold tracking-[0.2em]">
            RIGA BROTHERS
          </span>
          <a
            href="#rewards"
            className="text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white"
          >
            Back the film
          </a>
        </nav>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pb-28">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-riga-red">
              A documentary 30 years in the making
            </p>
            <h1 className="font-[family-name:var(--font-hero)] text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl">
              Riga
              <br />
              Brothers
            </h1>
            <p className="mt-6 max-w-md text-white/70">
              Back to Alibek (1991). Riga Brothers (1992). Thirty years later, the
              same two brothers return to the road that defined them. Help bring
              their story to the screen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#rewards"
                className="rounded-sm bg-riga-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#8a2024]"
              >
                Back this documentary
              </a>
              <Link
                href="/press"
                className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:border-white"
              >
                Press kit
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <Image
              src="/riga-brothers-poster.png"
              alt="Riga Brothers — two figures walking, leaving footprints behind"
              width={960}
              height={1200}
              className="w-full"
              priority
            />
          </div>
        </div>
      </header>

      {/* Reward tiers */}
      <section id="rewards" className="bg-riga-mist py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-hero)] text-3xl font-bold uppercase tracking-tight text-riga-black">
            Choose your reward
          </h2>
          <p className="mt-2 max-w-xl text-riga-slate">
            Every pledge helps fund production. Each tier includes everything
            from the tiers before it.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pledgeTiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-sm border bg-white p-6 ${
                  tier.featured
                    ? "border-riga-red shadow-[0_0_0_1px_var(--riga-red)]"
                    : "border-riga-border"
                }`}
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="font-[family-name:var(--font-hero)] text-2xl font-bold text-riga-black">
                    €{tier.amount}
                  </span>
                  {tier.featured && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-riga-red">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="mb-2 font-semibold text-riga-black">{tier.title}</h3>
                <p className="mb-4 font-[family-name:var(--font-serif)] text-sm italic text-riga-slate">
                  &ldquo;{tier.tagline}&rdquo;
                </p>
                <ul className="mb-6 flex-1 space-y-1.5 text-sm text-riga-text">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className={perk.endsWith(":") ? "font-semibold" : ""}>
                      {!perk.endsWith(":") && "• "}
                      {perk}
                    </li>
                  ))}
                </ul>
                <PledgeButton tierId={tier.id} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-riga-black px-6 py-10 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs sm:flex-row">
          <span>© <CopyrightYear /> Topanga Film · Riga Brothers</span>
          <div className="flex gap-6">
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <a href="mailto:crowdfunding@rigabrothers.com" className="hover:text-white">
              crowdfunding@rigabrothers.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
