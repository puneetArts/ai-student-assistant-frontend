export default function ModeSelector({ mode, setMode }) {
  return (
    <select value={mode} onChange={(e) => setMode(e.target.value)}>
      <option value="explain">Explain a Concept</option>
      <option value="mcq">Generate MCQs</option>
      <option value="summarize">Summarize Text</option>
      <option value="improve">Improve Writing</option>
    </select>
  );
}
