import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const SnowParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "snow",
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        life: {
          duration: {
            sync: false,
            value: {
              min: 3,
              max: 10,
            },
          },
          count: 0, // 0 = infinite
          delay: {
            value: 0,
          },
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "bottom",
            gravity: {
              enable: true,
              acceleration: 0.03,
              maxSpeed: 1.5,
            },
            outModes: {
              default: "out",
            },
          },
        },
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
};

export default SnowParticles;
