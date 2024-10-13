import mongoose from "mongoose";
import Quiz from "../models/quiz.model.js";
import Result from "../models/result.model.js";

const createQuiz = async (req, res) => {
    const { title, description, questions } = req.body;
    try {
        const quiz = new Quiz({
            title,
            description,
            questions,
            createdBy: req.user.id,
        });
        await quiz.save();
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: "Quiz not found" });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const submitQuiz = async (req, res) => {
    const { quizId, answers } = req.body;

    if (!mongoose.Types.ObjectId.isValid(quizId)) {
        return res.status(400).json({ message: 'Invalid quiz ID' });
    }

    try {
        const quiz = await Quiz.findById(quizId);
        if (!quiz) return res.status(404).json({ message: "Quiz not found" });

        if (answers.length !== quiz.questions.length) {
            return res
                .status(400)
                .json({
                    message: "Answer count does not match question count",
                });
        }

        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) score++;
        });

        const result = new Result({
            user: req.user.id,
            quiz: quizId,
            score,
            total: quiz.questions.length,
        });

        await result.save();

        res.json({ score, total: quiz.questions.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getResultsByUser = async (req, res) => {
    try {
        const results = await Result.find({ user: req.user.id }).populate("quiz");
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export { createQuiz, getAllQuizzes, getQuizById, submitQuiz, getResultsByUser };
