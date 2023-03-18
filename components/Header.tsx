import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20 xl:items-center"
    >
      <div className="flex flex-row items-center">
        {/* SOCIAL ICONS | LEFT*/}
        <SocialIcon
          url="https://github.com/rip3rq"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rafa%C5%82pompa2000/"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      {/* RIGTH */}
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </div>
    </header>
  );
};

export default Header;
