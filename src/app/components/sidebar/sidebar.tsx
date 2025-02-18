import { Dispatch, SetStateAction } from "react";

import { IconContext } from "react-icons";
import { CgProfile, CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import ShowOnScroll from "../../animations/showonscroll";
import HoverTooltip from "../../animations/hover";

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
        <HoverTooltip
          defaultObject={<FaGithub style={external} />}
          hoverObject={<FaGithub style={profile} />} 
          text={"Github"} 
          link={"https://www.github.com/martinzha28"} 
        />

        <HoverTooltip 
          defaultObject={<FaLinkedin style={external} />} 
          hoverObject={<FaLinkedin style={profile} />}
          text={"Linkedin"}
          link={"https://www.linkedin.com/in/martin-zha28/"}
        />

        <HoverTooltip 
          defaultObject={<CgMail style={external} />} 
          hoverObject={<CgMail style={profile} />}
          text={"Contact"}
          link={"mailto:martin.zhao@uwaterloo.ca"}
        />

      </ShowOnScroll>

      {theme == "dark" && (
        <HoverTooltip
          defaultObject={<MdOutlineLightMode style={external} onClick={handleClick} />} 
          hoverObject={<MdOutlineLightMode style={profile} onClick={handleClick} />}
          text={"Change to Light"} />
      )}
      {theme == "light" && (
        <HoverTooltip
          defaultObject={<MdOutlineDarkMode style={external} onClick={handleClick} />}
          hoverObject={<MdOutlineDarkMode style={profile} onClick={handleClick} />}
          text={"Change to Dark"} />
      )}
    </aside>
  );
}

// border-b-2 sm:border-b-0 sm:border-l-2 border-white
