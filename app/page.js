import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navbar />
			<section className="flex items-center justify-center my-6 font-bold ">
				Welcome From TO DO APP
			</section>
		</div>
	);
}
