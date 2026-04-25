import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center"
          style={{ boxShadow: "var(--shadow-glow-cyan)" }}
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, oklch(0.82 0.18 200 / 0.25), transparent 55%), radial-gradient(circle at 80% 80%, oklch(0.86 0.22 145 / 0.2), transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--neon-lime)]">
              // your move
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Start Where You Are. <br />
              <span className="text-gradient">Grow Where You Belong.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Whether you have one project or zero, your journey with Team
              CodeMe starts with a single application.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-7 py-3.5 text-sm font-semibold text-background shadow-[0_0_30px_oklch(0.82_0.18_200/0.5)] transition-all hover:shadow-[0_0_55px_oklch(0.82_0.18_200/0.8)] hover:-translate-y-0.5"
              >
                Apply to Join Team CodeMe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[var(--neon-lime)]/40"
              >
                <Sparkles className="h-4 w-4 text-[var(--neon-lime)]" />
                See How It Works
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
