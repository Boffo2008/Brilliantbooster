import Link from "next/link";
import { Zap, Mail, Phone, Globe, AtSign, Share2 } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

const services = [
  { href: "/tjanster#seo", label: "SEO" },
  { href: "/tjanster#paid-ads", label: "Paid Ads" },
  { href: "/tjanster#social-media", label: "Social Media" },
  { href: "/tjanster#content", label: "Content Marketing" },
  { href: "/tjanster#email", label: "E-postmarknadsföring" },
  { href: "/tjanster#analytics", label: "Analytics" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">
                Brilliant<span className="text-blue-500">Booster</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Vi hjälper ambitiösa företag att växa digitalt med datadrivna
              strategier och kreativa lösningar.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 hover:bg-blue-500 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <AtSign className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 hover:bg-blue-500 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 hover:bg-blue-500 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                aria-label="X / Twitter"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Snabblänkar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Tjänster</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-zinc-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:Botwid.persson@brilliantbooster.se"
                  className="flex items-start gap-2 text-zinc-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Botwid.persson@brilliantbooster.se
                </a>
              </li>
              <li>
                <a
                  href="tel:+46704427006"
                  className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  070 442 70 06
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} BrilliantBooster. Alla rättigheter
            förbehållna.
          </p>
          <p className="text-zinc-600 text-sm">Byggd med passion för resultat</p>
        </div>
      </div>
    </footer>
  );
}
