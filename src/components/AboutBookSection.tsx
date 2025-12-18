const AboutBookSection = () => {
  return (
    <section id="sobre-el-libro" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
            No es una guía más sobre la <span className="italic text-primary">Gran Manzana</span>
          </h2>
          
          <div className="space-y-8 font-body text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl md:text-2xl text-foreground font-display text-center italic">
              «Guía de Nueva York no es una guía más sobre la Gran Manzana.»
            </p>
            
            <p>
              No es una más porque sus autores son unos enamorados de la ciudad, porque la han 
              vivido al milímetro y porque ponen a tu disposición una visión muy personal de ella. 
              Itinerarios, lugares donde hacer buenas fotos, restaurantes, secretos que suelen 
              estar fuera de la esfera del turista. Todo esto te ofrecen en este libro entretenido, 
              evocador y, sobre todo, útil.
            </p>
          </div>
        </div>

        {/* Quote from José Manuel Calderón */}
        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="absolute -top-6 left-8 text-8xl text-primary/20 font-display">"</div>
            <p className="font-display text-xl md:text-2xl text-card-foreground italic leading-relaxed relative z-10">
              Desde una cámara y a través de textos que te cuentan experiencias especiales, 
              vas a conocer otra visión de la Gran Manzana en momentos diferentes del día o 
              del año. Disfruta de esta guía y sigue conociendo una ciudad para todos los gustos.
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-sage flex items-center justify-center text-primary-foreground font-bold text-lg">
                JC
              </div>
              <div>
                <cite className="font-body font-semibold text-foreground not-italic">
                  José Manuel Calderón
                </cite>
                <p className="text-sm text-muted-foreground">
                  Exjugador de los New York Knicks · Campeón del mundo
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutBookSection;
