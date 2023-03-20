import React from "react";
import { motion } from "framer-motion";
import { Projects } from "../typings";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
  project: Projects;
};

const MainProjectCard = ({ project }: Props) => {
  return (
    <motion.div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center">
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-96 h-72 xl:h-[300px] xl:w-[400px] object-contain"
        src={urlFor(project.image).url()}
        alt={project.name}
      />

      <div className="px-0 md:px-10 mt-0">
        <h4 className="text-4xl font-bold">{project.name}</h4>
        <p className="font-light text-2xl mt-1">Technologies used:</p>
        <div className="flex space-x-2 my-2 items-center justify-center">
          {/* Tech used  */}
          {project.technologies.map((tech, index) => (
            <img
              src={urlFor(tech.image).url()}
              alt={`${tech.title} logo`}
              className="h-10 w-10 rounded-full object-contain"
            />
          ))}
        </div>
        <div className="text-xs md:text-left md:text-lg mt-1 max-w-2xl">
          <p className=" text-center">{project.summary}</p>
        </div>
        <div className="flex flex-1 items-center justify-center space-x-4 mt-2">
          <button className="heroButton py-1 px-2 flex items-center justify-center pr-4">
            <SocialIcon
              url={project.linkToGithub}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />{" "}
            <span className="text-base">Github</span>
          </button>
          <button className="heroButton py-1 px-2 flex items-center justify-center pr-4">
            <SocialIcon
              url={project.linkToBuild}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />{" "}
            <span className="text-base">Demo</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MainProjectCard;

{
  /* <div>
  
  <img
    src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"
    alt="footer-img"
    className="w-52 h-52 object-contain md:w-96 md:h-96"
  />

  <div className="space-y-10 px-0 md:px-10 max-w-6xl">
    <h4 className="text-2xl font-semibold text-center md:text-4xl">Essa</h4>
    <p className="text-xs text-center md:text-left md:text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat
      reprehenderit, perferendis magni sapiente autem, sint maiores voluptatem
      minus vero omnis. Debitis minima nesciunt nisi delectus dolores culpa quod
      quas.
    </p>
  </div>
</div>; */
}
