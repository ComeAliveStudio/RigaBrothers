import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID is not set");
      return NextResponse.json({ error: "Newsletter is not configured" }, { status: 500 });
    }

    const { error } = await getResend().contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (error) {
      console.error("Failed to add newsletter contact", error);
      return NextResponse.json({ error: "Could not sign up" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup failed", err);
    return NextResponse.json({ error: "Could not sign up" }, { status: 500 });
  }
}
