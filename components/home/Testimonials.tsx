"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Lindqvist",
    company: "Nordic Retail AB",
    role: "VD",
    quote:
      "BrilliantBooster förvandlade vår digitala närvaro helt. Inom sex månader ökade vår organiska trafik med 240% och vi har fler kvalificerade leads än någonsin. Professionella, lyhörda och resultatdrivna.",
    initials: "AL",
  },
  {
    name: "Marcus Björk",
    company: "Techhub Stockholm",
    role: "Marknadschef",
    quote:
      "Datadrivna och otroligt strategiska. Deras paid ads-kampanj gav oss 4x ROAS från första månaden. Det bästa är transparensen – vi vet alltid exakt vart varje krona tar vägen.",
    initials: "MB",
  },
  {
    name: "Sofia Eriksson",
    company: "Scandinav Fashion",
    role: "E-handelschef",
    quote:
      "Från att knappt synas på Google till att dominera i vår nisch på åtta månader. BrilliantBooster är inte en byrå – de är en strategisk partner som verkligen bryr sig om våra resultat.",
    initials: "SE",
  },
];

export default function Testimonials() {
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
            Kundröster
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Vad våra kunder{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              säger
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Verkliga resultat, verkliga relationer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col"
            >
              <Quote className="w-8 h-8 text-blue-500/25 mb-4 flex-shrink-0" />
              <p className="text-zinc-300 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
