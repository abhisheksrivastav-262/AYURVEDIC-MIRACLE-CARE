"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={cn("overflow-hidden rounded-2xl border transition-all duration-300", isOpen ? "border-gold-500/50 bg-white shadow-[0_16px_40px_-16px_rgba(201,162,39,0.5)]" : "border-forest-900/10 bg-white/70")}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-semibold text-forest-950 text-[15px] md:text-base">{f.q}</span>
              <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full transition", isOpen ? "bg-forest-800 text-gold-300 rotate-45" : "bg-cream-200 text-forest-800")}><Plus size={17} /></span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <p className="px-5 pb-5 text-sm md:text-[15px] leading-relaxed text-forest-900/75">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
