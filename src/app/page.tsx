import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/sidebar/navbar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutme";
import WorkExperience from "./components/work/workexperience";
import Tabs from "./components/tabs";
import Projects from "./components/projects/projects";
import WIP from "./components/wip";
import Education from "./components/education/education";
import TechStack from "./components/techstack/techstack";

export default function Page() {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-nowrap ">
        <Sidebar />
        <Navbar />
        
        <div className="h-[calc(100vh-24px)] flex flex-col w-full">
          <Tabs />
          <div className="bg-background-dark grow h-full text-white font-mono flex flex-col overflow-auto py-8 px-6 sm:px-16 gap-4 scroll-smooth">
            <AboutMe />
            <WorkExperience />
            <Projects />
            <Education />
            <TechStack />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


// Todo List:

// Project logos
// horizontal line as divider
// get rid of recursive typing animatyion. also smaller font
// work experience slashs: make sure to act like a bullet point
// bold pink, important to user. also fix the overflow, looks like enter not shift + enter

// Animate on startup
// Click image to expand
// Skeleton and graceful degradation for image: https://www.npmjs.com/package/react-loading-skeleton

// Click on folders in navbar to open close?
// Light Mode https://tailwindcss.com/docs/dark-mode
// Nav/table of contents that scrolls as you go down
