"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Zap,
  Clock,
  Sparkles,
  Bot,
  Database,
  Mail,
  MessageSquare,
  CheckCircle,
  FileText,
  Sliders,
  Play,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AutomationShowcaseProps {
  onExploreAutomation?: () => void;
}

export default function AutomationShowcase({ onExploreAutomation }: AutomationShowcaseProps) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);

  const workflowSteps = [
    {
      id: 0,
      titleDe: "1. Inbound Ereignis",
      titleEn: "1. Inbound Trigger",
      descDe: "Web-Formular, Kalenderbuchung oder Webhook",
      descEn: "Website form, calendar booking or API webhook",
      icon: FileText,
      tag: "Webhook Trigger",
      detailsDe: "Kundenanfrage geht ein mit Name, Unternehmensgröße und Projektanforderungen.",
      detailsEn: "Customer inquiry arrives containing company details and budget scope.",
    },
    {
      id: 1,
      titleDe: "2. KI-Qualifizierung",
      titleEn: "2. AI Qualification",
      descDe: "LLM analysiert Budget, Dringlichkeit & Match",
      descEn: "LLM evaluates budget, urgency & ideal client fit",
      icon: Bot,
      tag: "Autonomous Agent",
      detailsDe: "KI extrahiert Intent, berechnet einen Lead-Score von 94/100 und fasst Anforderungen präzise zusammen.",
      detailsEn: "AI evaluates intent, assigns 94/100 readiness score, and synthesizes technical deliverables.",
    },
    {
      id: 2,
      titleDe: "3. CRM & Datenbank-Sync",
      titleEn: "3. CRM & DB Sync",
      descDe: "Automatische Aktualisierung in HubSpot / ERP",
      descEn: "Automatic pipeline creation in HubSpot / ERP",
      icon: Database,
      tag: "Instant Pipeline",
      detailsDe: "Deal wird in der Sales-Pipeline angelegt, Dokumente werden GoBD-konform archiviert.",
      detailsEn: "Deal profile is indexed in CRM and project brief is automatically generated.",
    },
    {
      id: 3,
      titleDe: "4. Sofort-Antwort",
      titleEn: "4. Instant Outreach",
      descDe: "Personalisierte E-Mail oder WhatsApp in 3 Sek.",
      descEn: "Personalized WhatsApp / Email within 3 seconds",
      icon: MessageSquare,
      tag: "< 3s Response",
      detailsDe: "Kunde erhält individuelle Bestätigung mit passenden Case Studies und Terminvorschlag.",
      detailsEn: "Client receives tailored response with matching portfolio links and calendar invite.",
    },
    {
      id: 4,
      titleDe: "5. Team-Benachrichtigung",
      titleEn: "5. Team Briefing",
      descDe: "Priorisierte Benachrichtigung via Slack / Teams",
      descEn: "High-priority Slack / Teams alert to Tech Lead",
      icon: Zap,
      tag: "Direct Action",
      detailsDe: "Lead-Entwickler erhält vorqualifizierten Kontext für ein effizientes Erstgespräch.",
      detailsEn: "Tech lead gets direct brief and pre-filled scope ready for the discovery call.",
    },
  ];

  return (
    <section
      id="automation"
      className="py-24 sm:py-28 bg-[#0B1020] text-white relative overflow-hidden border-y border-white/10"
    >
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#6D5DFB]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-[#6D5DFB]/10 text-[#A78BFA] text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>{t("KI & PROZESS-AUTOMATISIERUNG", "AI & WORKFLOW STUDIO")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-tight mb-5">
            {t(
              "Automatisieren Sie, was keine manuelle Arbeit erfordert.",
              "Stop doing manually what software can do automatically."
            )}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t(
              "Wir verbinden Ihre bestehenden Systeme durch maßgeschneiderte n8n-Pipelines und autonome KI-Agenten. Keine manuellen Datenübertragungen, keine Medienbrüche und null Verzögerung.",
              "We connect your software tools with custom n8n pipelines and autonomous AI agents. Zero redundant data entry, no manual handoffs, and instant execution."
            )}
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              15+ Std.
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t("Zeitersparnis pro Woche", "Saved per team member weekly")}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#A78BFA]">
              0 Fehler
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t("Bei Datensynchronisation", "In data transfer & formatting")}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-emerald-400">
              &lt; 3 Sek.
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t("Reaktionszeit auf Anfragen", "Inbound lead response time")}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              99.98%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t("Ausführungsverlässlichkeit", "Pipeline execution reliability")}
            </div>
          </div>
        </div>

        {/* Interactive n8n-Style Workflow Canvas */}
        <div className="rounded-3xl bg-slate-950/80 border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6D5DFB]/20 border border-[#6D5DFB]/40 flex items-center justify-center text-[#A78BFA]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-white">
                  {t("Autonome Lead-to-Close Pipeline", "Autonomous Lead-to-Close Pipeline")}
                </h4>
                <p className="text-xs text-slate-400">
                  Powered by n8n + LLM Engine &bull; Active &bull; Zero Human Intervention
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">Pipeline Live & Synced</span>
            </div>
          </div>

          {/* Workflow Pipeline Nodes (Horizontal on Desktop, Stack on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              const isSelected = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                    isSelected
                      ? "bg-[#6D5DFB]/15 border-[#6D5DFB] shadow-[0_0_24px_rgba(109,93,251,0.25)]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#6D5DFB] text-white"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{step.tag}</span>
                  </div>

                  <h5 className="text-xs font-bold text-white mb-1">
                    {t(step.titleDe, step.titleEn)}
                  </h5>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {t(step.descDe, step.descEn)}
                  </p>

                  {isSelected && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#6D5DFB] rotate-45" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Step Detail Inspector Box */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {t("Prozess-Details:", "Node Execution Specification:")}
                </span>
                <p className="text-sm text-slate-200">
                  {t(workflowSteps[activeStep].detailsDe, workflowSteps[activeStep].detailsEn)}
                </p>
              </div>
            </div>

            <button
              onClick={onExploreAutomation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer shadow-md"
            >
              <span>{t("Eigene Pipeline bauen", "Automate Your Workflow")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
