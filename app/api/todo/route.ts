import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
	const { title, description } = await req.json();

	try {
		const todo = await prisma.todo.create({
			data: {
				title,
				description,
			},
		});

		return NextResponse.json(todo);
	} catch (error) {
		console.log("Error fetching post: ", error);
		return new NextResponse(error, { status: 500 });
	}
}
