import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const data  = await request.json()
    const bool = Math.random() > 0.5 ? true : false
    console.log(data)
    return NextResponse.json({ submissionResult: bool })
}