import dailybotLogo from "@/assets/logo-dailybot.png";
import heymondoLogo from "@/assets/logo-heymondo.svg";

const SponsorsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/50" aria-labelledby="sponsors-heading">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="sponsors-heading" className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
            Mecenas y <span className="italic text-primary">Patrocinadores</span>
          </h2>
          <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto">
            Esta guía se ha editado gracias al apoyo de 176 mecenas durante la campaña de crowdfunding y al patrocinio de 
            <a
              href="https://www.dailybot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="DailyBot - Patrocinador de la Guía de Nueva York"
            >Dailybot</a> y
            <a
              href="https://heymondo.es/?utm_medium=Afiliado&utm_source=CHOCOTUITS&utm_campaign=PRINCIPAL&cod_descuento=CHOCOTUITS"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Heymondo - Patrocinador de la Guía de Nueva York"
            >Heymondo</a>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-16" role="list" aria-label="Patrocinadores">
          <a
            href="https://www.dailybot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="DailyBot - Patrocinador de la Guía de Nueva York"
          >
            <img
              src={dailybotLogo}
              alt="Logo de DailyBot"
              className="h-12 md:h-14 w-auto"
              loading="lazy"
            />
          </a>
          <a
            href="https://heymondo.es/?utm_medium=Afiliado&utm_source=CHOCOTUITS&utm_campaign=PRINCIPAL&cod_descuento=CHOCOTUITS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Heymondo - Patrocinador de la Guía de Nueva York"
          >
            <img
              src={heymondoLogo}
              alt="Logo de Heymondo"
              className="h-8 md:h-10 w-auto"
              loading="lazy"
            />
          </a>
        </div>

        <div className="text-center mb-16">
          <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto">
            <br /><br /><br /><br />Gracias a Roberto y Miguel del equipo original de Libros.com por todo el amor que pusieron a este libro durante el proceso de edición.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;
