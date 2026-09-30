"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService || "Web Development",
    budget: "$2,000 - $5,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const services = [
    { de: "Webentwicklung & SaaS", en: "Web Engineering & SaaS" },
    { de: "Mobile App-Entwicklung", en: "Mobile App Development" },
    { de: "KI & Workflow-Automation", en: "AI & Workflow Automation" },
    { de: "Komplettlösung / System", en: "Full-Stack System Architecture" },
  ];

  const budgets = ["<$2k", "$2k - $5k", "$5k - $10k", "$10k+"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors z-10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0B1020] mb-2">
              {t("Projektanfrage erhalten!", "Inquiry Received!")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              {t(
                "Vielen Dank für Ihre Anfrage. Ein Senior-Entwickler wird Ihre Anforderungen prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.",
                "Thank you for contacting Nexa Solutions. A senior software engineer will review your project requirements and respond within 24 hours."
              )}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#6D5DFB] text-white text-sm font-semibold hover:bg-[#5B4CE0] transition-colors cursor-pointer"
            >
              {t("Schließen", "Close")}
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] border border-purple-200 text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#6D5DFB]" />
                <span>{t("PROJEKT STARTEN", "START A PROJECT")}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B1020] tracking-tight">
                {t("Lassen Sie uns Ihr System besprechen", "Let's discuss your project scope")}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                {t(
                  "Unverbindliche 30-Minuten-Beratung direkt mit unseren Software-Architekten.",
                  "Zero commitment 30-minute discovery consultation directly with our technical leads."
                )}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Ihr Name", "Your Name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("z.B. Max Mustermann", "e.g. John Doe")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6D5DFB] focus:ring-1 focus:ring-[#6D5DFB] text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Geschäftliche E-Mail", "Work Email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6D5DFB] focus:ring-1 focus:ring-[#6D5DFB] text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Gewünschter Bereich", "Service Needed")}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((svc) => {
                    const isSelected =
                      formData.service === svc.en ||
                      formData.service === svc.de ||
                      (defaultService && defaultService.toLowerCase().includes(svc.en.toLowerCase().split(" ")[0]));
                    return (
                      <button
                        type="button"
                        key={svc.en}
                        onClick={() => setFormData({ ...formData, service: t(svc.de, svc.en) })}
                        className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#6D5DFB] bg-[#F5F3FF] text-[#6D5DFB] font-semibold"
                            : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                        }`}
                      >
                        {t(svc.de, svc.en)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Geschätztes Budget", "Estimated Budget")}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        formData.budget === b
                          ? "border-[#6D5DFB] bg-[#F5F3FF] text-[#6D5DFB] font-bold"
                          : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t("Projektdetails", "Project Scope & Details")}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={t(
                    "Beschreiben Sie kurz Ihr Vorhaben, Ziele oder den gewünschten Zeitplan...",
                    "Briefly describe your product goals, technical requirements or target launch..."
                  )}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6D5DFB] focus:ring-1 focus:ring-[#6D5DFB] text-sm bg-slate-50/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <span>{t("Wird gesendet...", "Sending inquiry...")}</span>
                ) : (
                  <>
                    <span>{t("Gespräch anfragen", "Submit Project Inquiry")}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Direct contact footer */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#6D5DFB]" />
                <span>info@nexa-solutions.io</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#6D5DFB]" />
                <span>+91 99105 43210</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6D5DFB]" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
