import { Resend } from "resend";

// Created inside the caller, not at module scope, so Next.js can collect
// route config at build time without RESEND_API_KEY being set (same
// reasoning as getStripe() in the checkout/webhook routes).
export function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

// Must match a verified sending domain in Resend.
export const PLEDGE_FROM_EMAIL = "Riga Brothers <crowdfunding@rigabrothers.com>";
