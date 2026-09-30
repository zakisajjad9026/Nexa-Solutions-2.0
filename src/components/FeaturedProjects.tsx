"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedProjectsProps {
  onSelectProject: (projectKey: string) => void;
  onViewAllProjects: () => void;
}

export default function FeaturedProjects({
  onSelectProject,
  onViewAllProjects,
}: FeaturedProjectsProps) {
  const { t } = useLanguage();

  const featuredCaseStudies = [
    {
      id: "meagle360",
      title: "Meagle 360 HRMS",
      badge: t("Enterprise SaaS & Personalwesen", "Enterprise SaaS & HRMS"),
      image: "/images/meagle-laptop.jpg",
      challengeDe: "Manuelle Tabellen, unübersichtliche Gehaltsberechnungen und fehlende zentrale Anbindung biometrischer Zeiterfassung führten zu administrativem Mehraufwand.",
      challengeEn: "Fragmented spreadsheets, error-prone manual payroll calculations, and lack of real-time biometric attendance syncing created severe admin overhead.",
      solutionDe: "Architektur einer zentralen HRMS-Plattform mit automatisiertem Payroll-Rechner, biometrischer Terminal-Synchronisation und rollenbasierter Zugriffsverwaltung.",
      solutionEn: "Architected a unified enterprise HRMS platform featuring automated multi-tier payroll engine, encrypted biometric hardware sync, and granular RBAC security.",
      outcomeDe: "10x schnellere Gehaltsabrechnung, 99.98% System-Uptime und über 12.000 verwaltete Mitarbeiterprofile.",
      outcomeEn: "10x faster payroll runs, 99.98% system uptime, and 12,000+ active employee accounts managed seamlessly.",
      metrics: [
        { label: t("Gehaltsabrechnung", "Payroll Speed"), value: "10x schneller" },
        { label: t("Systemverfügbarkeit", "SLA Uptime"), value: "99.98%" },
        { label: t("Aktive Nutzer", "Active Users"), value: "12.000+" },
      ],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "humnikah",
      title: "HumNikah Global Platform",
      badge: t("Community & Matchmaking Plattform", "Community & Discovery Platform"),
      image: "/images/project-humnikah-crop.png",
      challengeDe: "Hohes Nutzerwachstum erforderte kompromisslosen Datenschutz, blitzschnelle Filterung tausender Profile und verlässliche Identitätsprüfung.",
      challengeEn: "Rapid international growth demanded strict end-to-end privacy, sub-second query speeds across dense profiles, and frictionless identity verification.",
      solutionDe: "Moderne, mobile-optimierte Webanwendung mit Edge-Caching, verschlüsselter Profil-Freigabe und automatisierter Foto- und Verifikations-Pipeline.",
      solutionEn: "Engineered a high-concurrency web application leveraging edge database caching, encrypted profile reveals, and automated identity vetting workflows.",
      outcomeDe: "Über 40.000 aktive Profile, 0.6s durchschnittliche Seitenladezeit und exzellente Nutzerzufriedenheit.",
      outcomeEn: "40,000+ active profiles onboarded, 0.6s global page latency, and zero data downtime.",
      metrics: [
        { label: t("Aktive Profile", "Active Profiles"), value: "40.000+" },
        { label: t("Ladezeit weltweit", "Edge Latency"), value: "0.6s" },
        { label: t("Uptime", "Platform Uptime"), value: "99.9%" },
      ],
      techStack: ["Next.js", "React", "Supabase", "Tailwind CSS", "Edge CDN"],
    },
    {
      id: "aura-masale",
      title: "Aura Masale Storefront",
      badge: t("Headless E-Commerce & Retail", "Headless E-Commerce & Retail"),
      image: "/images/aura-masale.jpg",
      challengeDe: "Hohe Absprungraten im mobilen Warenkorb, langsame Produktladezeiten und unübersichtliche manuelle Bestellsynchronisation.",
      challengeEn: "High mobile cart bounce rates, slow loading catalog pages, and manual order dispatch reconciliation hampered brand growth.",
      solutionDe: "Entwicklung eines ultraschnellen Headless-Onlineshops mit 1-Klick-Checkout, automatischer Währungsauswahl und direkter ERP-Synchronisation.",
      solutionEn: "Built a blazing-fast headless digital storefront featuring 1-click mobile checkout, recipe pairings, and automated multi-warehouse fulfillment.",
      outcomeDe: "+48% Steigerung der mobilen Verkaufskonversion, 0.7s Ladezeit und 64% Wiederkäuferquote.",
      outcomeEn: "+48% mobile conversion rate, 0.7s initial page load speed, and 64% repeat buyer retention.",
      metrics: [
        { label: t("Verkaufskonversion", "Sales Conversion"), value: "+48%" },
        { label: t("Ladezeit", "Page Load"), value: "0.7s" },
        { label: t("Wiederkäufer", "Repeat Buyers"), value: "64%" },
      ],
      techStack: ["Next.js", "Shopify Storefront API", "Stripe", "Framer Motion", "Tailwind CSS"],
    },
  ];

  return (
    <section id="work" className="py-24 sm:py-28 bg-[#F8F8FC] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and View All Projects Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("REFERENZEN & PROJEKTE", "SELECTED WORK")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1020] tracking-tight leading-tight">
              {t(
                "Echte Produkte. Echte Systeme. Gebaut von Nexa.",
                "Real products. Real systems. Built by Nexa."
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              {t(
                "Eine Auswahl digitaler Plattformen und SaaS-Lösungen, die wir von der Konzeption bis zur produktiven Bereitstellung realisiert haben.",
                "A curated selection of custom applications and software platforms engineered from concept to high-scale production."
              )}
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-800 hover:border-[#6D5DFB] hover:text-[#6D5DFB] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs cursor-pointer"
          >
            <span>{t("Alle Case Studies ansehen", "View All Case Studies")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Large Case Study Cards Layout */}
        <div className="space-y-12">
          {featuredCaseStudies.map((study, idx) => (
            <div
              key={study.id}
              onClick={() => onSelectProject(study.id)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Visual Product Showcase */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating pill inside image */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#0B1020]/80 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                        {study.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Case Study Narrative (Challenge, Solution, Outcome) */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1020] tracking-tight mb-4 group-hover:text-[#6D5DFB] transition-colors">
                      {study.title}
                    </h3>

                    {/* Problem & Solution Narrative */}
                    <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wider">
                          {t("Herausforderung:", "The Challenge:")}
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {t(study.challengeDe, study.challengeEn)}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-[#6D5DFB] block mb-1 text-xs uppercase tracking-wider">
                          {t("Lösung von Nexa:", "The Nexa Solution:")}
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {t(study.solutionDe, study.solutionEn)}
                        </p>
                      </div>
                    </div>

                    {/* Measurable Outcomes Metrics Row */}
                    <div className="grid grid-cols-3 gap-2.5 mb-6">
                      {study.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-xl bg-[#F8F8FC] border border-slate-200/80 text-center"
                        >
                          <div className="text-base sm:text-lg font-bold font-heading text-[#0B1020]">
                            {m.value}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {study.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#6D5DFB] group-hover:text-[#5B4CE0] transition-colors">
                    <span>{t("Case Study Details öffnen", "View Case Study Details")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
