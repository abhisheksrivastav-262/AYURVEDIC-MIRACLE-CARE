"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { PHONE_1_LINK, WHATSAPP_LINK } from "@/lib/utils";

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", disease: "पित्त की थैली की पथरी", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `नमस्ते, मैं ${form.name} (${form.phone}) हूँ। मुझे ${form.disease} हेतु परामर्श चाहिए। ${form.message}`;
    window.open(`https://wa.me/918920006543?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <div className={`rounded-[1.8rem] border border-white/30 bg-white/85 p-6 md:p-8 shadow-[0_30px_80px_-24px_rgba(6,46,22,0.45)] backdrop-blur-xl ${compact ? "" : ""}`}>
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-800 text-gold-300"><CalendarCheck size={20} /></span>
        <div>
          <h3 className="font-display text-xl font-bold text-forest-950">Book Appointment</h3>
          <p className="text-xs text-forest-700">अपॉइंटमेंट बुक करें — 2 मिनट में</p>
        </div>
      </div>
      {sent ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 rounded-2xl bg-forest-800 p-6 text-center text-white">
          <p className="text-3xl">✓</p>
          <p className="mt-2 font-bold">धन्यवाद {form.name} जी!</p>
          <p className="mt-1 text-sm text-white/75">WhatsApp खुल गया होगा। हम शीघ्र संपर्क करेंगे।</p>
          <a href={PHONE_1_LINK} className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-forest-950"><Phone size={15} /> अभी कॉल करें</a>
        </motion.div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-3.5">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="आपका नाम *" className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30" />
          <input required pattern="[0-9+ ]{10,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="मोबाइल नंबर *" className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30" />
          <select value={form.disease} onChange={(e) => setForm({ ...form, disease: e.target.value })} className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500">
            {["पित्त की थैली की पथरी", "शुगर (मधुमेह)", "गुर्दे की पथरी", "मूत्राशय की पथरी", "तिल्ली विकार", "थायरॉयड", "बवासीर", "जोड़ों का दर्द", "गाउट", "मोटापा", "हेयर प्रॉब्लम एवं गंजापन", "अन्य"].map((d) => <option key={d}>{d}</option>)}
          </select>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="समस्या संक्षेप में लिखें (वैकल्पिक)" rows={3} className="w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500" />
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-forest-700 to-forest-900 px-5 py-3.5 text-sm font-bold text-white shadow-lg hover:brightness-110 transition">WhatsApp पर अपॉइंटमेंट भेजें</button>
          <p className="text-center text-xs text-forest-700/70">या <a className="font-bold text-forest-800 underline" href={WHATSAPP_LINK}>WhatsApp</a> / <a className="font-bold text-forest-800 underline" href={PHONE_1_LINK}>कॉल</a> करें</p>
        </form>
      )}
    </div>
  );
}
