// app/api/auth/verify-2fa/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const { passkey } = await req.json();

    if (!passkey) {
      return NextResponse.json(
        { success: false, message: "Passkey is required" },
        { status: 400 }
      );
    }

    // Verify the passkey; here we expect "123456"
    if (passkey === "123456") {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid passkey" },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error("2FA Verification error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
