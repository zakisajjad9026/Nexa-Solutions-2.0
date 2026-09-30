"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
}

export default function BrandLogo({ className = "", isDark = false }: BrandLogoProps) {
  return (
    <Link href="#home" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Stylized NX Monogram Icon with Purple + Navy accents */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          {/* N left stroke (Purple Accent) */}
          <path
            d="M8 34V10L19 26V34H8Z"
            fill="#6D5DFB"
          />
          {/* N diagonal stroke */}
          <path
            d="M19 10L8 26V10H19Z"
            fill="#7C3AED"
          />
          <path
            d="M19 10L27 24L23 29L15 17L19 10Z"
            fill="#8B5CF6"
          />
          {/* X intersecting strokes (Deep Navy / White) */}
          <path
            d="M26 10L36 34H30L23 18L26 10Z"
            fill={isDark ? "#FFFFFF" : "#0B1020"}
          />
          <path
            d="M36 10L25 34H19L30 10H36Z"
            fill={isDark ? "#94A3B8" : "#475569"}
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-bold font-heading tracking-tight leading-tight transition-colors ${
            isDark
              ? "text-white group-hover:text-[#A78BFA]"
              : "text-[#0B1020] group-hover:text-[#6D5DFB]"
          }`}
        >
          Nexa Solutions
        </span>
        <span
          className={`text-[9px] sm:text-[10px] font-medium tracking-wider uppercase transition-colors ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Software &bull; AI &bull; Systems
        </span>
      </div>
    </Link>
  );
}
