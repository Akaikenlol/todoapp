"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

function SearchBar() {
	const [search, setSearch] = useState("");
	return (
		<div className="flex gap-5 justify-center items-center ">
			<div className="flex bg-orange-100 rounded-md ">
				<input
					id="text"
					type="search"
					onChange={() => {}}
					placeholder="Search Your To Do List!"
					className=" sm:w-96 h-5 p-5 bg-transparent outline-none rounded-md text-gray-500 placeholder-gray-400"
				/>
			</div>
			<div className="bg-white shadow-xl hover:bg-teal-100 p-2 rounded-md ">
				<Image
					src="/assets/search-gray.svg"
					alt="search"
					width={20}
					height={20}
					className="object-contain"
				/>
			</div>
		</div>
	);
}

export default SearchBar;
