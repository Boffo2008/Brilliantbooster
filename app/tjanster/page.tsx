import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  BarChart2,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "SEO, Paid Ads, Social Media, Content Marketing, E-postmarknadsföring och Analytics. Heltäckande digital marknadsföring från BrilliantBooster.",
  openGraph: {
    title: "Tjänster | BrilliantBooster",
    description:
      "Heltäckande digital marknadsföring – SEO, Paid Ads, Social Media, Content, Email och Analytics.",
  },
};

const services = [
  {
    id: "seo",
    icon: Search,
    title: "SEO – Sökmotoroptimering",
    tagline: "Syns du inte på Google, finns du inte.",
    description:
      "Vi analyserar, optimerar och bygger din digitala synlighet från grunden. Våra SEO-specialister kombinerar teknisk optimering med strategisk länkbyggning och innehåll som faktiskt rankar – och stannar kvar i toppen.",
    details:
      "Vår SEO-process börjar med en djupgående teknisk audit och keyword-research för att identifiera de bästa möjligheterna. Vi bygger sedan en långsiktig strategi som inkluderar on-page optimering, länkbyggning och löpande innehållsproduktion.",
    includes: [
      "Teknisk SEO-audit och åtgärdsplan",
      "Keyword-research och konkurrentanalys",
      "On-page optimering",
      "Länkbyggning (link building)",
      "Lokalt SEO för geografisk synlighet",
      "Löpande rapportering och KPI-uppföljning",
    ],
  },
  {
    id: "paid-ads",
    icon: Target,
    title: "Paid Ads – Google & Meta",
    tagline: "Varje krona investerad ska ge maximal avkastning.",
    description:
      "Vi skapar, hanterar och optimerar dina kampanjer på Google Search, Display, Shopping och YouTube samt Meta (Facebook & Instagram). Varje annons är strategiskt utformad för att nå rätt person, vid rätt tid – med rätt budskap.",
    details:
      "Med kontinuerlig A/B-testning och datadriven budgetoptimering ser vi till att dina annonspengar alltid arbetar så hårt som möjligt. Vi spårar konverteringar noggrant och justerar kampanjerna löpande för att förbättra ROI över tid.",
    includes: [
      "Kampanjstrategi och komplett setup",
      "Kreativ annonsutformning och copywriting",
      "A/B-testning av annonser och landningssidor",
      "Kontinuerlig budgetoptimering",
      "Konverteringsspårning och attribution",
      "Detaljerade prestationsrapporter",
    ],
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Bygg ett varumärke som folk pratar om.",
    description:
      "Vi hjälper dig att bygga ett engagerat community och stärka ditt varumärke på de plattformar där din målgrupp befinner sig. Från strategi och content-planering till daglig publicering och community management.",
    details:
      "Vi analyserar vilka plattformar som ger bäst ROI för just ditt företag och skapar en heltäckande social media-strategi. Kreativt innehåll, konsekvent tonalitet och proaktivt community management skapar ett varumärke som engagerar.",
    includes: [
      "Plattformsstrategi anpassad för din målgrupp",
      "Content-kalender och redaktionell planering",
      "Grafik, inlägg och stories",
      "Community management och kundservice",
      "Influencer-samarbeten vid behov",
      "Månadsanalys och optimering",
    ],
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    tagline: "Innehåll som attraherar, engagerar och konverterar.",
    description:
      "Strategiskt innehåll bygger förtroende, driver organisk trafik och konverterar besökare till kunder. Vi skapar innehåll som din målgrupp faktiskt söker efter och vill ta del av – från SEO-artiklar till e-böcker och videomanus.",
    details:
      "Vår content-strategi bygger på djup keyword-research, konkurrentanalys och förståelse för din målgrupps köpresa. Vi producerar konsekvent, högkvalitativt innehåll som stärker din position som expert i branschen.",
    includes: [
      "Content-strategi och redaktionell planering",
      "SEO-optimerade blogginlägg och artiklar",
      "Webbtexter och konverterande landningssidor",
      "Videomanus och podcastmaterial",
      "Infografik och visuellt innehåll",
      "E-böcker, guides och lead magnets",
    ],
  },
  {
    id: "email",
    icon: Mail,
    title: "E-postmarknadsföring",
    tagline: "Din mest lönsamma marknadsföringskanal.",
    description:
      "E-postmarknadsföring levererar konsekvent den högsta ROI av alla digitala kanaler. Vi bygger automatiserade flöden som nurturar leads, onboardar nya kunder och driver återköp – på autopilot.",
    details:
      "Vi designar och implementerar hela e-poststrategin: från välkomst-sekvenser och lead nurturing till post-purchase-flöden och winback-kampanjer. Med avancerad segmentering och personalisering ökar vi relevansen och konverteringsgraden.",
    includes: [
      "E-poststrategi och flödeskartläggning",
      "Automatiseringsflöden (Klaviyo, Mailchimp, HubSpot m.fl.)",
      "Nyhetsbrev och kampanjmejl",
      "Avancerad segmentering och personalisering",
      "A/B-testning av ämnesrader och innehåll",
      "Leverabilitetsgranskning och spårning",
    ],
  },
  {
    id: "analytics",
    icon: BarChart2,
    title: "Analytics & Data",
    tagline: "Fatta rätt beslut – varje gång.",
    description:
      "Utan korrekt data fattar du beslut baserade på magkänsla. Vi sätter upp robust spårning, bygger skräddarsydda dashboards och hjälper dig förstå exakt vilka insatser som genererar intäkter – och vilka som inte gör det.",
    details:
      "Vi är specialister på GA4, Google Tag Manager och avancerad attribution-modellering. Oavsett om du behöver en komplett datainfrastruktur från grunden eller optimering av befintlig spårning levererar vi insikter som driver tillväxt.",
    includes: [
      "GA4-setup, migrering och konfigurering",
      "Google Tag Manager-implementation",
      "Konverteringsspårning och händelsetaggning",
      "Custom dashboards i Looker Studio / GA4",
      "Attribution-modellering och kanalanalys",
      "Månadsrapportering och strategiska insikter",
    ],
  },
];

export default function TjansterPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="py-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Tjänster
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 text-white leading-tight">
            Allt du behöver för att{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              dominera digitalt
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Vi erbjuder heltäckande digitala marknadsföringstjänster – från
            synlighet och trafik till leads och intäkter.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Kontakta för offert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-reverse"
                  }`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
                      {service.tagline}
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                      {service.details}
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 text-sm"
                    >
                      Kontakta för offert
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div
                    className={`bg-zinc-900 rounded-2xl border border-zinc-800 p-8 ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >
                    <h3 className="text-white font-semibold mb-5 text-lg">
                      Vad ingår
                    </h3>
                    <ul className="space-y-3.5">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-zinc-300 text-sm"
                        >
                          <div className="w-5 h-5 bg-blue-500/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-blue-400" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/40 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Redo att komma igång?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Kontakta oss för en offert anpassad till dina behov och din budget.
            Vi svarar inom 24 timmar.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 text-lg"
          >
            Kontakta för offert
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
