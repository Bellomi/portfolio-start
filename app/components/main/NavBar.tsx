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
    <div
      className={`w-full fixed mt-4 top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 ${
        isSmallScreen ? "px-2" : "px-10"
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
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
          <span
            className={`ml-${
              isSmallScreen ? "2" : "10"
            } hidden md:block text-gray-300`}
          >
            Web3Ride Dev
          </span>
        </a>

        {isSmallScreen ? (
          // Render collapsible menu for small screens
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 cursor-pointer focus:outline-none"
            >
              ☰
            </button>
            {isSmallScreen && (
              <div className="absolute top-0 left-0 w-full h-screen bg-[#03001417] backdrop-blur-md flex flex-col items-center justify-center">
                <a
                  href="#about-me"
                  className="cursor-pointer text-gray-300 my-2"
                >
                  About me
                </a>
                <a href="#skills" className="cursor-pointer text-gray-300 my-2">
                  Skills
                </a>
                <a
                  href="#projects"
                  className="cursor-pointer text-gray-300 my-2"
                >
                  Projects
                </a>
              </div>
            )}
          </div>
        ) : (
          // Render full-width bar for larger screens
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-15 px-20 py-5 rounded-full text-gray-200">
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
        )}

        <div className="md:flex hidden">
          <a className="flex flex-row gap-5">
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
