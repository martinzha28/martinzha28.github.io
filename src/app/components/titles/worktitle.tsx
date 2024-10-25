import ShowOnScroll from "../../animations/showonscroll";

export default function WorkTitle() {
  return (
    <ShowOnScroll
      id="Work Experience Title"
      className="flex flex-row flex-wrap text-3xl pb-2 w-full border-b-2 b-navbar-dark"
    >
      <p className="text-variable-blue-light dark:text-variable-blue-dark"> WorkExperience</p>
      <p className="text-gray-text dark:text-white"> .</p>
      <p className="text-class-yellow-light dark:text-class-yellow-dark"> push</p>
      <p className="text-brackets-pink-light dark:text-brackets-pink-dark"> ( </p>
      <p className="text-variable-blue-light dark:text-variable-blue-dark underline decoration-wavy decoration-error-red-light dark:decoration-error-red-dark">
        internship
      </p>
      <p className="text-brackets-pink-light dark:text-brackets-pink-dark"> ) </p>
      <p className="text-gray-text dark:text-white"> ; </p>
    </ShowOnScroll>
  );
}
