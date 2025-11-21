import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award } from "lucide-react";
import { Link } from "wouter";
import aboutImage from "@assets/stock_images/modern_office_buildi_81a34715.jpg";

export function About() {
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

  const highlights = [
    {
      icon: Building2,
      label: "Registered",
      value: "2022",
    },
    {
      icon: Users,
      label: "Experience",
      value: "10+ Years",
    },
    {
      icon: Award,
      label: "Trusted",
      value: "Professional",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" data-testid="badge-about-section">
              About Us
            </Badge>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              data-testid="text-about-title"
            >
              Get the best Rudra Enterprises
            </h2>

            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 flex items-center gap-3 hover-elevate"
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <p
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
                data-testid="text-about-description"
              >
                Rudra Enterprises deals and provides services in the field of
                Manpower consultancy training and placement, audit services and
                project management.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We have accumulated experience of 10+ years in the domains
                providing services to government, corporate and various
                individuals and business.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The goal of company is to enhance the capacity and capability of
                local manpower, making them suitable for our customers and
                client, while generating profit for ourselves as well.
              </p>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-about-cta"
            >
              Contact Us
            </Button>
          </div>

          <div className="relative">
            <img
              src={aboutImage}
              alt="Rudra Enterprises Office"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              data-testid="img-about-office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
