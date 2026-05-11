"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-500 to-blue-700" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative text-center px-8 py-16 md:py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Redo att växa?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Boka ett kostnadsfritt strategimöte. Vi analyserar din situation
              och berättar exakt hur vi kan hjälpa dig nå dina mål – utan
              förpliktelser.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg"
            >
              <Calendar className="w-5 h-5" />
              Boka ett gratis samtal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-6 text-blue-200 text-sm">
              Inget bindande. Inga dolda avgifter. Bara ett samtal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
