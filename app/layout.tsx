import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BrilliantBooster – Digital Marknadsföringsbyrå",
    template: "%s | BrilliantBooster",
  },
  description:
    "Vi hjälper ambitiösa företag att växa digitalt med SEO, Paid Ads, Social Media, Content och Analytics – och levererar mätbara resultat.",
  openGraph: {
    title: "BrilliantBooster – Digital Marknadsföringsbyrå",
    description:
      "Vi hjälper ambitiösa företag att växa digitalt med SEO, Paid Ads, Social Media, Content och Analytics.",
    type: "website",
    locale: "sv_SE",
    siteName: "BrilliantBooster",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrilliantBooster",
    description: "Vi hjälper ambitiösa företag att växa digitalt.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
