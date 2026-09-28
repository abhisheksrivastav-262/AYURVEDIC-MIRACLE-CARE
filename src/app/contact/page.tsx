import { Reveal, SectionHeading } from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/data/content";
import { Phone, MessageCircle, Clock, MapPin, Siren } from "lucide-react";
import { PHONE_1_LINK, WHATSAPP_LINK } from "@/lib/utils";

export const metadata = { title: "Contact | आयुर्वेदिक चमत्कारी उपचार", description: "अपॉइंटमेंट बुक करें — Call 8920006543, WhatsApp, क्लीनिक समय व पता।" };

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Contact Us" title="संपर्क करें — हम सुन रहे हैं" subtitle="फॉर्म भरें, कॉल करें या WhatsApp करें — 24 घंटे के भीतर उत्तर।" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="space-y-6">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href={PHONE_1_LINK} className="rounded-3xl bg-gradient-to-br from-forest-700 to-forest-950 p-7 text-white hover:brightness-110 transition">
                  <Phone className="text-gold-300" size={26} />
                  <p className="mt-3 text-sm text-white/65">Primary Helpline</p>
                  <p className="font-display text-3xl font-bold">89200 06543</p>
                  <p className="mt-1 text-xs text-white/60">Tap to call now</p>
                </a>
                <a href="tel:+917303233052" className="rounded-3xl border border-gold-500/40 bg-white p-7 hover:border-gold-500 transition">
                  <Phone className="text-gold-600" size={26} />
                  <p className="mt-3 text-sm text-forest-700">Alternate Number</p>
                  <p className="font-display text-3xl font-bold text-forest-950">73032 33052</p>
                  <p className="mt-1 text-xs text-forest-700/70">Tap to call now</p>
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3">
                <a href={WHATSAPP_LINK} target="_blank" className="rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 text-center hover:bg-[#25D366]/20 transition">
                  <MessageCircle className="mx-auto text-[#1da851]" size={24} />
                  <p className="mt-2 font-bold text-forest-950 text-sm">WhatsApp</p>
                  <p className="text-xs text-forest-700">रिपोर्ट भेजें</p>
                </a>
                <div className="rounded-2xl border border-forest-900/10 bg-white p-5 text-center">
                  <Clock className="mx-auto text-gold-600" size={24} />
                  <p className="mt-2 font-bold text-forest-950 text-sm">9 AM – 8 PM</p>
                  <p className="text-xs text-forest-700">सप्ताह के 7 दिन</p>
                </div>
                <div className="rounded-2xl border border-forest-900/10 bg-white p-5 text-center">
                  <MapPin className="mx-auto text-gold-600" size={24} />
                  <p className="mt-2 font-bold text-forest-950 text-sm">Delhi NCR</p>
                  <p className="text-xs text-forest-700">कॉल पर पता पाएँ</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-forest-900/10 bg-white">
                <div className="bg-forest-950 px-6 py-4 flex items-center gap-2 text-white font-bold text-sm"><MapPin size={16} className="text-gold-400" /> Find Us on Map</div>
                <iframe title="map" src="https://www.google.com/maps?q=New+Delhi&output=embed" className="h-72 w-full border-0" loading="lazy" />
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl bg-red-600 p-6 md:p-7 text-white flex flex-col sm:flex-row items-center gap-4 justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20"><Siren size={22} /></span>
                  <div><p className="font-bold">Emergency Consultation?</p><p className="text-sm text-white/80">तेज दर्द / गंभीर लक्षण में तुरंत कॉल करें</p></div>
                </div>
                <a href={PHONE_1_LINK} className="rounded-full bg-white px-7 py-3 font-bold text-red-700 hover:brightness-95 shrink-0">Call Immediately</a>
              </div>
            </Reveal>
            <div><FaqAccordion items={faqs.slice(0, 4)} /></div>
          </div>
          <div className="lg:sticky lg:top-32 h-fit"><BookingForm /></div>
        </div>
      </div>
    </div>
  );
}
