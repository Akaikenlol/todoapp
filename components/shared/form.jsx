"use client";

import prisma from "@/helper/prisma";
import axios from "axios";
import { useState } from "react";

const Form = () => {
	const [data, setData] = useState({
		title: "",
		description: "",
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
			className=" bg-gray-400 flex flex-col items-center justify-center p-5 gap-4 w-fit"
		>
			<div className="flex flex-col">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					placeholder="Input your title"
					onChange={(e) =>
						setData({
							...data,
							title: e.target.value,
						})
					}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="description">Description</label>
				<input
					type="text"
					placeholder="Input your description"
					onChange={(e) =>
						setData({
							...data,
							description: e.target.value,
						})
					}
				/>
			</div>
			<button type="submit" className="outline_btn h-auto">
				Create
			</button>
		</form>
	);
};

export default Form;
