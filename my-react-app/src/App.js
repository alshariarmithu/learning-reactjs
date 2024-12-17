import React from "react";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const age = e.target.age;
    setInput((values) => ({ ...values, [name]: age }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(input);
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={input.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={input.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
  );
}

export default App;
