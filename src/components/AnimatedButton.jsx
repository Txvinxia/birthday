import React from "react";

const AnimatedButton = ({ text, className, onClick }) => {
  return (
    <button className={`${className ?? ""} cta-wrapper`} onClick={onClick}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="heart-wrapper">
          <img src="/images/pink-heart.svg" alt="heart" />
        </div>
      </div>
    </button>
  );
};

export default AnimatedButton;
