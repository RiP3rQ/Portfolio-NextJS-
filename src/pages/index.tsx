import Head from "next/head";
import Image from "next/image";
import About from "../../components/About";
import AllProjects from "../../components/AllProjects";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Path from "../../components/Path";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      <Head>
        <title>RiP3rQ Portfolio</title>
        <meta name="description" content="Portfolio uzytkownika RiP3rQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* PATH */}
      <section id="path" className="snap-center">
        <Path />
      </section>
      {/* SKILLS */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* ALL PROJECTS */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="all_projects" className="snap-center">
        <AllProjects />
      </section>
      {/* CONTACT ME */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      {/* change text for own */}
      {/* change img for next.image */}
      {/* form validation https://www.youtube.com/watch?v=7j6xWy4P_LA */}
    </div>
  );
}
