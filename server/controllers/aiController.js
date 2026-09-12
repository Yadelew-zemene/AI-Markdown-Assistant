import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const summarize = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ result: "No text provided" });
    }

   const response = await ai.models.generateContent({
     model: "gemini-3.6-flash",
     contents: `Summarize these markdown notes in bullet points:\n\n${text}`,
   });
    res.status(200).json({
      result: response.text,
    });
  } catch (error) {
    console.error("Gemini error:", error.message);

    res.status(500).json({
      result: "AI error",
    });
  }
};

export const rewrite = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ result: "No text provided" });
    }

   const response = await ai.models.generateContent({
     model: "gemini-3.6-flash",
     contents: `Rewrite these markdown notes clearly and professionally:\n\n${text}`,
   });

    res.status(200).json({
      result: response.text,
    });
  } catch (error) {
    console.error("Gemini error:", error.message);

    res.status(500).json({
      result: "AI error",
    });
  }
};
