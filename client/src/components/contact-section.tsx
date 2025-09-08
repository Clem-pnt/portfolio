import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-4 rounded-lg">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-accent">Email</h3>
                <p className="text-muted-foreground">contact@portfolio.dev</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-4 rounded-lg">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-accent">Téléphone</h3>
                <p className="text-muted-foreground">+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-4 rounded-lg">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-accent">Localisation</h3>
                <p className="text-muted-foreground">Paris, France</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-semibold mb-4 text-accent">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-card p-3 rounded-lg hover:bg-primary/20 transition-colors border border-border"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a
                  href="#"
                  className="bg-card p-3 rounded-lg hover:bg-primary/20 transition-colors border border-border"
                  data-testid="social-github"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a
                  href="#"
                  className="bg-card p-3 rounded-lg hover:bg-primary/20 transition-colors border border-border"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a
                  href="#"
                  className="bg-card p-3 rounded-lg hover:bg-primary/20 transition-colors border border-border"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-accent">
                  Nom
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-input border-border focus:ring-ring text-foreground"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-accent">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-input border-border focus:ring-ring text-foreground"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-accent">
                  Sujet
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-input border-border focus:ring-ring text-foreground"
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-accent">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-input border-border focus:ring-ring text-foreground resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full neon-border hover-neon transition-all duration-300 text-accent font-semibold bg-transparent border-2 border-primary"
                data-testid="button-submit-form"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
