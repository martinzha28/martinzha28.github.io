import EducationEntry, { EducationProps } from "./educationentry";
import EducationTitle from "../titles/educationtitle";
import importededucationlist from "../../../data/educationlist.json";

export default function Education() {
  return (
    <div id="Education Section" className="flex flex-col pt-8 gap-8">
      <EducationTitle />

      {importededucationlist.educationlist.map((education: EducationProps) => {
        return (
          <EducationEntry
            key={education.name}
            logo={education.logo}
            name={education.name}
            program={education.program}
            duration={education.duration}
            points={education.points}
          />
        );
      })}
    </div>
  );
}
