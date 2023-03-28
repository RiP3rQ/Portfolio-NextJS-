import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo[];
  polishLanguage: boolean;
};

const Hero = ({ pageInfo, polishLanguage }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      pageInfo[0]?.heroText[0],
      pageInfo[0]?.heroText[1],
      pageInfo[0]?.heroText[2],
    ],
    loop: true,
    delaySpeed: 20,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo[0]?.profilePic).url()}
        alt="Profile Image"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          {pageInfo[0]?.role}
        </h2>
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">
              {polishLanguage ? "O mnie" : "About"}
            </button>
          </Link>
          <a href="#path">
            <button className="heroButton">
              {polishLanguage ? "Ścieżka rozwoju" : "Path"}
            </button>
          </a>
          <Link href="#skills">
            <button className="heroButton">
              {polishLanguage ? "Umiejętności" : "Skills"}
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">
              {polishLanguage ? "Projekty" : "Projects"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
