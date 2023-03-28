import React from "react";
import { motion } from "framer-motion";
import { Projects } from "../typings";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center">
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-96 h-72 xl:h-[300px] xl:w-[400px] object-contain"
        src={urlFor(project?.image).url()}
        alt={project?.name}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="px-0 md:px-10 mt-0"
      >
        <h4 className="text-4xl font-bold">{project?.name}</h4>
        <p className="font-light text-2xl mt-1">Technologies used:</p>
        <div className="flex space-x-2 my-2 items-center justify-center">
          {/* Tech used  */}
          {project?.technologies.map((tech, index) => (
            <img
              key={index}
              src={urlFor(tech.image).url()}
              alt={`${tech.title} logo`}
              className="h-10 w-10 rounded-full object-contain"
            />
          ))}
        </div>
        <div className="text-xs md:text-left md:text-lg mt-1 max-w-2xl">
          <p className=" text-center">{project?.summary}</p>
        </div>
        <div className="flex flex-1 items-center justify-center space-x-4 mt-2">
          <button className="heroButton py-1 px-2 flex items-center justify-center pr-4">
            <SocialIcon
              url={project?.linkToGithub}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />{" "}
            <span className="text-base">Github</span>
          </button>
          <button className="heroButton py-1 px-2 flex items-center justify-center pr-4">
            <SocialIcon
              url={project?.linkToBuild}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />{" "}
            <span className="text-base">Demo</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
