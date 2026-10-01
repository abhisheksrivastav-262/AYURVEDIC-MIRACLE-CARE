import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { TrustBadges } from "@/components/Counters";
import BookingForm from "@/components/BookingForm";
import { Leaf, HeartHandshake, Eye, Target, ArrowRight, Phone } from "lucide-react";
import { PHONE_1_LINK } from "@/lib/utils";

export const metadata = { title: "About Us | नमो नारायणा आयुर्वेदिक", description: "शुद्ध आयुर्वेदिक चिकित्सा — हमारा दर्शन, मिशन व उपचार यात्रा।" };

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden bg-forest-950 py-16 md:py-24">
        <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop" alt="ayurveda" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 to-forest-950" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-300">About Us • हमारी कहानी</p>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-white">प्रकृति से उपचार, <span className="text-gold-gradient">सेवा से विश्वास</span></h1>
            <p className="mt-5 text-white/70 leading-relaxed">हम पथरी, शुगर, थायरॉयड व वात-रोगों सहित 16 स्वास्थ्य सेवाओं में आयुर्वेदिक मार्गदर्शन दे रहे हैं — जहाँ हर रोगी परिवार जैसा है।</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop" alt="herbal medicine" width={900} height={700} className="h-[420px] w-full object-cover" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-5 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-800 text-gold-300"><Leaf size={22} /></span>
              <div><p className="font-display text-xl font-bold text-forest-950">शुद्ध जड़ी-बूटियाँ</p><p className="text-xs text-forest-700">प्रमाणिक स्रोत • शास्त्रीय योग</p></div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading align="left" eyebrow="Clinic Introduction" title="नमो नारायणा आयुर्वेदिक" subtitle="हमारा मानना है — हर शरीर में स्वयं ठीक होने की शक्ति है। आयुर्वेद उस शक्ति को जगाता है: दोष-संतुलन, अग्नि-सुधार, शोधन व रसायन द्वारा।" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Eye size={19} />, t: "Our Vision", d: "हर घर तक बिना-ऑपरेशन प्राकृतिक विकल्प की जानकारी।" },
              { icon: <Target size={19} />, t: "Our Mission", d: "रिपोर्ट-आधारित, ईमानदार व किफायती आयुर्वेदिक देखभाल।" },
              { icon: <HeartHandshake size={19} />, t: "Our Promise", d: "झूठे दावे नहीं — स्पष्ट अवधि, स्पष्ट परहेज।" },
              { icon: <Leaf size={19} />, t: "Our Method", d: "औषधि + आहार + दिनचर्या — तीनों का संतुलन।" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-forest-900/10 bg-white p-5">
                <p className="flex items-center gap-2 font-bold text-forest-950"><span className="text-gold-600">{c.icon}</span>{c.t}</p>
                <p className="mt-2 text-sm text-forest-900/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-200/60 py-14 px-4"><div className="mx-auto max-w-7xl"><TrustBadges /></div></section>

      <section className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <SectionHeading eyebrow="Treatment Journey" title="उपचार यात्रा की timeline" />
        <div className="mt-10 space-y-0">
          {[
            ["सप्ताह 0 — पहली मुलाकात", "रिपोर्ट, लक्षण व खानपान का विस्तृत आकलन। व्यक्तिगत योजना व परहेज चार्ट।"],
            ["सप्ताह 1–4 — आधार", "औषधि प्रारंभ, पाचन सुधार। दर्द-गैस जैसे लक्षणों में क्रमिक आराम।"],
            ["माह 2–3 — प्रगति", "फॉलो-अप, खुराक समायोजन, आवश्यक जाँच (अल्ट्रासाउंड/शुगर) समीक्षा।"],
            ["माह 4–6 — स्थिरीकरण", "रोग-स्थिति में सुधार, दिनचर्या स्थायी। रसायन व जीवनशैली पर ध्यान।"],
            ["उसके बाद — स्वस्थ जीवन", "रखरखाव, मौसमी परहेज व वार्षिक समीक्षा।"],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 font-bold text-gold-300">{i + 1}</span>
                  {i < 4 && <span className="w-0.5 flex-1 bg-gold-500/40 mt-2" />}
                </div>
                <div className="rounded-2xl border border-forest-900/10 bg-white p-5 flex-1 shadow-sm">
                  <p className="font-bold text-forest-950">{t}</p>
                  <p className="mt-1 text-sm text-forest-900/70">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px] items-start">
          <div className="rounded-[2rem] bg-forest-950 p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.3),transparent_60%)]" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold">रोगी क्यों भरोसा करते हैं?</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {["रिपोर्ट देखकर ईमानदार राय — हर केस में दावा नहीं", "हिंदी में सरल परहेज व डाइट चार्ट", "फोन/WhatsApp पर नियमित फॉलो-अप", "किफायती मासिक कोर्स, छिपा खर्च नहीं"].map((x) => <li key={x} className="flex gap-2"><span className="text-gold-400">✓</span>{x}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={PHONE_1_LINK} className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-bold text-forest-950"><Phone size={16} /> परामर्श लें</a>
                <Link href="/treatments" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white">उपचार देखें <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
          <BookingForm compact />
        </Reveal>
      </section>
    </div>
  );
}
