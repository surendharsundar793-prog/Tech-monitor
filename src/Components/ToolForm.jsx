import React, { useState } from 'react'

const ToolForm = ({ setTools }) => {
  let [tool, setTool] = useState("");
  let [progress, setProgress] = useState(0);

  let ProgressLevel = (progress) => {
    if (progress <= 30) return "Beginner";
    if (progress <= 70) return "Intermediate";
    return "Advanced";
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    // if (!tool.trim()) {
    //   alert("Please enter tool name");
    //   return;
    // }

    let newTool = {
      id: Date.now(),
      tool,
      progress: Number(progress),
      level: ProgressLevel(progress),
    };

    setTools((prev) => [...prev, newTool]);

    setTool("");
    setProgress(0);
  };


  return (
    <div className="tool-form">
      <form onSubmit={handleSubmit}>
        <h2>Add New Skill</h2>

        <div className="form-group">
          <input
            type="text"
            placeholder="Tool Name (e.g. React, AWS, Docker...)"
            value={tool}
            required
            onChange={(e) => setTool(e.target.value)}
          />
          <button type="submit">Add Tool</button>
        </div>

        <div className="range-wrap" style={{ marginTop: '20px' }}>
          <label>Proficiency: {progress}% - {ProgressLevel(progress)}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number((e.target.value)))}
          />
        </div>
      </form>
    </div>
  );
}

export default ToolForm