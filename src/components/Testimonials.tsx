"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/content";

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={15} className="fill-gold-500 text-gold-500" />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-[2rem] border border-gold-500/25 bg-white/80 p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(6,46,22,0.4)] backdrop-blur text-center">
        <Quote className="mx-auto text-gold-500" size={36} />
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Stars />
            <p className="font-display mt-5 text-lg md:text-2xl leading-relaxed text-forest-950">“{t.text}”</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Image src={t.image} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-500" loading="lazy" />
              <div className="text-left">
                <p className="font-bold text-forest-950">{t.name}</p>
                <p className="text-xs text-forest-700">{t.city} • {t.treatment}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button aria-label="prev" onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/15 text-forest-900 hover:bg-forest-800 hover:text-white transition"><ChevronLeft size={19} /></button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`slide ${i}`} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gold-500" : "w-2 bg-forest-900/20"}`} />
            ))}
          </div>
          <button aria-label="next" onClick={() => setIdx((idx + 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/15 text-forest-900 hover:bg-forest-800 hover:text-white transition"><ChevronRight size={19} /></button>
        </div>
      </div>
    </div>
  );
}
