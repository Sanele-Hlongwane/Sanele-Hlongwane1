"use client";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiCsharp,
  SiDotnet,
  SiWindows,
  SiVisualstudio,
  SiRedux,
  SiPrisma,
  SiSqlite,
  SiVercel,
  SiTypescript,
  SiMicrosoft,
  SiAzuredevops,
  SiJavascript,
} from "react-icons/si";
import { HiServer } from "react-icons/hi";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { useState } from "react";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Languages");

  const techStack = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 text-6xl" /> },
        { name: "Java", icon: <FaJava className="text-red-600 text-6xl" /> },
        { name: "C#", icon: <SiCsharp className="text-purple-400 text-6xl" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-500 text-6xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-6xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-300 text-6xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-6xl" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500 text-6xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400 text-6xl" /> },
        { name: "ASP.NET", icon: <SiAzuredevops className="text-purple-500 text-6xl" /> },
        { name: ".NET", icon: <SiDotnet className="text-gray-300 text-6xl" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-6xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-6xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-orange-500 text-6xl" /> },
        { name: "SQLite", icon: <SiSqlite className="text-blue-400 text-6xl" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-500 text-6xl" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-6xl" /> },
        { name: "Prisma", icon: <SiPrisma className="text-teal-400 text-6xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-gray-300 text-6xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-6xl" /> },
        { name: "XAMPP", icon: <HiServer className="text-orange-500 text-6xl" /> },
      ],
    },
    {
      category: "Microsoft",
      items: [
        { name: "Windows Forms (WF)", icon: <MdOutlineDesktopWindows className="text-gray-300 text-6xl" /> },
        { name: "WPF", icon: <SiMicrosoft className="text-blue-400 text-6xl" /> },
        { name: "Visual Studio", icon: <SiVisualstudio className="text-purple-500 text-6xl" /> },
        { name: "Windows", icon: <SiWindows className="text-blue-400 text-6xl" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-darkBg text-white py-10 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Tech Stack
        </h1>

        <div className="flex justify-center space-x-10 mb-8 border-b border-gray-700 pb-4">
          {techStack.map((category, index) => (
            <button
              key={index}
              className={`text-2xl sm:text-3xl font-bold px-4 py-2 rounded-md transition-all duration-300 ${
                selectedCategory === category.category
                  ? "text-blue-400 border-b-4 border-blue-400"
                  : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {techStack
          .filter((category) => category.category === selectedCategory)
          .map((category, index) => (
            <div
              key={index}
              className="animate__animated animate__fadeInUp animate__delay-1s mt-8"
            >
              <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                {category.category}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {category.items.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-3 hover:scale-110 hover:shadow-lg transition-transform duration-300 group"
                  >
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-lg font-semibold text-black dark:text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
