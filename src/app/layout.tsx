import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexa Solutions | Web Development, Mobile Apps & AI Automation",
  description:
    "Nexa Solutions builds high-performance web applications, mobile platforms, and AI-powered automation systems for ambitious businesses looking to scale digitally.",
  keywords: [
    "Web Development",
    "Mobile Apps",
    "AI Automation",
    "n8n Workflows",
    "SaaS Architecture",
    "Custom Software Engineering",
    "Next.js Development",
  ],
  authors: [{ name: "Nexa Solutions" }],
  creator: "Nexa Solutions",
  metadataBase: new URL("https://nexa-solutions.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
    url: "https://nexa-solutions.io",
    title: "Nexa Solutions | Web Development, Mobile Apps & AI Automation",
    description:
      "High-performance web applications, mobile platforms, and AI automation systems built for business impact.",
    siteName: "Nexa Solutions",
    images: [
      {
        url: "/images/meagle-laptop.jpg",
        width: 1200,
        height: 630,
        alt: "Nexa Solutions - Web Development & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Solutions | Web Development, Mobile Apps & AI Automation",
    description:
      "High-performance web applications, mobile platforms, and AI automation systems built for business impact.",
    images: ["/images/meagle-laptop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nexa Solutions",
    url: "https://nexa-solutions.io",
    logo: "https://nexa-solutions.io/images/meagle-laptop.jpg",
    description:
      "Nexa Solutions develops custom web applications, mobile platforms, and AI-powered automation systems.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "AI Automation",
      "SaaS Engineering",
    ],
  };

  return (
    <html
      lang="de"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
