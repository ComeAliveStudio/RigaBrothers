import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { pledgeTiers } from "@/lib/pledgeTiers";
import { PledgeButton } from "@/components/PledgeButton";
import { CopyrightYear } from "@/components/CopyrightYear";
import { PledgeStatusBanner } from "@/components/PledgeStatusBanner";
import { FundingProgress } from "@/components/FundingProgress";
import { ShareButton } from "@/components/ShareButton";
import { NewsletterForm } from "@/components/NewsletterForm";

const timeline = [
  {
    year: "1991",
    title: "The Mission",
    desc: "Meeting Guncho and Sancho during a UNESCO mission in the Caucasus, in the final months of the Soviet Union.",
  },
  {
    year: "1992",
    title: "The Original Film",
    desc: 'Filming "Riga Brothers" in newly independent Latvia — original archive footage preserved across decades.',
  },
  {
    year: "2022",
    title: "The Return",
    desc: "Reunion of three friends in Latvia against the backdrop of the war in Ukraine.",
  },
  {
    year: "2026",
    title: "Completion",
    desc: "Final post-production: editing, sound design, color grading, music, and distribution preparation.",
  },
  {
    year: "2027",
    title: "International Release",
    desc: "Documentary festivals, European broadcasters, streaming platforms, and educational screenings worldwide.",
  },
];

const themes = ["Memory", "Freedom", "Resilience", "Baltic Independence", "European Identity", "Democracy"];

const productionPhases = [
  "Final Editing",
  "Sound Design",
  "Music Composition",
  "Colour Grading",
  "VFX Mix & Mastering",
  "Distribution Preparation",
];

