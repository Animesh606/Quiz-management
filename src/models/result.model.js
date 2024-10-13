import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quiz",
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Result = mongoose.model("Result", ResultSchema);

export default Result;
