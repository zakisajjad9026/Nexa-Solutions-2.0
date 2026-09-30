"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  BarChart3,
  MessageSquare,
  FileSearch,
  Rocket,
  ArrowLeft,
  Workflow,
  Sparkles,
  Database,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "n8n Orchestration", "Python", "OpenAI / Claude / Gemini", "LangChain & LangGraph",
  "PostgreSQL", "FastAPI", "Pinecone & Vector DBs", "Docker",
  "HubSpot & Salesforce APIs", "Stripe & DATEV Sync", "Webhooks Engine", "Redis",
];

const deliverables = [
  {
    icon: Workflow,
    de: "Maßgeschneiderte n8n-Workflow-Pipelines",
    en: "Custom n8n workflow & event pipelines",
    descDe: "Vollautomatische Prozesse über Webhooks, APIs und Hintergrund-Trigger.",
    descEn: "Fully automated asynchronous workflows connecting tools via webhooks and REST APIs.",
  },
  {
    icon: Bot,
    de: "Autonome Multi-Agenten-Systeme & LLMs",
    en: "Autonomous multi-agent systems & LLMs",
    descDe: "Spezialisierte KI-Agenten zur semantischen Qualifizierung, Recherche und Vorbereitung.",
    descEn: "Domain-specific AI agents for qualification, extraction, and automated decision flows.",
  },
  {
    icon: FileSearch,
    de: "Dokumenten-Extraktion & RAG-Wissensdatenbanken",
    en: "Document extraction & RAG vector search",
    descDe: "Präzises Auslesen von Verträgen, PDFs und Rechnungen ohne Halluzinationen.",
    descEn: "Enterprise retrieval-augmented generation (RAG) parsing documents with zero hallucinations.",
  },
  {
    icon: Database,
    de: "Nahtloser CRM-, ERP- & Datenbank-Sync",
    en: "Seamless CRM, ERP & database sync",
    descDe: "Bidirektionaler Datenabgleich zwischen Salesforce, HubSpot, DATEV und internen DBs.",
    descEn: "Real-time bidirectional synchronization between CRMs, billing systems, and internal DBs.",
  },
  {
    icon: Lock,
    de: "Enterprise Datenschutz & Zero Model Training",
    en: "Enterprise data privacy & zero model training",
    descDe: "Ihre Unternehmensdaten werden niemals für KI-Modelltrainings verwendet. Optionales On-Premise-Hosting.",
    descEn: "Client data is strictly isolated and never used for public model training. On-premise available.",
  },
  {
    icon: Zap,
    de: "Sub-3-Sekunden Response- & Alert-Engine",
    en: "Sub-3-second automated response engine",
    descDe: "Sofortige Benachrichtigung via Slack, Teams oder WhatsApp mit direkt ausführbaren Aktionen.",
    descEn: "Instant multi-channel notifications with actionable 1-click approvals for leadership teams.",
  },
];

const useCases = [
  {
    icon: Zap,
    de: { title: "Lead-Qualifizierung & Routing", desc: "KI analysiert eingehende Anfragen in Echtzeit, bewertet den Fit und weist sie dem richtigen Lead-Entwickler zu." },
    en: { title: "Lead Qualification & Routing", desc: "AI evaluates inbound submissions in real-time, scores deal fit, and routes directly to the relevant technical lead." },
  },
  {
    icon: MessageSquare,
    de: { title: "24/7 Autonomer Kundensupport", desc: "Intelligenter Support-Agent, der komplexe technische Fragen direkt anhand Ihrer Dokumentation präzise beantwortet." },
    en: { title: "24/7 Knowledge-Base Agent", desc: "Autonomous support agent answering complex client questions directly from verified engineering documentation." },
  },
  {
    icon: FileSearch,
    de: { title: "Rechnungs- & Belegverarbeitung", desc: "Automatisches Auslesen von Eingangsrechnungen, Validierung der Posten und Weiterleitung an Steuerberater/DATEV." },
    en: { title: "Invoice & Receipt Pipeline", desc: "Automated extraction from incoming invoice PDFs, line-item validation, and seamless bookkeeping sync." },
  },
  {
    icon: Database,
    de: { title: "System-Synchronisation", desc: "Verbindung unvollständiger SaaS-Tools zur Eliminierung redundanter manueller Tabellenpflege." },
    en: { title: "Multi-Tool Data Sync", desc: "Bridging fragmented SaaS applications into one automated source of truth, removing spreadsheet friction." },
  },
  {
    icon: BarChart3,
    de: { title: "Automatisierte KPI-Briefings", desc: "Tägliche oder wöchentliche Berichte aus Datenbanken und Werbekonten prägnant zusammengefasst via Slack/E-Mail." },
    en: { title: "Automated Executive Briefings", desc: "Synthesizing revenue, marketing, and pipeline metrics into concise daily/weekly leadership briefs." },
  },
  {
    icon: ShieldCheck,
    de: { title: "E-Mail & Ticket-Triage", desc: "Automatische Klassifizierung, Sentiment-Analyse und Entwurf passender Antwort-Mails in Sekunden." },
    en: { title: "Email & Ticket Triage", desc: "Classifying incoming requests by urgency, identifying bottlenecks, and generating pre-filled drafts." },
  },
];

