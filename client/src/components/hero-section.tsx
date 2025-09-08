export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="gradient-text">Développeur</span>
          <br />
          <span className="neon-text">Créatif</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionné par la création d'expériences web modernes et innovantes avec une touche artistique unique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToPortfolio}
            className="neon-border px-8 py-3 rounded-lg hover-neon transition-all duration-300 text-accent font-semibold"
            data-testid="button-view-projects"
          >
            Voir mes projets
          </button>
          <button
            onClick={scrollToContact}
            className="border border-border px-8 py-3 rounded-lg hover:border-accent transition-colors"
            data-testid="button-contact-me"
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
}
