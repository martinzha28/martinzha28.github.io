import TechStackTitle from "../titles/techstacktitle";
import importedworklist from "../../../data/techstack.json";

export default function TechStack() {
  return (
    <div id="Tech Stack Section" className="flex flex-col pt-8 gap-8">
      <TechStackTitle />

      <div className="flex flex-col gap-2">
        <p className="text-2xl text-comment-green"> Languages: </p>
        <div className="flex flex-row gap-2 flex-wrap">
          {importedworklist.languages.map((badge) => {
            return <img className="" src={badge.link} alt={badge.alt} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-2xl text-comment-green"> Libraries and Frameworks: </p>
        <div className="flex flex-row gap-2 flex-wrap">
          {importedworklist.frameworks.map((badge) => {
            return <img className="" src={badge.link} alt={badge.alt} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-2xl text-comment-green"> Development Tools: </p>
        <div className="flex flex-row gap-2 flex-wrap">
          {importedworklist.devtools.map((badge) => {
            return <img className="" src={badge.link} alt={badge.alt} />;
          })}
        </div>
      </div>


    </div>
  );
}
