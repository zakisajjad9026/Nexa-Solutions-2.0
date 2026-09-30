"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  Code2,
  BarChart3,
  Lock,
  Rocket,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "Next.js", "React 19", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma ORM", "AWS Cloud",
  "Stripe", "Cloudflare Edge", "Supabase", "Docker",
];

const deliverables = [
  {
    icon: Globe,
    de: "Maßgeschneiderte, responsive Webanwendung",
    en: "Custom responsive web application",
    descDe: "Optimiert für Mobilgeräte, Tablets und Desktop mit flüssigen Übergängen.",
    descEn: "Fully responsive across mobile, tablet, and desktop with fluid transitions.",
  },
  {
    icon: Layers,
    de: "Kundenportale & Admin-Dashboards",
    en: "Client portals & admin dashboards",
    descDe: "Rollenbasierte Benutzerverwaltung und intuitive Datenverwaltung.",
    descEn: "Role-based user permissions, real-time analytics, and operational controls.",
  },
  {
    icon: Zap,
    de: "Sub-Sekunden Ladezeiten & Core Web Vitals 95+",
    en: "Sub-second load speeds & 95+ Core Web Vitals",
    descDe: "Modernes Edge-Caching für maximale Suchmaschinen-Rankings und Konversionen.",
    descEn: "Edge CDN caching optimized for Google organic visibility and sales conversions.",
  },
  {
    icon: Code2,
    de: "Sichere API- & Zahlungs-Integrationen",
    en: "Secure API & payment gateways",
    descDe: "Stripe, PayPal, HubSpot, DATEV oder individuelle Unternehmensschnittstellen.",
    descEn: "Seamless integrations with Stripe, PayPal, HubSpot, DATEV, or custom REST/GraphQL APIs.",
  },
  {
    icon: Lock,
    de: "100% DSGVO-Konformität & SSL-Verschlüsselung",
    en: "100% GDPR compliance & SSL encryption",
    descDe: "Sichere europäische Rechenzentren, AVV-Konformität und strikter Datenschutz.",
    descEn: "Secure European data centers, strict encryption, and complete GDPR compliance.",
  },
  {
    icon: BarChart3,
    de: "Technisches SEO & Konversions-Architektur",
    en: "Technical SEO & conversion architecture",
    descDe: "Semantische Struktur, JSON-LD Schemas und klare Nutzerführung.",
    descEn: "Semantic HTML5 structure, rich schema tags, and high-converting CTA funnels.",
  },
];

const processSteps = [
  {
    step: "01",
    de: { title: "Discover & Scope", desc: "Detaillierte Analyse Ihrer Geschäftsziele, Zielgruppen und technischen Anforderungen für einen verbindlichen Festpreis." },
    en: { title: "Discover & Scope", desc: "In-depth review of your commercial goals, audience, and system requirements to establish a fixed milestone scope." },
  },
  {
    step: "02",
    de: { title: "Architektur & Prototyp", desc: "UI/UX-Design und interaktive Klick-Prototypen in Figma zur Validierung aller User Journeys vor dem Coden." },
    en: { title: "Architecture & UX", desc: "System wireframing, technical design, and clickable prototypes to validate all user journeys before engineering." },
  },
  {
    step: "03",
    de: { title: "Agile Entwicklung", desc: "Sauberer TypeScript-Code in zweiwöchigen Sprints mit kontinuierlichen Tests und direktem Entwicklerkontakt." },
    en: { title: "Agile Engineering", desc: "Clean TypeScript code delivered in focused two-week sprints with automated testing and direct tech lead contact." },
  },
  {
    step: "04",
    de: { title: "Go-Live & SLA-Support", desc: "Reibungsloses Deployment auf modernen Cloud-Servern mit 24/7 Monitoring und proaktiven Sicherheits-Patches." },
    en: { title: "Launch & Ongoing SLA", desc: "Zero-downtime cloud deployment, performance auditing, and long-term proactive maintenance support." },
  },
];

