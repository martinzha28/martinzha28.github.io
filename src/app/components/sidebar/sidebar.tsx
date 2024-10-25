import { Dispatch, SetStateAction } from "react";

import { IconContext } from "react-icons";
import { CgProfile, CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import ShowOnScroll from "../../animations/showonscroll";

type SideBarProps = {
  theme: string;
  changeTheme: Dispatch<SetStateAction<string>>;
};

export default function Sidebar({ theme, changeTheme }: SideBarProps) {
  const themeexternalColor = theme == "light" ? "#616161" : "#848484";
  const themeProfileColor = theme == "light" ? "#000000" : "#FFFFFF";
  const external = { color: themeexternalColor, fontSize: "30px" };
  const profile = { color: themeProfileColor, fontSize: "30px" };

  const handleClick = () => {
    if (theme === "light") {
      changeTheme("dark");
    } else if (theme === "dark") {
      changeTheme("light");
    }
    // console.log(theme);
  };

  return (
    <aside
      id="Sidebar"
      className="bg-sidebar-light dark:bg-sidebar-dark w-100vh h-16 sm:h-[calc(100vh-24px)] sm:w-16 px-3 sm:py-3 flex flex-row sm:flex-col flex-nowrap items-center fill-navbar-gray dark:fill-navbar-gray-dark justify-between"
    >
      <ShowOnScroll
        timing={150}
        className="gap-5 flex flex-row sm:flex-col flex-nowrap items-center sm:w-full"
      >
        <div className="flex flex-row w-full justify-center">
          <CgProfile style={profile} />
        </div>
        <a
          href="https://www.github.com/martinzha28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={external} />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-zha28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={external} />
        </a>
        <a
          href="mailto:martin.zhao@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CgMail style={external} />
        </a>
      </ShowOnScroll>

      {theme == "dark" && (
        <MdOutlineLightMode style={external} onClick={handleClick} />
      )}
      {theme == "light" && (
        <MdOutlineDarkMode style={external} onClick={handleClick} />
      )}
    </aside>
  );
}

// border-b-2 sm:border-b-0 sm:border-l-2 border-white
