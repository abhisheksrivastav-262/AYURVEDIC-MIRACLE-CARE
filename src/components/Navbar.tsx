"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_1_LINK, SITE_NAME } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-forest-950 text-white/90 text-xs md:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2">
          <p className="truncate">प्रकृति से उपचार • स्वस्थ जीवन का आधार</p>
          <div className="flex items-center gap-3 shrink-0">
            <a href={PHONE_1_LINK} className="flex items-center gap-1.5 font-semibold text-gold-300 hover:text-gold-400"><Phone size={13} /> 89200 06543</a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+917303233052" className="hidden sm:flex items-center gap-1.5 font-semibold text-gold-300 hover:text-gold-400"><Phone size={13} /> 73032 33052</a>
          </div>
        </div>
      </div>
      <nav className={cn("transition-all duration-500", scrolled ? "glass shadow-[0_10px_40px_-12px_rgba(6,46,22,0.35)] border-b border-gold-500/20" : "bg-gradient-to-b from-black/40 to-transparent")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-950 text-gold-300 shadow-lg ring-1 ring-gold-500/40">
              <Leaf size={22} />
            </span>
            <span>
              <span className={cn("font-display block text-lg md:text-xl font-bold leading-none", scrolled ? "text-forest-950" : "text-white")}>{SITE_NAME}</span>
              <span className={cn("block text-[11px] tracking-wide", scrolled ? "text-forest-700" : "text-gold-300")}>AYURVEDIC MIRACLE CARE</span>
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={cn("rounded-full px-4 py-2 text-sm font-medium transition hover:bg-forest-800/10", scrolled ? "text-forest-900" : "text-white/90 hover:bg-white/10 hover:text-white")}>{l.label}</Link>
            ))}
            <a href={PHONE_1_LINK} className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-bold text-forest-950 shadow-[0_8px_24px_-6px_rgba(201,162,39,0.7)] hover:brightness-110 transition">
              <Phone size={16} /> Book Consultation
            </a>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className={cn("lg:hidden rounded-xl p-2", scrolled ? "text-forest-950 bg-forest-950/5" : "text-white bg-white/10")}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden glass mx-4 mb-4 rounded-2xl border border-forest-900/10 p-3 shadow-xl">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-forest-950 hover:bg-cream-200">{l.label}</Link>
            ))}
            <a href={PHONE_1_LINK} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-forest-800 px-4 py-3 text-sm font-bold text-white"><Phone size={16} /> Call 89200 06543</a>
          </div>
        )}
      </nav>
    </header>
  );
}
