function Editor({ note, setNote }) {
  return (
    <div>
      <h3>Markdown Editor</h3>
      <textarea
        rows="12"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your markdown here...and please prompt exactly what you want "
      />
    </div>
  );
}

export default Editor;
