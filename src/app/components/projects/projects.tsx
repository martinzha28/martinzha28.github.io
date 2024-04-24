import WIP from "../wip";

export default function Projects() {
  return (
    <div id="Projects Section" className="flex flex-col pt-8">
      <div className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark">
        <p className="text-variable-blue"> WorkingOn&nbsp;</p>
        <p className="text-white"> =&nbsp;</p>
        <p className="text-let-blue"> new&nbsp;</p>
        <p className="text-class-yellow"> Project</p>
        <p className="text-brackets-pink"> () </p>
        <p className="text-white"> ; </p>
      </div>

      <WIP />
      
    </div>
  );
}
