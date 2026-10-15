'use client';

import React, { useState } from 'react';
import { OPPORTUNITY_POINTS } from '@/lib/data';
import { ArrowRight, AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

export function OpportunitySection() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'trustcode'>('trustcode');

  return (
    <section id="opportunity" className="py-20 bg-[#F7F8FA] border-b border-[#E4E8EF] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Market Opportunity</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Infrastructure Economics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            The Event Perimeter Is More Than a Boundary. It&apos;s an Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Large music festivals, multi-day concerts, and sports tournaments construct thousands of meters of temporary perimeter fencing every season. Traditionally treated as pure cost centers and passive security barricades, these boundaries represent prime, unmonetized event real estate.
          </p>
        </div>

        {/* 3 Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {OPPORTUNITY_POINTS.map((item) => (
            <div
              key={item.number}
              className="bg-white border border-[#E4E8EF] p-6 sm:p-7 rounded-sm shadow-2xs hover:border-[#2457A7]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-[#D9A65A]">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#2457A7] uppercase tracking-wider">
                    Untapped Value
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#14243A] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#2457A7] mb-3">
                  {item.headline}
                </p>
                <p className="text-xs text-[#657184] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4E8EF]">
                <div className="text-sm font-bold text-[#14243A]">
                  {item.metric}
                </div>
                <div className="text-[11px] text-[#657184]">
                  {item.metricContext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Transformation: Conventional vs TRUST CODE SYSTEM */}
        <div className="bg-white border border-[#E4E8EF] rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E4E8EF] gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#2457A7]">
                Architectural Paradigm Shift
              </div>
              <h3 className="text-xl font-bold text-[#14243A] mt-1">
                Comparing Perimeter Models
              </h3>
            </div>

            {/* Segmented Switcher */}
            <div className="inline-flex p-1 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('traditional')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-2xs transition-colors cursor-pointer ${
                  activeTab === 'traditional'
                    ? 'bg-white text-[#14243A] shadow-2xs'
                    : 'text-[#657184] hover:text-[#14243A]'
                }`}
              >
                Conventional Event Perimeter
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('trustcode')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-2xs transition-colors cursor-pointer ${
                  activeTab === 'trustcode'
                    ? 'bg-[#14243A] text-white shadow-2xs'
                    : 'text-[#657184] hover:text-[#14243A]'
                }`}
              >
                TRUST CODE Modular Perimeter
              </button>
            </div>
          </div>

          {/* Comparison Panels */}
          {activeTab === 'traditional' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
              <div className="p-5 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>Cost Center Only</span>
                </div>
                <h4 className="text-sm font-bold text-[#14243A] mb-1">
                  Passive Fencing &amp; Barricades
                </h4>
                <p className="text-xs text-[#657184] leading-relaxed">
                  Tens of thousands spent on temporary chain-link fences, scrim wraps, and security guards with zero direct commercial return or merchant income.
                </p>
              </div>

              <div className="p-5 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Fragmented Vendor Chaos</span>
                </div>
                <h4 className="text-sm font-bold text-[#14243A] mb-1">
                  Disparate Tents &amp; Trailers
                </h4>
                <p className="text-xs text-[#657184] leading-relaxed">
                  Ad-hoc food trucks, mismatched marquee tents, exposed diesel generators, and hazardous cable ramps crossing patron pathways.
                </p>
              </div>

              <div className="p-5 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Missed Brand Revenue</span>
                </div>
                <h4 className="text-sm font-bold text-[#14243A] mb-1">
                  Unmonetized Audience Arteries
                </h4>
                <p className="text-xs text-[#657184] leading-relaxed">
                  High-footfall perimeter circulation corridors remain commercial dead zones, unable to support upscale dining, VIP seating, or sponsor activations.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
              <div className="p-5 bg-[#EDF3FC]/50 border border-[#2457A7]/30 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2457A7] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2457A7]" />
                  <span>Active Revenue Generator</span>
                </div>
                <h4 className="text-sm font-bold text-[#14243A] mb-1">
                  Turnkey Commercial Pod Grid
                </h4>
                <p className="text-xs text-[#657184] leading-relaxed">
                  Converts standard barrier lines into high-yielding retail storefronts, craft food outlets, and sponsor lounges yielding multiple income streams.
                </p>
              </div>

              <div className="p-5 bg-[#EDF3FC]/50 border border-[#2457A7]/30 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2457A7] mb-2">
                  <Building2 className="w-4 h-4 text-[#2457A7]" />
                  <span>Unified Architectural Standard</span>
                </div>
                <h4 className="text-sm font-bold text-[#14243A] mb-1">
                  Integrated Utilities &amp; Safety
                </h4>
                <p className="text-xs text-[#657184] leading-relaxed">
                  Clean raceways for power, potable water, graywater, fiber POS data, and fire-code emergency egress channels within one standardized system.
                </p>
              </div>

              <div className="p-5 bg-[#EDF3FC]/50 border border-[#2457A7]/30 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2457A7] mb-2">
                  <Sparkles className="w-4 h-4 text-[#D9A65A]" />
                  <span>Expanded Concession Real Estate</span>
                </div>
                <h4 className="text-sm font-bold text-[#14243A] mb-1">
                  Marquee Brand &amp; VIP Venues
                </h4>
                <p className="text-xs text-[#657184] leading-relaxed">
                  Creates premium two-story VIP lounges and immersive sponsor destinations without cannibalizing central stage crowd capacity.
                </p>
              </div>
            </div>
          )}

          {/* Qualified Integrity Footnote */}
          <div className="mt-6 pt-4 border-t border-[#E4E8EF] flex items-start gap-2 text-[11px] text-[#8E99A8]">
            <span className="font-semibold text-[#657184]">Engineering &amp; Site Notice:</span>
            <span>
              Perimeter availability, layout geometry, tenant capacities, and potential revenue yield vary by venue footprint, local safety ordinances, crowd-flow egress calculations, and municipal permitting.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
