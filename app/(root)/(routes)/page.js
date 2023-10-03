import SearchBar from "@/components/shared/SearchBar";
import Card from "@/components/shared/card";
import prisma from "@/helper/prisma";
import Navbar from "@/components/shared/navbar";
import { auth } from "@clerk/nextjs";

export default async function Home() {
	const todo = await prisma.todo.findMany();
	const { user } = auth();
	console.log("user", user);
	return (
		<div>
			<section className="flex items-center justify-center mb-5 font-bold text-2xl ">
				Welcome, use it and know what it is.
			</section>
			<SearchBar />
			<div className="flex flex-col justify-center items-center">
				{todo.length < 1 ? (
					<p className="mt-10">No To Do List For Today!</p>
				) : (
					<Card todo={todo} />
				)}
			</div>
		</div>
	);
}
