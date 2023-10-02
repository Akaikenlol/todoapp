"use client";

import Upload from "@/components/shared/Upload";
import Navbar from "@/components/shared/navbar";
import Form from "@/components/shared/form";
import React from "react";

const Create = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<section className="flex flex-col justify-center items-center">
				<div className="font-semibold text-2xl flex justify-center mb-1">
					Welcome, get started by creating your own list for today...
				</div>
				<Form />
			</section>
			{/* <Upload /> */}
		</div>
	);
};

export default Create;
