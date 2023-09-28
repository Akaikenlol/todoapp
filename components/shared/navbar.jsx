"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
	SignOutButton,
} from "@clerk/nextjs";

const Navbar = () => {
	return (
		<nav className="w-full flex justify-between mb-5 pt-3  bg-teal-100">
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
				<div className="mt-3 mr-3">
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
				<SignedOut>
					<SignInButton>
						<button className="black_btn">
							<UserButton afterSignOutUrl="/" />
							Sign In
						</button>
					</SignInButton>
				</SignedOut>
				<Link href="/create" className="white_btn">
					Create
				</Link>
				<SignedIn>
					<SignOutButton>
						<button className="black_btn">Sign Out</button>
					</SignOutButton>
				</SignedIn>
			</div>
		</nav>
	);
};

export default Navbar;
