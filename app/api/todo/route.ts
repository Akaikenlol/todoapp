import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
	const { title, description, userId } = await req.json();
	const data = await req.json();
	console.log(data);
	try {
		// const todo = await prisma.todo.create({
		// 	data: {
		// 		title,
		// 		description,
		// 		userId,
		// 	},
		// });
		// return NextResponse.json(todo);
	} catch (error) {
		console.log("Error fetching post: ", error);
		return new NextResponse(error, { status: 500 });
	}
}

export async function GET() {
	try {
		const todo = await prisma.todo.findMany();
		return NextResponse.json(todo);
	} catch (error) {
		console.log("error", error);
	}
}
