import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "hero", isRoute: false },
    { label: "About", href: "about", isRoute: false },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Case Studies", href: "case-studies", isRoute: false },
    { label: "Contact", href: "contact", isRoute: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-logo"
          >
            Rudra Enterprises
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link key={link.href} href={link.href}>
                  <Button variant="ghost" data-testid={`link-nav-${link.href}`}>
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`link-nav-${link.href}`}
                >
                  {link.label}
                </Button>
              )
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className="justify-start w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${link.href}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  className="justify-start"
                  data-testid={`link-mobile-nav-${link.href}`}
                >
                  {link.label}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
