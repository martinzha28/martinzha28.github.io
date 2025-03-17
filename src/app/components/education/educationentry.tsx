import Image from "next/image";
import ShowOnScroll from "../../animations/showonscroll";
import BulletPoint from "../bulletpoint";

export type EducationProps = {
  logo: string;
  name: string;
  program: string;
  duration: string;
  points: string[];
};

export default function EducationEntry({
  logo,
  name,
  program,
  duration,
  points,
}: EducationProps) {
  return (
    <ShowOnScroll>
      <div
        id={name}
        className="flex flex-col sm:flex-row justify-items-end w-full"
      >
        <div className="w-full sm:w-2/12">
          <Image
            className="rounded-full object-contain"
            src={logo}
            alt={name + " logo"}
            width={1000}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-2 sm:px-16 whitespace-pre-line w-full sm:w-10/12 text-gray-text dark:text-white">
          <p className="text-3xl text-variable-blue-light dark:text-variable-blue-dark">
            {name}
          </p>
          <div className="text-lg flex flex-row gap-4 text-class-yellow-light dark:text-class-yellow-dark">
            {" "}
            <p className="text-string-orange-light dark:text-string-orange-dark">
              {program}
            </p>
            <p className="">
              {duration}
            </p>
          </div>
          {points.map((point: string, index: number) => {
            return <BulletPoint key={"point" + index}  point={point} />;
          })}
        </div>
      </div>
    </ShowOnScroll>
  );
}
