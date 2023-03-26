import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo?.name}`,
      "<I_aspire_to_be_a_full_stack_developer />",
      "Guy-who-loves-to-workout.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo.profilePic).url()}
        alt="Profile Image"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#path">
            <button className="heroButton">Path</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
