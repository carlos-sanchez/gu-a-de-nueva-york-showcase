const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="text-center space-y-4">
          <h3 className="font-display text-2xl">
            Guía de <span className="italic">Nueva York</span>
          </h3>
          <p className="text-background/60 font-body text-sm">
            Por Rafa Vega y Carlos Sánchez · Prólogo de José Manuel Calderón
          </p>
          <div className="flex justify-center gap-6 text-sm font-body">
            <a
              href="https://twitter.com/chocotuits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
            >
              @chocotuits
            </a>
          </div>
          <p className="text-background/40 font-body text-xs pt-4">
            © {currentYear} Guía de Nueva York. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
