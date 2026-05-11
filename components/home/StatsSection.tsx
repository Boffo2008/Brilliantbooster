"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 50, damping: 15 });

  useEffect(() => {
    if (inView) count.set(value);
  }, [inView, value, count]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Nöjda kunder",
    description: "Företag vi hjälpt att växa",
  },
  {
    value: 320,
    suffix: "%",
    label: "Genomsnittlig ROI",
    description: "För våra kunder det senaste året",
  },
  {
    value: 8,
    suffix: "+",
    label: "År i branschen",
    description: "Beprövad erfarenhet och expertis",
  },
  {
    value: 50,
    suffix: "M+",
    label: "kr i intäkter",
    description: "Genererade åt våra kunder",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_65%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Bevisade resultat
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Siffror som{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              talar
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Vi mäter oss mot dina affärsmål – och levererar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 bg-zinc-900 rounded-2xl border border-zinc-800 text-center hover:border-blue-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-zinc-500 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
