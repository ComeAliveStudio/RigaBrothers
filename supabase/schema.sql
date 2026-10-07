-- Riga Brothers crowdfunding — pledges table
-- Run this in the Supabase SQL editor for the project used by this app.

create table if not exists public.pledges (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  stripe_session_id text unique not null,
  stripe_payment_intent text,
  tier_id text not null,
  amount_cents integer not null,
  currency text not null default 'eur',
  backer_name text,
  backer_email text,
  status text not null default 'pending' check (status in ('pending', 'paid', 'refunded', 'failed')),
  shipping_address jsonb
);

-- Public can only ever read the aggregate (handled via the view below),
-- never individual rows — names/emails stay private.
alter table public.pledges enable row level security;

-- No policy is created for anon/authenticated roles: only the service-role
-- key (used exclusively by the server-side Stripe webhook handler) can
-- read or write rows directly. This is intentional — do not add a public
-- select/insert policy here.

-- Public, safe-to-expose aggregate for the live "raised so far" counter.
create or replace view public.pledge_totals as
select
  count(*) filter (where status = 'paid') as backers_count,
  coalesce(sum(amount_cents) filter (where status = 'paid'), 0) as total_cents
from public.pledges;

grant select on public.pledge_totals to anon, authenticated;

create index if not exists pledges_status_idx on public.pledges (status);
create index if not exists pledges_tier_idx on public.pledges (tier_id);
