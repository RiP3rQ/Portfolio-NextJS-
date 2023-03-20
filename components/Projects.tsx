import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Props = {};

const categories = [
  "Mobile Apps",
  "React Apps",
  "MERN Apps",
  "Blockchain Dapps",
  "UI/UX",
];

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 
    justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <h4 className="absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm border-b border-gray-500 pb-1">
        Few of my projects, that i've done so far
      </h4>

      <div className="absolute top-32 flex flex-row items-center justify-center space-x-8">
        {categories.map((category, index) => (
          <button className="heroButton" key={index}>
            {category}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
      snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </motion.div>
  );
};

export default Projects;
