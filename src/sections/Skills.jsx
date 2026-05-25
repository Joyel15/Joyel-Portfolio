import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#539E43]" /> },
        { name: "Express", icon: <SiExpress className="text-black dark:text-white" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "npm", icon: <FaNpm className="text-[#CB3837]" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
   <section id="skills" className="py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white mb-10">
      Skills & Technologies
    </h2>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {skillCategories.map((category, index) => (
        <button
          key={category.title}
          onClick={() => setActiveTab(index)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === index
              ? "bg-emerald-600 dark:bg-gray-900 text-white shadow-lg"
              : "bg-white dark:bg-gray-800 text-emerald-700 dark:text-white border border-emerald-500 dark:border-gray-400 hover:bg-emerald-600 dark:hover:bg-gray-600 hover:text-white"
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>

    {/* Skills Box */}
    <div className="bg-white/70 dark:bg-gray-900 rounded-2xl border border-stone-300 dark:border-gray-800 p-8 shadow-md">

      <h3 className="text-3xl font-bold text-center text-emerald-600 dark:text-gray-100 dark:text-emerald-400 mb-10">
        {skillCategories[activeTab].title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-6">
        {skillCategories[activeTab].skills.map((skill) => (
          <div
            key={skill.name}
            className="w-28 h-40 bg-gray-50 dark:bg-gray-800 rounded-xl border border-stone-300 dark:border dark:border-gray-700 hover:border-2 hover:border-emerald-600  dark:hover:border-2 dark:hover:border-gray-100 flex flex-col items-center justify-center transition-all duration-300 ease-out
            "
          >
            <div className="text-5xl mb-5">
              {skill.icon}
            </div>

            <p className="text-sm font-bold text-center text-emerald-600 dark:text-white px-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

    </div>

  </div>
</section>
  );
}

export default Skills;