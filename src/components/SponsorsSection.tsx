import dailybotLogo from "@/assets/logo-dailybot.png";
import heymondoLogo from "@/assets/logo-heymondo.svg";

const SponsorsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
            Mecenas y <span className="italic text-primary">Patrocinadores</span>
          </h2>
          <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto">
            Esta guía se ha editado gracias al apoyo de 176 mecenas y dos patrocinadores durante la campaña de crowdfunding
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-16">
          <a
            href="https://www.dailybot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={dailybotLogo}
              alt="DailyBot"
              className="h-12 md:h-14 w-auto"
            />
          </a>
          <a
            href="https://heymondo.es/?utm_medium=Afiliado&utm_source=CHOCOTUITS&utm_campaign=PRINCIPAL&cod_descuento=CHOCOTUITS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={heymondoLogo}
              alt="Heymondo"
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
