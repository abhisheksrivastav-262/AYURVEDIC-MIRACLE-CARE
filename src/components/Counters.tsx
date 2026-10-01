"use client";
import { motion } from "framer-motion";
import { Leaf, Stethoscope, HeartHandshake, Truck } from "lucide-react";

export function TrustBadges() {
  const items = [
    { icon: <Leaf size={24} />, title: "शुद्ध आयुर्वेदिक दृष्टिकोण", desc: "शास्त्रीय जड़ी-बूटियों पर आधारित परामर्श" },
    { icon: <Stethoscope size={24} />, title: "व्यक्तिगत परामर्श योजना", desc: "स्थिति व रिपोर्ट अनुसार योजना" },
    { icon: <HeartHandshake size={24} />, title: "अनुभवी वैद्य मार्गदर्शन", desc: "नियमित फॉलो-अप व पथ्य-सहयोग" },
    { icon: <Truck size={24} />, title: "घर-बैठे दवा सुविधा", desc: "क्लीनिक व कूरियर दोनों विकल्प" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="glass rounded-3xl border border-white/40 p-6 text-center shadow-[0_20px_50px_-20px_rgba(6,46,22,0.4)]"
        >
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-950 text-gold-300 shadow-lg">{it.icon}</span>
          <p className="mt-3 text-sm font-bold text-forest-900">{it.title}</p>
          <p className="mt-1 text-xs text-forest-700/70">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
