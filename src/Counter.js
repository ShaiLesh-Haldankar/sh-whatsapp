import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button style={{ margin: "0 10px" }} onClick={() => setCount(0)}>
        Reset
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
