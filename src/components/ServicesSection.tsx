"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Bot, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesSectionProps {
  onSelectService: (serviceKey: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("WAS WIR BAUEN", "WHAT WE BUILD")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1020] tracking-tight leading-tight">
              {t(
                "Individuelle Software für messbares Unternehmenswachstum.",
                "Custom engineering for measurable business impact."
              )}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md lg:text-right">
            {t(
              "Keine Standard-Templates. Wir konzipieren und entwickeln maßgeschneiderte Systeme, die Ihre Betriebsabläufe beschleunigen und Kunden überzeugen.",
              "No generic templates. We architect and engineer tailored systems designed to streamline your operations and convert customers at scale."
            )}
          </p>
        </div>

        {/* Asymmetrical Layout: 1 Large Feature Card + 2 Focused Cards */}
        <div className="space-y-8">
          {/* 1. Large Hero Feature Card: Web Engineering & SaaS */}
          <div className="rounded-3xl bg-[#F8F8FC] border border-slate-200/90 p-8 sm:p-12 overflow-hidden shadow-xs hover:border-slate-300 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-[#6D5DFB] mb-3">
                  <Globe className="w-4 h-4" />
                  <span>01 &bull; {t("WEBENTWICKLUNG & SAAS", "WEB ENGINEERING & SAAS")}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1020] tracking-tight mb-4">
                  {t(
                    "Hochperformante Webanwendungen & Kundenportale",
                    "High-performance digital experiences & web platforms"
                  )}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {t(
                    "Wir entwickeln blitzschnelle Webanwendungen, SaaS-Plattformen und Headless-E-Commerce-Lösungen. Mit modernen Frameworks, kompromissloser Sicherheit und maximaler Ladezeit-Optimierung.",
                    "We build blazing-fast web applications, enterprise SaaS platforms, and headless e-commerce solutions. Built with modern frameworks, uncompromised security, and sub-second load times."
                  )}
                </p>

                {/* Capability Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    t("SaaS & Portale", "SaaS & Client Portals"),
                    t("Headless E-Commerce", "Headless E-Commerce"),
                    t("Next.js & React", "Next.js & React"),
                    t("REST & GraphQL APIs", "REST & GraphQL APIs"),
                    t("SEO & Core Web Vitals", "Core Web Vitals Optimized"),
                  ].map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#6D5DFB] hover:text-[#5B4CE0] group cursor-pointer"
                >
                  <span>{t("Details zur Webentwicklung entdecken", "Explore Web Engineering")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Column: High-Res Real Product Preview */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/images/meagle-laptop.jpg"
                      alt="Web Development and SaaS Platforms by Nexa"
                      fill
                      className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Overlay Meta */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-semibold">Production Cloud Deployment</span>
                    </div>
                    <span className="text-xs text-slate-300 font-mono">React • Node • PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Bottom Grid: Mobile Apps (Col 6) + AI Automation (Col 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 2: Mobile Applications */}
            <div className="rounded-3xl bg-[#F8F8FC] border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-xs">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-[#6D5DFB] mb-3">
                  <Smartphone className="w-4 h-4" />
                  <span>02 &bull; {t("MOBILE APPS", "MOBILE APPLICATIONS")}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1020] tracking-tight mb-3">
                  {t(
                    "Skalierbare mobile Apps für iOS & Android",
                    "Intuitive cross-platform & native apps"
                  )}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t(
                    "Nahtlose mobile Erlebnisse für Smartphone und Tablet. Flüssige UI, Offline-Synchronisation und sichere Push-Benachrichtigungen für maximale Nutzerbindung.",
                    "Fluid mobile applications built for iOS and Android. Seamless performance, offline-first data sync, and instant push architectures."
                  )}
                </p>

                {/* Mini Visual Preview */}
                <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-slate-200 mb-6 bg-slate-900 group">
                  <Image
                    src="/images/app-dev.jpg"
                    alt="Mobile App Development"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    iOS &bull; Android &bull; Biometrics &bull; Offline Sync
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React Native", "Flutter", "Push Engine", "App Store & Play Store"].map((tg, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-white text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/services/mobile-app-development"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6D5DFB] hover:text-[#5B4CE0] group cursor-pointer pt-2"
              >
                <span>{t("Details zu mobilen Apps", "Explore Mobile Engineering")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: AI Automation & Workflows */}
            <div className="rounded-3xl bg-[#F8F8FC] border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-xs">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-[#6D5DFB] mb-3">
                  <Bot className="w-4 h-4" />
                  <span>03 &bull; {t("KI & AUTOMATISIERUNG", "AI & AUTOMATION")}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1020] tracking-tight mb-3">
                  {t(
                    "Autonome Agenten & n8n-Workflow-Pipelines",
                    "Autonomous AI agents & process automation"
                  )}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t(
                    "Eliminieren Sie manuelle Fleißarbeit. Wir vernetzen Ihre Software-Tools durch intelligente n8n-Workflows und KI-Agenten, die rund um die Uhr fehlerfrei arbeiten.",
                    "Eliminate manual bottlenecks. We connect your enterprise tools with custom n8n workflows and autonomous AI agents that operate 24/7 without human error."
                  )}
                </p>

                {/* Mini Workflow Diagram Visual */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 mb-6 space-y-2.5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#6D5DFB]" />
                      {t("Live Workflow-Architektur", "Active Workflow Architecture")}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      0 Errors
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-medium pt-1">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700">
                      Inbound Lead
                    </div>
                    <div className="p-2 rounded-lg bg-purple-50 border border-purple-200 text-[#6D5DFB] font-semibold">
                      AI Qualifier
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700">
                      CRM Sync
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["n8n Pipelines", "LLM Integration", "Webhook Ingestion", "WhatsApp / Slack Bots"].map((tg, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-white text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/services/ai-automation"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6D5DFB] hover:text-[#5B4CE0] group cursor-pointer pt-2"
              >
                <span>{t("Details zu KI-Automatisierung", "Explore AI Automation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
