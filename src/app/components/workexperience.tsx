import ExperienceEntry from "./experienceentry";

export default function WorkExperience() {
  return (
    <div id="Work Experience Section" className="flex flex-col py-8">
      <div
        id="Work Experience Title"
        className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark"
      >
        <p className="text-[#70C1FD]"> WorkExperience</p>
        <p className="text-[#FFFFFF]"> .</p>
        <p className="text-[#DBCD82]"> push</p>
        <p className="text-[#CF76B1]"> (</p>
        <p className="text-[#70C1FD] underline decoration-wavy decoration-[#E1524F]">
          {" "}
          internship
        </p>
        <p className="text-[#CF76B1]"> ) </p>
        <p className="text-[#FFFFFF]"> ; </p>
      </div>

      <ExperienceEntry
        title="Software Developer"
        subtitle="Marsh McLennan"
        image="../../../mmc-team.jpg"
        location="Toronto, ON"
        duration="Dec 2023 - May 2024"
      />
      <ExperienceEntry
        title="Full-Stack Developer"
        subtitle="WSIB Innovation Labs"
        image="../../../wsib-team.jpg"
        location="Kitchener, ON"
        duration="May 2023 - Aug 2023"
      />
    </div>
  );
}
