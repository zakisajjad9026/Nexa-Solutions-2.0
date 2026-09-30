"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle, Sparkles, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: "ahmed",
      quoteDe:
        "Nexa Solutions hat unseren Headless-Shop komplett neu aufgebaut. Die Seitenladezeiten liegen unter einer Sekunde und unsere mobile Verkaufskonversion ist um 48 % gestiegen. Die technische Kommunikation war jederzeit direkt und transparent.",
      quoteEn:
        "Nexa Solutions re-architected our storefront from the ground up. Page load speeds are now sub-second and our mobile sales conversion grew by 48%. Technical communication was direct, transparent, and fast throughout.",
      name: "Ahmed Khan",
      roleDe: "Gründer & Geschäftsführer",
      roleEn: "Founder & Managing Director",
      company: "Aura Masale",
      projectBadge: "Headless E-Commerce",
      avatar: "/images/avatar-crop.png",
      rating: 5,
    },
    {
      id: "priya",
      quoteDe:
        "Die Zusammenarbeit mit den Entwicklern von Nexa war herausragend. Sie haben unser komplexes HRMS mit biometrischer Zeiterfassung und automatisierter Gehaltsabrechnung fehlerfrei umgesetzt. Echte Senior-Entwicklungskompetenz.",
      quoteEn:
        "Collaborating with the Nexa engineering team was an exceptional experience. They delivered our complex multi-jurisdiction HRMS with biometric device sync and automated payroll flawlessly. Genuine senior engineering capability.",
      name: "Priya Sharma",
      roleDe: "Head of Product",
      roleEn: "Head of Product",
      company: "Meagle 360",
      projectBadge: "Enterprise SaaS",
      avatar: null,
      initials: "PS",
      rating: 5,
    },
    {
      id: "rohit",
      quoteDe:
        "Professionell, termintreu und extrem lösungsorientiert. Die Kombination aus moderner Web-App und automatisierter Bestellsynchronisation spart unserem Operations-Team jede Woche viele Stunden.",
      quoteEn:
        "Professional, on-time, and extremely solution-driven. The combination of modern web engineering and automated order synchronization saves our operations team multiple hours every single week.",
      name: "Rohit Verma",
      roleDe: "Leiter E-Commerce & Logistik",
      roleEn: "Operations Director",
      company: "Taibeena",
      projectBadge: "Global Commerce",
      avatar: null,
      initials: "RV",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-[#F5F3FF] text-[#6D5DFB] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6D5DFB]" />
            <span>{t("KUNDENSTIMMEN", "CLIENT TESTIMONIALS")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1020] tracking-tight leading-tight">
            {t(
              "Erfahrungen von Gründern und Führungskräften.",
              "Trusted by founders and product leaders."
            )}
          </h2>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F8FC] rounded-3xl p-8 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Project Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">
                    {item.projectBadge}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-8">
                  &ldquo;{t(item.quoteDe, item.quoteEn)}&rdquo;
                </p>
              </div>

              {/* Author Meta */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-slate-200/80">
                {item.avatar ? (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 bg-white shrink-0">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#F5F3FF] text-[#6D5DFB] font-bold flex items-center justify-center text-xs shrink-0 border border-purple-200">
                    {item.initials}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold font-heading text-[#0B1020] leading-tight">
                      {item.name}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t(item.roleDe, item.roleEn)} &bull; {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
