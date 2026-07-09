import mongoose from "mongoose";

export async function connectDB() {
  try {
    const url = process.env.MONGODB_URI;

    if (!url) {
      throw new Error("Mongo Uri is required");
    }

    const connect = await mongoose.connect(url);
    console.log("mongodb connected", connect.connection.host);
  } catch (error) {
    console.log("Mongodb connection error", error.message);
    process.exit(1);
  }
}
