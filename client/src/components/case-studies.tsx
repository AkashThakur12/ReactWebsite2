import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import caseStudy1 from "@assets/stock_images/business_team_collab_f97567ca.jpg";
import caseStudy2 from "@assets/stock_images/business_team_collab_c5705a94.jpg";
import caseStudy3 from "@assets/stock_images/business_team_collab_11acabba.jpg";
import caseStudy4 from "@assets/stock_images/professional_busines_09d6bd71.jpg";

export function CaseStudies() {
  const portfolioProjects = [
    {
      image: caseStudy1,
      title: "Mining Site Survey & Analysis",
      category: "Drone Survey",
      description: "Comprehensive aerial survey for mining operations with volumetric analysis and site planning.",
    },
    {
      image: caseStudy4,
      title: "Retail Stock Audit & Compliance",
      category: "Audit Services",
      description: "Multi-location retail audit ensuring inventory accuracy and compliance across 50+ stores.",
    },
    {
      image: caseStudy2,
      title: "Corporate Manpower Placement",
      category: "Manpower Services",
      description: "Recruited and placed 200+ skilled professionals for a leading corporate client.",
    },
    {
      image: caseStudy3,
      title: "Telemarketing Campaign Success",
      category: "Tele-Marketing",
      description: "Generated 5000+ qualified leads through strategic outbound calling campaigns.",
    },
    {
      image: caseStudy1,
      title: "Construction Site Monitoring",
      category: "Drone Survey",
      description: "Real-time progress tracking and documentation for large-scale infrastructure project.",
    },
    {
      image: caseStudy2,
      title: "Data Management Solution",
      category: "Data Services",
      description: "Digitized and organized 100,000+ records for government department.",
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4" data-testid="badge-portfolio-section">
            Portfolio
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            data-testid="text-portfolio-title"
          >
            Work We've Completed
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Explore our successful projects across drone surveys, audits, manpower solutions, and business services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate transition-all duration-300"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-portfolio-${index}`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  flex flex-col justify-end p-6"
                >
                  <Badge
                    className="w-fit mb-2 bg-white/20 backdrop-blur-sm border-white/40 text-white"
                    data-testid={`badge-portfolio-category-${index}`}
                  >
                    {project.category}
                  </Badge>
                  <h3
                    className="text-xl font-semibold text-white mb-2"
                    data-testid={`text-portfolio-title-${index}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
