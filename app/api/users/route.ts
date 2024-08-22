import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {

    const users = await prisma.user.findMany({ orderBy: { name: 'asc' } })

    return NextResponse.json(users);
}