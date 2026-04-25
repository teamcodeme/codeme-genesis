import { motion } from "framer-motion";
import { TrendingUp, Globe2, Gauge, Crown, Layers3, Smile } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const benefits = [
  { icon: TrendingUp, title: "More leads", metric: "+128%" },
  { icon: Globe2, title: "Better online presence", metric: "10×" },
  { icon: Gauge, title: "Faster operations", metric: "−65% time" },
  { icon: Crown, title: "Professional brand image", metric: "premium" },
  { icon: Layers3, title: "Scalable systems", metric: "∞" },
  { icon: Smile, title: "Better customer experience", metric: "5.0★" },
];

export function ResultsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="The Outcomes"
          title={<>Results clients <span className="text-gradient-primary">actually feel</span></>}
          description="We measure success in real business outcomes — not vanity metrics."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl glass p-6 hover-glow"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon-lime)]/10 border border-[var(--neon-lime)]/30">
                  <b.icon className="h-5 w-5 text-[var(--neon-lime)]" />
                </div>
                <span className="font-mono text-sm font-bold text-[var(--neon-cyan)]">{b.metric}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{b.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
