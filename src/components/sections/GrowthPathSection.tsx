import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const path = [
  { label: "Beginner / Volunteer", note: "Where everyone starts" },
  { label: "Trainee Contributor", note: "Guided, structured tasks" },
  { label: "Project Contributor", note: "Real ownership of features" },
  { label: "Paid Contract Contributor", note: "Profit-based payments" },
  { label: "Core Team Member", note: "Trusted with key projects" },
  { label: "Team Lead / Specialist", note: "Mentor others, own outcomes" },
  { label: "Future Salary-Based Role", note: "Once long-term projects scale" },
];

export function GrowthPathSection() {
  return (
    <section id="growth" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Growth Path"
          title={<>Your roadmap from <span className="text-gradient-primary">beginner to leader</span></>}
          description="Every step is earned through performance, not waiting time."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-lime)] to-[var(--neon-blue)] opacity-50 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {path.map((p, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 ${isRight ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`pl-12 md:pl-0 ${isRight ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="rounded-2xl glass-strong p-5 hover-glow">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--neon-lime)]">
                        Stage {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-semibold">{p.label}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                    </div>
                  </div>
                  {/* dot */}
                  <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                    <div className="relative">
                      <div className="h-3 w-3 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_15px_oklch(0.82_0.18_200)]" />
                      <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[var(--neon-cyan)]/40" />
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
