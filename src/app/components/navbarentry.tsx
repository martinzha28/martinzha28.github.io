export default function NavbarEntry(props: {
    image: string | JSX.Element;
    alt: string;
    text: string;
  }) {
    return (
      <div className="flex flex-row flex-nowrap text-white font-mono items-center gap-2">
        {typeof props.image === "string" && (
          <img
            className="object-contain h-4 w-4"
            src={props.image}
            alt={props.alt}
          />
        )}
        {typeof props.image !== "string" && props.image}
        {props.text}
      </div>
    );
  }