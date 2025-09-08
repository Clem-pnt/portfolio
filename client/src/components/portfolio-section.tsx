import { ExternalLink, Github } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description: "Application de commerce en ligne moderne avec interface intuitive et paiements sécurisés.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytique",
      description: "Interface de visualisation de données en temps réel avec graphiques interactifs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Vue.js", "D3.js", "Express"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "App Mobile",
      description: "Application mobile cross-platform avec design moderne et performances optimisées.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "IA Assistant",
      description: "Interface conversationnelle alimentée par l'IA avec intégration d'APIs modernes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "FastAPI", "OpenAI"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Plateforme Gaming",
      description: "Plateforme de jeux web avec multijoueur en temps réel et classements.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["WebGL", "Socket.io", "Three.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "DeFi Trading",
      description: "Plateforme de trading décentralisée avec intégration blockchain et portefeuilles crypto.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Solidity", "Web3.js", "Ethereum"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
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
                    Démo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-accent hover:text-primary transition-colors flex items-center gap-1"
                    data-testid={`project-github-${project.id}`}
                  >
                    <Github className="w-4 h-4" />
                    Code
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
