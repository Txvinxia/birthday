import React, { useRef } from "react";

const GlowCard = ({ children, index }) => {
  const cardReference = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardReference.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    let mouseX = e.clientX - rect.left - rect.width / 2;
    let mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardReference.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card timeline-card rounded-xl  mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      {children}
    </div>
  );
};

export default GlowCard;
