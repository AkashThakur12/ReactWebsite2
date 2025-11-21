import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesTree } from "@/components/services-tree";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Services() {
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
      </main>
      <Footer />
    </div>
  );
}
