import express from "express";
import { summarize, rewrite } from "../controllers/aiController.js";

const router = express.Router();

router.post("/summarize", summarize);
router.post("/rewrite", rewrite);

export default router;