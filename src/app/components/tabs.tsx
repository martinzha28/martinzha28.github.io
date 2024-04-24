import NavbarEntry from "./sidebar/navbarentry";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Tabs() {
  return (
    <div
      id="Tabs"
      className="flex flex-row flex-nowrap overflow-auto w-full h-8 bg-navbar-dark"
    >
      <div className="flex flex-row bg-background-dark h-full w-32 items-center p-2">
        <NavbarEntry
          logo={<IoInformationCircleOutline color="#559AB9" size="16px" />}
          alt="About Me Section"
          text="README.md"
        />
      </div>
    </div>
  );
}

/*  Other Tabs: <div className="flex flex-row bg-hover-dark h-full w-32 items-center p-2"></div> */
