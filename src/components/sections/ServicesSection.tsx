import { motion } from "framer-motion";
import {
  Globe,
  AppWindow,
  Database,
  Palette,
  Workflow,
  Search,
  Megaphone,
  BarChart3,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  { icon: Globe, title: "Website Development", desc: "Marketing sites that load fast, look stunning, and rank well.", span: "lg:col-span-2 lg:row-span-2", featured: true },
  { icon: AppWindow, title: "Web Application Development", desc: "Custom platforms built for scale and performance." },
  { icon: Database, title: "ERP & Business Systems", desc: "Streamline operations with tailored ERP solutions." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces designed around real users and real outcomes." },
  { icon: Workflow, title: "Automation & Workflow", desc: "Eliminate repetitive work with smart automations." },
  { icon: Search, title: "SEO-Friendly Landing Pages", desc: "Convert traffic with pages built to rank and persuade." },
  { icon: Megaphone, title: "Digital Marketing Support", desc: "Strategy + execution that drives qualified leads." },
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "See your business clearly with custom dashboards." },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="What We Do"
          title={<>Services that turn ideas into <span className="text-gradient-primary">growth engines</span></>}
          description="From a single landing page to a full enterprise platform — we cover the entire digital journey."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl gradient-border p-6 transition-all duration-500 hover:-translate-y-1 ${s.span ?? ""} ${s.featured ? "" : ""}`}
            >
              {/* glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl" style={{ background: "linear-gradient(135deg, oklch(0.82 0.18 200 / 0.15), oklch(0.86 0.22 145 / 0.1))" }} />
              </div>

              {s.featured && (
                <div
                  className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
                  style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 60%)" }}
                />
              )}

              <div className="relative flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-lime)]/10 border border-[var(--neon-cyan)]/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                </div>
                <h3 className={`mt-4 font-display font-semibold ${s.featured ? "text-2xl" : "text-base"}`}>
                  {s.title}
                </h3>
                <p className={`mt-2 text-muted-foreground ${s.featured ? "text-base max-w-sm" : "text-xs"}`}>
                  {s.desc}
                </p>
                {s.featured && (
                  <div className="mt-auto pt-4">
                    <span className="font-mono text-xs text-[var(--neon-lime)]">{"// flagship service →"}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
