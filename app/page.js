import SearchBar from "@/components/shared/SearchBar";
import Navbar from "@/components/shared/navbar";
import Card from "@/components/shared/card";
import prisma from "@/helper/prisma";

export default async function Home() {
	const todo = await prisma.todo.findMany();
	return (
		<div>
			{/* <Navbar /> */}
			<section className="flex items-center justify-center mb-5 font-bold text-2xl ">
				Welcome, use it and know what it is.
			</section>
			<SearchBar />
			<div>
				<Card todo={todo} />
			</div>
		</div>
	);
}
