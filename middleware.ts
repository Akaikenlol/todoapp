import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/api/:path*"],
});

export const config = {
	publicRoutes: ["/", "/api/:path*"],
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)", "/api/todo"],
};
