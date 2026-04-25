import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-blue)]">
            <Code2 className="h-4 w-4 text-background" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold">
            Team <span className="text-gradient-primary">CodeMe</span>
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Team CodeMe — Built with{" "}
          <span className="text-[var(--neon-cyan)]">{"<code/>"}</span> &amp;
          care.
        </p>
      </div>
    </footer>
  );
}
