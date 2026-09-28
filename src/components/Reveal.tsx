"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className, y = 36 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", dark = false }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left"; dark?: boolean }) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <span className={cn("inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase", dark ? "border-gold-400/40 bg-white/10 text-gold-300" : "border-forest-800/15 bg-white text-forest-700")}>
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
        {eyebrow}
      </span>
      <h2 className={cn("font-display mt-5 text-3xl md:text-5xl font-bold leading-tight", dark ? "text-white" : "text-forest-950")}>{title}</h2>
      {subtitle && <p className={cn("mt-4 text-base md:text-lg leading-relaxed", dark ? "text-white/70" : "text-forest-900/70")}>{subtitle}</p>}
      <div className={cn("mt-6 flex items-center gap-2", align === "center" && "justify-center")}>
        <span className="h-px w-12 bg-gold-500/70" />
        <span className="text-gold-500">❖</span>
        <span className="h-px w-12 bg-gold-500/70" />
      </div>
    </Reveal>
  );
}
