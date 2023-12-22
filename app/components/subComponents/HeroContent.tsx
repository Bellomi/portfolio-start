"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import Image from "next/image";
import { useRef } from "react";
import { hoverCard } from "@/utils/hover";

const HeroContent = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hoverCard(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const hoverImage = hoverCard(hero, {
    x: 20,
    y: -5,
    z: 10,
  });

  return (
    <motion.div
      ref={hero}
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <HiOutlineSparkles className="text-[#f6f6f7] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[15px] font-bold">
            Frontend Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto lg:max-w-full"
        >
          <span>
            Persuit of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-500">
              {" "}
              excellence{" "}
            </span>
            in Software Engineering
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 text-justify max-w-[600px]"
        >
          I&apos;m a Frontend Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          href="https://github.com/Bellomi"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        /* @ts-ignore */
        style={{ transform: hoverHero.transform }}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          /* @ts-ignore */
          style={{ transform: hoverImage.transform }}
          src="/mainIconsdark.png"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
