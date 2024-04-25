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
    <div id={name} className="flex flex-row justify-items-end w-full">
      <div className="w-2/12">
        <img
          className="rounded-full object-contain"
          src={logo}
          alt={name + " logo"}
        />
      </div>

      <div className="flex flex-col gap-2 px-16 whitespace-pre-line w-10/12">
        <p className="text-3xl text-variable-blue">{name}</p>
        <p className="text-lg">
          {" "}
          <em className="text-string-orange">{program}</em> | {duration}{" "}
        </p>
        {points.map((point: string) => {
          return <p> - {point} </p>;
        })}
      </div>
    </div>
  );
}