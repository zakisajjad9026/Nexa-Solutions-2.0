"use client";

import React from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
  onGetQuote: (serviceName: string) => void;
}

export default function ServiceModal({ serviceId, onClose, onGetQuote }: ServiceModalProps) {
  const { t } = useLanguage();

  if (!serviceId) return null;

  const detailsMap: Record<
    string,
    {
      titleDe: string;
      titleEn: string;
      taglineDe: string;
      taglineEn: string;
      image: string;
      descriptionDe: string;
      descriptionEn: string;
      techStack: string[];
      deliverablesDe: string[];
      deliverablesEn: string[];
      timelineDe: string;
      timelineEn: string;
    }
  > = {
    "web-dev": {
      titleDe: "Webentwicklung",
      titleEn: "Web Development",
      taglineDe: "Skalierbare, hochperformante digitale Plattformen",
      taglineEn: "Scalable, High-Performance Digital Platforms",
      image: "/images/web-dev.jpg",
      descriptionDe:
        "Wir entwickeln blitzschnelle, SEO-optimierte und unternehmensgerechte Webanwendungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind. Von modernen Marketingportalen bis hin zu komplexen SaaS-Dashboards.",
      descriptionEn:
        "We build blazing-fast, SEO-optimized, and enterprise-grade web applications tailored to your exact business workflow. From modern marketing portals to complex multi-tenant SaaS dashboards.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS / Vercel"],
      deliverablesDe: [
        "Maßgeschneiderte responsive Webanwendung",
        "CMS- und Admin-Dashboard-Integration",
        "Blitzschneller Lighthouse 95+ Score",
        "API-Integrationen & Zahlungs-Gateways",
        "Unternehmensgerechte Sicherheit & SSL",
      ],
      deliverablesEn: [
        "Custom responsive web application",
        "CMS and admin dashboard integration",
        "Lightning fast Lighthouse 95+ score",
        "API integrations & payment gateways",
        "Enterprise-grade security & SSL",
      ],
      timelineDe: "2 bis 6 Wochen je nach Umfang",
      timelineEn: "2 to 6 weeks based on scope",
    },
    "app-dev": {
      titleDe: "App-Entwicklung",
      titleEn: "App Development",
      taglineDe: "Native & plattformübergreifende mobile Anwendungen",
      taglineEn: "Native & Cross-Platform Mobile Applications",
      image: "/images/app-dev.jpg",
      descriptionDe:
        "Von der Idee bis zum Launch im Google Play Store und Apple App Store entwickeln wir begeisternde mobile Erlebnisse mit flüssigem UI, Offline-Unterstützung, Push-Benachrichtigungen in Echtzeit und robuster Backend-Infrastruktur.",
      descriptionEn:
        "From concept to Google Play Store and Apple App Store launch, we craft engaging mobile experiences with buttery-smooth UI, offline support, real-time push notifications, and rock-solid backend infrastructure.",
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Supabase"],
      deliverablesDe: [
        "Native iOS & Android Builds",
        "Pixelgenaues UI/UX-Design nach Apple Human Interface Guidelines",
        "Push-Benachrichtigungs- und Deep-Linking-System",
        "App Store & Play Store Zulassungsgarantie",
        "Automatisiertes Crash-Reporting & Analytics",
      ],
      deliverablesEn: [
        "Native iOS & Android builds",
        "Pixel-perfect UI/UX design matching Apple Human Interface Guidelines",
        "Push notification & deep linking system",
        "App Store & Play Store approval guarantee",
        "Automated crash reporting & analytics",
      ],
      timelineDe: "4 bis 10 Wochen je nach Umfang",
      timelineEn: "4 to 10 weeks based on scope",
    },
    "ai-auto": {
      titleDe: "KI & Automatisierung",
      titleEn: "AI & Automation",
      taglineDe: "Intelligente Workflows & Agenten-Systeme",
      taglineEn: "Intelligent Workflows & Agentic Systems",
      image: "/images/ai-robot.jpg",
      descriptionDe:
        "Nutzen Sie moderne Large Language Models, maßgeschneiderte KI-Agenten und automatisierte Workflows, um manuelle Aufgaben zu eliminieren, den Support drastisch zu beschleunigen und wertvolle Erkenntnisse aus Ihren Geschäftsdaten zu gewinnen.",
      descriptionEn:
        "Leverage state-of-the-art Large Language Models, custom AI agents, and intelligent automated workflows to eliminate repetitive tasks, dramatically accelerate customer support, and extract valuable business insights from unstructured data.",
      techStack: ["Python", "OpenAI / Claude / Gemini API", "LangChain", "Vector DBs (Pinecone)", "n8n", "Zapier"],
      deliverablesDe: [
        "Individuelle KI-Support-Chatbots mit Firmen-Wissensdatenbank",
        "End-to-End robotergestützte Prozessautomatisierung (RPA)",
        "Dokumenten-Parsing & automatisierte Datenextraktion",
        "Prädiktive Analysen & Intelligence-Dashboards",
        "Höchster Datenschutz & sichere API-Schlüssel",
      ],
      deliverablesEn: [
        "Custom AI customer support chatbots with company knowledge base",
        "End-to-end robotic process automation (RPA)",
        "Document parsing & data extraction pipeline",
        "Predictive analytics & intelligence dashboard",
        "Enterprise data privacy & secure API keys",
      ],
      timelineDe: "2 bis 5 Wochen je nach Umfang",
      timelineEn: "2 to 5 weeks based on scope",
    },
  };

  const current = detailsMap[serviceId] || detailsMap["web-dev"];
  const title = t(current.titleDe, current.titleEn);
  const tagline = t(current.taglineDe, current.taglineEn);
  const description = t(current.descriptionDe, current.descriptionEn);
  const deliverables = t(current.deliverablesDe, current.deliverablesEn) as unknown as string[];
  const timeline = t(current.timelineDe, current.timelineEn);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative aspect-[21/9] w-full bg-slate-900 shrink-0">
          <Image
            src={current.image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="text-xs font-semibold text-[#6D5DFB] tracking-wider uppercase mb-1">
              {t("UNSERE SPEZIALISIERUNG", "OUR SPECIALIZATION")}
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0B1020] tracking-tight">
              {title}
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              {tagline}
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#6D5DFB]" />
              <span>{t("Was Sie erhalten", "What You Receive")}</span>
            </h4>
            <div className="space-y-2">
              {(Array.isArray(deliverables) ? deliverables : current.deliverablesDe).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#6D5DFB] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#6D5DFB]" />
              <span>{t("Technologien & Tools", "Technologies & Tools")}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>
                {t("Voraussichtliche Lieferzeit:", "Estimated delivery:")} <strong>{timeline}</strong>
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onGetQuote(title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-colors shadow-md cursor-pointer"
            >
              <span>{t("Angebot anfordern", "Get a Quote")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
