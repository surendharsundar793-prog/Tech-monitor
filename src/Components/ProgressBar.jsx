import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{ width: `${progress}%` }}
      >
        <span className="progress-label">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