const standardTiers = pledgeTiers.filter((t) => t.amount <= 150);
const specialTiers = pledgeTiers.filter((t) => t.amount > 150);

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-riga-mist text-riga-text">
      <Suspense fallback={null}>
        <PledgeStatusBanner />
      </Suspense>

      {/* Hero */}
      <section className="relative overflow-hidden bg-riga-black">
        <div className="container relative z-10 mx-auto grid items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-12 lg:py-36">
          <div className="text-center lg:text-left">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-riga-red">
              A Documentary 30 Years in the Making
            </p>
            <h1
              className="mb-8 font-[family-name:var(--font-hero)] text-6xl uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl"
              style={{ fontWeight: 700 }}
            >
              Riga
              <br />
              Brothers
            </h1>
            <p className="mx-auto mb-12 max-w-xl text-lg font-light leading-relaxed text-white/60 lg:mx-0 md:text-xl">
              A 30-Year Journey Through Friendship, Freedom and Baltic History
            </p>

            <FundingProgress dark />

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#support"
                className="border-2 border-riga-red bg-riga-red px-10 py-7 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#6d1424] hover:shadow-lg"
              >
                Back This Documentary
              </a>
              <a
                href="/press"
                className="rounded-none border-2 border-white/25 px-10 py-[1.6rem] text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all hover:border-white"
              >
                Press Kit
              </a>
              <ShareButton dark />
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md bg-white shadow-2xl lg:max-w-none">
            <Image
              src="/riga-brothers-poster.png"
              alt="Riga Brothers Poster"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-riga-red px-6 py-16">
        <p className="mx-auto max-w-3xl text-center font-[family-name:var(--font-serif)] text-xl font-light italic leading-relaxed text-white md:text-2xl">
          &ldquo;In the final months of the Soviet Union, an Italian filmmaker befriends two young
          Latvians. Thirty years later, after the Russian invasion of Ukraine, he returns to Latvia
          to discover what became of their dreams, their freedom and their friendship.&rdquo;
        </p>
      </section>

      {/* The Story */}
      <section className="bg-riga-mist py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="mb-10 font-mono text-xs uppercase tracking-[0.3em] text-riga-red">The Story</p>
          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="space-y-8 lg:col-span-7">
              <p className="font-[family-name:var(--font-serif)] text-3xl leading-snug text-riga-black md:text-4xl">
                In 1991, an Italian filmmaker meets two young Latvians on a UNESCO mission in the
                Caucasus — as the Soviet Union collapses around them.
              </p>
              <p className="text-lg font-light leading-relaxed text-riga-slate">
                In 1992, they return to film the original &ldquo;Riga Brothers&rdquo; documentary in newly
                independent Latvia — capturing the raw, uncertain energy of a nation reborn.
              </p>
              <p className="text-lg font-light leading-relaxed text-riga-slate">
                Thirty years later, with war returning to Europe, Giorgio travels back. Guncho and
                Sancho are now fathers, professionals, citizens of a democratic nation. Their
                friendship becomes a lens: on personal transformation, national transformation, and
                the weight of history carried across a lifetime.
              </p>
              <p className="pt-4 font-mono text-base uppercase tracking-[0.15em] text-riga-red">
                Director: Giorgio Bonecchi Borgazzi · Written by: Attilio Geroni
              </p>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden border border-riga-border bg-white lg:col-span-5">
              <Image
                src="/riga-brothers-poster.png"
                alt="Riga Brothers Poster"
                fill
                className="object-contain p-6 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Watch the Teaser */}
      <section className="bg-riga-black py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Watch the Teaser
          </p>
          <div className="relative aspect-video overflow-hidden shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/1198905992?h=77aedee7fb&title=0&byline=0&portrait=0&color=8b1a1a"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Riga Brothers — Official Teaser"
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            Riga Brothers — Official Teaser
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-riga-border bg-riga-mist py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="mb-20 text-center font-mono text-xs uppercase tracking-[0.3em] text-riga-red">
            A Unique 30-Year Story
          </p>
          <div>
            {timeline.map((t) => (
              <div
                key={t.year}
                className="flex items-start gap-8 border-b border-riga-border px-4 py-10 -mx-4 transition-colors hover:bg-black/[0.02] md:gap-16"
              >
                <span className="w-16 shrink-0 pt-1 font-mono text-lg text-riga-red md:w-24 md:text-2xl">
                  {t.year}
                </span>
                <div>
                  <h3 className="mb-2 font-[family-name:var(--font-serif)] text-xl text-riga-black md:text-2xl">
                    {t.title}
                  </h3>
                  <p className="font-light leading-relaxed text-riga-slate">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Now */}
      <section className="relative overflow-hidden bg-riga-red py-32">
        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-white/60">
            Why This Matters Now
          </p>
          <h2 className="mb-12 font-[family-name:var(--font-serif)] text-4xl leading-tight text-white md:text-6xl">
            Latvia stands on the frontier of European security and democratic resilience.
          </h2>
          <p className="mb-16 max-w-3xl text-xl font-light leading-relaxed text-white/75">
            As war casts its shadow over Europe once again, the memory of Soviet occupation and the
            hard-won freedom of the Baltic states has never been more urgent. Riga Brothers preserves
            testimonies increasingly important for future generations.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {themes.map((theme) => (
              <div
                key={theme}
                className="border border-white/25 px-5 py-3 text-center font-mono text-sm uppercase tracking-widest text-white/70 transition-colors hover:bg-white/10"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support the Film */}
      <section id="support" className="bg-riga-mist py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-riga-red">
            Support the Film
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-serif)] text-4xl text-riga-black md:text-5xl">
            Choose Your Tier
          </h2>
          <p className="mb-10 max-w-xl font-light text-riga-slate">
            Every contribution brings this 30-year story closer to the screen. Select the level that
            feels right for you.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standardTiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>

          <div className="mb-12 mt-20 flex items-center gap-6">
            <div className="h-px flex-1 bg-riga-red/30" />
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.3em] text-riga-red">
              Special Supporter Rewards
            </span>
            <div className="h-px flex-1 bg-riga-red/30" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specialTiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Crowdfunding goal + production breakdown */}
      <section className="border-t border-white/5 bg-riga-black py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                Crowdfunding Goal
              </p>
              <p className="font-[family-name:var(--font-serif)] text-6xl text-white md:text-7xl">
                €15,000
              </p>
            </div>
            <div className="md:text-right">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                Post-Production
              </p>
              <p className="font-light text-white/60">
                Final Editing · Sound Design · Colour Grading
                <br />
                Music Composition · VFX &amp; Mix · Distribution
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#support"
              className="border-2 border-riga-red bg-riga-red px-16 py-8 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all hover:shadow-lg"
            >
              Support This Film
            </a>
          </div>
        </div>
      </section>

      {/* Production status */}
      <section className="border-t border-riga-border bg-black/[0.02] py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-riga-red">
              Production Status
            </p>
            <h2 className="mb-3 font-[family-name:var(--font-serif)] text-3xl text-riga-black md:text-4xl">
              What Your Support Enables
            </h2>
            <p className="font-light text-riga-slate">
              Principal photography is complete. Your backing funds the final mile.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {productionPhases.map((label, i) => (
              <div
                key={label}
                className="flex aspect-square flex-col items-center justify-center border border-riga-border bg-riga-mist p-8 text-center transition-colors hover:border-riga-red/40 md:aspect-auto md:h-40"
              >
                <span className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-riga-red/60">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-serif)] text-base text-riga-black/80 md:text-lg">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-riga-red py-24">
        <div className="container mx-auto max-w-xl px-6 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Stay in the Loop
          </p>
          <h2 className="mb-3 font-[family-name:var(--font-serif)] text-3xl text-white md:text-4xl">
            Not ready to back yet?
          </h2>
          <p className="mb-10 font-light text-white/60">
            Leave your email and we&apos;ll notify you when the film is released.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-riga-border bg-riga-mist py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="relative mx-auto mb-10 h-28 w-40 opacity-70">
            <Image src="/riga-brothers-poster.png" alt="Riga Brothers" fill className="object-contain" />
          </div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-riga-red">A Film By</p>
          <div className="mb-4 flex flex-col items-center justify-center gap-3 font-[family-name:var(--font-serif)] text-2xl text-riga-black/80 md:flex-row md:gap-8 md:text-3xl">
            <span>Giorgio Bonecchi Borgazzi</span>
            <span className="hidden text-sm text-riga-red/30 md:block">·</span>
            <span>Attilio Geroni</span>
          </div>
          <p className="mb-10 text-sm font-light text-riga-slate">
            Italy / Latvia · 2026 · Feature Documentary
          </p>
          <div className="mx-auto mb-10 h-px w-16 bg-riga-border" />

          <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-xs text-riga-slate">
            <Link href="/press" className="hover:text-riga-red">
              Press Kit
            </Link>
            <Link href="/terms-of-service" className="hover:text-riga-red">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-riga-red">
              Privacy Policy
            </Link>
            <a href="mailto:crowdfunding@rigabrothers.com" className="hover:text-riga-red">
              crowdfunding@rigabrothers.com
            </a>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-riga-black/25">
            © <Suspense fallback="2026"><CopyrightYear /></Suspense> Riga Brothers Documentary · Topanga Film
          </p>
        </div>
      </footer>
    </div>
  );
}

function TierCard({
  tier,
  featured = false,
}: {
  tier: (typeof pledgeTiers)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex h-full flex-col border bg-white transition-all duration-300 ${
        featured
          ? "relative overflow-hidden border-riga-red/30 hover:border-riga-red"
          : "border-riga-border hover:border-riga-red/50"
      }`}
    >
      {featured && (
        <div className="absolute inset-y-0 left-0 w-1 bg-riga-red opacity-50 transition-opacity group-hover:opacity-100" />
      )}
      <div
        className={`border-b p-6 transition-all duration-300 ${
          featured
            ? "border-riga-red/20 bg-riga-red/5 group-hover:border-riga-red group-hover:bg-riga-red"
            : "border-riga-border bg-black/[0.02] group-hover:border-riga-red group-hover:bg-riga-red"
        }`}
      >
        <span className="font-mono text-3xl font-light text-riga-red transition-colors duration-300 group-hover:text-white">
          €{tier.amount}
        </span>
        <h3 className="mt-1 font-[family-name:var(--font-serif)] text-lg text-riga-black transition-colors duration-300 group-hover:text-white">
          {tier.title}
        </h3>
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? "pl-8" : ""}`}>
        <ul className="mb-6 flex-1 space-y-3">
          {tier.perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-light leading-snug text-riga-slate">
              <span className="mt-0.5 shrink-0 font-mono text-riga-red">—</span>
              {perk}
            </li>
          ))}
        </ul>
        <p className="mb-5 font-mono text-xs italic leading-snug text-riga-black/40">
          &ldquo;{tier.tagline}&rdquo;
        </p>
        <PledgeButton tierId={tier.id} label={`Select — €${tier.amount}`} />
      </div>
    </div>
  );
}
