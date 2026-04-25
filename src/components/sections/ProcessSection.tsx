import { motion } from "framer-motion";
import { Compass, Pencil, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  { n: "01", icon: Compass, title: "Discover", desc: "We dive into your goals, audience, and challenges to define what success looks like." },
  { n: "02", icon: Pencil, title: "Design", desc: "We craft intuitive interfaces and architectures aligned with your brand." },
  { n: "03", icon: Code2, title: "Develop", desc: "Our engineers build with modern, scalable, and tested technologies." },
  { n: "04", icon: Rocket, title: "Launch & Support", desc: "We ship, monitor, and grow your product long after go-live." },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Process"
          title={<>A simple, proven path <span className="text-gradient-primary">from idea to impact</span></>}
          description="Four focused stages that keep your project on track, on budget, and on brand."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/40 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl glass-strong glow-cyan">
                  <s.icon className="h-9 w-9 text-[var(--neon-cyan)]" strokeWidth={1.75} />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-blue)] font-mono text-[11px] font-bold text-background">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-center font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