const processSteps = [
  {
    step: "01",
    de: { title: "Prozess- & Workflow-Audit", desc: "Identifikation der manuellen Engpässe und repetitiven Aufgaben, die Ihr Team die meiste Arbeitszeit kosten." },
    en: { title: "Workflow Audit", desc: "Deep-dive identification of manual operational bottlenecks consuming the most team hours every week." },
  },
  {
    step: "02",
    de: { title: "Architektur & Tool-Mapping", desc: "Auswahl der idealen n8n-Nodes, LLMs und Schnittstellen für eine robuste, skalierbare Pipeline." },
    en: { title: "Architecture & Node Mapping", desc: "Selecting optimal n8n triggers, LLMs, and API endpoints for a rock-solid, zero-maintenance pipeline." },
  },
  {
    step: "03",
    de: { title: "Pipeline-Entwicklung & Test", desc: "Aufbau der Automatisierung, Fehlerbehandlung, Token-Optimierung und Simulation aller Randfälle." },
    en: { title: "Pipeline Build & Testing", desc: "Engineering node logic, error retry mechanisms, token optimization, and edge-case validation." },
  },
  {
    step: "04",
    de: { title: "Deployment & Monitoring", desc: "Produktivschaltung auf dedizierten Cloud-Servern mit lückenlosem Execution-Logging und SLA." },
    en: { title: "Deployment & SLA", desc: "Production rollout on dedicated cloud infrastructure with detailed execution telemetry and SLA support." },
  },
];

const faqs = [
  {
    de: {
      q: "Benötigt unser Team Programmierkenntnisse, um n8n-Workflows zu nutzen?",
      a: "Nein. Wir konzipieren, entwickeln und hosten die Workflows schlüsselfertig. Ihre Mitarbeiter profitieren direkt von den automatisierten Abläufen, ohne Code schreiben zu müssen.",
    },
    en: {
      q: "Does our team need programming skills to use n8n workflows?",
      a: "No. We architect, implement, and maintain the workflows end-to-end. Your team directly enjoys the automated results without ever writing a line of code.",
    },
  },
  {
    de: {
      q: "Wie sicher sind unsere vertraulichen Unternehmensdaten?",
      a: "Wir implementieren strikten Enterprise-Datenschutz: Daten werden verschlüsselt übertragen und niemals für das Training öffentlicher KI-Modelle verwendet. Auf Wunsch hosten wir n8n und Vector-DBs direkt in Ihrer privaten Cloud (AWS/VPC) in Frankfurt.",
    },
    en: {
      q: "How secure is our confidential business data?",
      a: "We adhere to strict enterprise data privacy: all data is encrypted in transit and at rest, and never utilized to train third-party models. Dedicated VPC or European hosting is available.",
    },
  },
  {
    de: {
      q: "Welche KI-Modelle setzen Sie ein?",
      a: "Je nach Aufgabe nutzen wir OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini Pro oder lokale Open-Source-Modelle via Ollama/vLLM für maximale Kosteneffizienz und Genauigkeit.",
    },
    en: {
      q: "Which AI models do you interface with?",
      a: "Depending on speed and reasoning requirements, we integrate OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini Pro, or self-hosted open-source models.",
    },
  },
  {
    de: {
      q: "Was passiert, wenn eine externe API oder ein Tool ausfällt?",
      a: "Wir bauen jede n8n-Pipeline mit automatisierter Retry-Logik, Dead-Letter-Queues und sofortigen Fehlermeldungen via Slack. Kein Datensatz geht verloren.",
    },
    en: {
      q: "What happens if a third-party API experiences downtime?",
      a: "We architect every pipeline with automated backoff retry logic, dead-letter queues, and instant alerts so zero data payloads are ever lost.",
    },
  },
];

