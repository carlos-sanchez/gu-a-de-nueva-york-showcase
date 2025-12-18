import { BookOpen, Calendar, FileText, Hash, Ruler } from "lucide-react";

const details = [
  { icon: Ruler, label: "Formato", value: "17 × 24 cm" },
  { icon: BookOpen, label: "Encuadernación", value: "Tapa blanda" },
  { icon: FileText, label: "Páginas", value: "184" },
  { icon: Hash, label: "ISBN", value: "978-84-19955-61-1" },
  { icon: Hash, label: "ISBN digital", value: "978-84-19955-62-8" },
  { icon: Calendar, label: "Fecha de lanzamiento", value: "19 de febrero de 2024" },
];

const BookDetailsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
          Detalles del <span className="italic text-primary">libro</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground font-body mb-1">{detail.label}</p>
                <p className="font-display text-lg text-foreground">{detail.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookDetailsSection;
