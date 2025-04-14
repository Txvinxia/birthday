import React, { useRef, useState } from "react";
import gsap from "gsap";

const StartSection = ({ onGameEnd }) => {
  const [initialState, setInitialState] = useState(true);
  const buttonReference = useRef(null);
  const containerRefrence = useRef(null);
  const cooldownReference = useRef(false);

  const moveButton = () => {
    const button = buttonReference.current;
    const container = containerRefrence.current;
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maximumAllowedX = containerRect.width - buttonRect.width;
    const maximumAllowedY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maximumAllowedX);
    const randomY = Math.floor(Math.random() * maximumAllowedY);

    gsap.to(button, {
      duration: 0.5,
      x: randomX,
      y: randomY,
      ease: "power2.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const button = buttonReference.current;
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();

    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const dx = mouseX - buttonCenterX;
    const dy = mouseY - buttonCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const threshold = 150;

    if (distance < threshold && !cooldownReference.current) {
      cooldownReference.current = true;

      moveButton();
      setInitialState(false);
    }

    setTimeout(() => {
      cooldownReference.current = false;
    }, 1100);
  };
  const handleClick = () => {
    gsap.to(buttonReference.current, {
      scale: 20,
      opacity: 0,
      duration: 3,
      onComplete: () => {
        onGameEnd();
      },
    });
  };

  return (
    <section className="container-start bg-red-ncs ">
      <div
        ref={containerRefrence}
        className="start-button-container"
        onMouseMove={handleMouseMove}
      >
        <button
          ref={buttonReference}
          onClick={handleClick}
          className={` ${
            initialState ? "start-button left-1/2 top-1/2" : "start-button z-50"
          } `}
        >
          Click Me!
        </button>
      </div>
    </section>
  );
};

export default StartSection;
