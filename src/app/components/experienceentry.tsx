type ExperienceEntryProps = {
  image: string;
  title: string;
  subtitle: string;
  location?: string;
  duration?: string;
  workedon?: string;
  techstack?: string;
};

export default function ExperienceEntry({
  image,
  title,
  subtitle,
  location,
  duration,
  workedon,
  techstack,
}: ExperienceEntryProps) {
  return (
    <div id={subtitle} className="flex flex-col p-8">
      <div className="flex flex-row gap-10">
        <img
          className="object-scale-down max-h-full m-auto h-96 rounded-lg border-4"
          src={image}
          alt={subtitle}
        />
        <div className="flex flex-col gap-5 whitespace-pre-line">
          {title}
          {subtitle}
          {location}
          {duration}
        </div>
      </div>
      <div>
        <span>What I Worked On</span>
      </div>
      <div>
        <span className="font-bold text-2xl">Tech Stack Used</span>
      </div>
    </div>
  );
}

function JsonLine(props: { name: string; value: string; comma: boolean }) {
  return (
    <div className="flex flex-row flex-wrap text-3xl">
        
    </div>
  );
}
