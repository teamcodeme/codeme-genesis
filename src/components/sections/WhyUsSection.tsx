import { motion } from "framer-motion";
import {
  Briefcase,
  Layout,
  Layers,
  Rocket,
  MessageSquare,
  LifeBuoy,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  { icon: Briefcase, title: "Business-focused solutions", desc: "Every line of code is written with your growth and ROI in mind." },
  { icon: Layout, title: "Clean UI/UX", desc: "Interfaces that delight users and convert visitors into customers." },
  { icon: Layers, title: "Scalable development", desc: "Architectures that grow with you — from MVP to enterprise scale." },
  { icon: Rocket, title: "Fast delivery", desc: "Agile sprints, transparent timelines, and shipping you can rely on." },
  { icon: MessageSquare, title: "Transparent communication", desc: "Real updates, real people. No jargon, no surprises." },
  { icon: LifeBuoy, title: "Long-term technical support", desc: "We stay with you after launch — maintenance, growth, evolution." },
];

export function WhyUsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>The team that <span className="text-gradient-primary">businesses trust</span></>}
          description="We combine engineering rigor with design clarity to deliver digital products that perform — and keep performing."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover-glow"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-blue)]/10 border border-[var(--neon-cyan)]/30">
                <item.icon className="h-5 w-5 text-[var(--neon-cyan)]" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
