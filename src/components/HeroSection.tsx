import bookCover from "@/assets/book-cover.jpg";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden gradient-sage">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-sage opacity-30 blur-3xl rounded-3xl" />
              <img
                src={bookCover}
                alt="Portada del libro Guía de Nueva York por Rafa Vega y Carlos Sánchez"
                className="relative w-64 md:w-80 lg:w-96 transform hover:scale-105 transition-transform duration-500"
                style={{
                  boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.4), 2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px 0 1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
            <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-[0.2em] animate-fade-up">
              Por Rafa Vega y Carlos Sánchez
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight animate-fade-up delay-100">
              Guía de
              <br />
              <span className="italic">Nueva York</span>
            </h1>
            
            <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic animate-fade-up delay-200">
              Experiencias para vivir la ciudad como un neoyorquino
            </p>
            
            <p className="text-primary-foreground/80 font-body text-base md:text-lg max-w-lg mx-auto lg:mx-0 animate-fade-up delay-300">
              Con prólogo de José Manuel Calderón, exjugador de los New York Knicks y campeón del mundo de baloncesto.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4 animate-fade-up delay-400">
              <a
                href="https://www.amazon.es/GU%C3%8DA-NUEVA-YORK-Rafa-Vega/dp/8419999482?pd_rd_w=VWufb&content-id=amzn1.sym.9f9111e3-7075-4ebb-9378-2ea5f442db43%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=9f9111e3-7075-4ebb-9378-2ea5f442db43&pf_rd_r=NNW8T0C2XT1J7FHC3486&pd_rd_wg=Ba7eP&pd_rd_r=7f119761-b578-4c21-ab6f-e82fcf997a40&pd_rd_i=8419999482&linkCode=ll1&tag=mfddv-21&linkId=99956471599accaa043f038050d9eb25&language=es_ES&ref_=as_li_ss_tl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ver en Amazon
                </Button>
              </a>
              <a
                href="https://www.gigantes.com/tienda/libros-baloncesto/guia-de-nueva-york/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ver en Gigantes
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
