import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>RiP3rQ Portfolio</title>
        <meta name="description" content="Portfolio uzytkownika RiP3rQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* ABOUT */}
      {/* PATH */}
      {/* SKILLS */}
      {/* PROJECTS */}
      {/* CONTACT ME */}
    </div>
  );
}
