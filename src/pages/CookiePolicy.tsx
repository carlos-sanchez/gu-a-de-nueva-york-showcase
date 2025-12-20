import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-20 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <article className="prose prose-sage max-w-none">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Política de Cookies
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-foreground mb-4">¿Qué son las cookies?</h2>
            <p className="text-foreground/80 leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo 
              cuando los visitas. Se utilizan para hacer que los sitios web funcionen de manera más 
              eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-foreground mb-4">Cookies que utilizamos</h2>
            
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-display text-xl text-foreground mb-2">Cookies técnicas y funcionales</h3>
                <p className="text-foreground/80 mb-4">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground font-semibold">Nombre</th>
                        <th className="text-left py-2 text-foreground font-semibold">Proveedor</th>
                        <th className="text-left py-2 text-foreground font-semibold">Propósito</th>
                        <th className="text-left py-2 text-foreground font-semibold">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 text-foreground/80">sidebar:state</td>
                        <td className="py-2 text-foreground/80">Este sitio</td>
                        <td className="py-2 text-foreground/80">Guarda el estado de la barra lateral</td>
                        <td className="py-2 text-foreground/80">7 días</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 text-foreground/80">cookie_consent</td>
                        <td className="py-2 text-foreground/80">Este sitio</td>
                        <td className="py-2 text-foreground/80">Almacena tu preferencia de cookies</td>
                        <td className="py-2 text-foreground/80">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-display text-xl text-foreground mb-2">Cookies de análisis</h3>
                <p className="text-foreground/80 mb-4">
                  Estas cookies nos permiten medir y mejorar el rendimiento de nuestro sitio web.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground font-semibold">Nombre</th>
                        <th className="text-left py-2 text-foreground font-semibold">Proveedor</th>
                        <th className="text-left py-2 text-foreground font-semibold">Propósito</th>
                        <th className="text-left py-2 text-foreground font-semibold">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 text-foreground/80">_ga</td>
                        <td className="py-2 text-foreground/80">Google Analytics</td>
                        <td className="py-2 text-foreground/80">Distingue usuarios únicos</td>
                        <td className="py-2 text-foreground/80">2 años</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 text-foreground/80">_ga_*</td>
                        <td className="py-2 text-foreground/80">Google Analytics</td>
                        <td className="py-2 text-foreground/80">Mantiene el estado de la sesión</td>
                        <td className="py-2 text-foreground/80">2 años</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-foreground mb-4">Servicios de terceros</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Nuestro sitio web utiliza los siguientes servicios externos que pueden establecer sus propias cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                <strong>Google Fonts:</strong> Para cargar tipografías personalizadas. Google puede recopilar 
                información técnica como tu dirección IP.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Política de privacidad de Google
                </a>
              </li>
              <li>
                <strong>Amazon:</strong> Al hacer clic en enlaces de compra de Amazon, serás redirigido a su 
                sitio web donde se aplicará su política de cookies. Utilizamos el programa de afiliados de Amazon.{" "}
                <a href="https://www.amazon.es/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Política de cookies de Amazon
                </a>
              </li>
              <li>
                <strong>Payhip:</strong> Plataforma de venta digital. Al realizar una compra, se aplicará su 
                política de privacidad.{" "}
                <a href="https://payhip.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Política de privacidad de Payhip
                </a>
              </li>
              <li>
                <strong>Gigantes.com:</strong> Tienda de baloncesto. Al visitar su sitio, se aplicará su 
                propia política de cookies.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-foreground mb-4">Cómo gestionar las cookies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Puedes gestionar tus preferencias de cookies en cualquier momento. Además, la mayoría de 
              navegadores te permiten:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Ver qué cookies tienes almacenadas y eliminarlas individualmente</li>
              <li>Bloquear cookies de terceros</li>
              <li>Bloquear cookies de sitios específicos</li>
              <li>Bloquear todas las cookies</li>
              <li>Eliminar todas las cookies cuando cierres el navegador</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Ten en cuenta que si decides bloquear las cookies, es posible que algunas funcionalidades 
              del sitio web no funcionen correctamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-foreground mb-4">Contacto</h2>
            <p className="text-foreground/80 leading-relaxed">
              Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos a través 
              del formulario de contacto en nuestra página principal.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default CookiePolicy;
