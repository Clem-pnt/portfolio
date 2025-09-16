import { Mail, MapPin } from "lucide-react";
import { SiInstagram, SiWhatsapp, SiDiscord } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
            discuter.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center">
                <div className="bg-primary/20 p-4 rounded-lg inline-block mb-4">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <h3 className="font-semibold text-accent mb-2">Email</h3>
                <p className="text-muted-foreground">
                  clement.pinot@aperture-sciences.com
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/20 p-4 rounded-lg inline-block mb-4">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <h3 className="font-semibold text-accent mb-2">Localisation</h3>
                <p className="text-muted-foreground">Pau, France</p>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h3 className="font-semibold mb-6 text-accent">Réseaux sociaux</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.instagram.com/clem.pinot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-4 rounded-lg hover:bg-primary/20 transition-colors border border-border neon-border"
                  data-testid="social-instagram"
                >
                  <SiInstagram className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a
                  href="https://wa.me/33637221748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-4 rounded-lg hover:bg-primary/20 transition-colors border border-border neon-border"
                  data-testid="social-whatsapp"
                >
                  <SiWhatsapp className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a
                  href="https://discord.com/users/clem.pnt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-4 rounded-lg hover:bg-primary/20 transition-colors border border-border neon-border"
                  data-testid="social-discord"
                >
                  <SiDiscord className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>

                {/* --- guns.lol --- */}
                <a
                  href="https://guns.lol/clem.pnt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-4 rounded-lg hover:bg-primary/20 transition-colors border border-border neon-border"
                  data-testid="social-guns"
                >
                  <img
                    src="/icons/guns.svg"
                    alt="guns.lol"
                    className="w-6 h-6 object-contain text-muted-foreground hover:text-accent transition-colors"
                  />
                </a>
                {/* ---------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
