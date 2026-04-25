import { motion } from "framer-motion";
import {
  Workflow,
  Layout,
  Server,
  Palette,
  Bug,
  GitBranch,
  Users,
  MessageSquare,
  FileText,
  Rocket,
  Megaphone,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const topics = [
  { icon: Workflow, title: "Real software development workflow" },
  { icon: Layout, title: "Frontend development" },
  { icon: Server, title: "Backend development" },
  { icon: Palette, title: "UI/UX design" },
  { icon: Bug, title: "QA testing" },
  { icon: GitBranch, title: "Git & GitHub workflow" },
  { icon: Users, title: "Agile / team collaboration" },
  { icon: MessageSquare, title: "Client communication basics" },
  { icon: FileText, title: "Project documentation" },
  { icon: Rocket, title: "Deployment basics" },
  { icon: Megaphone, title: "Marketing & digital product thinking" },
];

export function LearnSection() {
  return (
    <section id="learn" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="What You Will Learn"
          title={<>Skills that <span className="text-gradient-primary">actually ship products</span></>}
          description="Move beyond tutorials. Practice the things real teams do every day."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex items-center gap-3 rounded-xl glass p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--neon-cyan)]/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--neon-lime)]/10 border border-[var(--neon-lime)]/30">
                <t.icon className="h-4 w-4 text-[var(--neon-lime)]" />
              </div>
              <span className="text-xs font-medium text-foreground/90 sm:text-sm">{t.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
