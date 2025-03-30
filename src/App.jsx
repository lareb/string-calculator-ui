import { useState } from "react";

import axios from "axios";

const API_URL = "https://string-calculator-m3iv.onrender.com/calculate";

const [error, setError] = useState(null);

const calculateSum = async () => {
  setError(null);
  setResult(null);

  try {
    const response = await axios.post(API_URL, { numbers: input });
    setResult(response.data.result);
  } catch (err) {
    setError(err.response?.data?.error || "Something went wrong");
  }
};

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <h2>String Calculator</h2>
      <div className="input-group">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers (e.g. 1,2,3)"
          rows="4"
        />
        <button>Calculate</button>
      </div>
    </div>
  );
}
