import Link from 'next/link';

export default function NavbarEntry(props: {
    logo: string | JSX.Element;
    alt: string;
    text: string;
  }) {
    return (
      <Link href={"#" + props.alt}>
      <div className="flex flex-row flex-nowrap text-white font-mono items-center gap-2 hover:bg-hover-dark">
        {typeof props.logo === "string" && (
          <img
            className="object-contain h-4 w-4"
            src={props.logo}
            alt={props.alt + " logo"}
          />
        )}
        {typeof props.logo !== "string" && props.logo}
        {props.text}
      </div>
      </Link>
    );
  }