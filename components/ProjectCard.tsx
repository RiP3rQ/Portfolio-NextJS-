import React from "react";
import { motion } from "framer-motion";
import { Projects } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  project: Projects;
};

const MainProjectCard = ({ project }: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-3 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    "
    >
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-32 h-28 xl:h-[300px] xl:w-[400px] object-contain"
        src={urlFor(project.image).url()}
        alt={project.name}
      />

      <div className="px-0 md:px-10 mt-0">
        <h4 className="text-4xl font-bold">{project.name}</h4>
        <p className="font-light text-2xl mt-1">Technologies used:</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used  */}
          {project.technologies.map((tech, index) => (
            <img
              src={urlFor(tech.image).url()}
              alt={`${tech.title} logo`}
              className="h-10 w-10 rounded-full object-contain"
            />
          ))}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default MainProjectCard;
