import { NextResponse } from 'next/server';

let products = []; // stores products in memory

export async function POST(req) {
  const data = await req.json();
  products.push({ ...data, id: Date.now() });
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(products);
}
