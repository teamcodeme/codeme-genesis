import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team CodeMe | Software Development, Websites & Business Automation" },
      {
        name: "description",
        content:
          "Team CodeMe builds professional websites, web applications, ERP systems, dashboards, automations, and digital solutions that help businesses grow.",
      },
      {
        name: "keywords",
        content:
          "software development, web development, ERP, business automation, dashboards, digital marketing, web applications, UI/UX design, Team CodeMe",
      },
      { property: "og:title", content: "Team CodeMe | Build Smarter Digital Products" },
      {
        property: "og:description",
        content:
          "We design and develop high-performing websites, business systems, and automations that help companies grow faster.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Team CodeMe — Build Smarter Digital Products" },
      {
        name: "twitter:description",
        content:
          "Professional websites, web apps, ERP systems, automations, and digital marketing.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <ProjectsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
