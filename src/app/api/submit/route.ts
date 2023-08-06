import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: write form data in DB
  const formData = await request.json();

  console.log("Form submitted, data: ", formData);

  return NextResponse.json({ success: true });
}
