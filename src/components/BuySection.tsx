import { Button } from "@/components/ui/button";
import { ShoppingBag, Tablet, ExternalLink } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

const buyOptions = [
  {
    title: "Amazon.es",
    description: "Versión física con envío a toda España",
    type: "Físico",
    icon: ShoppingBag,
    url: "https://www.amazon.es/GU%C3%8DA-NUEVA-YORK-Rafa-Vega/dp/8419999482?pd_rd_w=VWufb&content-id=amzn1.sym.9f9111e3-7075-4ebb-9378-2ea5f442db43%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=9f9111e3-7075-4ebb-9378-2ea5f442db43&pf_rd_r=NNW8T0C2XT1J7FHC3486&pd_rd_wg=Ba7eP&pd_rd_r=7f119761-b578-4c21-ab6f-e82fcf997a40&pd_rd_i=8419999482&linkCode=ll1&tag=mfddv-21&linkId=99956471599accaa043f038050d9eb25&language=es_ES&ref_=as_li_ss_tl",
  },
  {
    title: "Gigantes.com",
    description: "Versión física con envío a toda España",
    type: "Físico",
    icon: ShoppingBag,
    url: "https://www.gigantes.com/tienda/libros-baloncesto/guia-de-nueva-york/",
  },
  {
    title: "Payhip",
    description: "Descarga inmediata en formato digital",
    type: "Digital",
    icon: Tablet,
    url: "https://payhip.com/b/ACG1v",
  },
];

const BuySection = () => {
  return (
    <section id="comprar" className="py-20 md:py-32 gradient-sage relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-white/10 rounded-3xl blur-2xl" />
              <img
                src={bookCover}
                alt="Portada del libro Guía de Nueva York"
                className="relative w-56 md:w-72"
                style={{
                  boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.4), 2px 2px 8px rgba(0, 0, 0, 0.3), inset -1px 0 1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>

          {/* Buy options */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
              Consigue tu <span className="italic">ejemplar</span>
            </h2>
            <p className="text-primary-foreground/80 font-body mb-10 max-w-lg mx-auto lg:mx-0">
              Disponible en formato físico y digital. Elige la opción que mejor se adapte a ti.
            </p>

            <div className="space-y-4">
              {buyOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <a
                    key={index}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-lg font-semibold text-primary-foreground">
                          {option.title}
                        </span>
                        <span className="text-xs font-medium bg-white/15 text-primary-foreground px-2 py-0.5 rounded-full">
                          {option.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-primary-foreground">
                        {option.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
