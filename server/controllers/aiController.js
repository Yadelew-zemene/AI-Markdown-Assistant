import OpenAI  from "openai";

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export const summarize = async (req, res) => {
    try {
       
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
        const { text } = req.body;
         if (!text) return res.status(400).json({ result: "No text provided" });
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You summarize markdown notes in bullet points." },
                { role: "user", content: text }
            ]
        });
        res.status(200).json({ result: response.choices[0].message.content });
      
    
        
    }
    catch (error) {
        console.error("OpenAI error:", error.response?.data || error.message);
    res.status(500).json({ result: "AI error" });
    }
}
export const rewrite = async (req, res) => {
    try {
        const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
        const { text } = req.body;
         if (!text) return res.status(400).json({ result: "No text provided" });
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You rewrite markdown notes clearly and professionally" },
            
                { role: "user", content: text }
            ]

            
        });
        res.status(200).json({ result: response.choices[0].message.content });
     
            
    }
    catch (error) {
        console.error("OpenAI error:", error.response?.data || error.message);
    res.status(500).json({ result: "AI error" });
    }

}