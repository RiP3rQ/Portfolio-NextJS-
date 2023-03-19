import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { urlFor } from "../sanity";
import { Path } from "../typings";

type Props = {
  path: Path;
};

const PathCard = ({ path }: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "rgb(148 163 184 / 0.1)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(148 163 184 / 0.1)" }}
      date={`${path?.startingDate} - ${
        path?.endingDate == "2023-03-19" ? "Present" : path?.endingDate
      }`}
      iconStyle={{ background: "rgb(148 163 184 / 0.1)" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={urlFor(path?.image).url()}
            alt="framework_logo"
            className="w-full h-full rounded-full object-contain z-50 bg-slate-600"
          />
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-[20px] font-bold">{path?.name}</h3>
        <p
          className="text-secondary text-[12px] font-semibold"
          style={{ margin: 0 }}
        >
          {path?.description}
        </p>
        <div className="flex flex-row space-x-1">
          {path?.technologies?.map((tech: Path) => (
            <img
              src={urlFor(tech.image).url()}
              alt="tech_img"
              className="h-8 w-8 object-contain rounded-full"
            />
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default PathCard;
