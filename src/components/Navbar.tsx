"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X, Globe, Sparkles } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ["home", "capabilities", "work", "automation", "why-nexa", "process", "faq"];
      const scrollPos = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on click outside
  useEffect(() => {
    if (!langDropdownOpen) return;
    const handler = () => setLangDropdownOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [langDropdownOpen]);

  const navLinks = [
    {
      name: t("Services", "Services"),
      href: "#capabilities",
      id: "capabilities",
      hasDropdown: true,
    },
    {
      name: t("Referenzen", "Work"),
      href: "#work",
      id: "work",
    },
    {
      name: t("KI & Automation", "AI & Automation"),
      href: "#automation",
      id: "automation",
    },
    {
      name: t("Warum Nexa", "Why Nexa"),
      href: "#why-nexa",
      id: "why-nexa",
    },
    {
      name: t("FAQ", "FAQ"),
      href: "#faq",
      id: "faq",
    },
  ];

  const serviceLinks = [
    {
      label: t("Webentwicklung & SaaS", "Web Engineering & SaaS"),
      desc: t("Hochperformante Web-Apps und Kundenportale", "High-performance web apps & client portals"),
      href: "/services/web-development",
    },
    {
      label: t("Mobile App-Entwicklung", "Mobile App Engineering"),
      desc: t("Native & plattformübergreifende iOS & Android Apps", "Native & cross-platform iOS & Android apps"),
      href: "/services/mobile-app-development",
    },
    {
      label: t("KI-Automatisierung & n8n", "AI Automation & Workflows"),
      desc: t("Autonome Agenten & Daten-Pipelines", "Autonomous agents & intelligent process pipelines"),
      href: "/services/ai-automation",
    },
  ];

  const languages = [
    { code: "de" as const, label: "Deutsch", flag: "🇩🇪" },
    { code: "en" as const, label: "English", flag: "🇬🇧" },
  ];

  const activeLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(11,16,32,0.06)] border-b border-slate-200/80 py-3.5"
          : "bg-white/70 backdrop-blur-xs py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors py-1 ${
                        isActive
                          ? "text-[#0B1020] font-semibold"
                          : "text-slate-600 hover:text-[#0B1020]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                          servicesDropdown ? "rotate-180 text-[#6D5DFB]" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full -left-4 mt-2 w-80 rounded-2xl bg-white border border-slate-200/90 shadow-xl p-2.5 animate-in fade-in zoom-in-95 duration-150 z-50">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#6D5DFB] transition-colors">
                              {s.label}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {s.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.id)}
                  className={`text-[14px] font-medium transition-colors py-1 relative ${
                    isActive
                      ? "text-[#0B1020] font-semibold"
                      : "text-slate-600 hover:text-[#0B1020]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6D5DFB] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher + Premium CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setLangDropdownOpen((prev) => !prev);
              }}
            >
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-all duration-200 cursor-pointer select-none"
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{activeLang.flag}</span>
                <span className="font-semibold">{activeLang.code.toUpperCase()}</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-36 rounded-2xl bg-white border border-slate-200 shadow-xl p-1.5 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        lang === l.code
                          ? "bg-purple-50 text-[#6D5DFB] font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-[0_2px_12px_rgba(109,93,251,0.25)] hover:shadow-[0_4px_18px_rgba(109,93,251,0.35)] group cursor-pointer"
            >
              <span>{t("Gespräch vereinbaren", "Let's Talk")}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Lang Toggle for Mobile */}
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="px-2.5 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              aria-label="Toggle language"
            >
              {lang === "de" ? "EN 🇬🇧" : "DE 🇩🇪"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200 bg-white/95 rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-purple-50 hover:text-[#6D5DFB] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#6D5DFB] hover:bg-[#5B4CE0] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>{t("Gespräch vereinbaren", "Let's Talk")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
