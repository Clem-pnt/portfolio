import { SiInstagram, SiWhatsapp, SiDiscord } from "react-icons/si";

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
            <h3 className="text-2xl font-semibold text-accent">Salut, je suis un Développeur Polyvalent</h3>
            <p className="text-muted-foreground leading-relaxed">
              Développeur passionné spécialisé dans le développement web avec HTML, CSS et JavaScript. 
              Je crée également des bots Discord avec Node.js et Python, et je configure des serveurs Minecraft avec YAML.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              J'ai fondé plusieurs projets comme Aragonite (serveur Minecraft), Goliath (bot Discord) et Brawl Vision (agence de contenu). 
              J'aime créer des solutions innovantes et gérer des communautés en ligne.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-discord"
              >
                <SiDiscord className="w-6 h-6" />
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
