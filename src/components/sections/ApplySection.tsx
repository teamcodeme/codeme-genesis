import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(160),
  whatsapp: z.string().trim().min(5, "Enter a valid WhatsApp number").max(40),
  location: z.string().trim().min(2, "Enter your location").max(120),
  level: z.string().min(1, "Select your skill level"),
  interest: z.string().min(1, "Select an area of interest"),
  willing: z.string().min(1, "Please answer this"),
  link: z.string().trim().max(300).optional().or(z.literal("")),
  why: z.string().trim().min(20, "Please share at least a couple of sentences").max(1500),
});

const levels = ["Beginner", "Intermediate", "Advanced"];
const interests = [
  "Frontend",
  "Backend",
  "Full Stack",
  "UI / UX",
  "QA / Testing",
  "Marketing",
  "Content",
  "Project Coordination",
  "Other",
];

export function ApplySection() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application received! We'll review and reach out soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <section id="apply" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
            // Apply Now
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Apply to Join <span className="text-gradient-primary">Team CodeMe</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fill out the application below. We read every submission and reach
            out to candidates whose attitude and goals fit the team.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-2xl glass-strong p-6 md:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field name="name" label="Full Name" placeholder="Jane Doe" />
            <Field name="email" type="email" label="Email" placeholder="jane@example.com" />
            <Field name="whatsapp" label="WhatsApp Number" placeholder="+1 555 000 1234" />
            <Field name="location" label="Location" placeholder="City, Country" />

            <Select name="level" label="Current Skill Level" options={levels} placeholder="Select your level" />
            <Select name="interest" label="Area of Interest" options={interests} placeholder="Select your interest" />
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Are you willing to start as volunteer or contract-based contributor?
            </label>
            <div className="mt-2 flex flex-wrap gap-3">
              {["Yes, happy to start as volunteer", "Yes, contract/project-based", "Need to discuss"].map((opt) => (
                <label key={opt} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground/90 transition-all has-[:checked]:border-[var(--neon-cyan)] has-[:checked]:bg-[var(--neon-cyan)]/10">
                  <input type="radio" name="willing" value={opt} required className="accent-[var(--neon-cyan)]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <Field
            name="link"
            label="Portfolio / GitHub / LinkedIn (optional)"
            placeholder="https://github.com/yourname"
            required={false}
          />

          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Tell us why you want to join Team CodeMe
            </label>
            <textarea
              name="why"
              rows={5}
              maxLength={1500}
              required
              placeholder="Share your motivation, goals, and what you hope to learn..."
              className="mt-2 w-full resize-none rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-6 py-3.5 text-sm font-semibold text-background shadow-[0_0_25px_oklch(0.82_0.18_200/0.4)] transition-all hover:shadow-[0_0_45px_oklch(0.82_0.18_200/0.7)] disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Application"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text", required = true,
}: { name: string; label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={250}
        className="mt-2 w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20"
      />
    </div>
  );
}

function Select({
  name, label, options, placeholder,
}: { name: string; label: string; options: string[]; placeholder: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        required
        className="mt-2 w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
