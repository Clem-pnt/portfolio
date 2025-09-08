import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © 2024 <span className="text-accent">Portfolio Développeur</span>. Tous droits réservés.
        </p>
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
          Développé avec <Heart className="w-4 h-4 text-red-500" /> et{" "}
          <span className="text-accent flex items-center gap-1">
            beaucoup de <Coffee className="w-4 h-4" />
          </span>
        </p>
      </div>
    </footer>
  );
}
