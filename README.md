# Riga Brothers — rigabrothers.com

Crowdfunding site for the Riga Brothers documentary, operated by Topanga Film.
Next.js (App Router) + Tailwind + Stripe Checkout + Supabase.

## Stack

- **Next.js 15** (App Router, TypeScript, Tailwind) — `src/app`
- **Stripe Checkout** — `src/app/api/checkout` creates a Hosted Checkout
  session per pledge tier; card data never touches this app
- **Stripe webhook** — `src/app/api/webhook` verifies the signature and
  writes paid pledges to Supabase
- **Supabase** — `supabase/schema.sql` defines the `pledges` table (RLS
  locked to the service-role key, i.e. only the webhook can write) and a
  public `pledge_totals` view for a safe "raised so far" counter
- **Vercel** — deployment target

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in Stripe + Supabase keys
npm run dev
```

## Still to do

- [ ] Run `supabase/schema.sql` against the Supabase project to use (new
      project, or an extension of the existing Come Alive Vision project —
      to be decided)
- [ ] Port the full press kit copy into `src/app/press/page.tsx`
      (currently a placeholder)
- [ ] Confirm the hero typeface — `Oswald` (Google Fonts) is a temporary
      stand-in for the original "D DIN Exp" look; swap via
      `next/font/local` once the licensed `.woff` file is available
- [ ] Fill in the Topanga Film VAT/Tax ID, owner name, and competent court
      placeholders in `/terms-of-service` and `/privacy-policy`
- [ ] Add Stripe live-mode keys in Vercel's environment variables once
      live-mode KYC is approved
- [ ] Point rigabrothers.com's DNS (Aruba) at Vercel after the first deploy
