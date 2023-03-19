import React from "react";
import { motion } from "framer-motion";
import PathCard from "./PathCard";
import { VerticalTimeline } from "react-vertical-timeline-component";

type Props = {};

const Path = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 
    justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        My Path
      </h3>

      <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        What i have learned so far
      </h4>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          <PathCard />
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Path;
