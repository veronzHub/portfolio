import { FaReact, FaRust, FaHtml5, FaSass, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobephotoshop, SiSolana } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const icons = [
  { Icon: FaReact, name: "React" },
  { Icon: RiNextjsFill, name: "Next.js" },
  { Icon: IoLogoJavascript, name: "JavaScript" },
  { Icon: SiAdobephotoshop, name: "Photoshop" },
  { Icon: SiSolana, name: "Solana" },
  { Icon: FaRust, name: "Rust" },
  { Icon: BiLogoTypescript, name: "TypeScript" },
  { Icon: RiTailwindCssFill, name: "TailwindCSS" },
  { Icon: FaHtml5, name: "HTML5" },
  { Icon: VscVscode, name: "VSCode" },
  { Icon: FaSass, name: "Sass" },
  { Icon: FaNodeJs, name: "Node.js" },
];

export default function Skills() {
  return (
    <section className="w-2/3">
      <h3 className="text-primary text-5xl">Main Interests</h3>
      <ul className="flex gap-4 mt-5 flex-wrap">
        {icons.map(({ Icon, name }, index) => (
          <li key={index} className="relative group flex flex-col items-center">
            <span className="icon-square">
              <Icon size={50} />
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-accent text-white text-sm py-1 px-2 rounded">
              {name}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
