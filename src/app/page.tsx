"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, ShieldCheck, Leaf, Sparkles, HeartPulse, Stethoscope, Pill, Salad, ArrowRight, CheckCircle2, Activity, Droplets, Flame, Zap, Bone, Sprout, Brain, Scissors, Dumbbell, Ruler, Ribbon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { TrustBadges } from "@/components/Counters";
import { Stars } from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import BookingForm from "@/components/BookingForm";
import { treatments, faqs } from "@/data/content";
import { PHONE_1_LINK, WHATSAPP_LINK } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={26} />, activity: <Activity size={26} />, droplets: <Droplets size={26} />,
  shield: <ShieldCheck size={26} />, heart: <HeartPulse size={26} />, zap: <Zap size={26} />,
  leaf: <Leaf size={26} />, bone: <Bone size={26} />, flame: <Flame size={26} />, scale: <Salad size={26} />, sprout: <Sprout size={26} />,
  brain: <Brain size={26} />, scissors: <Scissors size={26} />, dumbbell: <Dumbbell size={26} />, ruler: <Ruler size={26} />, ribbon: <Ribbon size={26} />,
};

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-grain relative flex min-h-[100svh] items-center overflow-hidden bg-forest-950">
        <Image src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600&auto=format&fit=crop" alt="Ayurvedic herbs" fill priority sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/55 to-forest-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.22),transparent_65%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pt-36 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold text-gold-300 backdrop-blur">
              <Sparkles size={15} /> शुद्ध आयुर्वेदिक • व्यक्तिगत परामर्श • प्राकृतिक देखभाल
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-display mt-6 text-4xl md:text-6xl font-bold leading-[1.15] text-white">
              पित्त की थैली की पथरी का <span className="text-gold-gradient">आयुर्वेदिक उपचार</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-5 flex flex-wrap items-center gap-2 text-lg md:text-2xl font-semibold text-white/90">
              <span className="rounded-full bg-white/10 px-4 py-1.5 border border-white/15">बिना ऑपरेशन</span>
              <span className="text-gold-400">•</span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 border border-white/15">बिना दर्द</span>
              <span className="text-gold-400">•</span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 border border-white/15">प्राकृतिक देखभाल</span>
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-5 max-w-xl text-white/70 leading-relaxed">शुद्ध जड़ी-बूटियों, व्यक्तिगत पथ्य-योजना व अनुभवी मार्गदर्शन द्वारा पथरी, शुगर, थायरॉयड, बवासीर व जोड़-दर्द का प्राकृतिक प्रबंधन।</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 font-bold text-forest-950 shadow-[0_16px_40px_-10px_rgba(201,162,39,0.8)] hover:brightness-110 transition"><CalendarCheck size={18} /> Book Appointment</a>
              <a href={PHONE_1_LINK} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur hover:bg-white/20 transition"><Phone size={18} /> Call Now</a>
              <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-bold text-white hover:brightness-110 transition">WhatsApp</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-8 flex flex-wrap items-center gap-2 text-sm">
              {["वैद्य परामर्श", "WhatsApp फॉलो-अप", "घर-बैठे दवा सुविधा"].map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/10 px-4 py-1.5 font-semibold text-white/85 backdrop-blur"><CheckCircle2 size={14} className="text-gold-400" />{c}</span>
              ))}
            </motion.div>
          </div>
          <motion.div id="booking" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
            <BookingForm />
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* TRUST COUNTERS */}
      <section className="relative bg-cream-50 px-4 -mt-6 pb-4">
        <div className="mx-auto max-w-7xl"><TrustBadges /></div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading eyebrow="Why Choose Us" title="क्यों हज़ारों रोगी हम पर भरोसा करते हैं" subtitle="अस्पताल जैसा भरोसा, प्रकृति जैसी कोमलता — लग्ज़री केयर के साथ शुद्ध आयुर्वेद।" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Leaf size={26} />, t: "100% Ayurvedic", d: "शुद्ध, प्रमाणिक जड़ी-बूटियों से निर्मित औषधियाँ।" },
            { icon: <ShieldCheck size={26} />, t: "Surgery-Free Options", d: "ऑपरेशन से पहले आयुर्वेदिक विकल्प हेतु ईमानदार परामर्श।" },
            { icon: <HeartPulse size={26} />, t: "Gentle Care", d: "वैद्यकीय मात्रा व परहेज सहित सौम्य आयुर्वेदिक देखभाल।" },
            { icon: <Stethoscope size={26} />, t: "Personalized Treatment", d: "रिपोर्ट व प्रकृति देखकर व्यक्तिगत योजना।" },
            { icon: <Pill size={26} />, t: "Experienced Guidance", d: "अनुभवी वैद्यकीय आकलन व नियमित फॉलो-अप।" },
            { icon: <Salad size={26} />, t: "Natural Herbs + Diet", d: "औषधि के साथ सरल हिंदी डाइट चार्ट।" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="gold-glow group h-full rounded-3xl border border-forest-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-950 text-gold-300 shadow-lg">{c.icon}</span>
                <h3 className="font-display mt-5 text-xl font-bold text-forest-950">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-900/70">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DISEASES GRID */}
      <section className="relative overflow-hidden bg-forest-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.16),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <SectionHeading dark eyebrow="Our Treatments" title="हमारी प्रमुख स्वास्थ्य सेवाएँ" subtitle="आयुर्वेदिक परामर्श एवं व्यक्तिगत स्वास्थ्य समाधान" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.08}>
                <article className="gold-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60">
                  <Link href={`/treatments/${t.slug}`} className="relative block h-48 overflow-hidden" aria-label={`${t.hindi} जानकारी देखें`}>
                    <Image src={t.image} alt={t.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className={t.fit === "contain" ? "object-contain bg-cream-100 p-3 transition duration-700 group-hover:scale-105" : "object-cover transition duration-700 group-hover:scale-110"} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent pointer-events-none" />
                    <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-gold-500 text-forest-950 shadow-lg">{iconMap[t.icon]}</span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gold-300">{t.english}</p>
                      {t.slug === "hair-problem" && <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-[10px] font-bold text-forest-950">★ नई सेवा</span>}
                    </div>
                    <Link href={`/treatments/${t.slug}`}><h3 className="font-display mt-1 text-2xl font-bold text-white hover:text-gold-300 transition">{t.hindi}</h3></Link>
                    <p className="mt-2 flex-1 text-sm text-white/65">{t.tagline}</p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <Link href={`/treatments/${t.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-300">जानकारी देखें <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link>
                      <a href={PHONE_1_LINK} aria-label="परामर्श लें" className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 px-3.5 py-1.5 text-xs font-bold text-gold-300 transition hover:bg-gold-500 hover:text-forest-950"><Phone size={13} /> परामर्श लें</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/treatments" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-3.5 font-bold text-forest-950 shadow-[0_16px_40px_-10px_rgba(201,162,39,0.8)] hover:brightness-110 transition">सभी उपचार देखें <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionHeading eyebrow="Treatment Process" title="उपचार की 5-चरणीय यात्रा" subtitle="पहली कॉल से स्वस्थ जीवनशैली तक — हर कदम पर साथ।" />
        <div className="relative mt-14">
          <span className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold-400 via-forest-700 to-gold-400 md:-translate-x-1/2" />
          {[
            { n: "01", t: "Consultation", d: "कॉल/WhatsApp/क्लीनिक पर समस्या व रिपोर्ट साझा करें।" },
            { n: "02", t: "Diagnosis", d: "नाड़ी-परीक्षण, लक्षण व रिपोर्ट का आयुर्वेदिक आकलन।" },
            { n: "03", t: "Ayurvedic Medicine", d: "शुद्ध जड़ी-बूटी योग + पथ्य-अपथ्य चार्ट प्रारंभ।" },
            { n: "04", t: "Recovery", d: "नियमित फॉलो-अप व समीक्षा, खुराक समायोजन।" },
            { n: "05", t: "Healthy Lifestyle", d: "योग, आहार व दिनचर्या से स्थायी स्वास्थ्य।" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className={`relative mb-8 flex gap-5 md:w-1/2 ${i % 2 ? "md:ml-auto md:flex-row-reverse md:text-right" : ""}`}>
              <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-bold text-forest-950 shadow-[0_0_20px_rgba(201,162,39,0.6)]">{s.n}</span>
              <div className="rounded-2xl border border-forest-900/10 bg-white p-5 shadow-[0_14px_36px_-18px_rgba(6,46,22,0.4)] flex-1">
                <h3 className="font-display text-lg font-bold text-forest-950">{s.t}</h3>
                <p className="mt-1 text-sm text-forest-900/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUCCESS STRIP */}
      <section className="bg-cream-200/60 py-16 md:py-24 px-4">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Patient Stories" title="आपकी कहानी, हमारी प्रेरणा" subtitle="उपचार के बाद अपना अनुभव साझा करें — आपकी अनुमति से ही यहाँ वास्तविक कहानियाँ प्रकाशित की जाती हैं।" />
          <Reveal className="mt-12">
            <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-gold-500/25 bg-white/80 p-8 text-center shadow-[0_30px_80px_-30px_rgba(6,46,22,0.4)] backdrop-blur">
                <Stars />
                <p className="font-display mt-4 text-xl font-bold text-forest-950">अपना अनुभव साझा करें</p>
                <p className="mt-2 text-sm text-forest-900/70">WhatsApp पर अपना फीडबैक भेजें। अनुमति मिलने पर ही उसे यहाँ जोड़ा जाएगा।</p>
                <a href={WHATSAPP_LINK} target="_blank" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:brightness-110 transition">WhatsApp पर भेजें</a>
              </div>
              <div className="rounded-[2rem] border border-forest-900/10 bg-forest-950 p-8 text-center text-white">
                <p className="font-display text-xl font-bold">परामर्श लेना है?</p>
                <p className="mt-2 text-sm text-white/70">पहली बार आयुर्वेदिक परामर्श — कॉल या WhatsApp पर संपर्क करें।</p>
                <a href={PHONE_1_LINK} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 text-sm font-bold text-forest-950 hover:brightness-110 transition"><Phone size={16} /> 89200 06543</a>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link href="/success-stories" className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3 font-bold text-white hover:bg-forest-700 transition">Patient Stories पेज देखें <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* HERBAL BANNER */}
      <section className="relative overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1600&auto=format&fit=crop" alt="herbs" fill sizes="100vw" className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-forest-950/80" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-24 text-center">
          <Reveal>
            <p className="text-gold-300 font-semibold tracking-widest uppercase text-xs">Ayurvedic Philosophy</p>
            <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">“शरीर की हर बीमारी का उत्तर <span className="text-gold-gradient">प्रकृति</span> के पास है”</h2>
            <div className="mx-auto mt-8 grid gap-4 sm:grid-cols-3 text-left">
              {[["त्रिदोष संतुलन", "वात-पित्त-कफ के संतुलन से आरोग्य।"], ["अग्नि व आम", "पाचन-अग्नि सुधार व विष (आम) शोधन।"], ["रसायन व पथ्य", "रसायन औषधि + आहार-विहार से पुनर्निर्माण।"]].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <p className="flex items-center gap-2 font-bold text-white"><CheckCircle2 size={17} className="text-gold-400" /> {t}</p>
                  <p className="mt-2 text-sm text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ + CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="अक्सर पूछे जाने वाले प्रश्न" />
          <div className="mt-8"><FaqAccordion items={faqs} /></div>
        </div>
        <div className="lg:sticky lg:top-32 h-fit">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-800 to-forest-950 p-8 md:p-10 text-white shadow-2xl relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.3),transparent_60%)]" />
              <div className="relative">
                <h3 className="font-display text-3xl font-bold">आज ही परामर्श लें</h3>
                <p className="mt-3 text-white/70">ऑपरेशन से पहले एक बार आयुर्वेदिक परामर्श अवश्य लें। पहली कॉल पर निःशुल्क मार्गदर्शन।</p>
                <div className="mt-6 grid gap-3">
                  <a href={PHONE_1_LINK} className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-4 font-bold text-forest-950 hover:brightness-110 transition"><Phone size={18} /> 89200 06543 पर कॉल करें</a>
                  <a href="tel:+917303233052" className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white hover:bg-white/20 transition"><Phone size={18} /> 73032 33052</a>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/60"><ShieldCheck size={16} className="text-gold-400" /> गोपनीय परामर्श • रिपोर्ट WhatsApp पर भेजें • घर बैठे दवा सुविधा</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
