import { Link } from "react-router-dom";
import statueOfLibertyTorch from "@/assets/statue-of-liberty-torch.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-0" style={{ backgroundColor: '#8AB5A4' }} role="contentinfo">
      <div className="container">
        <div className="text-center space-y-4">
          <p className="font-display text-2xl text-foreground">
            Guía de <span className="italic">Nueva York</span>
          </p>
          <p className="text-foreground/60 font-body text-sm">
            Por Rafa Vega y Carlos Sánchez · Prólogo de José Manuel Calderón
          </p>
          <nav className="flex justify-center gap-4 pt-2" aria-label="Enlaces legales">
            <Link 
              to="/politica-de-cookies" 
              className="text-foreground/60 hover:text-foreground text-sm font-body transition-colors"
            >
              Política de cookies
            </Link>
          </nav>
          <p className="text-foreground/40 font-body text-xs pt-4">
            © {currentYear} Guía de Nueva York. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="relative">
          {/* Flame glow effect - positioned at ~35% from left (10% padding + half of 50% torch width) */}
          <div 
            className="absolute -translate-x-1/2 w-32 h-32 animate-flame-glow rounded-full"
            style={{
              left: '35%',
              top: 0,
              background: 'radial-gradient(ellipse at center, rgba(255, 180, 50, 0.8) 0%, rgba(255, 120, 30, 0.5) 40%, transparent 70%)'
            }}
            aria-hidden="true"
          />
          <img 
            src={statueOfLibertyTorch} 
            alt="Antorcha de la Estatua de la Libertad" 
            className="w-auto max-w-[8rem] block relative z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
