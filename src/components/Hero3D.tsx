import { motion } from "framer-motion";
import { Braces, Cpu, Sparkles, Terminal, Zap } from "lucide-react";

const codeLines = [
  { c: "text-[var(--neon-cyan)]", t: "const" },
  { c: "text-foreground", t: " future " },
  { c: "text-muted-foreground", t: "= " },
  { c: "text-[var(--neon-lime)]", t: "build" },
  { c: "text-muted-foreground", t: "(" },
  { c: "text-[var(--neon-blue)]", t: "'CodeMe'" },
  { c: "text-muted-foreground", t: ");" },
];

export function Hero3D() {
  return (
    <div className="relative h-full w-full perspective-[1400px]">
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-8 h-32 w-32 rounded-3xl glass-strong glow-cyan flex items-center justify-center"
        style={{ transform: "rotateY(-15deg) rotateX(8deg)" }}
      >
        <Braces className="h-14 w-14 text-[var(--neon-cyan)]" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-2 top-20 h-24 w-24 rounded-2xl glass-strong flex items-center justify-center"
        style={{ transform: "rotateY(20deg) rotateX(-10deg)", boxShadow: "var(--shadow-glow-lime)" }}
      >
        <Sparkles className="h-10 w-10 text-[var(--neon-lime)]" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-12 left-12 h-20 w-20 rounded-2xl glass-strong flex items-center justify-center"
        style={{ transform: "rotateY(-25deg) rotateX(15deg)" }}
      >
        <Cpu className="h-9 w-9 text-[var(--neon-blue)]" strokeWidth={1.5} />
      </motion.div>

      {/* Central code window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        whileHover={{ rotateY: 4, rotateX: -3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] max-w-md"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative rounded-2xl glass-strong overflow-hidden glow-cyan">
          {/* Window header */}
          <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--neon-lime)]/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--neon-cyan)]/80" />
            <div className="ml-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Terminal className="h-3 w-3" />
              codeme.terminal
            </div>
          </div>

          {/* Code body */}
          <div className="p-5 font-mono text-sm leading-relaxed">
            <div className="flex">
              <span className="mr-4 text-muted-foreground/50 select-none">01</span>
              <span className="text-muted-foreground">
                <span className="text-[var(--neon-blue)]">import</span>{" "}
                <span className="text-foreground">{"{ Growth }"}</span>{" "}
                <span className="text-[var(--neon-blue)]">from</span>{" "}
                <span className="text-[var(--neon-lime)]">'codeme'</span>;
              </span>
            </div>
            <div className="flex">
              <span className="mr-4 text-muted-foreground/50 select-none">02</span>
              <span>
                {codeLines.map((l, i) => (
                  <span key={i} className={l.c}>
                    {l.t}
                  </span>
                ))}
              </span>
            </div>
            <div className="flex">
              <span className="mr-4 text-muted-foreground/50 select-none">03</span>
              <span className="text-muted-foreground">
                <span className="text-[var(--neon-blue)]">return</span>{" "}
                <span className="text-foreground">future</span>.
                <span className="text-[var(--neon-cyan)]">scale</span>();
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2">
              <Zap className="h-3.5 w-3.5 text-[var(--neon-lime)]" />
              <span className="text-xs text-muted-foreground">
                Build:{" "}
                <span className="text-[var(--neon-lime)]">success</span> · 0 errors
              </span>
              <span className="ml-auto h-2 w-2 animate-glow-pulse rounded-full bg-[var(--neon-lime)] shadow-[0_0_10px_oklch(0.86_0.22_145)]" />
            </div>

            {/* progress bars */}
            <div className="mt-4 space-y-2">
              {[
                { l: "Performance", w: "94%", c: "var(--neon-cyan)" },
                { l: "Quality", w: "98%", c: "var(--neon-lime)" },
                { l: "Delivery", w: "92%", c: "var(--neon-blue)" },
              ].map((b, i) => (
                <div key={b.l} className="flex items-center gap-3 text-xs">
                  <span className="w-20 text-muted-foreground">{b.l}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: b.w }}
                      transition={{ duration: 1.4, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${b.c}, oklch(0.86 0.22 145))` }}
                    />
                  </div>
                  <span className="font-mono text-[var(--neon-cyan)]">{b.w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* shimmer line */}
          <div className="absolute inset-x-0 top-0 h-px animate-shimmer" />
        </div>
      </motion.div>

      {/* Orbiting dot */}
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute h-3 w-3 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_15px_oklch(0.82_0.18_200)]"
          style={{ animation: "orbit 14s linear infinite" }}
        />
        <div
          className="absolute h-2 w-2 rounded-full bg-[var(--neon-lime)] shadow-[0_0_12px_oklch(0.86_0.22_145)]"
          style={{ animation: "orbit 18s linear infinite reverse" }}
        />
      </div>
    </div>
  );
}
