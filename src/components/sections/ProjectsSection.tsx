import { motion } from "framer-motion";
import { ArrowUpRight, Globe, LayoutDashboard, CalendarCheck, Megaphone, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const projects = [
  { icon: Globe, tag: "Web", title: "Business Website", desc: "Multi-page corporate site with CMS." },
  { icon: LayoutDashboard, tag: "ERP", title: "ERP Dashboard", desc: "Inventory, sales, and HR in one system." },
  { icon: CalendarCheck, tag: "Platform", title: "Booking System", desc: "Real-time scheduling with payments." },
  { icon: Megaphone, tag: "Marketing", title: "Marketing Landing Page", desc: "High-converting funnel optimized for ads." },
  { icon: Workflow, tag: "Automation", title: "Automation Workflow", desc: "Connects tools, removes manual work." },
];

function ProjectMockup({ Icon }: { Icon: typeof Globe }) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl glass-strong">
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* fake window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border/50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-destructive/60" />
        <span className="h-2 w-2 rounded-full bg-[var(--neon-lime)]/60" />
        <span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)]/60" />
      </div>
      <div className="relative flex h-[calc(100%-32px)] items-center justify-center">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, oklch(0.82 0.18 200 / 0.3), transparent 50%), radial-gradient(circle at 70% 70%, oklch(0.86 0.22 145 / 0.25), transparent 50%)",
          }}
        />
        <Icon className="relative h-16 w-16 text-[var(--neon-cyan)]" strokeWidth={1.25} />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Projects we love <span className="text-gradient-primary">to build</span></>}
          description="A taste of the digital products we craft for our clients."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl glass p-5 hover-glow"
            >
              <ProjectMockup Icon={p.icon} />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--neon-lime)]">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass-strong text-foreground transition-all group-hover:bg-[var(--neon-cyan)] group-hover:text-background">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
