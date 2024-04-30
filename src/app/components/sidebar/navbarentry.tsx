import Link from 'next/link';
import Image from 'next/image';

export default function NavbarEntry(props: {
    logo: string | JSX.Element;
    alt: string;
    text: string;
  }) {
    return (
      <Link href={"#" + props.alt}>
      <div className="flex flex-row flex-nowrap text-white font-mono items-center gap-2 hover:bg-hover-dark">
        {typeof props.logo === "string" && (
          <Image
            className="object-contain h-4 w-4"
            src={props.logo}
            alt={props.alt + " logo"}
            width={500}
            height={500}
          />
        )}
        {typeof props.logo !== "string" && props.logo}
        {props.text}
      </div>
      </Link>
    );
  }