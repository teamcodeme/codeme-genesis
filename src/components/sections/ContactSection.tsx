import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, Github, Linkedin, Twitter } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(5, "Enter a valid phone").max(40),
  service: z.string().trim().min(1, "Select a service"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1200),
});

const services = [
  "Website Development",
  "Web Application",
  "ERP / Business System",
  "UI/UX Design",
  "Automation",
  "Digital Marketing",
  "Other",
];

export function ContactSection() {
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
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
              // Get in touch
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let's start a <span className="text-gradient-primary">conversation</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us about your project. We'll respond within 24 hours with next
              steps and a free consultation.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@teamcodeme.com" },
                { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 010-CODE" },
                { icon: MapPin, label: "Location", value: "Remote · Worldwide" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-xl glass p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30">
                    <c.icon className="h-4 w-4 text-[var(--neon-cyan)]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-10 w-10 items-center justify-center rounded-lg glass text-muted-foreground transition-all hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl glass-strong p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
              <Field name="phone" label="Phone" placeholder="+1 555 000 1234" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Service needed
                </label>
                <select
                  name="service"
                  defaultValue=""
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={1200}
                required
                placeholder="Tell us about your project, goals, and timeline..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-6 py-3.5 text-sm font-semibold text-background shadow-[0_0_25px_oklch(0.82_0.18_200/0.4)] transition-all hover:shadow-[0_0_45px_oklch(0.82_0.18_200/0.7)] disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text",
}: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20"
      />
    </div>
  );
}
