"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  Bell,
  Palette,
  Rocket,
  ArrowLeft,
  Apple,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)",
  "Firebase", "GraphQL", "Supabase", "Expo",
  "Push Notifications", "Biometric Auth", "Offline Sync", "Docker",
];

const deliverables = [
  {
    icon: Apple,
    de: "Native iOS & Android Builds",
    en: "Native iOS & Android builds",
    descDe: "Einheitliche, hochperformante Codebasis mit nativer Render-Leistung.",
    descEn: "Unified high-performance codebase with 60fps native rendering speed.",
  },
  {
    icon: Palette,
    de: "Präzises UI/UX-Design & Klickdummies",
    en: "Pixel-perfect UI/UX & interactive prototypes",
    descDe: "Human-Interface- & Material-Design-Richtlinien für maximale Usability.",
    descEn: "Engineered according to Apple Human Interface and Material Design standards.",
  },
  {
    icon: Bell,
    de: "Echtzeit-Push- & Deep-Linking-Engine",
    en: "Real-time push notifications & deep linking",
    descDe: "Personalisierte Benachrichtigungen zur Steigerung der täglichen Nutzeraktivität.",
    descEn: "Targeted push triggers and seamless universal links for user re-engagement.",
  },
  {
    icon: ShieldCheck,
    de: "App Store & Google Play Store Zulassung",
    en: "App Store & Google Play approval guarantee",
    descDe: "Vollständige Übernahme des Review-Prozesses bis zur offiziellen Freigabe.",
    descEn: "End-to-end handling of store compliance, metadata, review cycles, and release.",
  },
  {
    icon: Zap,
    de: "Offline-First Daten-Synchronisation",
    en: "Offline-first data sync & caching",
    descDe: "Unterbrechungsfreie Nutzung auch bei Verbindungsverlust mit automatischer Synchronisation.",
    descEn: "Local-first persistence with seamless background synchronization once reconnected.",
  },
  {
    icon: Cpu,
    de: "Enterprise-Sicherheit & Biometrie",
    en: "Enterprise security & biometrics",
    descDe: "Face ID, Touch ID und verschlüsselte lokale Token-Speicherung.",
    descEn: "Biometric authentication (Face ID / Fingerprint) and secure keychain storage.",
  },
];

const processSteps = [
  {
    step: "01",
    de: { title: "Produktstrategie & Scope", desc: "Definition von User Journeys, Kernfeatures und verbindlichem MVP-Leistungsumfang." },
    en: { title: "Strategy & MVP Scope", desc: "Mapping user journeys, essential feature sets, and establishing fixed milestone deliverables." },
  },
  {
    step: "02",
    de: { title: "UX/UI Prototyping", desc: "Interaktive Figma-Klickdummies zur Abstimmung aller Screens vor Beginn der Programmierung." },
    en: { title: "Interactive UX Design", desc: "Clickable Figma prototypes validating micro-interactions and transitions prior to coding." },
  },
  {
    step: "03",
    de: { title: "Entwicklung & Testing", desc: "Cross-Platform Entwicklung mit kontinuierlichen Unit-Tests und Beta-Releases via TestFlight." },
    en: { title: "Engineering & QA", desc: "Clean cross-platform engineering with continuous automated testing and TestFlight beta builds." },
  },
  {
    step: "04",
    de: { title: "Store Submission & SLA", desc: "Veröffentlichung in den Stores sowie langfristige Wartung für neue iOS/Android-Versionen." },
    en: { title: "Store Release & SLA", desc: "Official store deployment, post-launch monitoring, and proactive updates for new OS versions." },
  },
];

