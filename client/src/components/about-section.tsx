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
            <h3 className="text-2xl font-semibold text-accent">Salut, je suis Clément !</h3>
            <p className="text-muted-foreground leading-relaxed">
              J'ai 17 ans et je suis actuellement en L1 informatique. Passionné depuis tout petit par Minecraft et l'informatique, 
              j'ai transformé cette passion en expertise technique dans le développement web et la création de bots Discord.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Au fil des années, j'ai fondé plusieurs projets comme Aragonite (serveur Minecraft), Goliath (bot Discord) et Brawl Vision (agence de contenu). 
              J'aime créer des solutions innovantes, gérer des communautés en ligne et partager ma passion pour la tech avec d'autres.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/clem.pinot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/33637221748"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://discord.com/users/clem.pnt"
                target="_blank"
                rel="noopener noreferrer"
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
                  <span className="text-muted-foreground">Âge</span>
                  <span className="text-accent">17 ans</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Formation</span>
                  <span className="text-accent">L1 Informatique</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projets fondés</span>
                  <span className="text-accent">3+</span>
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
