const authors = [
  {
    name: "Rafa Vega",
    role: "Textos",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: `Doctor en Periodismo con un máster en Innovación Periodística y otro en Gestión de Empresas Audiovisuales. Ha trabajado veinte años en televisión y da clase en la universidad. Nueva York le fascina: la ha visitado veinte veces y la conoce muy bien porque ha pasado largas temporadas viviendo allí. Además, es fijo en su Maratón, en el que ha participado una docena de ediciones. Ha publicado siete libros, este es su octavo.`,
  },
  {
    name: "Carlos Sánchez",
    role: "Fotografía",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: `Detrás del objetivo de las imágenes de esta guía, es diseñador de productos digitales y fotógrafo. Ha vivido en Nueva York y ha recorrido cada rincón de la ciudad con su cámara. En su cuenta de Twitter, @chocotuits, fusiona el diseño y la fotografía para mostrar la vida en la Gran Manzana. Su primer libro «Nueva York: una guía fotográfica» (Libros.com, 2021) ha sido calificado por National Geographic como «la guía definitiva para fotografiar Nueva York».`,
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
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {author.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
