import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { treatments, hairFaqs } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import FaqAccordion from "@/components/FaqAccordion";
import { Phone, Clock, CheckCircle2, AlertTriangle, Leaf, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Scissors, Sun } from "lucide-react";
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
        <Image src={t.image} alt={t.alt} fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 to-forest-950" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20 text-center">
          <Link href="/treatments" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20"><ArrowLeft size={14} /> सभी उपचार</Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold-300">{t.categoryEn} • {t.english}</p>
          <h1 className="font-display mt-3 text-4xl md:text-6xl font-bold text-white">{t.hindi}</h1>
          <p className="mt-4 text-lg text-gold-300 font-semibold">{t.tagline}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/70"><Clock size={15} /> अनुमानित अवधि: {t.duration}</p>
          {t.credit && <p className="mt-3 text-[11px] text-white/40">{t.credit}</p>}
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
          {t.disclaimer && (
            <Reveal>
              <div className="rounded-3xl border-2 border-red-500/60 bg-red-50 p-6 md:p-8" role="alert">
                <h2 className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold text-red-800"><AlertTriangle size={22} /> महत्वपूर्ण चिकित्सकीय सूचना</h2>
                <p className="mt-3 text-sm md:text-[15px] font-medium leading-relaxed text-red-900">{t.disclaimer}</p>
              </div>
            </Reveal>
          )}
          {slug === "hair-problem" && (
            <>
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 p-6 md:p-8 text-forest-950 shadow-[0_20px_50px_-16px_rgba(201,162,39,0.8)]">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                    <Image src="/images/hair/hair-regrowth.jpg" alt="बाल उगाने का आयुर्वेदिक उपचार" width={220} height={150} className="h-36 w-full md:w-56 rounded-2xl object-cover shadow-lg" loading="lazy" />
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-widest">★ नई सेवा — दवाई भी उपलब्ध</p>
                      <h2 className="font-display mt-1 text-2xl md:text-3xl font-bold leading-tight">गंजे सिर पर भी बाल उगाने का आयुर्वेदिक प्रयास</h2>
                      <p className="mt-2 text-sm font-medium text-forest-900/80">पहले follicle-जांच, फिर ईमानदार सलाह — सक्रिय जड़ों पर हर्बल तेल, लेप व आंतरिक दवाई का पूरा कोर्स क्लीनिक पर ही मिलता है।</p>
                      <a href={PHONE_1_LINK} className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-bold text-gold-300 hover:brightness-125 transition"><Phone size={15} /> आज ही जांच बुक करें</a>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-3xl border border-forest-900/10 bg-white p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold text-forest-950">गंजेपन की दवाई — क्या-क्या मिलता है</h2>
                  <p className="mt-2 text-sm text-forest-900/65">सभी औषधियाँ वैद्यकीय परामर्श के बाद, आपकी स्थिति के अनुसार दी जाती हैं — क्लीनिक से लें या घर बैठे मंगवाएं।</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-forest-900/10">
                      <Image src="/images/hair/hair-massage.jpg" alt="केश-पोषक हर्बल तेल" width={500} height={300} className="h-36 w-full object-cover" loading="lazy" />
                      <div className="p-4"><p className="font-bold text-forest-950 text-sm">केश-पोषक हर्बल तेल</p><p className="mt-1 text-xs text-forest-900/65">भृंगराज, आंवला, ब्राह्मी व जटामांसी युक्त शिरो-अभ्यंग तेल — जड़ें मजबूत करने हेतु।</p></div>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-forest-900/10">
                      <Image src="/images/hair/hair-herbs.jpg" alt="स्कैल्प लेप व चूर्ण" width={500} height={300} className="h-36 w-full object-cover" loading="lazy" />
                      <div className="p-4"><p className="font-bold text-forest-950 text-sm">स्कैल्प लेप व चूर्ण</p><p className="mt-1 text-xs text-forest-900/65">डैंड्रफ-शोधन व follicle-पोषण हेतु साप्ताहिक हर्बल लेप।</p></div>
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {["आंतरिक केश-पोषक दवाई (रसायन व धातु-पोषक योग)", "डैंड्रफ-नियंत्रण हर्बल योग", "क्लीनिक परामर्श के साथ पूरी किट", "घर बैठे दवाई — WhatsApp पर ऑर्डर व कूरियर सुविधा"].map((s) => (
                      <li key={s} className="flex gap-2 text-sm text-forest-900/80"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-600" />{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { icon: <Leaf size={19} />, t: "100% आयुर्वेदिक उपचार" },
                    { icon: <ShieldCheck size={19} />, t: "बिना सर्जरी" },
                    { icon: <Sparkles size={19} />, t: "प्राकृतिक जड़ी-बूटियाँ" },
                    { icon: <Sun size={19} />, t: "व्यक्तिगत परामर्श" },
                  ].map((b) => (
                    <div key={b.t} className="rounded-2xl border border-gold-500/40 bg-white p-4 text-center shadow-sm">
                      <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-forest-800 text-gold-300">{b.icon}</span>
                      <p className="mt-2 text-xs font-bold text-forest-950">{b.t}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-3xl border border-forest-900/10 bg-white p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold text-forest-950">शामिल सेवाएँ (Services Included)</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      ["बाल झड़ना (Hair Fall)", "झड़ने की गति कम करने हेतु पोषण-योजना"],
                      ["गंजापन (Baldness)", "पैटर्न-आकलन व follicle-सक्रियता प्रयास"],
                      ["नए बाल उगाना (Regrowth)", "स्कैल्प-पोषण व रक्त-संचार थेरेपी"],
                      ["पतले बाल घने करना", "जड़-मजबूती व घनत्व कार्यक्रम"],
                      ["डैंड्रफ एवं स्कैल्प समस्या", "स्कैल्प-शोधन व खुजली-नियंत्रण"],
                      ["समय से पहले सफेद बाल", "पित्त-संतुलन व रसायन पोषण"],
                    ].map(([t1, d]) => (
                      <div key={t1} className="rounded-2xl bg-cream-100 p-4">
                        <p className="flex items-center gap-2 text-sm font-bold text-forest-950"><Scissors size={15} className="text-gold-600" />{t1}</p>
                        <p className="mt-1 text-xs text-forest-900/65">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 to-forest-950 p-6 md:p-8 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.3),transparent_60%)]" />
                  <div className="relative">
                    <h2 className="font-display text-2xl font-bold">हेयर ग्रोथ थेरेपी (4 चरण)</h2>
                    <ol className="mt-5 space-y-4">
                      {[
                        ["01 — आयुर्वेदिक निदान", "स्कैल्प परीक्षण, बाल-झड़ने का पैटर्न, अवधि व आंतरिक कारणों (पोषण, तनाव, हार्मोन) का आकलन।"],
                        ["02 — शिरो-अभ्यंग", "भृंगराज, आंवला, ब्राह्मी व जटामांसी युक्त औषधीय तेलों से नियमित हेड-मसाज परामर्श।"],
                        ["03 — हर्बल लेप व शोधन", "डैंड्रफ-नियंत्रण व follicle-पोषण हेतु स्कैल्प लेप व आंतरिक केश-पोषक औषधियाँ।"],
                        ["04 — आहार व फॉलो-अप", "प्रोटीन-लौह युक्त आहार चार्ट, नींद-तनाव प्रबंधन व मासिक प्रगति समीक्षा।"],
                      ].map(([h, d]) => (
                        <li key={h} className="rounded-2xl border border-white/12 bg-white/[0.07] p-4 backdrop-blur">
                          <p className="font-bold text-gold-300 text-sm">{h}</p>
                          <p className="mt-1 text-sm text-white/75">{d}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-3xl border border-forest-900/10 bg-white p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold text-forest-950">Before & After Gallery</h2>
                  <p className="mt-2 text-sm text-forest-900/65">उपचार के दौरान आपकी प्रगति-तस्वीरें (सहमति से) यहाँ जोड़ी जाती हैं — पारदर्शी व ईमानदार रिकॉर्ड।</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-gold-500/50 bg-cream-100 p-3 text-center">
                        <div>
                          <p className="font-display text-lg font-bold text-forest-800">Before → After</p>
                          <p className="mt-1 text-[11px] text-forest-700/70">केस #{n} • जल्द जुड़ेगा</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <h2 className="font-display mb-4 text-2xl font-bold text-forest-950">हेयर ट्रीटमेंट — FAQ</h2>
                  <FaqAccordion items={hairFaqs} />
                </div>
              </Reveal>
            </>
          )}
          {t.faq && (
            <Reveal>
              <div>
                <h2 className="font-display mb-4 text-2xl font-bold text-forest-950">अक्सर पूछे जाने वाले प्रश्न</h2>
                <FaqAccordion items={t.faq} />
              </div>
            </Reveal>
          )}
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
