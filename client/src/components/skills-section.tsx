import { 
  Code, 
  Database, 
  Server, 
  GitBranch, 
  Monitor,
  FileText
} from "lucide-react";
import { SiReplit } from "react-icons/si";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: Code, color: "text-orange-500" },
        { name: "CSS", icon: Code, color: "text-blue-500" },
        { name: "JavaScript", icon: Code, color: "text-yellow-400" },
      ],
    },
    {
      title: "Bot Development",
      skills: [
        { name: "Node.js", icon: Server, color: "text-green-500" },
        { name: "Python", icon: Code, color: "text-blue-600" },
        { name: "Discord.js", icon: Code, color: "text-purple-500" },
      ],
    },
    {
      title: "Configuration",
      skills: [
        { name: "YAML", icon: FileText, color: "text-red-400" },
        { name: "JSON", icon: Database, color: "text-green-600" },
        { name: "TOML", icon: Database, color: "text-blue-600" },
      ],
    },
    {
      title: "Outils",
      skills: [
        { name: "Git", icon: GitBranch, color: "text-orange-600" },
        { name: "Replit", icon: SiReplit, color: "text-orange-400" },
        { name: "VS Code", icon: Monitor, color: "text-blue-400" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Compétences</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des expériences web exceptionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-accent">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="skill-item bg-card p-4 rounded-lg border border-border cursor-pointer"
                      data-testid={`skill-${skill.name.toLowerCase().replace(/\./g, '-').replace(/\//g, '-')}`}
                    >
                      {skill.name === "Replit" ? (
                        <SiReplit className={`w-8 h-8 ${skill.color} mb-2 mx-auto`} />
                      ) : (
                        <IconComponent className={`w-8 h-8 ${skill.color} mb-2 mx-auto`} />
                      )}
                      <div className="text-sm">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
