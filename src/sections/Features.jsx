import React from "react";
import BentoCard from "../components/BentoCard";
import BentoTilt from "../components/BentoTilt";
import GlowCard from "../components/GlowCard";

const Features = () => {
  return (
    <section className="bg-black pb-42 py-20">
      <div className="container mx-auto px-3 md:px-10">
        <GlowCard>
          <BentoTilt className="border-hsla relative  h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src="videos/feature-1.mp4"
              title={<>Booby Girl</>}
              description="Thank you being such an AMAZING Girlfriend."
            />
          </BentoTilt>
        </GlowCard>
        <div className="grid h-[135vh] grid-cols-3 grid-rows-2 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-2 col-span-2 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>Cutie</>}
              description="I love you Forever"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>Cherry Bomb</>}
              description="My pretty bbg is that you???"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>Cockroach Jesus</>}
              description="HAHHAHHAHAHA"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-center bg-red-ncs p-5">
              <h1 className="bento-title special-font max-w-64 text-black ">
                I love you <br />- Tevin
              </h1>
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
