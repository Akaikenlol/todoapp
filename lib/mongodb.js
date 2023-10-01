// import mongoose from "mongoose";

// const dbConnect = async function () {
// 	if (mongoose.connection.readyState >= 1) {
// 		return;
// 	}

// 	try {
// 		await mongoose.connect(process.env.MONGODB_URL, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});
// 		console.log("MongoDB connected successfully");
// 	} catch (error) {
// 		console.log("Error connecting to MongoDB:", error);
// 		throw error;
// 	}
// };

// export default dbConnect;

// mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
	throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;
