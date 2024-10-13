import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;
const jwt_secret = process.env.JWT_SECRET;

export { port, mongo_uri, jwt_secret };
