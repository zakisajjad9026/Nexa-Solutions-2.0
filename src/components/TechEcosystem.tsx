"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechEcosystem() {
  const { t } = useLanguage();

  const clientLogos = [
    {
      name: "Meagle 360",
      element: (
        <div className="flex items-center gap-1.5 font-heading font-extrabold text-base sm:text-lg tracking-tight text-slate-800">
          <span>Meagle</span>
          <span className="px-1.5 py-0.5 rounded bg-purple-100 text-[#6D5DFB] text-[11px] font-mono font-bold">
            360
          </span>
        </div>
      ),
    },
    {
      name: "HumNikah",
      element: (
        <div className="flex items-center gap-1 font-heading font-bold text-base sm:text-lg tracking-tight text-slate-800">
          <span className="text-[#6D5DFB]">Hum</span>
          <span>Nikah</span>
        </div>
      ),
    },
    {
      name: "Zuhraan",
      element: (
        <span className="font-serif tracking-widest text-base sm:text-lg font-bold uppercase text-slate-800">
          zuhraan
        </span>
      ),
    },
    {
      name: "Aura Masale",
      element: (
        <span className="font-heading tracking-tight text-base sm:text-lg font-bold text-slate-800">
          Aura Masale
        </span>
      ),
    },
    {
      name: "Easyway Germany",
      element: (
        <div className="flex items-center gap-1 font-sans font-semibold text-sm sm:text-base text-slate-800">
          <span className="font-bold">Easyway</span>
          <span className="text-slate-500 font-normal">Germany</span>
        </div>
      ),
    },
  ];

  const technologies = [
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS Cloud", category: "Infrastructure" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "n8n Automation", category: "AI Workflows" },
    { name: "Docker", category: "DevOps" },
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#F8F8FC] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Real Client Brands */}
        <div className="text-center mb-6">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
            {t(
              "PRODUKTE & SYSTEME ENTWICKELT FÜR AMBITIONIERTE UNTERNEHMEN",
              "TRUSTED BY AMBITIOUS BUSINESSES & PRODUCT TEAMS"
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-18 mb-10 opacity-80 hover:opacity-100 transition-opacity">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {logo.element}
            </div>
          ))}
        </div>

        {/* Divider with Tech Label */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-center">
            <span className="bg-[#F8F8FC] px-4 text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              {t("MODERNER ENTERPRISE TECH-STACK", "PROVEN TECHNOLOGY ECOSYSTEM")}
            </span>
          </div>
        </div>

        {/* Row 2: Technologies We Build With */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-semibold text-slate-700 hover:border-purple-300 hover:text-[#6D5DFB] transition-colors"
            >
              <span>{tech.name}</span>
              <span className="text-[9px] text-slate-400 font-normal uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
