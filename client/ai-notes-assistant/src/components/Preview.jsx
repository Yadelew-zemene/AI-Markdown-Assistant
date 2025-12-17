import ReactMarkdown from "react-markdown";

function Preview({ note }) {
  return (
    <div>
      <h3>Preview</h3>
      <div className="preview-box">
        <ReactMarkdown>{note}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
