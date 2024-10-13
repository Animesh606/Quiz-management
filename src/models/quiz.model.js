import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        options: {
            type: [String],
            validate: [
                (arr) => arr.length === 4,
                "question must have exactly 4 options",
            ],
        },
        correctAnswer: {
            type: Number,
            required: true,
        },
    },
    { _id: false }
);

const QuizSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        questions: {
            type: [QuestionSchema],
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
