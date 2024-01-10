import { data } from "@/lessons";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { lessonId: number } }) {
    return NextResponse.json(data[params.lessonId])
}