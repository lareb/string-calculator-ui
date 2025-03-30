import { useState } from "react";

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
