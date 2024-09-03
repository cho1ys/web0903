import React, { useState } from "react";

const TestuseState = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  function InputChange(e) {
    setInput(e.target.value);
    
  }
  function uploadInput() {
    setTask((prev) => [...prev,input]);
    
  }
  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <ul>
        {task.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};
export default TestuseState;
