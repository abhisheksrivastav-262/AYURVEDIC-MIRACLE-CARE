import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { treatments } from "@/data/content";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = { title: "Treatments | आयुर्वेदिक चमत्कारी उपचार", description: "पथरी, शुगर, थायरॉयड, बवासीर, जोड़-दर्द सहित 10+ रोगों का आयुर्वेदिक उपचार — लक्षण, कारण व समाधान।" };

export default function TreatmentsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Our Treatments" title="रोग चुनें — समाधान जानें" subtitle="हर उपचार कार्ड पर लक्षण, कारण, आयुर्वेदिक समाधान, लाभ व recovery प्रक्रिया विस्तार से।" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 0.07}>
              <Link href={`/treatments/${t.slug}`} className="gold-glow group block h-full overflow-hidden rounded-3xl border border-forest-900/10 bg-white transition hover:-translate-y-1.5 hover:border-gold-500/60 hover:shadow-2xl">
                <div className="relative h-52 overflow-hidden">
                  <Image src={t.image} alt={t.hindi} fill className="object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-forest-950/80 px-3 py-1.5 text-[11px] font-bold text-gold-300 backdrop-blur"><Clock size={12} /> {t.duration}</span>
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gold-600">{t.english}</p>
                  <h2 className="font-display mt-1 text-2xl font-bold text-forest-950">{t.hindi}</h2>
                  <p className="mt-2 text-sm text-forest-900/65">{t.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-forest-800 group-hover:text-gold-600">विस्तार से जानें <ArrowRight size={15} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
