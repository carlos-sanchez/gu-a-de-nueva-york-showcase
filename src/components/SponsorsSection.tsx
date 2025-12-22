import dailybotLogo from "@/assets/logo-dailybot.png";
import heymondoLogo from "@/assets/logo-heymondo.svg";

const SponsorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Mecenas y Patrocinadores
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className="h-12 md:h-16 w-auto"
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
              className="h-10 md:h-14 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
