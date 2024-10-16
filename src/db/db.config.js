import mongoose from "mongoose";
import { mongo_uri } from "../config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri);
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;