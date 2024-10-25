"use client";
import Link from "next/link";

import { FaChevronDown, FaChevronRight, FaGithub } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import importededucationlist from "../../../data/educationlist.json";
import importedworklist from "../../../data/worklist.json";
import importedprojectlist from "../../../data/projectlist.json";

import NavbarEntry from "./navbarentry";
import ShowOnScroll from "../../animations/showonscroll";

export default function Navbar() {
  return (
    <aside
      id="Navagation Bar"
      className="invisible sm:visible bg-navbar-light dark:bg-navbar-dark h-0 sm:h-[calc(100vh-24px)] w-3/12"
    >
      <div className="text-navbar-gray-light dark:text-navbar-gray-dark font-mono pl-3 pt-2">
        NAVAGATION
      </div>
      <div className=" font-bold pl-1 pt-2">
        <Folder
          image={<FaChevronDown />}
          text="MartinZhao.ca"
          section="About Me Section"
        />
      </div>

      <ShowOnScroll className="px-6 font-thin" delay={2000} timing={500}>
        <NavbarEntry
          logo={<IoInformationCircleOutline color="#559AB9" size="16px" />}
          alt="About Me Section"
          text="README.md"
        />
        <Folder
          image={<FaChevronDown />}
          text="past-experiences"
          section="Work Experience Section"
        />
        <ShowOnScroll
          id="Work Experience Dropdown"
          className="border-l-2 border-navbar-gray-light dark:border-navbar-gray-dark pl-2"
          delay={2500}
          timing={300}
        >
          {importedworklist.worklist.map((work) => {
            return (
              <NavbarEntry
                key={work.company + work.position}
                logo={work.logo}
                alt={work.company}
                text={work.filename}
              />
            );
          })}
        </ShowOnScroll>

        <Folder
          image={<FaChevronDown />}
          text="projects"
          section="Projects Section"
        />

        <ShowOnScroll
          id="Project Dropdown"
          className="border-l-2 border-navbar-gray-light dark:border-navbar-gray-dark pl-2"
          delay={3000}
          timing={300}
        >
          <NavbarEntry
            logo={importedprojectlist.featured.logo != "" ? importedprojectlist.featured.logo : <FaGithub />}
            alt={importedprojectlist.featured.name}
            text={importedprojectlist.featured.filename}
          />
          {importedprojectlist.projectlist.map((project) => {
            return (
              <NavbarEntry
                key={project.name}
                logo={project.logo != "" ? project.logo : <FaGithub />}
                alt={project.name}
                text={project.filename}
              />
            );
          })}
        </ShowOnScroll>

        <Folder
          image={<FaChevronDown />}
          text="education"
          section="Education Section"
        />
        <ShowOnScroll
          id="Education Dropdown"
          className="border-l-2 border-navbar-gray-light dark:border-navbar-gray-dark pl-2"
          delay={3500}
          timing={500}
        >
          {importededucationlist.educationlist.map((education) => {
            return (
              <NavbarEntry
                key={education.name}
                logo={education.logo}
                alt={education.name}
                text={education.filename}
              />
            );
          })}
        </ShowOnScroll>

        <Folder
          image={<FaChevronRight />}
          text="tech-stack"
          section="Tech Stack Section"
        />
        <Folder image={<FaChevronRight />} text="hobbies" section="" />
      </ShowOnScroll>
    </aside>
  );
}

function Folder(props: { image: JSX.Element; text: string; section: string }) {
  return (
    <Link href={"#" + props.section}>
      <div className="flex flex-row flex-nowrap text-gray-text dark:text-white font-mono items-center gap-2  hover:bg-hover-light dark:hover:bg-hover-dark">
        {props.image}
        {props.text}
      </div>
    </Link>
  );
}
