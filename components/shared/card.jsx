import React from "react";

const Card = ({ todo }) => {
	return (
		<div>
			<div className="flex justify-center items-center mt-5 mb-2">
				<div className=" flex flex-col gap-5 rounded-md m-2 max-w-2xl w-screen ">
					{todo?.map((item) => (
						<div key={item.id} className="p-2 border bg-orange-100 shadow-md">
							<p className="font-semibold m-1 cursor-pointer">
								Title: {item.title}
							</p>
							<p className="font-semibold m-1 cursor-pointer overflow-hidden text-ellipsis line-clamp-2">
								Description: {item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
