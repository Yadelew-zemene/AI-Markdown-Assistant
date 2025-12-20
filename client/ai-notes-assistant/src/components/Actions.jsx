import { useState } from "react";




function Actions({ note, setAiResult }) {
  const [loading, setLoading] = useState(null);
  const [error,setError]=useState("")
  const handleSummarize = async () => {
    if (!note.trim()) {
      setError("please write some text first");
      return;
    }
    try {
      setError("");
      setLoading("summarize");
      
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
      setLoading(null);
    }
  };
  

  const handleRewrite = async () => {
    if (!note.trim()) {
      setError("please write some text first");
      return;
    }
    try {
      setError("");
      setLoading("rewrite");
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
      setLoading(null);
    }
  
  };


  return (
    <div className="actions">
      <button onClick={handleSummarize} disabled={loading !==null}>
        {loading==="summarize" ? "summarizing..." : "Summarize"}
      </button>
      <button onClick={handleRewrite} disabled={loading!==null}>{loading=== "rewrite" ?"Rewriting..." : "Rewrite"}</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Actions;
