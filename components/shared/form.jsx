"use client";

import axios from "axios";
import { useState } from "react";

const Form = ({ userId }) => {
	const [data, setData] = useState({
		title: "",
		description: "",
		userId,
	});
	// console.log("data", data);

	const handleSubmit = async (e) => {
		e.preventDefault(); // Try not to refresh form submit
		try {
			await axios.post("/api/todo", data);
		} catch (error) {
			console.log("Error while fetching data: ", error);
		}
		// try {
		// 	await prisma.todo.create({ data: data });
		// } catch (error) {
		// 	console.log("Error while fetching data: ", error);
		// }
	};
	return (
		<form
			onSubmit={handleSubmit}
			className=" bg-orange-100 flex flex-col items-center justify-center p-5 gap-4 w-fit shadow-lg rounded-lg mt-10  placeholder-gray-400 border-orange-300 border"
		>
			<div className="flex flex-col  ">
				<label htmlFor="title" className="text-xl">
					Title
				</label>
				<input
					type="text"
					placeholder="Input your title"
					onChange={(e) =>
						setData({
							...data,
							title: e.target.value,
						})
					}
					className="sm:w-96 h-5 p-5 mt-4 mb-4 bg-transparent outline-none rounded-md text-gray-500 placeholder-gray-400 shadow-md border-orange-200 border"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="description" className="text-xl">
					Description
				</label>
				<input
					type="text"
					placeholder="Input your description"
					onChange={(e) =>
						setData({
							...data,
							description: e.target.value,
						})
					}
					className="sm:w-96 h-5 p-5 mt-4 mb-4 bg-transparent outline-none rounded-md text-gray-500 placeholder-gray-400 shadow-md  border-orange-200 border"
				/>
			</div>
			<button type="submit" className="outline_btn h-auto">
				Create
			</button>
		</form>
	);
};

export default Form;
