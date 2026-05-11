import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Database, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Lär känna BrilliantBooster – vår story, våra värderingar och varför vi är byrån för dig som vill ha verkliga resultat.",
  openGraph: {
    title: "Om oss | BrilliantBooster",
    description:
      "Digital marknadsföringsbyrå grundad på transparens, data och passion för resultat.",
  },
};

const values = [
  {
    icon: Eye,
    title: "Transparens",
    description:
      "Inga dolda avgifter, inga hemliga metoder. Du ser exakt vad vi gör, varför vi gör det och vad det ger för resultat. Alltid.",
  },
  {
    icon: Database,
    title: "Datadrivna beslut",
    description:
      "Vi baserar varje strategi och beslut på data – inte magkänsla eller trendsurfing. Siffror ljuger inte.",
  },
  {
    icon: TrendingUp,
    title: "Resultatfokus",
    description:
      "Vi mäter oss mot dina affärsmål, inte klick och impressioner. Om det inte driver din tillväxt är det inte värt att göra.",
  },
  {
    icon: Users,
    title: "Partnerskap",
    description:
      "Vi ser oss som din tillväxtpartner, inte en leverantör. Din framgång är vår framgång – vi jobbar som ett team.",
  },
];

const whyUs = [
  "Dedikerat team för varje kund – ingen outsourcing",
  "Inga långa bindningstider – vi förtjänar din lojalitet",
  "Transparenta rapporter varje månad",
  "Direktkontakt med seniorspecialister",
  "Beprövad track record sedan 2016",
  "Fullständig ägarskap av allt material vi producerar åt dig",
];

export default function OmPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.07)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
                Om oss
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white leading-tight">
                Vi är byrån som{" "}
                <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  levererar
                </span>
                , inte bara lovar
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                BrilliantBooster grundades med en tydlig vision: att skapa en
                digital marknadsföringsbyrå som faktiskt levererar mätbara
                resultat – inte bara vackra presentationer och vaga löften.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8">
                Vi tröttnade på byråer som lovar guld och gröna skogar men
                levererar rapporter utan substans. Sedan starten har vi hjälpt
                över 150 företag att växa digitalt, från ambitiösa startups till
                etablerade varumärken med nationell och internationell räckvidd.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Prata med oss
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
                <div className="relative text-center p-10">
                  <div className="text-6xl font-bold text-blue-400 mb-2">8+</div>
                  <div className="text-white font-semibold text-xl mb-1">
                    År i branschen
                  </div>
                  <div className="text-zinc-500 text-sm mb-8">
                    Grundat 2016 i Stockholm
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        150+
                      </div>
                      <div className="text-zinc-500 text-xs">Kunder</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        320%
                      </div>
                      <div className="text-zinc-500 text-xs">
                        Genomsnittlig ROI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Våra{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                kärnvärden
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Det är inte vad vi gör som definierar oss – det är hur och varför
              vi gör det.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-7 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
                Varför oss?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                Det som gör oss annorlunda
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Det finns hundratals digitala byråer i Sverige. Det som
                skiljer BrilliantBooster från mängden är vår orubbliga fokus
                på verkliga affärsresultat och den täthet vi håller med våra
                kunder. Vi tar aldrig fler kunder än vi kan hantera med
                fullständig uppmärksamhet.
              </p>
              <ul className="space-y-3 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <span className="w-5 h-5 bg-blue-500/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Boka ett möte
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
              <blockquote className="text-zinc-300 text-lg leading-relaxed italic mb-6">
                &ldquo;Vi startade BrilliantBooster för att vi visste att det
                gick att göra bättre. Bättre kommunikation, bättre transparens,
                bättre resultat. Idag är vi stolta över varje kund vi jobbar med
                – och ännu stoltare över att de stannar kvar.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  BP
                </div>
                <div>
                  <p className="text-white font-semibold">Botwid Persson</p>
                  <p className="text-zinc-500 text-sm">
                    Grundare & VD, BrilliantBooster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
