import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams, useLocation } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { getServiceBySlug, type ServiceDetail } from "@/data/services-data";
import { useEffect } from "react";

export default function ServiceDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const category = params.category as "drone" | "audit";
  const serviceId = params.serviceId;

  const service: ServiceDetail | undefined = getServiceBySlug(category, serviceId || "");

  useEffect(() => {
    if (!service) {
      setLocation("/services");
    }
  }, [service, setLocation]);

  if (!service) {
    return null;
  }

  const scrollToContact = () => {
    setLocation("/#contact");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const categoryLabel =
    category === "drone" ? "Drone Survey Services" : "Audit Services";

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className={`relative py-16 md:py-24 bg-gradient-to-br ${service.color}/10 via-background to-background`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/services">
              <Button
                variant="ghost"
                className="mb-8"
                data-testid="button-back-services"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>

            <div className="max-w-4xl">
              <Badge className="mb-4" data-testid="badge-service-category">
                {categoryLabel}
              </Badge>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
                data-testid="text-service-title"
              >
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{feature}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">{service.subtitle}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {service.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>

              <div>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`py-16 md:py-24 bg-gradient-to-br ${service.color}`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our experts to discuss how {service.title} can benefit
              your business.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              data-testid="button-contact-cta"
            >
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
