"use client";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_1_LINK, WHATSAPP_LINK } from "@/lib/utils";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        href={WHATSAPP_LINK}
        target="_blank"
        aria-label="WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.8)] transition hover:scale-110"
      >
        <MessageCircle size={26} />
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-forest-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">WhatsApp करें</span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15 }}
        href={PHONE_1_LINK}
        aria-label="Call Now"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-forest-950 shadow-[0_12px_30px_-6px_rgba(201,162,39,0.9)] transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/40" />
        <Phone size={24} className="relative" />
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-forest-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">Call Now</span>
      </motion.a>
    </div>
  );
}
