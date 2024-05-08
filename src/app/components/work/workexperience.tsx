import ExperienceEntry, { WorklistProps } from "./experienceentry";
import WorkTitle from "../titles/worktitle";
import importedworklist from "../../../data/worklist.json";

export default function WorkExperience() {
  return (
    <div id="Work Experience Section" className="flex flex-col pt-8 gap-8">
      <WorkTitle />

      {importedworklist.worklist.map((work: WorklistProps) => {
        return (
          <ExperienceEntry
            position={work.position}
            company={work.company}
            image={work.image}
            location={work.location}
            duration={work.duration}
            team={work.team}
            companysite={work.companysite}
            points={work.points}
            techstack={work.techstack}
          />
        );
      })}
    </div>
  );
}
