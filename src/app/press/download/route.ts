import { NextRequest, NextResponse } from "next/server";
import { supabasePublic } from "@/lib/supabase";

const BUCKET = "press-kit";

// One-click download: finds the press kit file in the bucket and redirects to
// it with a download header, so the button never needs an extra page.
// Picks the file whose name contains "press kit" (any separator); if none does
// but the bucket holds exactly one file, uses that; otherwise falls back to /press.
export async function GET(req: NextRequest) {
  const supabase = supabasePublic();
  const { data } = await supabase.storage.from(BUCKET).list("", {
    sortBy: { column: "name", order: "asc" },
  });
  const files = (data ?? []).filter((f) => f.id);
  const match =
    files.find((f) => /press[\s_-]*kit/i.test(f.name)) ??
    (files.length === 1 ? files[0] : undefined);

  if (!match) {
    return NextResponse.redirect(new URL("/press", req.url));
  }
  const { data: url } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(match.name, { download: true });
  return NextResponse.redirect(url.publicUrl);
}
