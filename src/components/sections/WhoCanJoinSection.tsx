import { motion } from "framer-motion";
import {
  HeartHandshake,
  Code2,
  GraduationCap,
  Sprout,
  Palette,
  Bug,
  Megaphone,
  BookOpen,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const roles = [
  { icon: HeartHandshake, title: "Volunteer Developers", desc: "Contribute, learn, and build a real portfolio.", span: "lg:col-span-2" },
  { icon: Code2, title: "Beginner Programmers", desc: "Start small. Grow with mentorship and real tasks." },
  { icon: Sprout, title: "Inexperienced Developers", desc: "Turn tutorials into shipped, production work." },
  { icon: BookOpen, title: "Non-Tech Learners", desc: "Willing to learn? You belong here too." },
  { icon: Palette, title: "UI/UX Learners", desc: "Design real interfaces used by real users." },
  { icon: Bug, title: "QA / Testing Learners", desc: "Find bugs, write cases, ship quality." },
  { icon: Megaphone, title: "Marketing & Content", desc: "Help projects reach the right audience." },
  { icon: GraduationCap, title: "Students", desc: "Get experience that actually impresses recruiters." },
];

export function WhoCanJoinSection() {
  return (
    <section id="who" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Who Can Join"
          title={<>Built for <span className="text-gradient-primary">passionate beginners</span> and curious learners</>}
          description="Attitude, consistency, communication, and willingness to learn matter more than years of experience."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl gradient-border p-6 transition-all duration-500 hover:-translate-y-1 ${r.span ?? ""}`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl" style={{ background: "linear-gradient(135deg, oklch(0.82 0.18 200 / 0.15), oklch(0.86 0.22 145 / 0.1))" }} />
              </div>
              <div className="relative flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-lime)]/10 border border-[var(--neon-cyan)]/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <r.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
