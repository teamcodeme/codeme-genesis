import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-teamcodeme.png";

const primaryLinks = [{ label: "Home", href: "#" }];

const secondaryLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Apply", href: "#apply" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const programGuideLinks = [
  { label: "Who Can Join", href: "#who" },
  { label: "How It Works", href: "#how" },
  { label: "Payment Model", href: "#payment" },
  { label: "What You Will Learn", href: "#learn" },
  { label: "Expectations", href: "#expect" },
  { label: "Growth Path", href: "#growth" },
  { label: "Why Join", href: "#why" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <div
          className={`flex items-center justify-between gap-6 rounded-2xl px-4 py-2.5 transition-all w-full ${scrolled ? "glass-strong" : "glass"
            }`}
        >
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Team CodeMe logo"
              className="h-10 w-auto object-contain drop-shadow-[0_0_12px_oklch(0.82_0.18_200/0.5)]"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                Team <span className="text-gradient-primary">CodeMe</span>
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {"<join the team />"}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {primaryLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus:text-foreground">
                Program Guide
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="glass-strong min-w-56 border-border/70 p-2">
                {programGuideLinks.map((l) => (
                  <DropdownMenuItem key={l.label} asChild>
                    <a
                      href={l.href}
                      className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus:text-foreground"
                    >
                      {l.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {secondaryLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-5 py-2.5 text-sm font-semibold text-background shadow-[0_0_20px_oklch(0.82_0.18_200/0.4)] transition-all hover:shadow-[0_0_35px_oklch(0.82_0.18_200/0.6)] hover:-translate-y-0.5"
            >
              Apply Now
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden rounded-lg p-2 text-foreground"
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
          className="lg:hidden mx-5 mt-2 glass-strong rounded-2xl p-5 flex flex-col gap-4"
        >
          {primaryLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Program Guide</p>
            <div className="grid gap-2 pl-3">
              {programGuideLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          {secondaryLinks.map((l) => (
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
            href="#apply"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] px-5 py-2.5 text-center text-sm font-semibold text-background"
          >
            Apply Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
