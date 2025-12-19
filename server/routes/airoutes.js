const express = require("express");
const {summarize,rewrite}=require("../controllers/aiController")
const router = express.Router();
router.post("/summarize", summarize);


router.post("/rewrite", rewrite);
module.exports = router;