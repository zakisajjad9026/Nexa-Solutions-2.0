"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqSectionProps {
  onOpenContact?: () => void;
}

export default function FaqSection({ onOpenContact }: FaqSectionProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t(
        "Wie setzen sich Kosten und Projektlaufzeiten bei Nexa zusammen?",
        "How are project costs and development timelines structured?"
      ),
      a: t(
        "Wir arbeiten nach transparenten Festpreisen auf Basis eines verbindlichen Leistungsverzeichnisses – garantiert ohne überraschende Zusatzkosten. Kleinere Webanwendungen dauern typischerweise 3 bis 5 Wochen, mobile Apps 5 bis 9 Wochen und komplexe SaaS-Plattformen 8 bis 12 Wochen.",
        "We operate on clear, fixed-price milestones defined in a written project scope before kickoff — zero unexpected surcharges. Tailored web apps typically take 3 to 5 weeks, mobile applications 5 to 9 weeks, and enterprise SaaS platforms 8 to 12 weeks."
      ),
    },
    {
      q: t(
        "Gehört der Quellcode und die Datenbank nach Projektabschluss zu 100 % mir?",
        "Do I own 100% of the source code, databases, and IP upon delivery?"
      ),
      a: t(
        "Ja, ausnahmslos. Sie erhalten alle uneingeschränkten Nutzungs- und Eigentumsrechte an allen Codebasen, Datenbankmodellen, Schnittstellen und Zugängen. Es gibt keinerlei Vendor-Lock-in und keine wiederkehrenden Lizenzgebühren an Nexa.",
        "Yes, unconditionally. You receive complete and unencumbered ownership rights to all source code repositories, databases, configuration files, and credentials. There is no vendor lock-in and zero recurring platform royalties."
      ),
    },
    {
      q: t(
        "Mit wem kommuniziere ich während der Projektentwicklung?",
        "Who is my direct point of contact during the project?"
      ),
      a: t(
        "Sie sprechen direkt mit erfahrenen Senior-Software-Entwicklern und Tech Leads, die Ihr System aktiv programmieren. Keine unproduktiven Zwischenhändler oder wechselnde Kontakte.",
        "You communicate directly with senior software engineers and technical leads who are actively architecting and writing your product. No bureaucratic intermediaries or rotating account managers."
      ),
    },
    {
      q: t(
        "Bieten Sie laufende Betreuung, Wartung und Sicherheitsupdates nach dem Launch?",
        "Do you provide ongoing technical support, maintenance, and updates after launch?"
      ),
      a: t(
        "Ja. Wir begleiten Sie langfristig mit flexiblen Wartungspaketen: Proaktives 24/7 Server-Monitoring, Sicherheits-Patches, automatisierte Backups und garantierte SLA-Reaktionszeiten bei technischen Notfällen.",
        "Yes. We support our partners long-term with flexible maintenance SLA agreements: 24/7 infrastructure health monitoring, security patches, encrypted off-site backups, and guaranteed emergency response windows."
      ),
    },
    {
      q: t(
        "Können Sie bestehende Systeme (z. B. CRM, ERP, Stripe, DATEV) nahtlos integrieren?",
        "Can you integrate with existing tools like CRMs, ERPs, payment gateways, or custom APIs?"
      ),
      a: t(
        "Selbstverständlich. Unsere Software-Architekturen setzen auf offene REST- und GraphQL-Schnittstellen sowie n8n-Automatisierungen. Wir binden Stripe, PayPal, HubSpot, Salesforce, DATEV und individuelle Unternehmens-APIs nahtlos ein.",
        "Absolutely. Our systems leverage standardized REST and GraphQL endpoints as well as custom n8n automations. We have extensive experience interfacing with Stripe, PayPal, HubSpot, Salesforce, DATEV, and custom internal backends."
      ),
    },
    {
      q: t(
        "Wie stellen Sie DSGVO-Konformität und Datenschutz sicher?",
        "How do you ensure GDPR compliance, data security, and European standards?"
      ),
      a: t(
        "Wir entwickeln nach Best Practices für Datensparsamkeit, Ende-zu-Ende-Verschlüsselung (SSL/TLS), Cookie-freier Analytics und Hosting in zertifizierten europäischen Rechenzentren (z. B. Frankfurt am Main).",
        "We build following strict data minimization principles, full SSL/TLS encryption, privacy-friendly analytics, and compliant European cloud hosting infrastructure."
      ),
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-28 bg-[#F8F8FC] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#6D5DFB]" />
            <span>{t("HÄUFIG GESTELLTE FRAGEN", "FREQUENTLY ASKED QUESTIONS")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1020] tracking-tight leading-tight mb-4">
            {t(
              "Antworten auf die wichtigsten Fragen.",
              "Answers to key questions."
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              "Alles über Festpreise, Quellcode-Eigentum, Zusammenarbeit und Sicherheitsstandards bei Nexa Solutions.",
              "Everything you need to know about scopes, code ownership, engineering collaboration, and timelines."
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-heading text-[#0B1020]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#6D5DFB] border-[#6D5DFB] text-white rotate-180"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        {onOpenContact && (
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-500 mb-3">
              {t(
                "Haben Sie eine spezielle technische Frage zu Ihrem Projekt?",
                "Have a specific technical question about your upcoming project?"
              )}
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#6D5DFB] hover:text-[#5B4CE0] cursor-pointer"
            >
              <span>{t("Direkt mit einem Ingenieur sprechen", "Speak directly with an engineer")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
