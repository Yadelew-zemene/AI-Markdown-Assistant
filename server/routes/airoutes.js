import express from "express";
import upload from "../middleware/upload.js";
import { summarize, rewrite } from "../controllers/aiController.js";
import { summarizeFile } from "../controllers/fileController.js";

const router = express.Router();

router.post("/summarize", summarize);
router.post("/rewrite", rewrite);
router.post("/summarize-file", upload.single("file"), summarizeFile);

export default router;