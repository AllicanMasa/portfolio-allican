import React, { useState } from "react";
import "./skills.css";

const FlipCard = ({ icon, title, children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
        <div className="flip-card-front">
          {icon && <div className="card-icon">{icon}</div>}
          <h2 className="title">{title}</h2>
        </div>
        <div className="flip-card-back">{children}</div>
      </div>
    </div>
  );
};

export default FlipCard;
