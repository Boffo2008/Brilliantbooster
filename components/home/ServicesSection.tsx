"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Target, Share2, FileText, Mail, BarChart2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Dominera sökresultaten och driv organisk trafik med vår beprövade SEO-strategi – teknisk optimering, länkbyggning och content som rankar.",
  },
  {
    icon: Target,
    title: "Paid Ads",
    description:
      "Google & Meta-annonser som konverterar. Vi optimerar varje krona du investerar för maximal avkastning och mätbara resultat.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Bygg ett engagerat community och stärk ditt varumärke på rätt plattformar med strategi, kreativt innehåll och community management.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Strategiskt innehåll som attraherar, engagerar och konverterar din målgrupp – från bloggartiklar och landningssidor till videomanus.",
  },
  {
    icon: Mail,
    title: "E-postmarknadsföring",
    description:
      "Automatiserade e-postkampanjer som nurturar leads och driver återköp. Segmentering, personalisering och kontinuerlig A/B-testning.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Data",
    description:
      "Förstå din data, fatta rätt beslut och se exakt vilka insatser som genererar ROI. GA4-setup, dashboards och attribution-modellering.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Vad vi erbjuder
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Heltäckande digitala{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              tjänster
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Från synlighet till konvertering – vi täcker hela den digitala
            kundresan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-7 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500/40 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href="/tjanster"
                  className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                >
                  Läs mer
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
