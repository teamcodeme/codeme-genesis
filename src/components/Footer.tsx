import logo from "@/assets/logo-teamcodeme.png";

const sectionLinks = [
  { label: "Home", href: "#home" },
  { label: "Who Can Join", href: "#who" },
  { label: "How It Works", href: "#how" },
  { label: "Payment Model", href: "#payment" },
  { label: "What You Will Learn", href: "#learn" },
  { label: "Expectations", href: "#expect" },
  { label: "Growth Path", href: "#growth" },
  { label: "Why Us", href: "#why-us" },
  { label: "Why Join", href: "#why" },
  { label: "Start Application", href: "#start" },
  { label: "Apply", href: "#apply" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Team CodeMe logo" className="h-8 w-auto object-contain" />
            <span className="font-display font-bold">
              Team <span className="text-gradient-primary">CodeMe</span>
            </span>
          </div>
          <p className="font-mono text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Team CodeMe — Grow with{" "}
            <span className="text-[var(--neon-cyan)]">{"<code/>"}</span> &amp; community.
          </p>
        </div>
        <nav aria-label="Footer section navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-3">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
