import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";

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
    <div id={name} className="flex flex-col p-2 gap-2">
        <p className="text-3xl text-string-orange ">{name}</p> 
      <div className="flex flex-row items-center gap-4">
        
        <p className="text-lg text-variable-blue"> {subtitle} </p>
        {github && (
          <a href={github}>
            <FaGithub color="#729757"/>
          </a>
        )}
        {link && (
          <a href={link}>
            <FaLink color="#729757"/>
          </a>
        )}
      </div>

      <Image
        className="aspect-video rounded-lg border-4 object-cover border-white"
        src={image}
        alt={name}
        width={1600}
        height={900}
      />
      <div className="flex flex-row text-import-pink gap-4 flex-wrap">
        {techstack.map((tech: string) => {
          return <p> {tech} </p>;
        })}
      </div>
      {blurb}
    </div>
  );
}
