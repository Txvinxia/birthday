import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const AnimatedTitle = ({ words }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".intro-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        duration: 3,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <div className="intro-layout">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col gap-7">
          <div className="intro-text uppercase items-center text-blue-200">
            <h1>Happy</h1>
            <h1>
              <span className="slide text-red-ncs">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span key={index} className="flex flex-col items-center">
                      <span>{word.year}</span>
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1>Chathya</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTitle;
