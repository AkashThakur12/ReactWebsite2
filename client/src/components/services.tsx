import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Briefcase, 
  FileCheck, 
  Phone, 
  Database, 
  Zap, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Manpower Services",
      description:
        "Comprehensive manpower consultancy, training and placement services tailored to enhance workforce capabilities and meet organizational requirements effectively.",
    },
    {
      icon: FileCheck,
      title: "Audit Services",
      description:
        "Professional audit and compliance services ensuring accuracy, transparency and adherence to regulatory standards for businesses and organizations.",
    },
    {
      icon: Phone,
      title: "Tele-Marketing / BPO",
      description:
        "Strategic telemarketing and business process outsourcing solutions to drive customer engagement, lead generation and operational efficiency.",
    },
    {
      icon: Database,
      title: "Data Management Services",
      description:
        "Advanced data management solutions including collection, processing, analysis and secure storage to support informed business decisions.",
    },
    {
      icon: Zap,
      title: "Electrical Consultation",
      description:
        "Expert electrical consultation services for infrastructure projects, safety compliance and energy optimization for commercial and industrial clients.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      description:
        "Innovative WhatsApp marketing campaigns to reach target audiences effectively, boost engagement and drive business growth through direct messaging.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4" data-testid="badge-services-section">
            Our Services
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            data-testid="text-services-title"
          >
            Services We Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <CardHeader className="p-0 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <Link href="/services">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium hover:text-primary group"
                    data-testid={`button-service-learn-${index}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
