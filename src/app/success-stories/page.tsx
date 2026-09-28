import Image from "next/image";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { testimonials } from "@/data/content";
import { Stars } from "@/components/Testimonials";
import { BadgeCheck, PlayCircle, Phone } from "lucide-react";
import { PHONE_1_LINK } from "@/lib/utils";

export const metadata = { title: "Success Stories | आयुर्वेदिक चमत्कारी उपचार", description: "रोगियों के अनुभव — पथरी, शुगर, थायरॉयड व अन्य रोगों में आयुर्वेदिक उपचार की सफलता की कहानियाँ।" };

export default function SuccessPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Patient Reviews" title="Success Stories — रोगियों की ज़ुबानी" subtitle="4.9★ रेटिंग • 2,300+ Google Reviews • नाम गोपनीयता हेतु कुछ नाम परिवर्तित।" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <div className="h-full rounded-3xl border border-forest-900/10 bg-white p-6 shadow-[0_18px_45px_-22px_rgba(6,46,22,0.35)] hover:border-gold-500/50 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between"><Stars /><span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700">Verified</span></div>
                <p className="mt-4 text-[15px] leading-relaxed text-forest-900/80">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-forest-900/10 pt-4">
                  <Image src={t.image} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-500" loading="lazy" />
                  <div>
                    <p className="flex items-center gap-1.5 font-bold text-forest-950 text-sm">{t.name} <BadgeCheck size={15} className="text-sky-600" /></p>
                    <p className="text-xs text-forest-700">{t.city} • {t.treatment}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((v) => (
            <Reveal key={v} delay={v * 0.07}>
              <div className="group relative h-56 overflow-hidden rounded-3xl bg-forest-950 cursor-pointer">
                <Image src={`https://images.unsplash.com/${["photo-1576091160550-2173dba999ef", "photo-1579684385127-1ef15d508118", "photo-1582750433449-648ed127bb54"][v - 1]}?q=80&w=800&auto=format&fit=crop`} alt={`video ${v}`} fill className="object-cover opacity-60 group-hover:scale-105 transition duration-700" loading="lazy" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-500 text-forest-950 shadow-[0_0_30px_rgba(201,162,39,0.8)] group-hover:scale-110 transition"><PlayCircle size={30} /></span>
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">वीडियो प्रशंसापत्र #{v} — जल्द आ रहा है</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-[2rem] bg-gradient-to-r from-forest-800 to-forest-950 p-8 md:p-10 text-center text-white">
          <h3 className="font-display text-2xl md:text-3xl font-bold">आप भी स्वस्थ जीवन की कहानी लिखें</h3>
          <p className="mt-2 text-white/70">पहला परामर्श आज ही बुक करें।</p>
          <a href={PHONE_1_LINK} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-bold text-forest-950 hover:brightness-110"><Phone size={17} /> 89200 06543</a>
        </Reveal>
      </div>
    </div>
  );
}