const faqs = [
  {
    de: {
      q: "Wie lange dauert die Entwicklung einer Webanwendung?",
      a: "Kleinere Marketing-Websites und Portale dauern in der Regel 3 bis 5 Wochen. Umfangreichere SaaS-Plattformen und Web-Apps mit komplexer Datenbanklogik dauern typischerweise 6 bis 10 Wochen.",
    },
    en: {
      q: "How long does custom web engineering take?",
      a: "Tailored business websites and client portals typically take 3 to 5 weeks. Complex SaaS platforms and custom web applications take 6 to 10 weeks.",
    },
  },
  {
    de: {
      q: "Gehört der Quellcode nach Projektabschluss vollständig mir?",
      a: "Ja, zu 100 %. Sie erhalten den uneingeschränkten Quellcode, alle Repositories, Datenbank-Schemata und Dokumentationen. Es gibt keinerlei Vendor-Lock-in.",
    },
    en: {
      q: "Do I own 100% of the source code upon delivery?",
      a: "Yes, unconditionally. You receive complete and unencumbered ownership of all source code repositories, databases, and credentials with zero vendor lock-in.",
    },
  },
  {
    de: {
      q: "Bieten Sie auch laufende Wartung und Sicherheits-Updates nach dem Launch an?",
      a: "Ja. Wir bieten flexible monatliche Wartungspakete inklusive 24/7 Monitoring, Sicherheits-Patches, automatisierten Backups und garantierten Reaktionszeiten.",
    },
    en: {
      q: "Do you offer post-launch maintenance and SLA support?",
      a: "Yes. We offer flexible ongoing SLA maintenance packages including 24/7 health monitoring, automated backups, security patches, and emergency support.",
    },
  },
  {
    de: {
      q: "Können bestehende Systeme (z.B. CRM, ERP oder Schnittstellen) integriert werden?",
      a: "Selbstverständlich. Wir haben umfassende Erfahrung bei der Anbindung von HubSpot, Salesforce, Stripe, DATEV, n8n und individuellen internen REST/GraphQL-APIs.",
    },
    en: {
      q: "Can you interface with existing CRMs, ERPs, or custom APIs?",
      a: "Absolutely. We routinely integrate Stripe, HubSpot, Salesforce, DATEV, n8n workflows, and custom backend APIs.",
    },
  },
];

