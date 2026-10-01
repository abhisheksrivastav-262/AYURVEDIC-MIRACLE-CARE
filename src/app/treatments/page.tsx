import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { treatments } from "@/data/content";
import { ArrowRight, Clock, Phone } from "lucide-react";
import { PHONE_1_LINK } from "@/lib/utils";

export const metadata = { title: "Our Treatments / हमारे उपचार | नमो नारायणा आयुर्वेदिक", description: "पथरी, शुगर, थायरॉयड, बवासीर, जोड़-दर्द, लकवा, हेयर प्रॉब्लम, पुरुष स्वास्थ्य, कद परामर्श व कैंसर सहायक देखभाल — व्यक्तिगत आयुर्वेदिक परामर्श।" };

const order = ["Digestive & Stone Care", "Metabolic Health", "Musculoskeletal", "Neurological Support", "Anorectal Care", "Hair & Scalp", "Men's Wellness", "Growth & Development", "Cancer Care"];

export default function TreatmentsPage() {
  const groups = order
    .map((en) => ({ en, items: treatments.filter((t) => t.categoryEn === en) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Our Treatments" title="हमारे उपचार" subtitle="आयुर्वेदिक परामर्श एवं व्यक्तिगत स्वास्थ्य समाधान — श्रेणी अनुसार सभी 16 सेवाएँ।" />
        {groups.map((g) => (
          <div key={g.en} className="mt-14">
            <Reveal>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gold-600">{g.items[0].categoryEn}</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-forest-950">{g.items[0].category}</h2>
                </div>
                <span className="h-px flex-1 bg-gradient-to-r from-gold-500/60 to-transparent" />
                <span className="rounded-full bg-forest-800 px-3 py-1 text-xs font-bold text-gold-300">{g.items.length} सेवाएँ</span>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {g.items.map((t, i) => (
                <Reveal key={t.slug} delay={(i % 4) * 0.06}>
                  <div className="gold-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-900/10 bg-white transition hover:-translate-y-1.5 hover:border-gold-500/60 hover:shadow-2xl">
                    <Link href={`/treatments/${t.slug}`} className="relative block h-44 overflow-hidden bg-cream-100">
                      <Image src={t.image} alt={t.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className={t.fit === "contain" ? "object-contain p-3 transition duration-700 group-hover:scale-105" : "object-cover transition duration-700 group-hover:scale-110"} loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-forest-950/80 px-3 py-1.5 text-[11px] font-bold text-gold-300 backdrop-blur"><Clock size={12} /> {t.duration}</span>
                      {(t.slug === "hair-problem" || t.slug === "baldness") && <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold text-forest-950">★ नई सेवा</span>}
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gold-600">{t.english}</p>
                      <h3 className="font-display mt-1 text-xl font-bold text-forest-950">{t.hindi}</h3>
                      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-forest-900/65">{t.tagline}</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Link href={`/treatments/${t.slug}`} className="inline-flex items-center justify-center gap-1 rounded-xl bg-forest-800 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-forest-700">जानकारी देखें <ArrowRight size={13} /></Link>
                        <a href={PHONE_1_LINK} className="inline-flex items-center justify-center gap-1 rounded-xl border border-gold-500/60 px-3 py-2.5 text-xs font-bold text-forest-800 transition hover:bg-gold-500 hover:text-forest-950"><Phone size={13} /> परामर्श लें</a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
