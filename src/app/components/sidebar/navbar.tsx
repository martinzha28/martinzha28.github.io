"use client";
import Link from "next/link";

import { FaChevronDown, FaChevronRight, FaGithub } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import importededucationlist from "../../../data/educationlist.json";
import importedworklist from "../../../data/worklist.json";
import importedprojectlist from "../../../data/projectlist.json";

import NavbarEntry from "./navbarentry";

export default function Navbar() {
  return (
    <aside
      id="Navagation Bar"
      className="invisible sm:visible bg-navbar-light dark:bg-navbar-dark h-0 sm:h-[calc(100vh-24px)] w-3/12"
    >
      <div className="text-navbar-gray-light dark:text-navbar-gray-dark font-mono pl-3 pt-2">NAVAGATION</div>
      <div className=" font-bold pl-1 pt-2">
        <Folder
          image={<FaChevronDown />}
          text="MartinZhao.ca"
          section="About Me Section"
        />
      </div>

      <div className="px-6 font-thin">
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
        <div
          id="Work Experience Dropdown"
          className="border-l-2 border-navbar-gray-light dark:border-navbar-gray-dark pl-2"
        >
          {importedworklist.worklist.map((work) => {
            return (
              <NavbarEntry
                logo={work.logo}
                alt={work.company}
                text={work.filename}
              />
            );
          })}
        </div>

        <Folder
          image={<FaChevronDown />}
          text="projects"
          section="Projects Section"
        />

        <div
          id="Project Dropdown"
          className="border-l-2 border-navbar-gray-light dark:border-navbar-gray-dark pl-2"
        >
          <NavbarEntry
            logo={<FaGithub />}
            alt={importedprojectlist.featured.name}
            text={importedprojectlist.featured.filename}
          />
          {importedprojectlist.projectlist.map((project) => {
            return (
              <NavbarEntry
                logo={<FaGithub />}
                alt={project.name}
                text={project.filename}
              />
            );
          })}
        </div>

        <Folder
          image={<FaChevronDown />}
          text="education"
          section="Education Section"
        />
        <div
          id="Education Dropdown"
          className="border-l-2 border-navbar-gray-light dark:border-navbar-gray-dark pl-2"
        >
          {importededucationlist.educationlist.map((education) => {
            return (
              <NavbarEntry
                logo={education.logo}
                alt={education.name}
                text={education.filename}
              />
            );
          })}
        </div>

        <Folder
          image={<FaChevronRight />}
          text="tech-stack"
          section="Tech Stack Section"
        />
        <Folder image={<FaChevronRight />} text="hobbies" section="" />
      </div>
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
