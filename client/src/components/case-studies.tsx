import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import caseStudy1 from "@assets/stock_images/business_team_collab_f97567ca.jpg";
import caseStudy2 from "@assets/stock_images/business_team_collab_c5705a94.jpg";
import caseStudy3 from "@assets/stock_images/business_team_collab_11acabba.jpg";

export function CaseStudies() {
  const caseStudies = [
    {
      image: caseStudy1,
      title: "Security Management",
      category: "Enterprise Solutions",
    },
    {
      image: caseStudy2,
      title: "Marketing Campaign",
      category: "Digital Marketing",
    },
    {
      image: caseStudy3,
      title: "Team Development",
      category: "Workforce Training",
    },
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4" data-testid="badge-case-studies-section">
            Portfolio
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            data-testid="text-case-studies-title"
          >
            Our Recent Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate transition-all duration-300"
              data-testid={`card-case-study-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-case-study-${index}`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  flex flex-col justify-end p-6"
                >
                  <Badge
                    className="w-fit mb-2 bg-white/20 backdrop-blur-sm border-white/40 text-white"
                    data-testid={`badge-case-study-category-${index}`}
                  >
                    {study.category}
                  </Badge>
                  <h3
                    className="text-xl font-semibold text-white"
                    data-testid={`text-case-study-title-${index}`}
                  >
                    {study.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
