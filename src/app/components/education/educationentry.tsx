import Image from "next/image";

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
    <div id={name} className="flex flex-col sm:flex-row justify-items-end w-full">
      <div className="w-full sm:w-2/12">
        <Image
          className="rounded-full object-contain"
          src={logo}
          alt={name + " logo"}
          width={1000}
          height={100}
        />
      </div>

      <div className="flex flex-col gap-2 sm:px-16 whitespace-pre-line w-full sm:w-10/12">
        <p className="text-3xl text-variable-blue-light dark:text-variable-blue-dark">{name}</p>
        <p className="text-lg">
          {" "}
          <em className="text-string-orange-light dark:text-string-orange-dark">{program}</em> | {duration}{" "}
        </p>
        {points.map((point: string) => {
          return <p> - {point} </p>;
        })}
      </div>
    </div>
  );
}
