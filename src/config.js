import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;

export { port, mongo_uri };
