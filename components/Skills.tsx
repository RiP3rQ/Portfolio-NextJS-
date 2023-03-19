import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 
    justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        SKills that i learned throughout my journey as a developer
      </h3>

      {/* Render Skills Learned */}
      <div className="grid grid-cols-4 gap-5">
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </div>
    </motion.div>
  );
};

export default Skills;
