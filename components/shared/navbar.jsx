import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<nav className="w-full flex justify-between mb-10 pt-3  bg-green-100">
			<Link
				href="/"
				className="flex gap-5 justify-between items-center mx-5 mb-2"
			>
				<Image
					src="https://i.pinimg.com/564x/1f/e3/1b/1fe31b546be395c06e4feada0283e76d.jpg"
					alt="logo"
					width={50}
					height={50}
					className="object-contain rounded-full"
				/>
				<p className="font-semibold">TO DO APP</p>
			</Link>
			<div className="flex gap-5 mx-5">
				<Button>SignIn</Button>
				<Button>SignOut</Button>
			</div>
		</nav>
	);
};

export default Navbar;
