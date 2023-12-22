"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { HiOutlineSparkles } from "react-icons/hi2";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[12px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <HiOutlineSparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />

      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Developing applications with cutting-edge technology.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[30px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        {`Build tomorrow's apps today`}
      </motion.div>
    </div>
  );
};

export default SkillText;
