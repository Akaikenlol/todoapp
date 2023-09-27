import Upload from "@/components/shared/Upload";
import Navbar from "@/components/shared/navbar";
import React from "react";

const Create = () => {
	return (
		<div>
			<Navbar />
			<section>
				<div className="font-semibold text-2xl flex justify-center mb-1">
					Welcome, get started by creating your own list for today...
				</div>
			</section>
			<Upload />
		</div>
	);
};

export default Create;