export default function WebDevelopmentPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0B1020] selection:bg-[#6D5DFB] selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        {/* Ambient Subtle Purple Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#6D5DFB]/12 via-[#7C3AED]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#6D5DFB] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span>/</span>
            <span className="text-[#0B1020] font-medium">{t("Webentwicklung & SaaS", "Web Engineering & SaaS")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-5">
                <Globe className="w-3.5 h-3.5 text-[#6D5DFB]" />
                <span>{t("WEBENTWICKLUNG & SAAS", "WEB ENGINEERING & SAAS")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-heading text-[#0B1020] tracking-tight leading-[1.1] mb-6">
                {t(
                  "Hochperformante Webanwendungen für ambitionierte Unternehmen.",
                  "High-performance web apps built for serious scale."
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                {t(
                  "Wir konzipieren und entwickeln blitzschnelle, SEO-optimierte Webanwendungen, Kundenportale und SaaS-Lösungen. Mit modernen Frameworks, strikter Typsicherheit und direkter Entwicklerbetreuung.",
                  "We architect and build sub-second, SEO-optimized web applications, client portals, and enterprise SaaS platforms. Engineered with modern frameworks, strict type-safety, and direct tech lead access."
                )}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  { icon: Zap, label: t("Lighthouse 95+", "Lighthouse 95+") },
                  { icon: ShieldCheck, label: t("100% Quellcode-Eigentum", "100% Code Ownership") },
                  { icon: Rocket, label: t("Verbindliche Festpreise", "Fixed Price Scope") },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F8FC] border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#6D5DFB]" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(109,93,251,0.28)] hover:shadow-[0_6px_22px_rgba(109,93,251,0.38)] group cursor-pointer"
                >
                  <span>{t("Projekt anfragen", "Start a Project")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-2xs"
                >
                  {t("Entwicklungsablauf", "View Process")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-[4/3] group">
                <Image
                  src="/images/meagle-laptop.jpg"
                  alt={t("Website-Entwicklung", "Web Development")}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating stats card */}
                <div className="absolute bottom-5 left-5 right-5 flex gap-2.5">
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-xl font-bold font-heading text-[#6D5DFB]">98+</div>
                    <div className="text-[11px] text-slate-600 font-medium">Lighthouse Score</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-xl font-bold font-heading text-[#6D5DFB]">+48%</div>
                    <div className="text-[11px] text-slate-600 font-medium">{t("Conversion", "Conversion")}</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-xl font-bold font-heading text-[#0B1020]">0.7s</div>
                    <div className="text-[11px] text-slate-600 font-medium">{t("Ladezeit", "Page Load")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-[#F8F8FC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("LEISTUNGSUMFANG", "WHAT WE DELIVER")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B1020] tracking-tight">
              {t("Vollständige technische Lieferungen", "Complete Engineering Deliverables")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col justify-between p-7 rounded-3xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#F5F3FF] border border-purple-200/70 flex items-center justify-center text-[#6D5DFB] mb-5 group-hover:bg-[#6D5DFB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#0B1020] mb-2 group-hover:text-[#6D5DFB] transition-colors">
                      {t(item.de, item.en)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t(item.descDe, item.descEn)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-[#0B1020] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-[#6D5DFB]/15 text-[#A78BFA] text-xs font-semibold tracking-wider uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{t("TECHNOLOGIE-ECOSYSTEM", "TECHNOLOGY ECOSYSTEM")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            {t("Modern. Schnell. Skalierbar.", "Modern. Fast. Scalable.")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
            {t(
              "Wir nutzen erprobte Industrie-Standards für maximale Geschwindigkeit, Zuverlässigkeit und Zukunftssicherheit.",
              "We leverage battle-tested industry standards for maximum performance, security, and long-term maintainability."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#6D5DFB]/20 border border-white/10 hover:border-[#6D5DFB]/50 text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-3">
              <Rocket className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("UNSER ENTWICKLUNGSABLAUF", "DEVELOPMENT PROCESS")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B1020] tracking-tight">
              {t("Vom Konzept zum produktiven Go-Live", "From Concept to Production Deployment")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-3xl bg-[#F8F8FC] border border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs text-[#6D5DFB] font-bold font-mono text-base flex items-center justify-center mb-5">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B1020] mb-2">
                    {t(step.de.title, step.en.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(step.de.desc, step.en.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F8F8FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B1020] tracking-tight">
              {t("Häufig gestellte Fragen zur Webentwicklung", "Frequently Asked Questions")}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold font-heading text-[#0B1020]">
                    {t(faq.de.q, faq.en.q)}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      openFaq === i
                        ? "bg-[#6D5DFB] border-[#6D5DFB] text-white rotate-180"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{t(faq.de.a, faq.en.a)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B1020] text-white p-8 sm:p-12 text-center relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6D5DFB]/20 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-[#6D5DFB]/15 text-[#A78BFA] text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>{t("ERSTGESPRÄCH ANFRAGEN", "PROJECT CONSULTATION")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
                {t("Bereit für eine hochperformante Webanwendung?", "Ready for a high-performance web platform?")}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-8">
                {t(
                  "Sprechen Sie unverbindlich mit unseren Senior-Entwicklern über Architektur, Zeitplan und Festpreise.",
                  "Discuss architecture, timeline, and fixed-price scope directly with our technical leads."
                )}
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(109,93,251,0.35)] group cursor-pointer"
              >
                <span>{t("Kostenloses Gespräch anfragen", "Book Discovery Call")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={t("Webentwicklung & SaaS", "Web Engineering & SaaS")}
      />
    </div>
  );
}
