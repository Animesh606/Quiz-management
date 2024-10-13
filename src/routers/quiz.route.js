import { Router } from "express";
import {
    createQuiz,
    getAllQuizzes,
    getQuizById,
    getResultsByUser,
    submitQuiz,
} from "../controllers/quiz.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/create", authMiddleware, createQuiz);
router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/submit", authMiddleware, submitQuiz);
router.get("/result", authMiddleware, getResultsByUser);

export default router;
