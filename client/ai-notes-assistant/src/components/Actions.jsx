import { useState } from "react";




function Actions({ note, setAiResult }) {
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("")
  const handleSummarize = async () => {
    if (!note.trim()) {
      setError("please write some text first");
      return;
    }
    try {
      setError("");
      setLoading(true);
      
      const res = await fetch("http://localhost:5000/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: note }),
      });
      if (!res.ok) {
        throw new Error("server error");
      }

      const data = await res.json();
      setAiResult(data.result);
    
  }catch (err) {
    
  setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleRewrite = async () => {
    if (!note.trim()) {
      setError("please write some text first");
      return;
    }
    try {
      setError("");
      setLoading(true);
    const res = await fetch("http://localhost:5000/api/rewrite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: note }),
    });
        if (!res.ok) {
        throw new Error("Server error");
      }

    const data = await res.json();
      setAiResult(data.result);
       } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  
  };


  return (
    <div className="actions">
      <button onClick={handleSummarize} disabled={loading}>{loading?"summarizing...":"Summarize"}</button>
      <button onClick={handleRewrite} disabled={loading}>{loading ? "Rewriting..." : "Rewrite"}</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Actions;
