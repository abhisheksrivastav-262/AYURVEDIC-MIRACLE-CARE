import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SITE_NAME, TAGLINE } from "@/lib/utils";

const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const hindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: `${SITE_NAME} | पित्त की पथरी, शुगर, जोड़-दर्द व संपूर्ण स्वास्थ्य का आयुर्वेदिक परामर्श`,
  description: "नमो नारायणा आयुर्वेदिक — पित्त/किडनी पथरी, शुगर, थायरॉयड, बवासीर, जोड़-दर्द, लकवा, हेयर प्रॉब्लम, पुरुष स्वास्थ्य व सहायक देखभाल हेतु व्यक्तिगत आयुर्वेदिक परामर्श। Call 8920006543",
  keywords: ["ayurvedic treatment", "gallbladder stone", "पित्त की पथरी", "sugar ayurvedic", "kidney stone", "thyroid", "piles", "joint pain", "paralysis", "hair fall", "namo narayana ayurvedic"],
  openGraph: {
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: "व्यक्तिगत आयुर्वेदिक परामर्श एवं प्राकृतिक स्वास्थ्य समाधान।",
    type: "website",
    locale: "hi_IN",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    slogan: TAGLINE,
    telephone: "+91-8920006543",
    medicalSpecialty: "Ayurvedic",
    priceRange: "₹₹",
    openingHours: "Mo-Su 09:00-20:00",
  };
  return (
    <html lang="hi" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} ${hindi.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-50 text-forest-950">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
