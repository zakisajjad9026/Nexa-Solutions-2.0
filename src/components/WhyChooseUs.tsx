"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Code2, Users, Layers, KeyRound } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WhyChooseUsProps {
  onOpenContact?: () => void;
}

export default function WhyChooseUs({ onOpenContact }: WhyChooseUsProps) {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Code2,
      titleDe: "Individuell statt Template-Baukasten",
      titleEn: "Built around your business",
      descriptionDe:
        "Keine Standard-Vorlagen oder unnötige Komplexität. Wir entwickeln Software exakt passend zu Ihren spezifischen operativen Anforderungen und Prozessen.",
      descriptionEn:
        "No cookie-cutter templates or framework bloat. We engineer systems specifically tailored to your operational workflows and business objectives.",
      tagDe: "Maßgeschneidert",
      tagEn: "Custom Scope",
    },
    {
      icon: Users,
      titleDe: "Direkter Senior-Entwicklerkontakt",
      titleEn: "Senior technical involvement",
      descriptionDe:
        "Keine bürokratischen Zwischeninstanzen oder unerfahrene Junior-Teams. Sie arbeiten direkt mit Senior-Ingenieuren, die Ihre Architektur entwerfen und umsetzen.",
      descriptionEn:
        "Direct access to the engineers building your product. No bureaucratic account managers or lost-in-translation requirements.",
      tagDe: "Keine Zwischenhändler",
      tagEn: "Direct Access",
    },
    {
      icon: Layers,
      titleDe: "Entwickelt für Stabilität & Skalierung",
      titleEn: "Designed for scale",
      descriptionDe:
        "Modulare Architekturen, strenge Typensicherheit und moderne Cloud-Infrastruktur, die problemlos mit Ihrem Unternehmenswachstum skaliert.",
      descriptionEn:
        "Modular software architectures, strict typing, and cloud-native standards designed to support 10x business growth without friction.",
      tagDe: "Zukunftssicher",
      tagEn: "Modern Tech",
    },
    {
      icon: KeyRound,
      titleDe: "100% Quellcode- & Dateneigentum",
      titleEn: "100% Code & IP ownership",
      descriptionDe:
        "Sie besitzen uneingeschränkt alle Rechte an Code, Datenbanken und Infrastruktur. Kein Vendor-Lock-in und keine wiederkehrenden Lizenzgebühren.",
      descriptionEn:
        "You own 100% of your source code, databases, and intellectual property upon delivery. Zero vendor lock-in and zero ongoing royalty cuts.",
      tagDe: "Volle Kontrolle",
      tagEn: "Full Rights",
    },
  ];

  return (
    <section id="why-nexa" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("WARUM NEXA SOLUTIONS", "WHY NEXA SOLUTIONS")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1020] tracking-tight leading-tight">
              {t(
                "Technologie, die Ihrem Geschäftserfolg dient.",
                "Technology engineered around business outcomes."
              )}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md lg:text-right">
            {t(
              "Wir kombinieren saubere Software-Architektur, unternehmerisches Denken und schnelle Umsetzungszyklen für messbare Ergebnisse.",
              "We combine rigorous software architecture, commercial thinking, and rapid iteration to deliver measurable results on time and budget."
            )}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-10 rounded-3xl bg-[#F8F8FC] border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-[#6D5DFB] group-hover:scale-105 group-hover:bg-[#6D5DFB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-medium border border-slate-200">
                      {t(item.tagDe, item.tagEn)}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1020] mb-3 group-hover:text-[#6D5DFB] transition-colors">
                    {t(item.titleDe, item.titleEn)}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {t(item.descriptionDe, item.descriptionEn)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Bottom Trust Assurance */}
        {onOpenContact && (
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F8F8FC] border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  {t("Transparente Festpreis-Garantie & Meilensteine", "Transparent Scope & Fixed Price Predictability")}
                </span>
                <span className="text-xs text-slate-500">
                  {t("Verbindlicher Leistungsumfang vor Projektbeginn ohne versteckte Mehrkosten.", "Clear written milestone scope before kickoff with zero surprise surcharges.")}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B1020] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer shadow-sm"
            >
              <span>{t("Erstgespräch anfragen", "Schedule Discovery Call")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
