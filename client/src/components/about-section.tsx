import { Github, Linkedin, Twitter } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">À propos</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent">Salut, je suis un Développeur Web</h3>
            <p className="text-muted-foreground leading-relaxed">
              Développeur web passionné avec plusieurs années d'expérience dans la création d'applications web modernes. 
              Je me spécialise dans le développement front-end et back-end, avec un œil particulier pour le design et l'expérience utilisateur.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon approche combine créativité technique et esthétique moderne pour créer des solutions web qui ne sont pas seulement fonctionnelles, 
              mais aussi visuellement captivantes. J'aime explorer de nouvelles technologies et repousser les limites du possible sur le web.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-lg p-8 neon-border">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Localisation</span>
                  <span className="text-accent">France</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expérience</span>
                  <span className="text-accent">3+ années</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projets complétés</span>
                  <span className="text-accent">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Disponibilité</span>
                  <span className="text-accent">Ouvert aux projets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
