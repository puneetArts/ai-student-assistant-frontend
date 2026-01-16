import { useState } from "react";
import InputBox from "../components/InputBox";
import ModeSelector from "../components/ModeSelector";
import ResponseBox from "../components/ResponseBox";
import Loader from "../components/Loader";
import { generateAIResponse } from "../services/ai.api";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("explain");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await generateAIResponse({ prompt, mode });
      setResponse(res.data.response);
    } catch (err) {
      setError("Failed to generate response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI-Powered Student Assistant</h1>

      <ModeSelector mode={mode} setMode={setMode} />
      <InputBox prompt={prompt} setPrompt={setPrompt} />

      <button onClick={handleSubmit} disabled={loading}>
        Generate
      </button>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {response && <ResponseBox mode={mode} response={response} />}
    </div>
  );
}
