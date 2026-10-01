import { Reveal, SectionHeading } from "@/components/Reveal";
import { Stars } from "@/components/Testimonials";
import { MessageCircleHeart, ShieldCheck, Phone } from "lucide-react";
import { PHONE_1_LINK, WHATSAPP_LINK } from "@/lib/utils";

export const metadata = { title: "Patient Stories | नमो नारायणा आयुर्वेदिक", description: "रोगियों के वास्तविक अनुभव — अनुमति से प्रकाशित कहानियाँ। अपना अनुभव साझा करें।" };

export default function SuccessPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Patient Stories" title="रोगियों के वास्तविक अनुभव" subtitle="यहाँ केवल रोगियों की अनुमति से प्राप्त वास्तविक अनुभव ही प्रकाशित किए जाते हैं — कोई काल्पनिक समीक्षा नहीं।" />
        <Reveal className="mt-12">
          <div className="rounded-[2rem] border border-gold-500/30 bg-white p-8 md:p-12 text-center shadow-[0_30px_80px_-30px_rgba(6,46,22,0.4)]">
            <MessageCircleHeart size={44} className="mx-auto text-gold-500" />
            <Stars />
            <h2 className="font-display mt-5 text-2xl md:text-3xl font-bold text-forest-950">पहली कहानियाँ जल्द प्रकाशित होंगी</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-forest-900/70">
              हम रोगियों की गोपनीयता का सम्मान करते हैं। उपचार के बाद जो रोगी स्वेच्छा से अपना अनुभव साझा करते हैं,
              उन्हीं की कहानियाँ — उनकी अनुमति से — यहाँ जोड़ी जाएंगी।
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-bold text-white hover:brightness-110 transition">अपना अनुभव भेजें</a>
              <a href={PHONE_1_LINK} className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-bold text-white hover:bg-forest-700 transition"><Phone size={17} /> परामर्श लें</a>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-forest-700/70"><ShieldCheck size={15} className="text-gold-600" /> बिना अनुमति कोई नाम, फोटो या रिपोर्ट प्रकाशित नहीं की जाती</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((v) => (
            <Reveal key={v} delay={v * 0.07}>
              <div className="rounded-3xl border-2 border-dashed border-gold-500/40 bg-cream-100 p-8 text-center">
                <p className="font-display text-lg font-bold text-forest-800">कहानी #{v}</p>
                <p className="mt-2 text-sm text-forest-700/70">रोगी की अनुमति के बाद यहाँ वास्तविक अनुभव जोड़ा जाएगा</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-[2rem] bg-gradient-to-r from-forest-800 to-forest-950 p-8 md:p-10 text-center text-white">
          <h3 className="font-display text-2xl md:text-3xl font-bold">आप भी स्वस्थ जीवन की ओर पहला कदम बढ़ाएं</h3>
          <p className="mt-2 text-white/70">पहला परामर्श आज ही बुक करें।</p>
          <a href={PHONE_1_LINK} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-bold text-forest-950 hover:brightness-110"><Phone size={17} /> 89200 06543</a>
        </Reveal>
      </div>
    </div>
  );
}
