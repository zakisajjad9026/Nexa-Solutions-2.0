"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer id="contact" className="bg-[#0B1020] text-slate-300 pt-18 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <BrandLogo isDark={true} className="mb-4" />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              {t(
                "Nexa Solutions entwickelt hochperformante Webanwendungen, mobile Plattformen und KI-gestützte Systeme für ambitionierte Unternehmen.",
                "Nexa Solutions builds high-performance web applications, mobile platforms, and AI-powered systems for ambitious businesses looking to scale."
              )}
            </p>

            {/* Communication & Channels */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@nexa-solutions.io"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6D5DFB] transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:+919910543210"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6D5DFB] transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6D5DFB] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-mono tracking-wider text-white uppercase mb-4">
              {t("Navigation", "Company")}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  {t("Startseite", "Overview")}
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-white transition-colors">
                  {t("Was wir bauen", "Capabilities")}
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-white transition-colors">
                  {t("Ausgewählte Arbeiten", "Selected Work")}
                </Link>
              </li>
              <li>
                <Link href="#automation" className="hover:text-white transition-colors">
                  {t("KI & Automation", "AI & Workflows")}
                </Link>
              </li>
              <li>
                <Link href="#why-nexa" className="hover:text-white transition-colors">
                  {t("Warum Nexa", "Why Nexa")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  {t("FAQ", "FAQ")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold font-mono tracking-wider text-white uppercase mb-4">
              {t("Leistungen", "Capabilities")}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  {t("Webentwicklung & SaaS", "Web Engineering & SaaS")}
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                  {t("Mobile App-Entwicklung", "Mobile App Development")}
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  {t("KI-Automatisierung & n8n", "AI Automation & n8n")}
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  {t("Kundenportale & Dashboards", "Client Portals & Dashboards")}
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  {t("System-Integrationen & APIs", "System Integrations & APIs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Office & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold font-mono tracking-wider text-white uppercase mb-4">
              {t("Kontakt", "Get in Touch")}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a href="mailto:info@nexa-solutions.io" className="hover:text-white transition-colors">
                  info@nexa-solutions.io
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a href="tel:+919910543210" className="hover:text-white transition-colors">
                  +91 99105 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Hyderabad, India &bull; Global Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 Nexa Solutions. {t("Alle Rechte vorbehalten.", "All rights reserved.")}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal("privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t("Datenschutzerklärung", "Privacy Policy")}
            </button>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={() => setLegalModal("terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t("Allgemeine Geschäftsbedingungen", "Terms & Conditions")}
            </button>
          </div>
        </div>
      </div>

      {/* Real Legal Modals to avoid placeholder links */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-heading mb-4">
              {legalModal === "privacy"
                ? t("Datenschutzerklärung", "Privacy Policy")
                : t("Allgemeine Geschäftsbedingungen", "Terms & Conditions")}
            </h3>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === "privacy" ? (
                <>
                  <p>
                    {t(
                      "Nexa Solutions respektiert Ihre Privatsphäre und verarbeitet personenbezogene Daten ausschließlich im Einklang mit der DSGVO (EU-Datenschutz-Grundverordnung).",
                      "Nexa Solutions respects your privacy and processes personal data strictly in compliance with the General Data Protection Regulation (GDPR)."
                    )}
                  </p>
                  <p>
                    {t(
                      "Wir speichern Kontaktdaten, die über unsere Formulare eingehen, ausschließlich zur Beantwortung Ihrer Projektanfrage. Daten werden niemals an unbefugte Dritte weitergegeben.",
                      "We store contact details submitted via project inquiries solely to communicate regarding your scope. Data is never sold or shared with unauthorized third parties."
                    )}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {t(
                      "Alle Kundenprojekte werden auf Basis individueller Leistungsbeschreibungen mit verbindlichen Festpreisen und Meilensteinen vereinbart.",
                      "All client projects are delivered under individualized written statements of work with fixed price predictability and agreed milestone schedules."
                    )}
                  </p>
                  <p>
                    {t(
                      "Nach vollständiger Vergütung gehen alle uneingeschränkten Nutzungs- und Quellcode-Eigentumsrechte vollständig auf den Auftraggeber über.",
                      "Upon final milestone settlement, 100% of source code ownership and intellectual property rights transfer to the client with zero vendor lock-in."
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
