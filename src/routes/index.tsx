import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoCanJoinSection } from "@/components/sections/WhoCanJoinSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PaymentModelSection } from "@/components/sections/PaymentModelSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { ExpectationsSection } from "@/components/sections/ExpectationsSection";
import { GrowthPathSection } from "@/components/sections/GrowthPathSection";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ApplySection } from "@/components/sections/ApplySection";
import { FaqSection } from "@/components/sections/FaqSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Join Team CodeMe | Developer Volunteer & Project-Based Opportunities" },
      {
        name: "description",
        content:
          "Join Team CodeMe as a beginner, volunteer, developer, designer, QA tester, or non-tech learner. Gain real project experience, grow with the team, and earn based on contribution and performance.",
      },
      {
        name: "keywords",
        content:
          "join team codeme, developer volunteer, beginner developer opportunities, internship, project-based work, software learning, frontend backend QA UI UX, non-tech learner, contract developer, recruitment",
      },
      { property: "og:title", content: "Join Team CodeMe | Grow Through Real Projects" },
      {
        property: "og:description",
        content:
          "Volunteer, learn, and build real-world projects with Team CodeMe. Performance-based growth, contract opportunities, and future salary roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Join Team CodeMe — Grow Through Real Projects" },
      {
        name: "twitter:description",
        content:
          "Beginner-friendly. Performance-based. Real projects. Apply to join Team CodeMe today.",
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
        <WhoCanJoinSection />
        <HowItWorksSection />
        <PaymentModelSection />
        <LearnSection />
        <ExpectationsSection />
        <GrowthPathSection />
        <WhyJoinSection />
        <CtaSection />
        <ApplySection />
        <FaqSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
