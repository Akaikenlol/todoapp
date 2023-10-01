import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "To Do App",
	description: "Help You From Doing Your Own Staff!",
};

export default function RootLayout({ children }) {
	return (
		// <ClerkProvider>
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
		// </ClerkProvider>
	);
}
