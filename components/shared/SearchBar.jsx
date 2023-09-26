"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

function SearchBar() {
	const [search, setSearch] = useState("");
	return (
		<div className="flex bg-slate-200 w-full sm:w-80 rounded-md m-auto">
			<input
				id="text"
				type="search"
				onChange={() => {}}
				placeholder="Search Your To Do List!"
				className="w-full sm:w-80 h-5 p-5 bg-transparent outline-none rounded-md"
			/>
			<div className="m-2">
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
