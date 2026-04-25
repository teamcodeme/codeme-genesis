import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { Hero3D } from "@/components/Hero3D";

const trustItems = [
  "Custom Software Development",
  "Web & Mobile Solutions",
  "Business Automation",
  "Digital Marketing Support",
  "ERP & Dashboard Systems",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg animate-grid" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-60">
        <ParticleField />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon-lime)]" />
            <span>Trusted by ambitious businesses worldwide</span>
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Build Smarter <br />
            <span className="text-gradient">Digital Products</span>
            <br />
            With Team CodeMe
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We design and develop high-performing websites, business systems,
            automations, and digital platforms that help companies grow faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-7 py-3.5 text-sm font-semibold text-background shadow-[0_0_30px_oklch(0.82_0.18_200/0.4)] transition-all hover:shadow-[0_0_50px_oklch(0.82_0.18_200/0.7)] hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[var(--neon-cyan)]/40"
            >
              View Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
              // Our Capabilities
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {trustItems.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs text-foreground/80 backdrop-blur"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: 3D scene */}
        <div className="relative h-[500px] lg:h-[600px]">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
