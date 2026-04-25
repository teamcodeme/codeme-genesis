import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <div
          className={`flex items-center justify-between gap-6 rounded-2xl px-5 py-3 transition-all w-full ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-blue)] glow-cyan">
              <Code2 className="h-5 w-5 text-background" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                Team <span className="text-gradient-primary">CodeMe</span>
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {"<build smarter />"}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-lime)] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-5 py-2.5 text-sm font-semibold text-background shadow-[0_0_20px_oklch(0.82_0.18_200/0.4)] transition-all hover:shadow-[0_0_35px_oklch(0.82_0.18_200/0.6)] hover:-translate-y-0.5"
            >
              Get Started
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-lg p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-5 mt-2 glass-strong rounded-2xl p-5 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-5 py-2.5 text-center text-sm font-semibold text-background"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
