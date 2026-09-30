"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectModalProps {
  initialProjectId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestSimilar: () => void;
}

export default function ProjectModal({
  initialProjectId,
  isOpen,
  onClose,
  onRequestSimilar,
}: ProjectModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(initialProjectId || "aura-masale");

  React.useEffect(() => {
    if (initialProjectId) {
      setActiveTab(initialProjectId);
    }
  }, [initialProjectId]);

  if (!isOpen) return null;

  const projectDetails: Record<
    string,
    {
      title: string;
      categoryDe: string;
      categoryEn: string;
      summaryDe: string;
      summaryEn: string;
      image: string;
      tags: string[];
      metrics: { labelDe: string; labelEn: string; value: string }[];
      highlightsDe: string[];
      highlightsEn: string[];
    }
  > = {
    "aura-masale": {
      title: "Aura Masale",
      categoryDe: "E-Commerce Website",
      categoryEn: "Ecommerce Website",
      summaryDe:
        "Konzeption und Entwicklung einer verkaufsstarken E-Commerce-Plattform für authentische Gewürze und Feinkost. Inklusive extrem schnellem Headless-Checkout, Rezept-Empfehlungen und mehrsprachiger Unterstützung.",
      summaryEn:
        "Designed and developed a vibrant, high-converting digital storefront for premium authentic Indian spices & groceries. Integrated blazing-fast headless checkout, recipe pairings, and regional language support.",
      image: "/images/aura-masale.jpg",
      tags: ["Next.js", "Tailwind CSS", "Shopify Storefront API", "Stripe", "Framer Motion"],
      metrics: [
        { labelDe: "Verkaufskonversion", labelEn: "Sales Conversion", value: "+48%" },
        { labelDe: "Ladezeit", labelEn: "Page Load Speed", value: "0.7s" },
        { labelDe: "Wiederkäufer", labelEn: "Repeat Buyers", value: "64%" },
      ],
      highlightsDe: [
        "Interaktive Gewürzaromen-Beschreibungen und frische Rezeptvorschläge bei jedem Produkt",
        "1-Klick Mobile Checkout mit direkter Apple Pay- und Zahlungs-Integration",
        "Automatisierte Bestell-Synchronisation mit regionalen Logistikzentren",
      ],
      highlightsEn: [
        "Interactive spice flavor notes and fresh recipe suggestions on each product",
        "1-click fast mobile checkout with instant UPI & Apple Pay integration",
        "Automated fulfillment order sync with regional warehouse hubs",
      ],
    },
    meagle360: {
      title: "Meagle360 HRMS",
      categoryDe: "SaaS-Plattform",
      categoryEn: "SaaS Platform",
      summaryDe:
        "Architektur eines modernen Personalmanagementsystems (HRMS) mit Mitarbeiterverzeichnis, biometrischer Zeiterfassung, Echtzeit-Gehaltsabrechnung und Compliance-Berichten.",
      summaryEn:
        "Architected an enterprise human resource management system featuring employee directory, biometric attendance synchronization, real-time payroll calculations, and compliance reporting.",
      image: "/images/meagle-laptop.jpg",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      metrics: [
        { labelDe: "Gehaltsabrechnung", labelEn: "Payroll Processing", value: "10x schneller" },
        { labelDe: "System-Verfügbarkeit", labelEn: "System Uptime", value: "99.98%" },
        { labelDe: "Aktive Mitarbeiter", labelEn: "Active Employees", value: "12.000+" },
      ],
      highlightsDe: [
        "Echtzeit-Payroll-Engine mit automatischer Steuerberechnung über verschiedene Jurisdiktionen",
        "Rollenbasiertes Rechtesystem mit granularen Berechtigungen",
        "Verschlüsselte Synchronisation biometrischer Terminals via WebSockets",
      ],
      highlightsEn: [
        "Real-time payroll engine with automated tax calculation across multiple jurisdictions",
        "Role-based access control with granular permission gates",
        "Encrypted biometric attendance device synchronization via WebSockets",
      ],
    },
    taibeena: {
      title: "Taibeena",
      categoryDe: "E-Commerce Website",
      categoryEn: "Ecommerce Website",
      summaryDe:
        "Entwicklung eines eleganten Luxus-Onlineshops für internationale Mode. Mit hochauflösendem Stoff-Zoom, automatischer Währungserkennung und weltweitem Expressversand.",
      summaryEn:
        "Engineered an elegant, luxury e-commerce experience for international modest fashion. Features high-res fabric zoom, currency auto-detection, and seamless cross-border shipping.",
      image: "/images/taibeena.jpg",
      tags: ["Next.js", "Shopify Headless", "Tailwind CSS", "Stripe Global", "Edge Caching"],
      metrics: [
        { labelDe: "Mobile Konversion", labelEn: "Mobile Conversion", value: "+62%" },
        { labelDe: "Ladezeit", labelEn: "Load Speed", value: "0.8s" },
        { labelDe: "Globale Bestellungen", labelEn: "Global Orders", value: "35.000+" },
      ],
      highlightsDe: [
        "Headless E-Commerce-Architektur für verzögerungsfreie Seitenwechsel unter einer Sekunde",
        "Interaktives virtuelles Styling-Lookbook und Textur-Detailansicht",
        "Integrierte Multi-Carrier-Versandverfolgung über internationale Schnittstellen",
      ],
      highlightsEn: [
        "Headless e-commerce architecture for instant sub-second page transitions",
        "Interactive virtual styling lookbook and fabric texture zoom",
        "Integrated multi-carrier international shipping tracking API",
      ],
    },
    "easyway-germany": {
      title: "EasywayGermany",
      categoryDe: "Bildungsberatung",
      categoryEn: "Education Consultancy",
      summaryDe:
        "Umfassende digitale Plattform für internationale Studierende in Deutschland. Ausgestattet mit Universitäts-Finder, Visa-Vorbereitungs-Checkliste und automatisierter Terminbuchung.",
      summaryEn:
        "Built a comprehensive digital platform for international students seeking higher education in Germany. Features an interactive university finder, visa readiness checklist, and appointment scheduling.",
      image: "/images/easyway-germany.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cal.com API"],
      metrics: [
        { labelDe: "Studenten-Anfragen", labelEn: "Student Inquiries", value: "+85%" },
        { labelDe: "Beratungsbuchungen", labelEn: "Consultation Bookings", value: "3.200+" },
        { labelDe: "Visum-Erfolgsrate", labelEn: "Visa Success Rate", value: "98.5%" },
      ],
      highlightsDe: [
        "Intelligenter Studienplatzfinder mit GPA- und Sprachvoraussetzungs-Rechner",
        "Schritt-für-Schritt Visa-Dokumenten-Generator mit herunterladbaren Checklisten",
        "Automatisierte Kalendersynchronisation für Berater mit WhatsApp-Erinnerungen",
      ],
      highlightsEn: [
        "Smart German university program finder with GPA & language eligibility calculator",
        "Step-by-step visa document checklist generator with downloadable PDFs",
        "Automated consultant calendar scheduling and WhatsApp reminder flows",
      ],
    },
  };

  const current = projectDetails[activeTab] || projectDetails["aura-masale"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close project"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Selector Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-4 gap-2 shrink-0 overflow-x-auto">
          {Object.entries(projectDetails).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all relative shrink-0 cursor-pointer ${
                activeTab === key
                  ? "text-[#6D5DFB] font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {item.title}
              {activeTab === key && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#6D5DFB] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Modal Visual */}
        <div className="relative aspect-[21/10] w-full bg-slate-100 shrink-0">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Scrollable Project Info */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="text-xs font-bold text-[#6D5DFB] tracking-wider uppercase mb-1">
              {t(current.categoryDe, current.categoryEn)}
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0B1020] tracking-tight">
              {current.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              {t(current.summaryDe, current.summaryEn)}
            </p>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3 bg-[#F5F3FF] p-4 rounded-2xl border border-purple-100">
            {current.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-heading text-[#0B1020]">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {t(m.labelDe, m.labelEn)}
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#6D5DFB]" />
              <span>{t("Wichtigste Architekturlösungen", "Key Architectural Solutions")}</span>
            </h4>
            <div className="space-y-2">
              {(t(current.highlightsDe, current.highlightsEn) as unknown as string[]).map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t("Eingesetzte Technologien", "Technologies Used")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tg) => (
                <span
                  key={tg}
                  className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                >
                  {tg}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              {t(
                "Benötigen Sie eine ähnliche Plattform für Ihr Unternehmen?",
                "Need a similar platform built for your business?"
              )}
            </span>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              <span>{t("Kostenlose Beratung", "Get a Free Consultation")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
