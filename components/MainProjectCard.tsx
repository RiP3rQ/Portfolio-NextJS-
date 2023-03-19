import React from "react";
import { motion } from "framer-motion";

type Props = {};

const MainProjectCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    "
    >
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-32 h-32 rounded-full object-cover xl:h-[200px] xl:w-[200px] object-center"
        src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"
        alt="Main Project Img"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-bold">NFT MarketPlace</h4>
        <p className="font-light text-2xl mt-1">using Thirdweb</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used  */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"
            alt="Tech used"
            className="h-10 w-10 rounded-full object-cover"
          />
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
