import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Socials } from "../typings";
import { EnvelopeIcon, LanguageIcon } from "@heroicons/react/24/solid";

type Props = {
  socials: Socials[];
  updateLanguage: (languageChildState: boolean) => void;
  polishLanguage: boolean;
};

const Header = ({
  socials,
  updateLanguage,
  polishLanguage: PlLanguage,
}: Props) => {
  const [polishLanguage, setPolishLanguage] = useState<boolean>(false);

  useEffect(() => {
    updateLanguage(polishLanguage);
  }, [polishLanguage]);

  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20 xl:items-center overflow-x-hidden"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* SOCIAL ICONS | LEFT*/}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      {/* RIGTH */}

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center text-gray-300  justify-center space-x-2"
      >
        {/* CHANGE LANGUAGE */}
        <LanguageIcon
          className="h-6 w-6 cursor-pointer bg-transparent text-gray-500 mr-3"
          onClick={() => setPolishLanguage(!polishLanguage)}
        />
        {/* LINK TO CONTACT FORM */}
        <Link href="#contact" className="flex space-x-2 items-center">
          <EnvelopeIcon
            className="cursor-pointer bg-transparent text-gray-500 
          h-6 w-6"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            {PlLanguage ? "Skontaktuj się" : "Get in touch"}
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
