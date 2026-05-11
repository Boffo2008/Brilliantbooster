"use client";

import { motion } from "framer-motion";
import { Microscope, Lightbulb, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Microscope,
    title: "Analys",
    description:
      "Vi börjar med en djupgående analys av din nuläge, konkurrenter och målgrupp. Inget antagande – bara data och insikter som formar allt vi gör.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategi",
    description:
      "Utifrån analysen bygger vi en skräddarsydd strategi med tydliga mål, KPIer och en konkret handlingsplan anpassad för ditt företag.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Resultat",
    description:
      "Vi exekverar, optimerar löpande och rapporterar transparent. Du vet alltid vad du betalar för och vilka resultat det genererar.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Vår process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Hur vi{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              jobbar
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            En strukturerad process som tar dig från nuläge till tillväxt –
            utan gissningar, utan överraskningar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-14 left-[calc(33%+2rem)] right-[calc(33%+2rem)] h-px bg-linear-to-r from-blue-500/40 via-blue-400/20 to-blue-500/40" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center p-8"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-blue-500/10 border border-blue-500/25 rounded-2xl flex items-center justify-center">
                    <Icon className="w-9 h-9 text-blue-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-blue-400 bg-zinc-950 border border-blue-500/30 rounded-full w-6 h-6 flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
