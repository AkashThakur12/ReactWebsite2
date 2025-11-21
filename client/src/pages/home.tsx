import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection) {
      sessionStorage.removeItem('scrollToSection');
      
      let attempts = 0;
      const maxAttempts = 60;
      
      const scrollToElement = () => {
        const element = document.getElementById(targetSection);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      const attemptScroll = () => {
        attempts++;
        if (scrollToElement() || attempts >= maxAttempts) {
          return;
        }
        requestAnimationFrame(attemptScroll);
      };

      setTimeout(() => attemptScroll(), 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
