import express from "express";
import apiRouter from "./routers/index.js";

const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Hello VCrait");
});

export default app;
