import ExperienceEntry, { WorklistProps } from "./experienceentry";
import importedworklist from "../../../data/worklist.json";

export default function WorkExperience() {
  return (
    <div id="Work Experience Section" className="flex flex-col pt-8 gap-8">
      <div
        id="Work Experience Title"
        className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark"
      >
        <p className="text-variable-blue"> WorkExperience</p>
        <p className="text-gray-text dark:text-white"> .</p>
        <p className="text-class-yellow"> push</p>
        <p className="text-brackets-pink"> ( </p>
        <p className="text-variable-blue underline decoration-wavy decoration-error-red">
          internship
        </p>
        <p className="text-brackets-pink"> ) </p>
        <p className="text-gray-text dark:text-white"> ; </p>
      </div>

      {importedworklist.worklist.map((work : WorklistProps) => {
        return (
          <ExperienceEntry
            position = {work.position}
            company = {work.company}
            image = {work.image}
            location = {work.location}
            duration = {work.duration}
            team = {work.team}
            companysite = {work.companysite}
            points = {work.points}
            techstack = {work.techstack}
          />
        );
      })}
    </div>
  );
}
