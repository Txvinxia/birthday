import React, { useRef, useState } from "react";
import StartSection from "./StartSection";
import IntroSection from "./IntroSection";
import HeroPage from "./HeroPage";

const SectionSelector = () => {
  const [gameEnded, setGameEnded] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const audioReference = useRef(null);

  const startMusic = () => {
    audioReference.current.play();
  };

  // Call this when the game ends
  const handleGameEnd = () => {
    setGameEnded(true);
  };

  const handleIntroEnd = () => {
    setShowHero(true);
  };

  return (
    <div onClick={startMusic}>
      {!gameEnded ? (
        <StartSection onGameEnd={handleGameEnd} />
      ) : !showHero ? (
        <IntroSection onIntroEnd={handleIntroEnd} />
      ) : (
        <HeroPage />
      )}
      {!gameEnded ? (
        <audio ref={audioReference} src="/audio/audio-1.mp3" loop autoPlay />
      ) : !showHero ? (
        <audio ref={audioReference} src="/audio/audio-2.mp3" loop autoPlay />
      ) : (
        <audio ref={audioReference} src="/audio/audio-3.mp3" loop autoPlay />
      )}
    </div>
  );
};

export default SectionSelector;
