import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import { Skills } from "../typings";

type Props = {
  skills: Skills[];
  polishLanguage: boolean;
};

const Skills = ({ skills, polishLanguage }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 
    justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        {polishLanguage ? "Umiejętności" : "Skills"}
      </h3>

      <h4 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm">
        {polishLanguage
          ? "Umiejętności, których nauczyłem się podczas mojej podróży jako programista"
          : "Skills that i learned throughout my journey as a developer"}
      </h4>

      <h5 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-[10px]">
        {polishLanguage
          ? "(Najedź kursorem na umiejętność dla aktualnej biegłości w porównaniu z innymi juniorami)"
          : "( Hover over a skill for current proficiency vs other juniors )"}
      </h5>

      {/* Render Skills Learned */}
      <div className="grid grid-cols-4 gap-5 mt-10">
        {skills?.map((skill) => (
          <SkillItem key={skill?._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
