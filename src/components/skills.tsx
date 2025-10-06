import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiShopify,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { SublimeIcon } from "@/components/icons";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ],
  Backend: [
    { name: "Ruby", icon: <SiRuby className="text-red-500" /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    {
      name: "API REST",
      icon: <span className="text-gray-600 dark:text-gray-300">🔗</span>,
    },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
    },
    {
      name: "Shopify (Liquid)",
      icon: <SiShopify className="text-green-600" />,
    },
    { name: "VSCode", icon: <VscCode className="text-blue-500" /> },
    { name: "Sublime Text", icon: <SublimeIcon /> },
  ],
};

export default function Skills() {
  return (
    <>
      <h2 className="text-4xl text-violet-600 dark:text-violet-500 font-bold text-center mb-12">Le mie Skills</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4 text-violet-600 dark:text-violet-400">
              {category}
            </h2>
            <ul className="space-y-3">
              {items.map(({ name, icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-md px-4 py-2 shadow border border-gray-200 dark:border-zinc-700"
                >
                  {icon}
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </>
  );
}