const faqs = [
  {
    de: {
      q: "Entwickeln Sie für iOS und Android gleichzeitig?",
      a: "Ja. Wir nutzen React Native und Flutter, um mit einer gemeinsamen, hochperformanten Codebasis beide Plattformen gleichzeitig zu bedienen. Das senkt Entwicklungszeit und Kosten um bis zu 40 %.",
    },
    en: {
      q: "Do you develop for iOS and Android simultaneously?",
      a: "Yes. We leverage React Native and Flutter to deliver simultaneous native performance across both operating systems from a single, robust codebase — saving up to 40% in timeline and budget.",
    },
  },
  {
    de: {
      q: "Begleiten Sie den Review-Prozess bei Apple und Google?",
      a: "Ja, zu 100 %. Wir bereiten alle Zertifikate, Store-Screenshots, Datenschutz-Richtlinien und Beschreibungen vor und begleiten die Einreichung bis zur Freigabe.",
    },
    en: {
      q: "Do you handle App Store and Play Store review submissions?",
      a: "Yes, 100%. We configure app certificates, privacy declarations, screenshot assets, and guide the submission through to official approval.",
    },
  },
  {
    de: {
      q: "Wie lange dauert die Entwicklung einer mobilen App?",
      a: "Ein voll funktionsfähiges MVP benötigt typischerweise 5 bis 8 Wochen. Umfangreichere Apps mit Backend, Zahlungsanbindung und komplexer Benutzerverwaltung dauern 8 bis 12 Wochen.",
    },
    en: {
      q: "How long does mobile app development take?",
      a: "A functional MVP typically ships in 5 to 8 weeks. Larger platforms with custom backend architectures and complex integrations take 8 to 12 weeks.",
    },
  },
  {
    de: {
      q: "Gehört der Quellcode nach dem Launch mir?",
      a: "Ja, ausnahmslos. Sie erhalten alle Nutzungs- und Eigentumsrechte an der gesamten Codebasis, den Builds und allen Store-Zugängen ohne Vendor-Lock-in.",
    },
    en: {
      q: "Do I own 100% of the mobile app source code?",
      a: "Yes, unconditionally. You own 100% of the repository, build configurations, and credentials upon delivery with zero platform royalties.",
    },
  },
];

export default function MobileAppPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0B1020] selection:bg-[#6D5DFB] selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#6D5DFB]/12 via-[#7C3AED]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#6D5DFB] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span>/</span>
            <span className="text-[#0B1020] font-medium">{t("Mobile-App-Entwicklung", "Mobile App Development")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-5">
                <Smartphone className="w-3.5 h-3.5 text-[#6D5DFB]" />
                <span>{t("MOBILE APP ENGINEERING", "MOBILE APP ENGINEERING")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-heading text-[#0B1020] tracking-tight leading-[1.1] mb-6">
                {t(
                  "Mobile Apps für iOS & Android mit nativer Leistung.",
                  "Scalable iOS & Android apps built for performance."
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                {t(
                  "Von der Idee bis zur offiziellen App-Store-Zulassung entwickeln wir intuitive mobile Applikationen mit flüssiger 60fps-UI, Offline-Unterstützung und sicherer Cloud-Anbindung.",
                  "From initial UX prototype to production App Store deployment, we build engaging mobile applications with fluid 60fps interfaces, offline sync, and enterprise backend security."
                )}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  { icon: Apple, label: "iOS & Android Unified" },
                  { icon: ShieldCheck, label: t("100% Store-Zulassung", "Store Approval Guarantee") },
                  { icon: Rocket, label: t("Verbindlicher Zeitplan", "Milestone Roadmap") },
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
                  <span>{t("App-Projekt anfragen", "Start Mobile Project")}</span>
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
                  src="/images/app-dev.jpg"
                  alt={t("Mobile-App-Entwicklung", "Mobile App Development")}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex gap-2.5">
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-xl font-bold font-heading text-[#6D5DFB]">React Native</div>
                    <div className="text-[11px] text-slate-600 font-medium">& Flutter Ready</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-xl font-bold font-heading text-[#6D5DFB]">100%</div>
                    <div className="text-[11px] text-slate-600 font-medium">{t("Store-Zulassung", "Store Approval")}</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                    <div className="text-xl font-bold font-heading text-[#0B1020]">60 fps</div>
                    <div className="text-[11px] text-slate-600 font-medium">{t("Fluid UI", "Fluid UI")}</div>
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
              {t("Vollständige mobile Architekturlösungen", "Complete Mobile Engineering Deliverables")}
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
            <span>{t("MOBILE TECH-STACK", "MOBILE TECH ECOSYSTEM")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            {t("Cross-Platform. Nativ. Performant.", "Cross-Platform. Native. Performant.")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
            {t(
              "Wir nutzen erprobte mobile Frameworks für maximale Stabilität, Offline-Sync und intuitive User Experience.",
              "We build on battle-tested frameworks for seamless offline functionality, push reliability, and native fluid speed."
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
              {t("Von der Idee in den App Store", "From Strategy to App Store Launch")}
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
              {t("Häufig gestellte Fragen zu mobilen Apps", "Frequently Asked Questions")}
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
                <span>{t("ERSTGESPRÄCH ANFRAGEN", "APP CONSULTATION")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
                {t("Bereit für Ihre eigene mobile App?", "Ready to build your custom mobile app?")}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-8">
                {t(
                  "Sprechen Sie direkt mit unseren mobilen Entwicklern über MVP-Scope, App-Store-Zulassung und Zeitplan.",
                  "Discuss features, cross-platform architecture, and fixed milestones directly with our mobile engineers."
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
        defaultService={t("Mobile App-Entwicklung", "Mobile App Development")}
      />
    </div>
  );
}
