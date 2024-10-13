import connectDB from "./db/db.config.js";
import { port } from "./config.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
