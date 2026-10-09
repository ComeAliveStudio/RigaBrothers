import { createClient } from "@supabase/supabase-js";

// Browser/client-safe client - only ever reads public pledge totals (RLS-restricted).
export function supabasePublic() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Server-only client using the service role key. NEVER import this from a
// "use client" component - it bypasses RLS and must only run in API routes
// (checkout session creation, Stripe webhook handler).
export function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
