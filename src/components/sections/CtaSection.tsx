import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

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
          {/* radial glow */}
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
              // let's build
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Ready to Build <br />
              <span className="text-gradient">Something Powerful?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Let Team CodeMe turn your idea into a professional digital product
              built for growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-7 py-3.5 text-sm font-semibold text-background shadow-[0_0_30px_oklch(0.82_0.18_200/0.5)] transition-all hover:shadow-[0_0_55px_oklch(0.82_0.18_200/0.8)] hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[var(--neon-lime)]/40"
              >
                <MessageCircle className="h-4 w-4 text-[var(--neon-lime)]" />
                Contact Team CodeMe
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
