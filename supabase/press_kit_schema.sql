-- Riga Brothers — press kit content
-- Run this in the Supabase SQL editor for the same project as schema.sql.

-- Text content, broken into ordered sections so the page can render them
-- without a redeploy whenever this table changes (logline, synopsis,
-- filmmaker bios, festival history, contact, etc.).
create table if not exists public.press_kit_sections (
  id uuid primary key default gen_random_uuid(),
  section_key text not null unique, -- e.g. 'logline', 'synopsis', 'director_bios', 'contact'
  title text,
  body text,                        -- plain text / simple markdown-ish line breaks
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.press_kit_sections enable row level security;

-- Anyone can read press kit text — it's meant to be public.
create policy "Public read access to press kit sections"
  on public.press_kit_sections for select
  using (true);

-- No insert/update/delete policy for anon/authenticated: only the
-- service-role key can write. Edit rows directly in the Supabase table
-- editor, or via a small admin script using SUPABASE_SERVICE_ROLE_KEY.

-- Downloadable assets (stills, logos, one-sheet PDF, trailer links) live in
-- Supabase Storage rather than this table. Public bucket, read-only to
-- everyone, uploads only via the dashboard or service-role key.
insert into storage.buckets (id, name, public)
values ('press-kit', 'press-kit', true)
on conflict (id) do nothing;

create policy "Public read press-kit files"
  on storage.objects for select
  using (bucket_id = 'press-kit');
