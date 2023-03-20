import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Projects } from "../typings";

type Props = {
  projects: Projects[];
};

const categories = [
  "Main Projects",
  "Mobile Apps",
  "React Apps",
  "MERN Apps",
  "Blockchain Dapps",
  "UI/UX",
];

const Projects = ({ projects }: Props) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    category: string
  ) => {
    e.preventDefault();
    console.log(category);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <h4 className="absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm border-b border-gray-500 pb-1">
        Few of my projects, that i've done so far
      </h4>

      <div className="absolute top-28 flex flex-row items-center justify-center space-x-8">
        {categories.map((category, index) => (
          <button
            className="heroButton"
            key={index}
            onClick={(e) => handleClick(e, category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      <div
        className="absolute top-36 bottom-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 text-center"
      >
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Background */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
