import { Code2, Database, Globe, Palette, Server, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const skillCategories: Skill[] = [
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Python", "Express", "REST APIs", "GraphQL"],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["React Native", "Flutter", "Responsive Design"],
  },
  {
    name: "Tools & DevOps",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "VS Code"],
  },
  {
    name: "Design",
    icon: <Palette className="w-6 h-6" />,
    items: ["Figma", "UI/UX", "Adobe XD", "Photoshop"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
