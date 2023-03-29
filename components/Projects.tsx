import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Projects } from "../typings";
import { groq } from "next-sanity";
import { SanityClient } from "../sanity";

type Props = {
  projects: Projects[];
  polishLanguage: boolean;
};

const categories = ["MAIN", "MOBILE", "REACT", "MERN", "BLOCKCHAIN", "UI/UX"];
const categoriesPL = [
  "GŁÓWNE",
  "MOBILNE",
  "REACT",
  "MERN",
  "BLOCKCHAIN",
  "UI/UX",
];

const Projects = ({ projects, polishLanguage }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string>();
  const [sortedProjects, setSortedProjects] = useState(projects);
  const [categoriesState, setCategoriesState] = useState<string[]>(categories);
  const [activeProjects, setActiveProjects] = useState(projects);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    category: string
  ) => {
    e.preventDefault();
    setActiveCategory(e.currentTarget.innerText);
  };

  // POBIERANIE DANYCH PO ZMIANIE JĘZYKA
  const fetchData = async () => {
    if (polishLanguage) {
      const projects: Projects[] = await SanityClient.fetch(
        groq`*[_type == "projectsPL"] {
          ...,
          technologies[] ->
        }`
      );
      setActiveProjects(projects);
      setSortedProjects(projects);
    }
    if (!polishLanguage) {
      const projects: Projects[] = await SanityClient.fetch(
        groq`*[_type == "projects"] {
          ...,
          technologies[] ->
        }`
      );
      setActiveProjects(projects);
      setSortedProjects(projects);
    }
  };

  useEffect(() => {
    setActiveCategory("");
    setCategoriesState(polishLanguage ? categoriesPL : categories);
    fetchData();
  }, [polishLanguage]);

  // SORTOWANIE PROJEKTÓW PO KATEGORII
  useEffect(() => {
    sortData();
  }, [activeCategory]);

  const sortData = () => {
    const projects = activeProjects.filter(
      (project) => project.category === activeCategory
    );
    setSortedProjects(projects);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        {polishLanguage ? `Projekty` : "Projects"}
      </h3>

      <div className="absolute top-28 md:flex md:flex-row md:items-center md:justify-center md:space-x-8 grid grid-cols-3 z-30">
        {categoriesState.map((category, index) => (
          <button
            className={`projectsButton ${
              activeCategory === category &&
              "text-[#F7AB0A]/40 border-[#F7AB0A]/40"
            }`}
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
        {sortedProjects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Background */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
