import { ExternalLink } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import aragoniteBanner from "@assets/aragonite-banner_1757291789566.png";
import goliathBanner from "@assets/d3462f57abcfee7628b6d67a6415ef12_1757291813344.png";
import gladosBanner from "@assets/69dd83a9e0d1202ee87af3a06b1bb520_1757291832036.png";
import brawlVisionBanner from "@assets/generated_images/Brawl_Vision_golden_eye_banner_b6ffc199.png";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Aragonite",
      description: "Serveur Minecraft que j'ai fondé, offrant une expérience de jeu unique avec des plugins personnalisés.",
      image: aragoniteBanner,
      technologies: ["Minecraft", "YAML", "Plugins"],
      role: "Fondateur",
      demoUrl: "https://aragonite.strator.gg/",
      githubUrl: "https://discord.gg/feJpTQjUUQ",
    },
    {
      id: 2,
      title: "Goliath",
      description: "Bot Discord que j'ai créé avec des fonctionnalités avancées de modération et de divertissement.",
      image: goliathBanner,
      technologies: ["Node.js", "Discord.js", "JavaScript"],
      role: "Fondateur",
      demoUrl: "https://clem-pnt.github.io/goliath_website/index.html",
      githubUrl: "https://discord.gg/cGakFMZHBh",
    },
    {
      id: 3,
      title: "Brawl Vision",
      description: "Agence de créateur de contenu spécialisée dans Brawl Stars que j'ai fondée.",
      image: brawlVisionBanner,
      technologies: ["Gestion", "Contenu", "Marketing"],
      role: "Fondateur",
      demoUrl: "#",
      githubUrl: "https://discord.gg/eqcNnJkatX",
    },
    {
      id: 4,
      title: "Glados",
      description: "Bot Discord avancé où j'ai participé en tant que membre du staff pour son développement.",
      image: gladosBanner,
      technologies: ["JavaScript", "Discord.js", "APIs"],
      role: "Staff",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Mes Projets</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, alliant innovation technique et design moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden hover-neon transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-accent">{project.title}</h3>
                  <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                    {project.role}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="text-accent hover:text-primary transition-colors flex items-center gap-1"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-accent hover:text-primary transition-colors flex items-center gap-1"
                    data-testid={`project-github-${project.id}`}
                  >
                    <SiDiscord className="w-4 h-4" />
                    Discord
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
