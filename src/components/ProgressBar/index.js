import React from "react";
import "./progress.component.css";

function ProgressBar(props) {
  const { fill = 0 } = props;
  return (
    <div className="progress-bar">
      <div className="fill" style={{ width: `${fill}%` }}></div>
    </div>
  );
}

export default ProgressBar;
