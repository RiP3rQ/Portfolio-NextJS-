import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo[];
  polishLanguage: boolean;
};

const About = ({ pageInfo, polishLanguage }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {polishLanguage ? "O mnie" : "About"}
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={urlFor(pageInfo[0]?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-96"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          {polishLanguage ? `Tutaj znajdziesz ` : "Here is a "}
          <span className="underline decoration-[#F7AB0A]/50">
            {polishLanguage ? `kilka` : "little"}
          </span>{" "}
          {polishLanguage ? `informacji na mój temat` : "background"}
        </h4>
        <p className="text-base">{pageInfo[0]?.backgroundInfo}</p>
      </div>
    </motion.div>
  );
};

export default About;
