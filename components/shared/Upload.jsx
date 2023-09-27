import React from "react";
import Image from "next/image";

const Upload = () => {
	return (
		<div className="flex gap-5 justify-center items-center">
			<div className="flex bg-orange-100 rounded-md ">
				<input
					id="text"
					type="search"
					// onChange={() => {}}
					placeholder="Add Your Today List"
					className=" h-5 sm:w-96 p-5 bg-transparent outline-none rounded-md text-gray-500 placeholder-gray-400"
				/>
			</div>
			<div className="mt-3">
				<button className="outline_btn h-auto shadow-lg">Add</button>
			</div>
		</div>
	);
};

export default Upload;
