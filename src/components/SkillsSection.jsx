import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Front-End
  { name: "HTML", level: 95, category: "front-end" },
  { name: "CSS", level: 95, category: "front-end" },
  { name: "Bootstrap", level: 85, category: "front-end" },
  { name: "JavaScript", level: 85, category: "front-end" },
  { name: "TypeScript", level: 85, category: "front-end" },
  { name: "React", level: 75, category: "front-end" },
  { name: "Next.js", level: 75, category: "front-end" },

  // Back-End
  { name: "Go", level: 95, category: "back-end" },
  { name: "Python", level: 85, category: "back-end" },
  { name: "Flask", level: 85, category: "back-end" },
  { name: "C", level: 85, category: "back-end" },
  { name: "Java", level: 75, category: "back-end" },
  { name: "Spring", level: 75, category: "back-end" },
  { name: "Node.js", level: 65, category: "back-end" },
  { name: "Nest.js", level: 65, category: "back-end" },

  // Tools
  { name: "Git", level: 95, category: "tools" },
  { name: "GitHub", level: 95, category: "tools" },
  { name: "Notion", level: 95, category: "tools" },
  { name: "Obsidian", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Windows", level: 95, category: "tools" },
  { name: "GoLand", level: 85, category: "tools" },
  { name: "PyCharm", level: 85, category: "tools" },
  { name: "CLion", level: 85, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "Terraform", level: 65, category: "tools" },
  { name: "Kubernetes", level: 65, category: "tools" },
];

const categories = ["all", "front-end", "back-end", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover: bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
