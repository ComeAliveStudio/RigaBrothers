"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";

export function BackerSignOutButton() {
  return (
    <button
      type="button"
      className="underline"
      onClick={async () => {
        await supabaseBrowser().auth.signOut();
        window.location.href = "/backers";
      }}
    >
      Sign out
    </button>
  );
}
