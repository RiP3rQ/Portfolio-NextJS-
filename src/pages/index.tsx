import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Path from "../../components/Path";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import {
  PageInfo,
  Paths,
  Projects as Projects2,
  Skills as Skill,
  Socials,
} from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchPageInfoPL } from "../../utils/fetchPageInfoPL";
import { fetchPaths } from "../../utils/fetchPaths";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo[];
  skills: Skill[];
  socials: Socials[];
  paths: Paths[];
  projects: Projects2[];
  language: boolean;
};

export default function Home({
  pageInfo,
  socials,
  skills,
  paths,
  projects,
  language,
}: Props) {
  // initial state (socials not needed || in both langs the same )
  const [pageInfoState, setPageInfoState] = useState(pageInfo);
  const [skillsState, setSkillsState] = useState(skills);
  const [projectsState, setProjectsState] = useState(projects);
  const [pathsState, setPathsState] = useState(paths);

  // language state
  const [polishLanguage, setPolishLanguage] = useState<boolean>(false);

  const updateLanguage = (languageChildState: boolean) => {
    setPolishLanguage(languageChildState);
  };

  const refetchDataPL = async () => {
    const pageInfoPL: PageInfo[] = await fetchPageInfoPL();
    setPageInfoState(pageInfoPL);
    setPathsState(
      pathsState.map((path) => ({
        ...path,
        description: "Dodatkowe poznane technologie przy tworzeniu projektów",
      }))
    );
    setSkillsState(
      skillsState.map((skill) => ({
        ...skill,
        progress: `${skill.progress == "Advanced" ? "Dobry" : "Przeciętny"}`,
      }))
    );
  };

  const refetchDataEN = async () => {
    const pageInfo: PageInfo[] = await fetchPageInfo();
    setPageInfoState(pageInfo);
    setPathsState(
      paths.map((path) => ({
        ...path,
        description: "Additional learned technologies when creating projects",
      }))
    );
    if (skillsState[0].progress == "Dobry") {
      setSkillsState(
        skillsState.map((skill) => ({
          ...skill,
          progress: `${skill.progress == "Dobry" ? "Advanced" : "Average"}`,
        }))
      );
    }
  };

  useEffect(() => {
    if (polishLanguage === true) {
      refetchDataPL();
    }
    if (polishLanguage === false) {
      refetchDataEN();
    }
  }, [polishLanguage]);

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll 
    z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>RiP3rQ</title>
        <meta name="description" content="Portfolio uzytkownika RiP3rQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* HEADER */}
      <Header
        socials={socials}
        updateLanguage={updateLanguage}
        polishLanguage={polishLanguage}
      />
      {/* HERO */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfoState} polishLanguage={polishLanguage} />
      </section>
      {/* ABOUT */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfoState} polishLanguage={polishLanguage} />
      </section>
      {/* PATH */}
      <section id="path" className="snap-center">
        <Path paths={pathsState} polishLanguage={polishLanguage} />
      </section>
      {/* SKILLS */}
      <section id="skills" className="snap-center">
        <Skills skills={skillsState} polishLanguage={polishLanguage} />
      </section>
      {/* ALL PROJECTS */}
      <section id="projects" className="snap-center">
        <Projects projects={projectsState} polishLanguage={polishLanguage} />
      </section>
      {/* CONTACT ME */}
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfoState} polishLanguage={polishLanguage} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"
              alt="footer-img"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const socials: Socials[] = await fetchSocials();
  const paths: Paths[] = await fetchPaths();
  const projects: Projects2[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      skills,
      socials,
      paths,
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 second
    // revalidate: 60,
  };
};
