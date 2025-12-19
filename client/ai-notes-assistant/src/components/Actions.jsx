function Actions({ note, setAiResult }) {
  const handleSummarize = async () => {
  const res = await fetch("http://localhost:5000/api/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: note }),
  });

  const data = await res.json();
  setAiResult(data.result);
};
 

  const handleRewrite= async () => {
    const res = await fetch("http://localhost:5000/api/rewrite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: note }),
    });

    const data = await res.json();
    setAiResult(data.result);
  };
  console.log("Sending note:", note);

  return (
    <div>
      <button onClick={handleSummarize}>Summarize</button>
      <button onClick={handleRewrite}>Rewrite</button>
    </div>
  );
}

export default Actions;