export default function AIAutomationPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#0B1020] selection:bg-[#6D5DFB] selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0B1020] text-white">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6D5DFB]/20 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              {t("Startseite", "Home")}
            </Link>
            <span>/</span>
            <span className="text-[#A78BFA] font-medium">{t("KI-Automatisierung & n8n", "AI Automation & n8n")}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-[#6D5DFB]/15 text-[#A78BFA] text-xs font-semibold tracking-wider uppercase mb-5">
                <Bot className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>{t("KI & WORKFLOW-AUTOMATION", "AI & WORKFLOW STUDIO")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-heading text-white tracking-tight leading-[1.1] mb-6">
                {t(
                  "Automatisieren Sie, was keine manuelle Arbeit erfordert.",
                  "Autonomous workflows that eliminate manual bottlenecks."
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                {t(
                  "Wir vernetzen Ihre Software-Tools mit intelligenten n8n-Pipelines und autonomen KI-Agenten. Keine fehleranfällige manuelle Datenpflege, keine Verzögerungen und 24/7 Betriebssicherheit.",
                  "We connect your disparate business tools with custom n8n pipelines and autonomous AI agents. Zero manual spreadsheet re-entry, instant webhook handoffs, and 24/7 execution reliability."
                )}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  { icon: Zap, label: t("15+ Std. Ersparnis/Woche", "15+ Hrs Saved Weekly") },
                  { icon: ShieldCheck, label: t("Enterprise Datenschutz", "Zero Training on Data") },
                  { icon: Rocket, label: t("Fehlerfreie Ausführung", "Sub-3s Response Time") },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#A78BFA]" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(109,93,251,0.35)] group cursor-pointer"
                >
                  <span>{t("Automatisierung anfragen", "Automate Your Workflows")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#use-cases"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  {t("Anwendungsfälle", "Explore Use Cases")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Visual Pipeline Window */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950 p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-300">n8n Execution Engine / Active</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Latency &lt; 85ms
                  </span>
                </div>

                {/* Node Execution Steps */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-slate-300">Inbound Webhook: Trigger received</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">200 OK</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#6D5DFB]/15 border border-[#6D5DFB]/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6D5DFB]" />
                      <span className="text-white font-semibold">LLM Agent: Semantic Qualification</span>
                    </div>
                    <span className="text-[#A78BFA] text-[10px] font-bold">Score 94</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-slate-300">CRM Sync: Deal record created</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">Indexed</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-slate-300">Slack & WhatsApp: Tech lead alert</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">Delivered</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10">
                  <span>Throughput: 14,820 runs/mo</span>
                  <span className="text-[#A78BFA] font-semibold">100% automated</span>
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
              {t("Automatisierungslösungen auf Enterprise-Niveau", "Enterprise Automation Deliverables")}
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

      {/* Use Cases */}
      <section id="use-cases" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-3">
              <Zap className="w-3.5 h-3.5 text-[#6D5DFB]" />
              <span>{t("ANWENDUNGSFÄLLE", "USE CASES")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B1020] tracking-tight">
              {t("Prozesse, die wir vollautomatisch steuern", "Processes We Automate")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-[#F8F8FC] border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-[#6D5DFB] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0B1020] mb-2">
                    {t(uc.de.title, uc.en.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(uc.de.desc, uc.en.desc)}
                  </p>
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
            <span>{t("KI- & AUTOMATIONS-STACK", "AI & AUTOMATION STACK")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            {t("Modernste KI-Infrastruktur & n8n Engine", "Modern AI Infrastructure & n8n Engine")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
            {t(
              "Wir kombinieren führende Sprachmodelle, Vektordatenbanken und sichere n8n-Workflow-Pipelines für maximale Verlässlichkeit.",
              "We combine leading foundation models, vector retrieval databases, and resilient n8n pipelines for enterprise reliability."
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
              {t("Von manuellen Aufgaben zu autonomen Systemen", "From Manual Bottlenecks to Autonomous Systems")}
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
              {t("Häufig gestellte Fragen zu KI & Automation", "Frequently Asked Questions")}
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
                <span>{t("PROZESSE AUTOMATISIEREN", "AUTOMATION AUDIT")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
                {t("Bereit für autonome Unternehmensprozesse?", "Ready to automate repetitive operations?")}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-8">
                {t(
                  "Lassen Sie uns in einem unverbindlichen 30-Minuten-Audit Ihre repetitiven Workflows analysieren und Einsparpotenziale berechnen.",
                  "Analyze your repetitive operations in a 30-minute discovery audit and calculate hours saved."
                )}
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(109,93,251,0.35)] group cursor-pointer"
              >
                <span>{t("Kostenloses Audit vereinbaren", "Schedule Automation Audit")}</span>
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
        defaultService={t("KI-Automatisierung & n8n", "AI Automation & n8n Workflows")}
      />
    </div>
  );
}
