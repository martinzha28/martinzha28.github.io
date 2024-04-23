import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutme";
import WorkExperience from "./components/workexperience";
import Tabs from "./components/tabs";
import Projects from "./components/projects";

export default function Page() {
  return (
    <>
      <div className="flex flex-row flex-nowrap">
        <Sidebar />
        <Navbar />
        <div className="h-[calc(100vh-24px)] flex flex-col">
          <Tabs />
          <div className="bg-background-dark grow h-full text-white font-mono flex flex-col overflow-auto py-8 px-16 gap-4">
            <AboutMe />
            <WorkExperience />
            <Projects />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


// Dictionary or Array.filter
// fetch waterloo.graduation then leave
// while (!hobbies.length)


// Ideas for improvement:

// Skeleton and graceful degradation for image 
// Light Mode
// Mobile
// Line count
// Hover states
