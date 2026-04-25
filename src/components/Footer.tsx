import logo from "@/assets/logo-teamcodeme.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
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
    </footer>
  );
}
