import React from "react";

const Stars = (props) => {
  let { level } = props;
  if (level === 1) {
    return (
      <div className="star-ratings">
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    );
  } else if (level === 2) {
    return (
      <div className="star-ratings">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    );
  } else if (level === 3) {
    return (
      <div className="star-ratings">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    );
  }
};

export default Stars;
