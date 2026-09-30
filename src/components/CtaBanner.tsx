"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Calendar, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CtaBannerProps {
  onOpenContact: () => void;
}

export default function CtaBanner({ onOpenContact }: CtaBannerProps) {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0B1020] text-white p-8 sm:p-14 lg:p-18 overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle Ambient Violet Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#6D5DFB]/25 via-purple-700/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-900/20 via-[#6D5DFB]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-[#6D5DFB]/15 text-[#A78BFA] text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>{t("ERSTGESPRÄCH VEREINBAREN", "START A PROJECT")}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.12] mb-5">
              {t(
                "Haben Sie ein Projekt, das echten Mehrwert schafft?",
                "Have a problem worth solving?"
              )}
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {t(
                "Erzählen Sie uns von Ihrer Idee. Wir unterstützen Sie bei der technischen Konzeption, Architektur und den nächsten Schritten – unverbindlich und direkt mit einem Senior-Entwickler.",
                "Tell us what you're building. We'll help you figure out the software architecture, technical feasibility, timeline, and exact next steps."
              )}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-[0_4px_20px_rgba(109,93,251,0.35)] hover:shadow-[0_6px_28px_rgba(109,93,251,0.5)] group cursor-pointer"
              >
                <span>{t("Gespräch vereinbaren", "Start a Conversation")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>{t("Ausgewählte Arbeiten ansehen", "View Selected Work")}</span>
              </Link>
            </div>

            {/* Reassurance Indicators */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-400 pt-6 border-t border-white/10">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A78BFA] shrink-0" />
                {t("30 Minuten Erstgespräch", "30-Minute Discovery Call")}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A78BFA] shrink-0" />
                {t("100% unverbindlich", "Zero Commitment")}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                {t("Direkter Ingenieurskontakt", "Direct Senior Tech Lead")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
