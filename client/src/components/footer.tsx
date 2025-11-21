import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Home", href: "hero", isRoute: false },
    { label: "About", href: "about", isRoute: false },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Case Studies", href: "case-studies", isRoute: false },
    { label: "Contact", href: "contact", isRoute: false },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground" data-testid="text-footer-company">
              Rudra Enterprises
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Expert manpower consultancy, training and placement services with
              over 10 years of experience serving government, corporate and
              individual clients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) =>
                link.isRoute ? (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <button
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-footer-${link.href}`}
                      >
                        {link.label}
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.href}`}
                    >
                      {link.label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/QnRojJa89rpownB47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-address"
                >
                  MIG 51 Sec-2, Shankar Nagar, Raipur CG 492001
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+918839961712"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91-88399-61712
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@rudraraipur.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  info@rudraraipur.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-muted-foreground" data-testid="text-footer-copyright">
            &copy; {currentYear} Rudra Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
