"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Image from "next/image";
import ShowOnScroll from "../../animations/showonscroll";
import BulletPoint from "../bulletpoint";

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
    <ShowOnScroll>
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
              <p className="text-class-yellow-light dark:text-class-yellow-dark">
                {" "}
                &nbsp;{company}&nbsp;
              </p>
              <p className="text-brackets-pink-light dark:text-brackets-pink-dark">
                {" "}
                (&nbsp;
              </p>
              <a href={companysite} target="_blank" rel="noopener noreferrer">
                <FaLink color="#70C1FD" />
              </a>
              <p className="text-brackets-pink-light dark:text-brackets-pink-dark">
                {" "}
                &nbsp;)&nbsp;
              </p>
              <p className="text-class-yellow-light dark:text-class-yellow-dark">
                {" "}
                &#123; {/* Left Curly Brace */}
              </p>
            </div>

            <div className="pl-16 pt-1">
              {!expanded && (
                  <BulletPoint point={"Click to Learn More"}/>
              )}
              {expanded && (
                <div className="flex flex-col gap-2">
                  <VarLine name="Position" value={position} />
                  <VarLine name="Location" value={location} />
                  <VarLine name="Duration" value={duration} />
                  <VarLine name="Team" value={team} />

                  <div className="flex flex-row flex-wrap text-import-pink-light dark:text-import-pink-dark gap-x-4">
                    {techstack.map((tech: string, index: number) => {
                      return <p key={"techstack" + index}> {tech} </p>;
                    })}
                  </div>

                    {points.map((point: string, index: number) => {
                      return <BulletPoint key={"points" + index} point={point}/>;
                    })}
                  
                </div>
              )}
            </div>

            <p className="text-class-yellow-light dark:text-class-yellow-dark text-2xl pl-10">
              {" "}
              &#125; {/* Right Curly Brace */}{" "}
            </p>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
}

function VarLine(props: { name: string; value?: string }) {
  return (
    <div className="flex flex-row flex-wrap">
      <p className="text-variable-blue-light dark:text-variable-blue">
        {props.name}
      </p>
      <p className="text-gray-text dark:text-white">&nbsp;=&nbsp;</p>
      <p className="text-string-orange-light dark:text-string-orange">
        {'"' + props.value + '"'}
      </p>
      <p className="text-gray-text dark:text-white">;</p>
    </div>
  );
}
