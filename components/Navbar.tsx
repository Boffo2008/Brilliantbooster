"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-xl font-bold">
              Brilliant<span className="text-blue-500">Booster</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  pathname === link.href ? "text-blue-400" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/kontakt"
              className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Boka ett samtal
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Meny"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-3 px-3 rounded-lg transition-colors hover:text-blue-400 hover:bg-zinc-800 ${
                    pathname === link.href
                      ? "text-blue-400 bg-zinc-800"
                      : "text-zinc-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-3 w-full py-3 bg-blue-500 hover:bg-blue-400 text-white text-center font-semibold rounded-lg transition-colors"
              >
                Boka ett samtal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
