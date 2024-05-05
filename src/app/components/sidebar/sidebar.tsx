import { Dispatch, SetStateAction } from "react";

import { IconContext } from "react-icons";
import { CgProfile, CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type SideBarProps = {
  theme: string;
  changeTheme: Dispatch<SetStateAction<string>>;
};

export default function Sidebar({theme, changeTheme} : SideBarProps) {
  const themeexternalColor = theme == "light" ? "#616161" : "#848484";
  const themeProfileColor = theme == "light" ? "#000000" : "#FFFFFF";
  const external = { color: themeexternalColor, fontSize: "30px" };
  const profile = { color: themeProfileColor, fontSize: "30px" };

  const handleClick = () => {
    if (theme==="light") {
      changeTheme("dark");
    } else if (theme==="dark") {
      changeTheme("light");
    }
    // console.log(theme);
  };
  return (
    <aside id="Sidebar" className="bg-sidebar-light dark:bg-sidebar-dark w-100vh h-16 sm:h-[calc(100vh-24px)] sm:w-16 px-3 sm:py-3 flex flex-row sm:flex-col flex-nowrap items-center fill-navbar-light-gray dark:fill-navbar-gray justify-between">
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

      {theme == "dark" && <MdOutlineLightMode style={external} onClick={handleClick}/>}
      {theme == "light" && <MdOutlineDarkMode style={external} onClick={handleClick}/>}
    </aside>
  );
}

// border-b-2 sm:border-b-0 sm:border-l-2 border-white
