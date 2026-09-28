"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Counter({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
}

export function TrustCounters() {
  const items = [
    { value: 15000, suffix: "+", label: "Happy Patients", hindi: "संतुष्ट रोगी" },
    { value: 20, suffix: "+", label: "Years Experience", hindi: "वर्षों का अनुभव" },
    { value: 100, suffix: "%", label: "Ayurvedic Approach", hindi: "शुद्ध आयुर्वेदिक" },
    { value: 11, suffix: "+", label: "Diseases Treated", hindi: "रोगों का उपचार" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="glass rounded-3xl border border-white/40 p-6 text-center shadow-[0_20px_50px_-20px_rgba(6,46,22,0.4)]"
        >
          <p className="font-display text-4xl md:text-5xl font-bold text-forest-900"><Counter to={it.value} suffix={it.suffix} /></p>
          <p className="mt-2 text-sm font-bold text-forest-800">{it.label}</p>
          <p className="text-xs text-forest-700/70">{it.hindi}</p>
        </motion.div>
      ))}
    </div>
  );
}
