import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesTree } from "@/components/services-tree";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Briefcase, Phone, Database, Zap, MessageSquare } from "lucide-react";

export default function Services() {
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    sessionStorage.setItem('scrollToSection', 'contact');
    setLocation("/");
  };

  const otherServices = [
    {
      icon: Briefcase,
      title: "Manpower Services",
      description:
        "Comprehensive manpower consultancy, training and placement services tailored to enhance workforce capabilities and meet organizational requirements effectively.",
      details: [
        "Recruitment & staffing solutions for all industries",
        "Training and skill development programs",
        "Placement assistance and career counseling",
        "Payroll and compliance management",
        "Contract staffing and temporary workforce solutions",
      ],
    },
    {
      icon: Phone,
      title: "Tele-Marketing / BPO",
      description:
        "Strategic telemarketing and business process outsourcing solutions to drive customer engagement, lead generation and operational efficiency.",
      details: [
        "Outbound and inbound calling services",
        "Lead generation and qualification",
        "Customer support and helpdesk services",
        "Appointment scheduling and follow-ups",
        "Survey and feedback collection",
      ],
    },
    {
      icon: Database,
      title: "Data Management Services",
      description:
        "Advanced data management solutions including collection, processing, analysis and secure storage to support informed business decisions.",
      details: [
        "Data entry and processing services",
        "Database management and maintenance",
        "Data cleansing and validation",
        "Document digitization and archiving",
        "Data analytics and reporting",
      ],
    },
    {
      icon: Zap,
      title: "Electrical Consultation",
      description:
        "Expert electrical consultation services for infrastructure projects, safety compliance and energy optimization for commercial and industrial clients.",
      details: [
        "Electrical system design and planning",
        "Energy audit and optimization",
        "Safety compliance and inspection",
        "Load analysis and power distribution",
        "Renewable energy integration consulting",
      ],
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      description:
        "Innovative WhatsApp marketing campaigns to reach target audiences effectively, boost engagement and drive business growth through direct messaging.",
      details: [
        "Bulk messaging and broadcast campaigns",
        "Customer engagement and support via WhatsApp",
        "Promotional campaigns and offers",
        "Automated responses and chatbots",
        "Analytics and performance tracking",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/">
            <Button variant="ghost" data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <ServicesTree />

        {/* Other Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="mb-4" data-testid="badge-other-services">
                Additional Services
              </Badge>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                data-testid="text-other-services-title"
              >
                More Ways We Can Help
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Beyond our specialized drone and audit services, we offer a comprehensive range of business solutions to support your growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover-elevate transition-all duration-300"
                  data-testid={`card-other-service-${index}`}
                >
                  <CardHeader className="p-0 mb-6">
                    <div className="p-4 rounded-lg bg-primary/10 w-fit mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                onClick={scrollToContact}
                data-testid="button-contact-services"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
