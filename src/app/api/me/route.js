import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Norapat Chindasson",
    studentId: "650610774",
  });
};
