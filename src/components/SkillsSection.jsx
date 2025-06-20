// src/components/SkillsSection.jsx
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; 





const skills = [
  // Languages
  { name: "HTML/CSS", category: "languages", icon: <SiHtml5 /> },
  { name: "C++", category: "languages", icon: <SiCplusplus /> },
  { name: "Java", category: "languages", icon: <FaJava /> },
  { name: "Python", category: "languages", icon: <SiPython /> },
  { name: "JavaScript", category: "languages", icon: <SiJavascript /> },
  { name: "TypeScript", category: "languages", icon: <SiTypescript /> },

  // Frameworks/Libraries
  { name: "React", category: "frameworks", icon: <SiReact /> },
  { name: "Next.js", category: "frameworks", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", category: "frameworks", icon: <SiTailwindcss /> },
  { name: "Node.js", category: "frameworks", icon: <SiNodedotjs /> },
  { name: "Express", category: "frameworks", icon: <SiExpress /> },

  // Databases
  { name: "MongoDB", category: "databases", icon: <SiMongodb /> },
  { name: "PostgreSQL", category: "databases", icon: <SiPostgresql /> },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: <SiGit /> },
  { name: "Docker", category: "tools", icon: <SiDocker /> },
  { name: "Figma", category: "tools", icon: <SiFigma /> },
];

const categories = ["all", "languages", "frameworks", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          My expertise across various technologies and tools
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Items */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition"
            >
              <span className="text-xl text-primary">{skill.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
