import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const SampleReaderSection = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfUrl = "/sample/Guia_NY_sample.pdf";

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Subtract padding/border (2px border on each side)
        setContainerWidth(containerRef.current.clientWidth - 4);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

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
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="h-8 w-8"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-muted-foreground min-w-[5rem] text-center">
                {pageNumber} / {numPages}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="h-8 w-8"
                aria-label="Página siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                disabled={scale <= 0.5}
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
                disabled={scale >= 2}
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

          {/* PDF Viewer */}
          <div 
            ref={containerRef}
            className="bg-card rounded-b-2xl border border-border overflow-hidden shadow-lg flex justify-center items-center"
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-64">
                  <p className="text-muted-foreground">Cargando PDF...</p>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-64 p-8 text-center">
                  <p className="text-muted-foreground">
                    No se pudo cargar el PDF.{" "}
                    <a href={pdfUrl} className="text-primary underline" target="_blank" rel="noopener noreferrer">
                      Descárgalo aquí
                    </a>
                  </p>
                </div>
              }
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale}
                className="mx-auto"
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={containerWidth}
              />
            </Document>
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
