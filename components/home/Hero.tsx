"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-blue-600/6 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Digital marknadsföring som levererar resultat
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Vi skalar ditt{" "}
          <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            digitala varumärke
          </span>{" "}
          till nästa nivå
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          BrilliantBooster kombinerar datadriven strategi med kreativt hantverk
          för att ge dig mätbara resultat – fler leads, högre ROI och ett
          varumärke som syns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/kontakt"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 text-lg"
          >
            Boka ett samtal
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/tjanster"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all duration-200 border border-zinc-700 hover:border-zinc-600 text-lg"
          >
            Se våra tjänster
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-sky-500"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-zinc-950`}
                  />
                )
              )}
            </div>
            <span>150+ nöjda kunder</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-700" />
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span>4.9/5 i kundbetyg</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-700" />
          <span>✓ Inga långa avtal</span>
        </motion.div>
      </div>
    </section>
  );
}
