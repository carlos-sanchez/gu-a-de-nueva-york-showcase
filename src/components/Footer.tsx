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
          <p className="text-background/40 font-body text-xs pt-4">
            © {currentYear} Guía de Nueva York. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
