
import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Actions from "./components/Actions";
import "./App.css";

function App() {
  const [note, setNote] = useState("");
  const [aiResult, setAiResult] = useState("");
  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNote(savedNote);
    }

  }, []);
  //save on change
  useEffect(() => {
    localStorage.getItem('note', note);
    
  }, [note]);

  return (
    <div className="container">
      <h2>AI Markdown Assistant</h2>

      <div className="layout">
        <Editor note={note} setNote={setNote} />
        <Preview note={note} />
      </div>

      <Actions note={note} setAiResult={setAiResult} />

      {aiResult && (
        <div className="ai-result">
          <h3>AI Result</h3>
          <p>{aiResult}</p>
        </div>
      )}
    </div>
  );
}

export default App;
