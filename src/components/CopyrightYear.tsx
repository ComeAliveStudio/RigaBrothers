"use client";

// Next.js 15 flags `new Date()` used directly in a Server Component during
// static prerendering ("blocking prerender" error) because it's a dynamic
// API called outside a Suspense boundary. Moving it into a tiny client
// component sidesteps that — the year renders after hydration instead.
export function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
