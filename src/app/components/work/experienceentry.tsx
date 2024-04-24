"use client";

import { useState } from "react";

export type WorklistProps = {
  image: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
  techstack: string[];
};

export default function ExperienceEntry({
  image,
  position,
  company,
  location,
  duration,
  points,
  techstack,
}: WorklistProps) {
  const [expanded, changeExpand] = useState(false);
  const handleClick = () => {
    changeExpand(!expanded);
  };

  return (
    <div id={company} className="flex flex-col">
      <div className="flex flex-row gap-4 justify-items-end w-full">
        <div className="w-1/3">
          <img
            className="aspect-square rounded-lg border-4 object-contain"
            src={image}
            alt={company + " picture"}
          />
        </div>
        <div
          className="flex flex-col gap-5 px-4 whitespace-pre-line text-2xl w-2/3 hover:bg-hover-dark rounded-lg"
          onClick={handleClick}
        >
          <p className="text-class-yellow">&#123;{/* Left Curly Brace */}</p>
          <JsonLine name="Position" value={position} />
          <JsonLine name="Company" value={company} />
          <JsonLine name="Location" value={location} />
          <JsonLine name="Duration" value={duration} lastLine={true} />

          <p className="text-class-yellow">&#125;{/* Right Curly Brace */}</p>
        </div>
      </div>

      {expanded && (
        <div className="flex flex-row gap-2 pt-2">
          {techstack.map((technology: string) => {
            return <p> {technology} </p>;
          })}
        </div>
      )}
      {expanded && (
        <div className="flex flex-col pt-2">
          {points.map((point: string) => {
            return <p> - {point} </p>;
          })}
        </div>
      )}
    </div>
  );
}

function JsonLine(props: { name: string; value?: string; lastLine?: boolean }) {
  const lastLine = props.lastLine ?? false;
  return (
    <div className="flex flex-row flex-wrap pl-8">
      <p className="text-variable-blue">{props.name}</p>
      <p className="text-white">&nbsp;:&nbsp;</p>
      <p className="text-string-orange">{props.value}</p>
      {!lastLine && <p className="text-white"> , </p>}
    </div>
  );
}

/* <div>
        <span className="font-bold text-2xl">What I Worked On</span>
      </div>
      <div>
        <span className="font-bold text-2xl">Tech Stack Used</span>
      </div> */
