import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/kontakt/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta BrilliantBooster för ett kostnadsfritt strategimöte. Vi hjälper dig växa digitalt.",
  openGraph: {
    title: "Kontakt | BrilliantBooster",
    description:
      "Boka ett kostnadsfritt strategimöte med BrilliantBooster.",
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "E-post",
    value: "Botwid.persson@brilliantbooster.se",
    href: "mailto:Botwid.persson@brilliantbooster.se",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "070 442 70 06",
    href: "tel:+46704427006",
  },
  {
    icon: MapPin,
    label: "Adress",
    value: "Stockholm, Sverige",
    href: null,
  },
  {
    icon: Clock,
    label: "Svarstid",
    value: "Inom 24 timmar",
    href: null,
  },
];

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
              Låt oss{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                prata tillväxt
              </span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Fyll i formuläret så återkommer vi inom 24 timmar för att boka ett
              kostnadsfritt strategimöte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 bg-zinc-900 rounded-2xl border border-zinc-800 p-8 md:p-10">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  Kontaktuppgifter
                </h2>
                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white text-sm hover:text-blue-400 transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white text-sm font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20 p-8">
                <h3 className="text-lg font-bold text-white mb-2">
                  Gratis strategimöte
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Boka ett 30 minuters möte där vi analyserar din nuläge och
                  presenterar konkreta tillväxtmöjligheter – utan kostnad och
                  utan förpliktelser.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Digital analys av din verksamhet",
                    "Konkurrentgenomgång",
                    "Konkreta rekommendationer",
                    "Ingen sälj-pitch",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
