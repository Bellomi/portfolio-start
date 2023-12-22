"use client";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { BiMailSend } from "react-icons/bi";

interface LinkProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

const SocialLink = ({ label, icon, href }: LinkProps) => (
  <p className="flex flex-row items-center my-15 cursor-pointer">
    {icon}
    {href ? (
      <a href={href} className="cursor-pointer text-15 ml-6">
        {label}
      </a>
    ) : (
      <button className="hover:cursor-pointer text-15 ml-6">{label}</button>
    )}
  </p>
);

const Footer = () => {
  return (
    <div className="h-full p-10 bg-transparent mt-20 text-gray-200 shadow-lg z-10">
      <div className="w-full mt-20 h-full flex sm:flex-row flex-col items-center justify-around flex-wrap">
        {/* Socials */}
        <div className="min-w-[150px] h-auto gap-5 flex flex-col items-center justify-start">
          <div className="font-bold mt-5 text-16">Socials</div>
          <SocialLink
            label="Github"
            icon={<RxGithubLogo />}
            href="https://www.github.com/Bellomi"
          />
          <SocialLink
            label="Linkedin"
            icon={<RxLinkedinLogo />}
            href="https://www.linkedin.com/in/livia-bellomi-88b2821b6/"
          />
        </div>

        {/* About */}
        <div className="min-w-[200px] h-auto flex flex-col items-center gap-5 justify-start">
          <div className="font-bold mt-5 text-16">Get in Touch!</div>
          <div className="flex flex-row gap-4">
            <BiMailSend size="25px" />
            <a
              href={"mailto:livia.esw@gmail.com"}
              className="cursor-pointer underline"
            >
              E-mail
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 text-15 text-center">
        &copy; Web3Ride Dev 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
