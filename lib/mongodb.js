import mongoose from "mongoose";

const dbConnect = async function () {
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.log("Error connecting to MongoDB:", error);
		throw error;
	}
};

export default dbConnect;
