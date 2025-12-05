import React, { useState } from "react";
import Counter from "./Counter";
import "./counter.css"; // make sure CSS is imported

export default function Countapp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="app-container">
      <div className="counter-box">
        <h1>Count: {count}</h1>

        <Counter increment={increment} decrement={decrement} />
      </div>
    </div>
  );
}
