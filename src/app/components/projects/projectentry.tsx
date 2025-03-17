import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import ShowOnScroll from "../../animations/showonscroll";

export type ProjectlistProps = {
  image: string;
  name: string;
  subtitle: string;
  techstack: string[];
  blurb: string;
  link: string;
  github: string;
};

export default function ProjectEntry({
  image,
  name,
  subtitle,
  techstack,
  blurb,
  link,
  github,
}: ProjectlistProps) {
  return (
    <ShowOnScroll>
      <div id={name} className="flex flex-col p-2 gap-2 text-comment-green-light dark:text-comment-green-dark ">
        <p className="text-3xl text-string-orange-light dark:text-string-orange-dark ">
          {name}
        </p>
        <div className="flex flex-row items-center gap-4">
          <p className="text-lg text-class-yellow-light dark:text-class-yellow-dark">
            {" "}
            {subtitle}{" "}
          </p>
          {github && (
            <a href={github} aria-label={name + " github"} target="_blank" rel="noopener noreferrer">
              <FaGithub color="#70C1FD" />
            </a>
          )}
          {link && (
            <a href={link} aria-label={name + " link"} target="_blank" rel="noopener noreferrer">
              <FaLink color="#70C1FD" />
            </a>
          )}
        </div>

        <Image
          className="aspect-video rounded-lg border-4 object-cover border-gray-text dark:border-white"
          src={image}
          alt={name}
          width={1600}
          height={900}
        />
        <div className="flex flex-row text-import-pink-light dark:text-import-pink-dark gap-x-4 flex-wrap">
          {techstack.map((tech: string, index: number) => {
            return <p key={"techstack" + index}> {tech} </p>;
          })}
        </div>
        {blurb}
      </div>
    </ShowOnScroll>
  );
}
