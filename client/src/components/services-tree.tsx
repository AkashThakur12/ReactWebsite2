import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ServiceBranch {
  title: string;
  href: string;
  subServices?: string[];
}

interface ServiceCategory {
  title: string;
  color: string;
  branches: ServiceBranch[];
  side: "left" | "right";
}

export function ServicesTree() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "DRONE SURVEY SERVICES",
      color: "from-blue-500 to-cyan-500",
      side: "left",
      branches: [
        { title: "Mining Survey", href: "/services/drone/mining" },
        { title: "Construction Survey", href: "/services/drone/construction" },
        { title: "Agriculture Survey", href: "/services/drone/agriculture" },
        { title: "Solar Industry Survey", href: "/services/drone/solar" },
        { title: "Powerline Monitoring", href: "/services/drone/powerline" },
        { title: "Bridge & Road Inspection", href: "/services/drone/bridge-road" },
        { title: "Forest & Wildlife Survey", href: "/services/drone/forest-wildlife" },
        { title: "Disaster Management", href: "/services/drone/disaster" },
        { title: "Railway Survey", href: "/services/drone/railway" },
        { title: "Industrial Inspection", href: "/services/drone/industrial" },
        { title: "Smart City Survey", href: "/services/drone/smart-city" },
        { title: "Pipeline Inspection", href: "/services/drone/pipeline" },
        { title: "River Mapping", href: "/services/drone/river-mapping" },
        { title: "Lidar Survey", href: "/services/drone/lidar" },
      ],
    },
    {
      title: "AUDIT SERVICES",
      color: "from-pink-500 to-purple-500",
      side: "right",
      branches: [
        { title: "Stock Audit", href: "/services/audit/stock-audit" },
        { title: "Retail Audits", href: "/services/audit/retail-audits" },
        { title: "Competitor Analysis", href: "/services/audit/competitor-analysis" },
        { title: "Market Research", href: "/services/audit/market-research" },
        { title: "Mystery Audits", href: "/services/audit/mystery-audits" },
        { title: "Customer Profiling", href: "/services/audit/customer-profiling" },
        { title: "BTL Campaigns", href: "/services/audit/btl-campaigns" },
        { title: "Channel Management", href: "/services/audit/channel-management" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4" data-testid="badge-services-tree">
            Our Services
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
            data-testid="text-expertise-title"
          >
            OUR EXPERTISE
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-pink-500 rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-pink-500 to-purple-500 hidden md:block" />

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative">
                {/* Category Card */}
                <div className="flex justify-center mb-8">
                  <Card
                    className={`p-6 md:p-8 max-w-md w-full md:w-auto border-2 bg-gradient-to-r ${category.color} text-white hover-elevate transition-all duration-300`}
                    data-testid={`card-category-${categoryIndex}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-center">
                      {category.title}
                    </h3>
                  </Card>
                </div>

                {/* Horizontal connector line for desktop */}
                <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-pink-500 to-transparent" />

                {/* Service Branches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
                  {category.branches.map((branch, branchIndex) => {
                    const isLeft = category.side === "left";
                    const gridColumn = isLeft
                      ? branchIndex % 2 === 0
                        ? "md:col-start-1"
                        : "md:col-start-2"
                      : branchIndex % 2 === 0
                      ? "md:col-start-2"
                      : "md:col-start-1";

                    return (
                      <div
                        key={branchIndex}
                        className={`relative ${gridColumn}`}
                      >
                        {/* Connector lines for desktop */}
                        <div className="hidden md:block absolute top-1/2 h-px bg-gradient-to-r from-pink-500/50 to-transparent w-16 -left-16 transform -translate-y-1/2" />
                        
                        <Link href={branch.href}>
                          <Card
                            className="p-6 group hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary"
                            data-testid={`card-service-${categoryIndex}-${branchIndex}`}
                          >
                            <div className="flex items-center justify-between gap-4">
                              <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {branch.title}
                              </h4>
                              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                          </Card>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Click on any service to learn more about how Rudra Enterprises can
            help transform your business with our expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
