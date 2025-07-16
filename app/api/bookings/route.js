import { NextResponse } from 'next/server';

let bookings = []; // memory te thakbe

export async function POST(req) {
  const data = await req.json();
  bookings.push({ ...data, id: Date.now() });
  console.log("Received booking:", data);
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(bookings);
}
