function Actions({ setAiResult }) {
  const handleSummarize = () => {
    setAiResult("AI summary will appear here.");
  };

  const handleRewrite = () => {
    setAiResult("AI rewritten text will appear here.");
  };

  return (
    <div>
      <button onClick={handleSummarize}>Summarize</button>
      <button onClick={handleRewrite}>Rewrite</button>
    </div>
  );
}

export default Actions;
