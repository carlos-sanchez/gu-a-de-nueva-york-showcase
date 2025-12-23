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
        <img 
          src={statueOfLibertyTorch} 
          alt="Antorcha de la Estatua de la Libertad" 
          className="w-auto max-w-xs md:max-w-sm lg:max-w-md block"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
};

export default Footer;
