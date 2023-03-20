import React from "react";
import { motion } from "framer-motion";
import { Skills } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skills;
};

const SkillItem = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={urlFor(skill?.image).url()}
        alt="skill_item"
        className="rounded-full border border-gray-500 object-contain w-20 h-20 md:h-24 md:w-24 
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-95 transition duration-200 ease-in-out 
      group-hover:bg-white h-20 w-20 md:h-24 md:w-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-base font-bold text-black opacity-100">
            {skill?.progress == "Advanced" ? (
              <span className="text-green-600">Advanced</span>
            ) : (
              <span className="text-yellow-500">Average</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
