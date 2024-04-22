import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutme";
import WorkExperience from "./components/workexperience";
import Tabs from "./components/tabs";

export default function Page() {
  return (
    <>
      <div className="flex flex-row flex-nowrap">
        <Sidebar />
        <Navbar />
        <div className="h-[calc(100vh-24px)] flex flex-col">
          <Tabs />
          <div className="bg-background-dark grow h-full text-white font-mono flex flex-col overflow-auto p-16 gap-20">
            <AboutMe />
            <WorkExperience />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// Light Mode
// Mobile
// Line count
// Hover states
