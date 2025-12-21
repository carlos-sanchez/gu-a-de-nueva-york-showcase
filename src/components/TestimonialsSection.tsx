import { Star } from "lucide-react";

const testimonials = [
  {
    text: "El libro, lleno de espectaculares fotografías, es un buen viaje a Nueva York y te ayuda a conocer la ciudad y sus zonas más interesantes.",
    author: "Francisco Tazón",
    role: "Autor de Guía turística de Nueva York",
    rating: 5,
  },
  {
    text: "El libro está muy bien, porque se centra en vivir la ciudad como un local. Me gusta que esté organizado por días. Además las fotos son fantásticas.",
    author: "Valentina",
    role: "Lectora",
    rating: 5,
  },
  {
    text: "La combinación de textos evocadores y fotografías increíbles hace que quieras volver a Nueva York una y otra vez.",
    author: "Ana Martínez",
    role: "Lectora",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
          Lo que dicen los <span className="italic text-primary">lectores</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-2xl mx-auto">
          Descubre por qué tantos viajeros han elegido esta guía para explorar Nueva York
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
