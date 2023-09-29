import React from "react";

const Card = () => {
	return (
		<div>
			<div className="flex justify-center items-center mt-5 mb-2">
				<div className="bg-orange-100 rounded-md p-2 m-2 max-w-2xl w-screen shadow-md">
					<h2 className="font-semibold m-1 cursor-pointer">Something</h2>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="bg-orange-100 rounded-md p-2 m-2 max-w-2xl w-screen shadow-md">
					<h2 className="font-semibold m-1 cursor-pointer">Something</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
