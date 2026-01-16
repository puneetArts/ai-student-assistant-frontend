export default function ResponseBox({ response, mode }) {
  if (mode === "mcq") {
    let data;

    try {
      data = JSON.parse(response);
    } catch {
      data = null;
    }

    if (!data || !Array.isArray(data.questions)) {
      return <div className="response text">{response}</div>;
    }

    return (
      <div className="response">
        <h3>Generated MCQs</h3>

        {data.questions.map((q, index) => (
          <div key={index} className="mcq">
            <p className="question">
              <strong>{index + 1}. {q.question}</strong>
            </p>

            <ul>
              {Array.isArray(q.options) &&
                q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
            </ul>

            <p className="answer">
              <strong>Answer:</strong> {q.answer}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return <div className="response text">{response}</div>;
}
