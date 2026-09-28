"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const cats = ["All", "Clinic", "Herbal Medicine", "Treatment", "Patients", "Ayurvedic Herbs"] as const;

const photos: { src: string; cat: Exclude<(typeof cats)[number], "All">; label: string; tall?: boolean }[] = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop", cat: "Clinic", label: "Modern Ayurvedic Clinic" },
  { src: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop", cat: "Ayurvedic Herbs", label: "Raw Herbs Collection", tall: true },
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop", cat: "Herbal Medicine", label: "Herbal Formulations" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", cat: "Treatment", label: "Yoga & Lifestyle Therapy", tall: true },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", cat: "Treatment", label: "Health Monitoring" },
  { src: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=800&auto=format&fit=crop", cat: "Ayurvedic Herbs", label: "Natural Healing Botanicals" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop", cat: "Patients", label: "Wellness Guidance", tall: true },
  { src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop", cat: "Herbal Medicine", label: "Fresh Medicinal Plants" },
  { src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop", cat: "Clinic", label: "Consultation Room" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", cat: "Patients", label: "Happy Recovery", tall: true },
  { src: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800&auto=format&fit=crop", cat: "Ayurvedic Herbs", label: "Mortar & Herbs" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", cat: "Treatment", label: "Fitness & Weight Care" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = photos.filter((p) => active === "All" || p.cat === active);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Gallery" title="क्लीनिक व जड़ी-बूटियों की झलक" subtitle="तस्वीर पर क्लिक करके बड़ा देखें।" />
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={cn("rounded-full px-5 py-2.5 text-sm font-bold transition", active === c ? "bg-forest-800 text-gold-300 shadow-lg" : "bg-white border border-forest-900/10 text-forest-900 hover:border-gold-500")}>{c}</button>
          ))}
        </Reveal>
        <motion.div layout className="mt-10 columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.button layout key={p.src} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(i)} className={`group relative block w-full overflow-hidden rounded-2xl ${p.tall ? "" : ""}`}>
                <Image src={p.src} alt={p.label} width={600} height={p.tall ? 800 : 500} className="w-full object-cover transition duration-700 group-hover:scale-108 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition">{p.label} • {p.cat}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-forest-950/90 p-4 backdrop-blur" onClick={() => setLightbox(null)}>
            <button aria-label="close" className="absolute right-5 top-24 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-forest-950"><X size={20} /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-3xl" onClick={(e) => e.stopPropagation()}>
              <Image src={filtered[lightbox].src} alt={filtered[lightbox].label} width={1000} height={700} className="max-h-[80vh] w-full object-contain bg-black" />
              <p className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm font-bold text-white">{filtered[lightbox].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
