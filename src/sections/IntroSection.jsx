import React from "react";
import SnowParticles from "../components/SnowParticles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTitle from "../components/AnimatedTitle";
import { ScrollTrigger } from "gsap/all";
import AnimatedButton from "../components/AnimatedButton";

const words = [
  { text: "anniversary", year: "1st" },
  { text: "Birthday", year: "21st" },
  { text: "anniversary", year: "1st" },
  { text: "Birthday", year: "21st" },
  { text: "anniversary", year: "1st" },
  { text: "Birthday", year: "21st" },
  { text: "anniversary", year: "1st" },
  { text: "Birthday", year: "21st" },
];

gsap.registerPlugin(ScrollTrigger);

const IntroSection = ({ onIntroEnd }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#note",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        delay: 3,
      }
    );
  });
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#note",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".note-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  const handleButtonClick = () => {
    window.scrollTo({ top: 0 });
    onIntroEnd();
  };
  return (
    <section className="note-container">
      <SnowParticles className="pointer-events-none" />
      <div className="min-h-screen w-screen">
        <AnimatedTitle words={words} />

        <div className="h-dvh w-screen" id="note">
          <div className="note-path note-image">
            <img
              src="/images/note.png"
              alt="background"
              className="absolute left-0 top-0 size-full object-cover"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 p-20  bg-red-ncs">
        <AnimatedButton
          text="Wanna See More?"
          className="md:w-80 md:h-16 w-60 h-12"
          onClick={handleButtonClick}
        />
      </div>
    </section>
  );
};

export default IntroSection;
