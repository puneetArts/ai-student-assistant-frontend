export default function InputBox({ prompt, setPrompt }) {
  return (
    <textarea
      rows="6"
      placeholder="Enter your text or question here..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
    />
  );
}
