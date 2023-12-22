"use client";
import { Socials } from "../../constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsSmallScreen(!isSmallScreen);
  };
  return (
    <div className="w-full sm:h-[65px] h-[100px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex sm:flex-row flex-col items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="p-2 cursor-pointer hover:animate-slowspin"
          />
          <span className="ml-[10px] hidden md:block text-gray-300">
            Web3Ride Dev
          </span>
        </a>

        <div className="w-[500px] h-full mt-5 hidden md:block flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <a key={social.name} href={social.link}>
                <Image
                  className="hover:cursor-pointer"
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
