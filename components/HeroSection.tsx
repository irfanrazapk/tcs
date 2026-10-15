'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/src/config/theme';
import { ArrowRight, Play, Layers, DollarSign, ShieldCheck, Maximize2 } from 'lucide-react';

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E4E8EF] overflow-hidden">
      {/* Top Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E4E8EF_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow & Tagline (Zero-Pill: Clean unboxed text) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#657184] uppercase mb-4">
          <span className="text-[#2457A7]">Modular Event Infrastructure</span>
          <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
          <span>Commercial Venue Solutions</span>
          <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
          <span className="text-[#D9A65A]">Institutional Opportunity</span>
        </div>

        {/* Hero Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14243A] leading-[1.08] mb-4 text-balance">
              EVERY INCH MATTERS.
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-[#2457A7] leading-snug mb-5">
              Transforming Event Perimeters Into Revenue-Generating Infrastructure.
            </p>

            <p className="text-base text-[#657184] leading-relaxed mb-8 max-w-xl">
              TRUST CODE SYSTEM reimagines the boundary of major festivals, concerts, and sports venues through a modular network of deployable pods and connected panels—creating new commercial real estate for retail, sponsorship, hospitality, essential services, and memorable audience experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={() => scrollTo('#business-model')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#14243A] hover:bg-[#2457A7] rounded-sm transition-all duration-150 shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Explore the Business Model</span>
                <ArrowRight className="w-4 h-4 text-[#D9A65A]" />
              </button>

              <button
                onClick={() => scrollTo('#vision-video')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#14243A] bg-[#F7F8FA] hover:bg-[#E4E8EF] border border-[#E4E8EF] rounded-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                <Play className="w-4 h-4 text-[#2457A7] fill-[#2457A7]" />
                <span>Watch the Vision</span>
              </button>
            </div>

            {/* Compact supporting line */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#E4E8EF] text-xs font-medium text-[#657184]">
              <span className="text-[#14243A] font-semibold">Architecture & Strategy:</span>
              <span>Modular Infrastructure. Multiple Revenue Streams. Scalable Opportunities.</span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#E4E8EF] shadow-md bg-[#F7F8FA]">
              <div className="relative aspect-16/9 sm:aspect-16/10 w-full">
                <Image
                  src={theme.media.stageImage}
                  alt="TRUST CODE SYSTEM - Super Coachella Vision Stage & Perimeter Architecture"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle scrim to preserve contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14243A]/40 via-transparent to-transparent pointer-events-none" />

                {/* Concept watermark caption */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 bg-[#14243A]/85 backdrop-blur-xs px-3 py-1.5 rounded-sm">
                  <span className="font-medium tracking-wide">Featured Vision: Super Coachella Stage &amp; Perimeter Integration</span>
                  <span className="text-[#D9A65A] font-mono text-[10px]">VIDEO STAGE SHOWCASE</span>
                </div>
              </div>
            </div>

            {/* Floating architectural metric card */}
            <div className="mt-4 p-4 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#E4E8EF] flex items-center justify-center shrink-0 text-[#2457A7] shadow-xs">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#14243A] uppercase tracking-wide">
                  Perimeter Commercialization
                </div>
                <p className="text-xs text-[#657184] mt-0.5">
                  Converts non-revenue perimeter fencing into active retail storefronts, corporate lounges, and sponsor destinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stat Full-Width Proof Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#E4E8EF]">
          <div className="p-4 sm:p-5 bg-white border border-[#E4E8EF] rounded-sm shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14243A] tabular-nums tracking-tight">
              $200M–$500M
            </div>
            <div className="text-xs font-semibold text-[#2457A7] mt-1 uppercase tracking-wide">
              Potential Gross Opportunity
            </div>
            <div className="text-[11px] text-[#657184] mt-1 leading-tight">
              Stated scalable revenue potential across multi-event deployments*
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white border border-[#E4E8EF] rounded-sm shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14243A] tabular-nums tracking-tight">
              100% Modular
            </div>
            <div className="text-xs font-semibold text-[#2457A7] mt-1 uppercase tracking-wide">
              Deployable Infrastructure
            </div>
            <div className="text-[11px] text-[#657184] mt-1 leading-tight">
              Standardized shipping pods & rapid quick-connect panel network
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white border border-[#E4E8EF] rounded-sm shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14243A] tabular-nums tracking-tight">
              7 Monetization
            </div>
            <div className="text-xs font-semibold text-[#2457A7] mt-1 uppercase tracking-wide">
              Distinct Revenue Streams
            </div>
            <div className="text-[11px] text-[#657184] mt-1 leading-tight">
              Deployments, leasing, sponsorships, media rights & concessions
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white border border-[#E4E8EF] rounded-sm shadow-2xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#14243A] tabular-nums tracking-tight">
              360° Perimeter
            </div>
            <div className="text-xs font-semibold text-[#2457A7] mt-1 uppercase tracking-wide">
              Activated Boundary Real Estate
            </div>
            <div className="text-[11px] text-[#657184] mt-1 leading-tight">
              Eliminating passive dead zones with turnkey code-compliant hubs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
