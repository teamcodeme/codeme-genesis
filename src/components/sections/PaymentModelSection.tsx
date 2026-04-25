import { motion } from "framer-motion";
import { HandHeart, GitBranch, Coins, Award, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const phases = [
  { icon: HandHeart, title: "Volunteer / Learning Phase", desc: "Start by learning, shadowing, and helping with small tasks. Focus is on growth, not pay.", color: "var(--neon-cyan)" },
  { icon: GitBranch, title: "Project Contribution Phase", desc: "Take ownership of real tasks inside live client and internal projects.", color: "var(--neon-lime)" },
  { icon: Coins, title: "Profit-Based Payment Phase", desc: "When a project earns profit, you get paid based on contribution, role, and performance.", color: "var(--neon-cyan)" },
  { icon: Award, title: "Promotion Phase", desc: "Consistent performers move into senior contributor, lead, and specialist roles.", color: "var(--neon-blue)" },
  { icon: Briefcase, title: "Future Salary Opportunity", desc: "As we secure larger long-term and enterprise/government projects, top members may receive monthly salaries.", color: "var(--neon-lime)" },
];

export function PaymentModelSection() {
  return (
    <section id="payment" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Payment & Growth Model"
          title={<>Honest about <span className="text-gradient-primary">how we pay and grow</span></>}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 max-w-4xl rounded-2xl glass-strong p-6 md:p-8"
        >
          <div className="absolute -inset-px rounded-2xl opacity-40" style={{ background: "linear-gradient(135deg, var(--neon-cyan), transparent, var(--neon-lime))" }} aria-hidden="true" />
          <div className="relative">
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              At the early stage, most opportunities at Team CodeMe are{" "}
              <span className="text-[var(--neon-cyan)] font-semibold">volunteer, learning-based, or contract/project-based</span>.
              Payments are not fixed monthly salaries at the beginning. When a
              project generates profit, team members who contributed may
              receive payments based on their{" "}
              <span className="text-[var(--neon-lime)] font-semibold">contribution, performance, and the project's profitability</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              As Team CodeMe grows and secures larger long-term projects —
              including government or enterprise-level work — selected
              high-performing members may be offered{" "}
              <span className="text-foreground font-semibold">monthly salary-based roles</span>.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {phases.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 hover-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border" style={{ background: `color-mix(in oklab, ${p.color} 12%, transparent)`, borderColor: `color-mix(in oklab, ${p.color} 35%, transparent)` }}>
                <p.icon className="h-5 w-5" style={{ color: p.color }} />
              </div>
              <span className="mt-4 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phase 0{i + 1}</span>
              <h3 className="mt-1 font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
