import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const expectations = [
  "Be consistent",
  "Communicate clearly",
  "Be honest about your skill level",
  "Complete assigned tasks",
  "Learn from feedback",
  "Respect deadlines",
  "Work as a team",
  "Be willing to improve",
  "Take responsibility for your work",
];

export function ExpectationsSection() {
  return (
    <section id="expect" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="What We Expect"
          title={<>Simple values that <span className="text-gradient-primary">make great teams</span></>}
        />

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expectations.map((e, i) => (
            <motion.div
              key={e}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl glass p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--neon-cyan)]" />
              <span className="text-sm font-medium text-foreground/90">{e}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
