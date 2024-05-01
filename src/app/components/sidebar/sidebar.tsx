import { IconContext } from "react-icons";
import { CgProfile, CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Sidebar() {
  const external = { color: "#848484", fontSize: "30px" };
  const profile = { color: "#FFFFFF", fontSize: "30px" };
  return (
    <aside id="Sidebar" className="bg-sidebar-dark w-100vh h-16 sm:h-[calc(100vh-24px)] sm:w-16 px-3 sm:py-3 flex flex-row sm:flex-col flex-nowrap items-center fill-navbar-gray justify-between">
      <div className="gap-5 flex flex-row sm:flex-col flex-nowrap items-center sm:w-full">
        <div className="flex flex-row w-full justify-center">
          <CgProfile style={profile} />
        </div>
        <a href="https://www.github.com/martinzha28" aria-label="Github">
          <FaGithub style={external} />
        </a>
        <a href="https://www.linkedin.com/in/martin-zha28/" aria-label="Linkedin">
          <FaLinkedin style={external} />
        </a>
        <a href="mailto:martin.zhao@uwaterloo.ca" aria-label="Email">
          <CgMail style={external} />
        </a>
      </div>

      <MdOutlineDarkMode style={external} />
    </aside>
  );
}

// border-b-2 sm:border-b-0 sm:border-l-2 border-white
