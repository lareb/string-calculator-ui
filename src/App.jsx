import { useState } from "react";

import axios from "axios";

const API_URL = "https://string-calculator-m3iv.onrender.com/calculate";

const calculateSum = async () => {
  try {
    const response = await axios.post(API_URL, { numbers: input });
    console.log("Result:", response.data.result);
  } catch (error) {
    console.error("Error:", error);
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
