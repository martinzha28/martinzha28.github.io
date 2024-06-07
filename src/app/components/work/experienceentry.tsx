"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Image from "next/image";

export type WorklistProps = {
  image: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  team: string;
  companysite: string;
  points: string[];
  techstack: string[];
};

export default function ExperienceEntry({
  image,
  position,
  company,
  location,
  duration,
  team,
  companysite,
  points,
  techstack,
}: WorklistProps) {
  const [expanded, changeExpand] = useState(false);
  const handleClick = () => {
    changeExpand(!expanded);
  };
  return (
    <div id={company} className="flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 justify-items-end w-full">
        <div className="w-full sm:w-1/3">
          <Image
            className="aspect-square rounded-lg border-4 object-contain border-gray-text dark:border-white"
            src={image}
            alt={company + " picture"}
            loading="lazy"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="flex flex-col sm:px-4 whitespace-pre-line w-full sm:w-2/3 hover:bg-hover-light dark:hover:bg-hover-dark rounded-lg"
          onClick={handleClick}
        >
          <div className="flex flex-row text-2xl items-center flex-wrap">
            {expanded ? <FaChevronDown /> : <FaChevronRight />}
            <p className="text-class-yellow-light dark:text-class-yellow-dark"> &nbsp;{company}&nbsp;</p>
            <p className="text-brackets-pink-light dark:text-brackets-pink-dark"> (&nbsp;</p>
            <a href={companysite} target="_blank" rel="noopener noreferrer">
              <FaLink color="#70C1FD" />
            </a>
            <p className="text-brackets-pink-light dark:text-brackets-pink-dark"> &nbsp;)&nbsp;</p>
            <p className="text-class-yellow-light dark:text-class-yellow-dark">
              {" "}
              &#123; {/* Left Curly Brace */}
            </p>
          </div>

          <div className="pl-16 pt-1">
            {!expanded && (
              <p className="text-comment-green-light dark:text-comment-green-dark"> // Click to Learn More </p>
            )}
            {expanded && (
              <>
                <VarLine name="Position" value={position} />
                <VarLine name="Location" value={location} />
                <VarLine name="Duration" value={duration} />
                <VarLine name="Team" value={team} />
                <br />

                <div className="flex flex-row flex-wrap text-import-pink-light dark:text-import-pink-dark gap-x-4">
                  {techstack.map((tech: string) => {
                    return <p> {tech} </p>;
                  })}
                </div>

                <br />

                <div className="flex flex-col pt-2 text-comment-green-light dark:text-comment-green-dark">
                  {points.map((point: string) => {
                    return <p> // {point} </p>;
                  })}
                </div>
              </>
            )}
          </div>

          <p className="text-class-yellow-light dark:text-class-yellow-dark text-2xl pl-10">
            {" "}
            &#125; {/* Right Curly Brace */}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function VarLine(props: { name: string; value?: string }) {
  return (
    <div className="flex flex-row flex-wrap">
      <p className="text-variable-blue-light dark:text-variable-blue">{props.name}</p>
      <p className="text-gray-text dark:text-white">&nbsp;=&nbsp;</p>
      <p className="text-string-orange-light dark:text-string-orange">{'"' + props.value + '"'}</p>
      <p className="text-gray-text dark:text-white">;</p>
    </div>
  );
}
