import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so the banner doesn't appear immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-up">
      <div className="container max-w-4xl">
        <div className="bg-card border border-border rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  Utilizamos cookies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Este sitio usa cookies para mejorar tu experiencia. Al continuar navegando, 
                  aceptas su uso.{" "}
                  <Link 
                    to="/politica-de-cookies" 
                    className="text-primary hover:underline font-medium"
                  >
                    Más información
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0 ml-auto md:ml-0">
              <Button
                variant="outline"
                size="sm"
                onClick={declineCookies}
                className="text-muted-foreground"
              >
                Rechazar
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Aceptar
              </Button>
            </div>
            <button
              onClick={declineCookies}
              className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
