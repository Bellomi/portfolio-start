"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { hoverCard } from "@/utils/hover";

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card = ({ image, title, description, link }: CardProps) => {
  const hero = useRef<HTMLDivElement>(null);

  const hoverImage = hoverCard(hero, {
    x: 5,
    y: -5,
    z: 5,
  });
  return (
    <motion.div
      ref={hero}
      initial="hidden"
      animate="visible"
      id="card-container"
      className="sm:p-10 p-10 gap-10 items-center justify-center w-[450px] h-[320px] "
    >
      <motion.div variants={slideInFromRight(0.8)} className=" w-full h-full">
        <Image
          src={image}
          alt={title}
          className="bg-black w-full h-full mt-5 mb-10 rounded-xl object-cover"
          width={1000}
          height={1000}
          quality={100}
          /* @ts-ignore */
          style={{ transform: hoverImage.transform }}
        />

        <motion.h1 className="sm:text-3xl hidden lg:block text-xl  font-semibold">
          {title}
        </motion.h1>
        <p className="text-justify hidden lg:block mb-10 text-sm mt-3">
          {description}
        </p>
        <motion.a
          href={link}
          variants={slideInFromLeft(1)}
          className="p-4 mb-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          See More!
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Card;
