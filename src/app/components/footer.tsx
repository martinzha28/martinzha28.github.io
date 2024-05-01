import { FaRegHeart, FaCopyright } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="px-5 bg-footer-blue text-white font-mono flex flex flex-col sm:flex-row justify-between gap-2">
      <div className="flex flex-row items-center gap-2 flex-wrap">
        <span> Made using Next.js, React.js, Tailwind CSS </span>
      </div>

      <div className="flex flex-row items-center gap-2">
        <FaCopyright />
        <span> {year} by Martin Zhao </span>
      </div>
    </footer>
  );
}
