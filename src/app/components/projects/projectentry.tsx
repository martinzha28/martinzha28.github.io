import { FaGithub, FaLink } from "react-icons/fa";

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

      <img
        className="aspect-video rounded-lg border-4 object-cover"
        src={image}
        alt={name}
      />
      <div className="flex flex-row text-import-pink gap-4">
        {techstack.map((tech: string) => {
          return <p> {tech} </p>;
        })}
      </div>
      {blurb}
    </div>
  );
}
