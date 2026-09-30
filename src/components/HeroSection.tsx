"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Zap,
  Activity,
  Layers,
  Bot,
  Database,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenVideo?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"overview" | "workflow" | "analytics">("overview");

  return (
    <section
      id="home"
      className="relative pt-32 pb-18 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Subtle, Sophisticated Ambient Gradients */}
      <div className="absolute top-0 right-0 w-[620px] h-[620px] bg-gradient-to-bl from-[#6D5DFB]/12 via-[#7C3AED]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-slate-100/80 via-purple-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Focused, High-Conviction Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/90 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("SOFTWARE- & KI-STUDIO", "SOFTWARE & AI STUDIO")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold font-heading text-[#0B1020] tracking-tight leading-[1.08] mb-6">
              {t("Digitale Produkte,", "Build digital products")}{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#6D5DFB]">
                {t("die bewegen.", "that move business.")}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-[18px] text-slate-600 leading-relaxed max-w-xl mb-8">
              {t(
                "Nexa Solutions entwickelt hochperformante Webanwendungen, mobile Plattformen und KI-gestützte Systeme für zukunftsorientierte Unternehmen.",
                "Nexa Solutions builds high-performance web applications, mobile platforms, and AI-powered systems for ambitious businesses looking to scale."
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(109,93,251,0.28)] hover:shadow-[0_6px_22px_rgba(109,93,251,0.38)] group cursor-pointer"
              >
                <span>{t("Projekt anfragen", "Start a Project")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300/90 bg-white text-slate-800 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <span>{t("Ausgewählte Arbeiten", "View Our Work")}</span>
              </Link>
            </div>

            {/* Core Capability Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
              <span className="px-3 py-1 rounded-lg bg-slate-100/80 text-slate-700 text-xs font-medium border border-slate-200/70">
                Web Engineering
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100/80 text-slate-700 text-xs font-medium border border-slate-200/70">
                Mobile Apps
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100/80 text-slate-700 text-xs font-medium border border-slate-200/70">
                AI Automation
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100/80 text-slate-700 text-xs font-medium border border-slate-200/70">
                Cloud Systems
              </span>
            </div>

            {/* Senior Engineering Proof Points */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium text-slate-500 pt-2 border-t border-slate-100 w-full">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5DFB] shrink-0" />
                {t("100% Quellcode-Eigentum", "100% Code Ownership")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5DFB] shrink-0" />
                {t("Direkter Senior-Entwicklerkontakt", "Direct Senior Tech Lead")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5DFB] shrink-0" />
                {t("Skalierbare Cloud-Architektur", "Enterprise Scalability")}
              </span>
            </div>
          </div>

          {/* Right Column: Real Software Product & AI Workflow Composition */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center">
            {/* Ambient Background Glow for Product Container */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#6D5DFB]/15 via-indigo-500/10 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Main Interactive Product Card */}
            <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#0B1020] px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                    nexa-production-os / v2.4
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>System Live</span>
                  </div>
                </div>
              </div>

              {/* Product Navigation & Tabs */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "overview"
                        ? "bg-white text-[#6D5DFB] shadow-2xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {t("Übersicht", "Overview")}
                  </button>
                  <button
                    onClick={() => setActiveTab("workflow")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "workflow"
                        ? "bg-white text-[#6D5DFB] shadow-2xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {t("KI-Pipeline", "AI Pipeline")}
                  </button>
                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "analytics"
                        ? "bg-white text-[#6D5DFB] shadow-2xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {t("Kennzahlen", "Metrics")}
                  </button>
                </div>

                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                  latency: 28ms
                </span>
              </div>

              {/* Product Body Area */}
              <div className="p-5 sm:p-6 bg-white space-y-5">
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {t("Umsatzwachstum", "Revenue Impact")}
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-heading text-[#0B1020] mt-0.5 flex items-center gap-1.5">
                      <span>+28.4%</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {t("Automatisierte Tasks", "Automated Runs")}
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-heading text-[#0B1020] mt-0.5 flex items-center gap-1.5">
                      <span>14,820</span>
                      <Zap className="w-3.5 h-3.5 text-[#6D5DFB]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {t("System-Uptime", "SLA Reliability")}
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-heading text-[#0B1020] mt-0.5 flex items-center gap-1.5">
                      <span>99.98%</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Featured Real Product Visual (Meagle 360 / SaaS Interface Preview) */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200/80 bg-slate-900 group">
                  <Image
                    src="/images/meagle-laptop.jpg"
                    alt="Meagle 360 HRMS built by Nexa Solutions"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay for Sleek Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Chip inside Product preview */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-[10px] font-mono font-semibold">
                        SaaS • HRMS
                      </span>
                      <span className="text-xs font-semibold">Meagle 360 Platform</span>
                    </div>
                    <span className="text-[11px] text-slate-300">Built by Nexa</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Workflow Strip */}
              <div className="bg-slate-50/80 border-t border-slate-200 px-5 py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Bot className="w-4 h-4 text-[#6D5DFB]" />
                  <span className="font-semibold text-slate-800">
                    {t("Live KI-Workflow:", "Active AI Workflow:")}
                  </span>
                  <span className="text-slate-500 truncate max-w-[180px] sm:max-w-none">
                    Webhook &rarr; Lead Score &rarr; CRM &rarr; WhatsApp Alert
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold shrink-0">
                  &bull; 100% automated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
