import { auth } from "@clerk/nextjs";
import Form from "@/components/shared/form";

const Create = () => {
	const { userId } = auth();
	return (
		<div>
			{/* <Navbar /> */}
			<section className="flex flex-col justify-center items-center">
				<div className="font-semibold text-2xl flex justify-center mb-1">
					Welcome, get started by creating your own list for today.
				</div>
				<Form userId={userId} />
			</section>
			{/* <Upload /> */}
		</div>
	);
};

export default Create;
