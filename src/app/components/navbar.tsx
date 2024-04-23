import { FaChevronDown } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

import NavbarEntry from "./navbarentry";

export default function Navbar() {
  return (
    <aside id="Navagation Bar" className="bg-navbar-dark h-[calc(100vh-24px)] w-4/12">
      <div className="text-navbar-gray font-mono pl-3 pt-2">NAVAGATION</div>
      <div className=" font-bold pl-1 pt-2">
        <Folder image={<FaChevronDown />} text="MartinZhao.tech" />
      </div>
      <div className=" pl-6 font-thin">
        <NavbarEntry
          image={<IoInformationCircleOutline color="#559AB9" size="16px"/>}
          alt="Information Symbol"
          text="README.md"
        />
        <Folder image={<FaChevronDown />} text="past-experiences" />
        <div className="border-l-2 border-navbar-gray pl-2">
          <NavbarEntry
            image="../../../marsh-logo.jpg"
            alt="Marsh McLennan Logo"
            text="MarshMcLennan.mmc"
          />
          <NavbarEntry
            image="../../../innovation-lab-logo.jpg"
            alt="WSIB Innovation Labs Logo"
            text="InnovationLabs.wsib"
          />
          <NavbarEntry
            image="../../../genesys-logo.jpg"
            alt="Genesys Cloud Services Logo"
            text="Genesys.cloud"
          />
        </div>
        <Folder image={<FaChevronDown />} text="projects" />
        <Folder image={<FaChevronDown />} text="tech-stack" />
        <Folder image={<FaChevronDown />} text="education" />
        <Folder image={<FaChevronDown />} text="hobbies" />
      </div>
    </aside>
  );
}

function Folder(props: { image: JSX.Element; text: string }) {
  return (
    <div className="flex flex-row flex-nowrap text-white font-mono items-center gap-2">
      {props.image}
      {props.text}
    </div>
  );
}
