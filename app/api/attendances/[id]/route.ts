import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ message: "Getting attendance" });
}

export function DELETE() {
  return NextResponse.json({ message: "Deleting attendance" });
}

export function PUT() {
  return NextResponse.json({ message: "Updating attendance" });
}