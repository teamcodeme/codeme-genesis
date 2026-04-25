import { motion } from "framer-motion";
import { Briefcase, Building2, Code2, ShieldCheck, Compass, Coins, TrendingUp, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const benefits = [
  { icon: Briefcase, title: "Build real portfolio experience" },
  { icon: Building2, title: "Work with real business projects" },
  { icon: Code2, title: "Learn practical development skills" },
  { icon: ShieldCheck, title: "Improve confidence" },
  { icon: Compass, title: "Get mentorship and guidance" },
  { icon: Coins, title: "Earn based on performance" },
  { icon: TrendingUp, title: "Get promoted based on results" },
  { icon: Users, title: "Be part of a growing company" },
];

export function WhyJoinSection() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Why Join Team CodeMe"
          title={<>More than a team — <span className="text-gradient-primary">a launchpad</span></>}
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl glass p-5 hover-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon-lime)]/10 border border-[var(--neon-lime)]/30">
                <b.icon className="h-5 w-5 text-[var(--neon-lime)]" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug">{b.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
