import Link from "next/link";
import { Phone, MapPin, Clock, Globe, Share2, Play, Leaf } from "lucide-react";
import { PHONE_1_LINK, SITE_NAME, TAGLINE } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-forest-950"><Leaf size={24} /></span>
            <div>
              <p className="font-display text-xl font-bold">{SITE_NAME}</p>
              <p className="text-xs text-gold-300">{TAGLINE}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">शुद्ध आयुर्वेदिक जड़ी-बूटियों द्वारा पथरी, शुगर, थायरॉयड, जोड़-दर्द व अन्य रोगों हेतु व्यक्तिगत आयुर्वेदिक परामर्श।</p>
          <div className="mt-5 flex gap-3">
            {[Globe, Share2, Play].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-gold-300 transition hover:bg-gold-500 hover:text-forest-950"><Icon size={17} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-gold-300 uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {[["/", "Home"], ["/about", "About"], ["/treatments", "Treatments"], ["/success-stories", "Success Stories"], ["/gallery", "Gallery"], ["/contact", "Contact"]].map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-gold-300 transition">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-gold-300 uppercase">Treatments</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {["पित्त की पथरी", "शुगर (मधुमेह)", "जोड़ों का दर्द", "बवासीर", "लकवा / पैरालिसिस", "हेयर प्रॉब्लम", "पुरुष स्वास्थ्य", "कैंसर सहायक देखभाल"].map((t) => (
              <li key={t}><Link href="/treatments" className="hover:text-gold-300 transition">{t}</Link></li>
            ))}
            <li><Link href="/treatments" className="font-bold text-gold-300 hover:text-gold-400 transition">सभी 16 उपचार देखें →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-gold-300 uppercase">Contact</h4>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <a href={PHONE_1_LINK} className="flex items-center gap-2 font-bold text-white hover:text-gold-300"><Phone size={16} className="text-gold-400" /> 89200 06543</a>
            <a href="tel:+917303233052" className="flex items-center gap-2 font-bold text-white hover:text-gold-300"><Phone size={16} className="text-gold-400" /> 73032 33052</a>
            <p className="flex items-start gap-2"><Clock size={16} className="mt-0.5 text-gold-400" /> Mon–Sun: 9:00 AM – 8:00 PM</p>
            <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-gold-400" /> पता: गांधी चौक (विस्तृत पते हेतु कॉल करें)</p>
            <a href={PHONE_1_LINK} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 font-bold text-forest-950 hover:brightness-110 transition">Emergency Consultation</a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-2 px-4 py-5 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {SITE_NAME} • All rights reserved.</p>
          <p>शुद्ध आयुर्वेदिक • व्यक्तिगत परामर्श • प्राकृतिक जड़ी-बूटियाँ</p>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-5 text-[11px] leading-relaxed text-white/40">
          <p>चिकित्सकीय सूचना: वेबसाइट की जानकारी केवल सामान्य जागरूकता हेतु है, चिकित्सकीय सलाह का विकल्प नहीं। परिणाम व्यक्ति-दर-व्यक्ति भिन्न होते हैं। Anatomical illustrations: Blausen Medical 2014 / Wikimedia Commons (CC BY 3.0 / CC BY-SA 4.0); Hair follicle: NIH NIAID (CC BY 4.0); Photos: Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}
