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
  title: `${SITE_NAME} | पित्त की थैली की पथरी का आयुर्वेदिक उपचार — बिना ऑपरेशन`,
  description: "15,000+ संतुष्ट रोगी • 20+ वर्ष अनुभव • पित्त की थैली की पथरी, शुगर, गुर्दे की पथरी, थायरॉयड, बवासीर, जोड़-दर्द का 100% आयुर्वेदिक उपचार। बिना ऑपरेशन, बिना दर्द। Call 8920006543",
  keywords: ["ayurvedic treatment", "gallbladder stone without operation", "पित्त की थैली की पथरी", "sugar ayurvedic", "kidney stone", "thyroid", "piles", "joint pain"],
  openGraph: {
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: "बिना ऑपरेशन • बिना दर्द • बिना साइड इफेक्ट — प्राकृतिक आयुर्वेदिक चिकित्सा।",
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
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2300" },
  };
  return (
    <html lang="hi" className={`${display.variable} ${body.variable} ${hindi.className} h-full antialiased`}>
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
