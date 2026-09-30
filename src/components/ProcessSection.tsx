"use client";

import React from "react";
import { Search, Compass, Palette, Code2, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Search,
      titleDe: "Discover",
      titleEn: "Discover",
      subtitleDe: "Geschäftsmodell & Scope verstehen",
      subtitleEn: "Understand business & requirements",
      descDe: "Analyse Ihrer Anforderungen, Prozesse und technischen Rahmenbedingungen.",
      descEn: "Deep dive into your workflows, tech infrastructure, and project scope.",
    },
    {
      number: "02",
      icon: Compass,
      titleDe: "Strategy",
      titleEn: "Strategy",
      subtitleDe: "Architektur & Roadmap definieren",
      subtitleEn: "System architecture & roadmap",
      descDe: "Festlegung von Tech-Stack, Datenmodell, Meilensteinen und verbindlichem Festpreis.",
      descEn: "Define system architecture, database schema, sprints, and fixed milestone scope.",
    },
    {
      number: "03",
      icon: Palette,
      titleDe: "Design",
      titleEn: "Design",
      subtitleDe: "UX/UI & Klick-Prototyp",
      subtitleEn: "UX/UI & interactive prototype",
      descDe: "Entwicklung intuitiver Benutzeroberflächen und valider Klickdummies vor dem Coden.",
      descEn: "Craft modern, conversion-focused user interfaces and validated interactive prototypes.",
    },
    {
      number: "04",
      icon: Code2,
      titleDe: "Build",
      titleEn: "Build",
      subtitleDe: "Iterative Entwicklung & QA",
      subtitleEn: "Iterative engineering & testing",
      descDe: "Saubere Implementierung in agilen Sprints mit kontinuierlichen Tests und Code-Reviews.",
      descEn: "Clean code engineering in iterative sprints with automated testing and continuous integration.",
    },
    {
      number: "05",
      icon: Rocket,
      titleDe: "Launch & Scale",
      titleEn: "Launch & Scale",
      subtitleDe: "Deployment & laufender Support",
      subtitleEn: "Deployment & ongoing SLA",
      descDe: "Sicheres Go-Live auf Cloud-Servern mit 24/7 Monitoring und proaktiver Wartung.",
      descEn: "Zero-downtime production deployment, cloud optimization, and proactive technical support.",
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-28 bg-[#F8F8FC] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("WIE WIR ARBEITEN", "HOW WE WORK")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1020] tracking-tight leading-tight">
              {t(
                "Strukturierter Ablauf von der Konzeption bis zum Go-Live.",
                "A transparent process from concept to production."
              )}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md lg:text-right">
            {t(
              "Klare Meilensteine, transparente Kommunikation und agile Lieferzyklen stellen sicher, dass Ihr Projekt termingerecht und im Budget gelauncht wird.",
              "Clear milestones, direct engineering communication, and agile execution ensure your product ships on schedule and within budget."
            )}
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Step Pill & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] border border-purple-200/70 text-[#6D5DFB] flex items-center justify-center font-bold shadow-2xs group-hover:bg-[#6D5DFB] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-[#0B1020] mb-1 group-hover:text-[#6D5DFB] transition-colors">
                      {t(step.titleDe, step.titleEn)}
                    </h3>

                    <div className="text-xs font-semibold text-[#6D5DFB] mb-2.5">
                      {t(step.subtitleDe, step.subtitleEn)}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(step.descDe, step.descEn)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
