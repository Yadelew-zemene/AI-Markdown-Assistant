import * as pdfParse from "pdf-parse";
import mammoth from "mammoth";
import OpenAI from "openai";

export const summarizeFile = async (req, res) => {
    try {
        const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        let extractedText = "";
        if (req.file.mimetype == "application/pdf") {
            const pdfData = await pdfParse(req.file.buffer);
            extractedText = pdfData.text;
        }
        else if (
            req.file.mimetype ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            const doc = await mammoth.extractRawText({
                buffer: req.file.buffer,
            });
            extractedText = doc.value;
        } else {
            return res.status(400).json({ error: "Unsupported file type" });
        }
    
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "system", content: "Summarize the document clearly." },
            { role: "user", content: extractedText },
            ],
        })
        res.json({
            result: response.choices[0].message.content,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "File summarization failed" });
    }
};
