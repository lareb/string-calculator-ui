import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "https://string-calculator-m3iv.onrender.com/calculate"; // Backend URL

  const calculateSum = async () => {
    setError(null);
    setResult(null);

    // Trim input & handle empty case
    const formattedInput = input.trim();
    if (!formattedInput) {
      setResult(0);
      return;
    }

    try {
      const response = await axios.post(API_URL, { numbers: formattedInput });
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>String Calculator</h2>
      <div className="input-group">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers (e.g. 1,2,3 or 1\n2,3)"
          rows="4"
        />
        <button onClick={calculateSum}>Calculate</button>
      </div>

      {result !== null && <div className="result">Result: {result}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
