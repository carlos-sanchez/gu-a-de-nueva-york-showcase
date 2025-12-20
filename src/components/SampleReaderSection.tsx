import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SampleReaderSection = () => {
  const [scale, setScale] = useState(1);
  const pdfUrl = "/sample/Guia_NY_sample.pdf";

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleFullscreen = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section id="muestra" className="py-20 md:py-32 bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
            Echa un vistazo a la <span className="italic text-primary">guía</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Descubre los primeros capítulos de la guía y comprueba por ti mismo 
            por qué esta no es una guía cualquiera sobre Nueva York.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* PDF Viewer Controls */}
          <div className="flex items-center justify-between bg-card rounded-t-2xl border border-border border-b-0 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Muestra gratuita · 3 capítulos
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                className="h-8 w-8"
                aria-label="Reducir zoom"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                {Math.round(scale * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                className="h-8 w-8"
                aria-label="Aumentar zoom"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-border mx-2" />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleFullscreen}
                className="h-8 w-8"
                aria-label="Abrir en pantalla completa"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* PDF Embed */}
          <div 
            className="bg-card rounded-b-2xl border border-border overflow-hidden shadow-lg"
            style={{ height: "70vh", minHeight: "500px" }}
          >
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full"
              style={{ 
                transform: `scale(${scale})`,
                transformOrigin: "top center",
                width: `${100 / scale}%`,
                height: `${100 / scale}%`,
              }}
              title="Muestra de la Guía de Nueva York"
            />
          </div>

          {/* CTA below the viewer */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4 font-body">
              ¿Te ha gustado lo que has visto?
            </p>
            <a
              href="#comprar"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Consigue la guía completa
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReaderSection;
