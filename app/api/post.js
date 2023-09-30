// import dbConnect from "@/lib/mongodb";

// export default async function handler(req, res) {
//     try {
//         //connect to mongodb
//         await dbConnect();

//         //parse the req body as json
//         const bodyObject = JSON.parse(req.body);

//         //insert the data into mongoDB collection
//         const result = await

//         //send back the response
//         res.status(201).json(result);
//     } catch (error) {
//         console.log('Error handling the POST request: ', error);
//         res.status(500).json({error:"Internal Server Error"})
//     }

// }

// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("nextjs-mongodb-demo");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			let myPost = await db.collection("posts").insertOne(bodyObject);
			res.json(myPost.ops[0]);
			break;
		case "GET":
			const allPosts = await db.collection("allPosts").find({}).toArray();
			res.json({ status: 200, data: allPosts });
			break;
	}
}
