import { motion } from "framer-motion";
import { ClipboardList, GraduationCap, Code2, Gauge, Coins, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  { n: "01", icon: ClipboardList, title: "Apply to Join", desc: "Submit your interest and current skill level — no resume tricks needed." },
  { n: "02", icon: GraduationCap, title: "Learn & Collaborate", desc: "Get guidance, starter tasks, and exposure to real project workflows." },
  { n: "03", icon: Code2, title: "Work on Projects", desc: "Contribute to client, startup, internal, or business projects at your level." },
  { n: "04", icon: Gauge, title: "Performance Review", desc: "We observe quality, communication, reliability, speed, and teamwork." },
  { n: "05", icon: Coins, title: "Earn by Contribution", desc: "When projects generate profit, contributors are paid based on role and impact." },
  { n: "06", icon: TrendingUp, title: "Grow Into Bigger Roles", desc: "Strong performers move into developer, lead, QA, UI/UX, and coordinator roles." },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="How It Works"
          title={<>A transparent path from <span className="text-gradient-primary">first task to first payout</span></>}
          description="Clear stages, honest expectations, and real opportunities to grow."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover-glow"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-blue)]/10 border border-[var(--neon-cyan)]/30">
                  <s.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                </div>
                <span className="font-mono text-xs font-bold text-[var(--neon-lime)]">{s.n}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
