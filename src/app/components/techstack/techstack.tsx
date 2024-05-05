import importedworklist from "../../../data/techstack.json";

export default function TechStack() {
  return (
    <div id="Tech Stack Section" className="flex flex-col pt-8 gap-8">
      <div className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark">
        <p className="text-import-pink"> import&nbsp;</p>
        <p className="text-variable-blue"> TechStack&nbsp;</p>
        <p className="text-import-pink"> from&nbsp;</p>
        <p className="text-string-orange"> "./brain/important" </p>
        <p className="text-gray-text dark:text-white"> ; </p>
      </div>

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
