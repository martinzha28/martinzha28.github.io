import NavbarEntry from "./navbarentry";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Tabs() {
  return (
    <div id="Tabs" className="flex flex-row flex-nowrap overflow-auto w-full h-8 bg-navbar-dark">
      <div className="flex flex-row bg-background-dark h-full w-32 content-center justify-content p-2">
        <NavbarEntry
          image={<IoInformationCircleOutline color="#559AB9" size="16px" />}
          alt="Information Symbol"
          text="README.md"
        />
      </div>
    </div>
  );
}
