import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-teamcodeme.png";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showTagline?: boolean;
  variant?: "nav" | "hero-label";
  className?: string;
}

const sizeMap = {
  sm: { img: "h-[30px] w-auto", text: "text-sm" },
  md: { img: "h-[38px] w-auto", text: "text-base" },
  lg: { img: "h-[42px] w-auto", text: "text-lg" },
  xl: { img: "h-14 w-auto", text: "text-xl" },
};

export function BrandLogo({
  size = "md",
  showText = true,
  showTagline = false,
  variant = "nav",
  className = "",
}: BrandLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const sizes = sizeMap[size];

  const content = (
    <div
      className={`relative flex items-center gap-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {variant === "nav" && showText && (
        <>
          {/* Minimal logo mark - subtle glass badge */}
          <div
            className={`relative flex-shrink-0 overflow-hidden rounded-[14px] transition-all duration-300
              bg-gradient-to-br from-[rgba(34,211,238,0.08)] to-[rgba(34,197,94,0.06)]
              border border-[rgba(34,211,238,0.18)]
              shadow-[0_0_18px_rgba(34,211,238,0.12),inset_0_0_12px_rgba(255,255,255,0.03)]
              backdrop-blur-[10px] ${isHovered ? "shadow-[0_0_28px_rgba(34,211,238,0.2)]" : ""}`}
            style={{ padding: "6px" }}
          >
            <img
              src={logo}
              alt="Team CodeMe"
              className={`${sizes.img} object-contain transition-all duration-300 ${
                isHovered
                  ? "drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                  : "drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]"
              }`}
            />
          </div>

          {/* Text content */}
          {showText && (
            <div className="flex min-w-0 flex-col items-start justify-center overflow-hidden">
              <div className={`flex items-baseline gap-1.5 ${sizes.text}`}>
                <span
                  className={`font-display font-bold tracking-tight text-foreground ${
                    size === "lg" || size === "xl" ? "leading-tight" : ""
                  }`}
                >
                  Team <span className="text-gradient-primary">CodeMe</span>
                </span>
              </div>
              {showTagline && (
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60">
                  {"<"}join the team {"/>"}
                </span>
              )}
            </div>
          )}
        </>
      )}

      {/* Hero label - text only */}
      {variant === "hero-label" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[rgba(34,211,238,0.5)] bg-[rgba(34,211,238,0.05)] px-4 py-1.5 rounded-full border border-[rgba(34,211,238,0.15)] backdrop-blur-sm">
            // RECRUITMENT.2025
          </span>
        </motion.div>
      )}
    </div>
  );

  return content;
}
