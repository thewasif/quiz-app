import React from "react";
import "./analyticsbar.component.css";

function AnalyticsBar(props) {
  const { maximum, minimum, actual, maxScore } = props;
  return (
    <div className="analytics-bar-container">
      <div className="text-container">
        <p className="text-1">Score: {actual}%</p>
        <p className="text-2">Max Score: {maxScore}%</p>
      </div>
      <div className="bar">
        <div className="all-wrong" style={{ width: `${minimum}%` }}></div>
        <div className="all-correct" style={{ width: `${maximum}%` }}></div>
        <div className="actual" style={{ width: `${actual}%` }}></div>
      </div>
    </div>
  );
}

export default AnalyticsBar;
