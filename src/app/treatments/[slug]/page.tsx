import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { treatments } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { Phone, Clock, CheckCircle2, AlertTriangle, Leaf, ArrowLeft, ArrowRight } from "lucide-react";
import { PHONE_1_LINK } from "@/lib/utils";

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = treatments.find((x) => x.slug === slug);
  if (!t) return {};
  return { title: `${t.hindi} (${t.english}) का आयुर्वेदिक उपचार`, description: `${t.hindi} — लक्षण, कारण व आयुर्वेदिक समाधान। ${t.tagline}। Call 8920006543` };
}

export default async function TreatmentDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = treatments.find((x) => x.slug === slug);
  if (!t) notFound();
  const idx = treatments.findIndex((x) => x.slug === slug);
  const prev = treatments[(idx - 1 + treatments.length) % treatments.length];
  const next = treatments[(idx + 1) % treatments.length];

  return (
    <div className="pt-32 pb-20">
      <div className="relative overflow-hidden bg-forest-950">
        <Image src={t.image} alt={t.hindi} fill className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 to-forest-950" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20 text-center">
          <Link href="/treatments" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20"><ArrowLeft size={14} /> सभी उपचार</Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold-300">{t.english}</p>
          <h1 className="font-display mt-3 text-4xl md:text-6xl font-bold text-white">{t.hindi}</h1>
          <p className="mt-4 text-lg text-gold-300 font-semibold">{t.tagline}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/70"><Clock size={15} /> अनुमानित अवधि: {t.duration}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <Reveal>
            <div className="rounded-3xl border border-red-200 bg-red-50/60 p-6 md:p-8">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-forest-950"><AlertTriangle className="text-red-500" size={22} /> लक्षण (Symptoms)</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {t.symptoms.map((s) => <li key={s} className="flex gap-2 text-sm text-forest-900/80"><span className="text-red-500">•</span>{s}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-forest-900/10 bg-white p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-forest-950">कारण (Causes)</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {t.causes.map((s) => <li key={s} className="flex gap-2 text-sm text-forest-900/80"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-600" />{s}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 to-forest-950 p-6 md:p-8 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.3),transparent_60%)]" />
              <div className="relative">
                <h2 className="flex items-center gap-2 font-display text-2xl font-bold"><Leaf className="text-gold-400" size={22} /> आयुर्वेदिक समाधान</h2>
                <p className="mt-4 leading-relaxed text-white/80">{t.solution}</p>
                <h3 className="mt-6 font-bold text-gold-300">लाभ (Benefits)</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {t.benefits.map((s) => <li key={s} className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-400" />{s}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-gold-500/30 bg-cream-100 p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-forest-950">Recovery Process</h2>
              <ol className="mt-4 space-y-2.5">
                {t.recovery.map((s, i) => <li key={s} className="flex gap-3 text-sm text-forest-900/80"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-800 text-xs font-bold text-gold-300">{i + 1}</span>{s}</li>)}
              </ol>
              <p className="mt-5 rounded-xl bg-white/70 p-4 text-xs leading-relaxed text-forest-900/60">* परिणाम व्यक्ति-दर-व्यक्ति भिन्न हो सकते हैं। उचित निदान हेतु वैद्यकीय परामर्श आवश्यक है। यह जानकारी चिकित्सकीय सलाह का विकल्प नहीं है।</p>
            </div>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <Link href={`/treatments/${prev.slug}`} className="inline-flex items-center gap-2 rounded-full border border-forest-900/15 px-5 py-2.5 text-sm font-bold text-forest-900 hover:bg-forest-800 hover:text-white"><ArrowLeft size={15} /> {prev.hindi}</Link>
            <Link href={`/treatments/${next.slug}`} className="inline-flex items-center gap-2 rounded-full border border-forest-900/15 px-5 py-2.5 text-sm font-bold text-forest-900 hover:bg-forest-800 hover:text-white">{next.hindi} <ArrowRight size={15} /></Link>
          </div>
        </div>
        <div className="space-y-6 lg:sticky lg:top-32 h-fit">
          <BookingForm compact />
          <div className="rounded-3xl bg-forest-950 p-6 text-center text-white">
            <p className="text-sm text-white/70">तुरंत बात करें</p>
            <a href={PHONE_1_LINK} className="font-display mt-1 block text-2xl font-bold text-gold-300">89200 06543</a>
            <a href={PHONE_1_LINK} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-bold text-forest-950"><Phone size={16} /> Call Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
