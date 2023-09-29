import SearchBar from "@/components/shared/SearchBar";
import Navbar from "@/components/shared/navbar";
import Card from "@/components/shared/card";

export default function Home() {
	return (
		<div>
			<Navbar />
			<section className="flex items-center justify-center mb-5 font-bold text-2xl ">
				Welcome, use it and know what it is.
			</section>
			<SearchBar />
			<div>
				<Card />
			</div>
		</div>
	);
}
