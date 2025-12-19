import carlosSanchezImage from "@/assets/carlos-sanchez.jpg";
import rafaVegaImage from "@/assets/rafa-vega.jpg";

const authors = [
  {
    name: "Rafa Vega",
    role: "Textos",
    image: rafaVegaImage,
    bio: `Doctor en Periodismo con un máster en Innovación Periodística y otro en Gestión de Empresas Audiovisuales. Ha trabajado veinte años en televisión y da clase en la universidad. Nueva York le fascina: la ha visitado veinte veces y la conoce muy bien porque ha pasado largas temporadas viviendo allí. Además, es fijo en su Maratón, en el que ha participado una docena de ediciones. Ha publicado siete libros, este es su octavo.`,
  },
  {
    name: "Carlos Sánchez",
    role: "Fotografía",
    image: carlosSanchezImage,
    bio: `Detrás del objetivo de las imágenes de esta guía, es diseñador de productos digitales y fotógrafo. Ha vivido en Nueva York y ha recorrido cada rincón de la ciudad con su cámara. En su cuenta de X, <a href="https://x.com/chocotuits/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">@chocotuits</a>, fusiona el diseño y la fotografía para mostrar la vida en la Gran Manzana. Su primer libro «Nueva York: una guía fotográfica» (Libros.com, 2021) ha sido calificado por National Geographic como «la guía definitiva para fotografiar Nueva York».`,
  },
];

const AuthorsSection = () => {
  return (
    <section id="autores" className="py-20 md:py-32 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
          Conoce a los <span className="italic text-primary">autores</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-2xl mx-auto">
          Dos apasionados de Nueva York que han unido sus talentos para crear una guía única
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {authors.map((author, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 gradient-sage opacity-30 rounded-full blur-xl" />
                <img
                  src={author.image}
                  alt={`Foto de ${author.name}`}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-2xl text-foreground">{author.name}</h3>
                  <p className="text-primary font-body font-medium">{author.role}</p>
                </div>
                <p 
                  className="text-muted-foreground font-body text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: author.bio }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
