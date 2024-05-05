import WIP from "../wip";
import importedprojectlist from "../../../data/projectlist.json";
import ProjectEntry, { ProjectlistProps } from "./projectentry";

export default function Projects() {
  const featuredproject = importedprojectlist.featured;
  return (
    <div id="Projects Section" className="flex flex-col pt-8 gap-8">
      <div className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark">
        <p className="text-variable-blue"> WorkingOn&nbsp;</p>
        <p className="text-gray-text dark:text-white"> =&nbsp;</p>
        <p className="text-let-blue"> new&nbsp;</p>
        <p className="text-class-yellow"> Project</p>
        <p className="text-brackets-pink"> () </p>
        <p className="text-gray-text dark:text-white"> ; </p>
      </div>

      <ProjectEntry
          image={featuredproject.image}
          name={featuredproject.name}
          subtitle={featuredproject.subtitle}
          techstack={featuredproject.techstack}
          blurb={featuredproject.blurb}
          link={featuredproject.link}
          github={featuredproject.github}
          />
      <div className="grid sm:grid-cols-1 sm:grid-cols-2 gap-8">
      {importedprojectlist.projectlist.map((project : ProjectlistProps) => {
        return (
          <ProjectEntry
          image={project.image}
          name={project.name}
          subtitle={project.subtitle}
          techstack={project.techstack}
          blurb={project.blurb}
          link={project.link}
          github={project.github}
          />
        );
      })}
      </div>
    </div>
  );
}
