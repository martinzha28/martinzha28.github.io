import EducationEntry, { EducationProps } from "./educationentry";
import importededucationlist from "../../../data/educationlist.json";

export default function Education() {
  return (
    <div id="Education Section" className="flex flex-col pt-8 gap-8">
      <div className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark">
        <p className="text-import-pink"> await&nbsp;</p>
        <p className="text-class-yellow"> Graduation </p>
        <p className="text-brackets-pink"> () </p>
        <p className="text-white"> . </p>
        <p className="text-class-yellow"> then </p>
        <p className="text-brackets-pink"> ( </p>
        <p className="text-comment-green"> /* Implement */ </p>
        <p className="text-brackets-pink"> ) </p>
        <p className="text-white"> ; </p>
      </div>

      {importededucationlist.educationlist.map((education: EducationProps) => {
        return (
          <EducationEntry
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

const name: String = "Martin";
