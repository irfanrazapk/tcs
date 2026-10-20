'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '@/src/config/theme';
import { DEPLOYMENT_SCENARIOS } from '@/lib/data';
import { Layers, Check, ArrowRight, ShieldCheck, Clock, Users, Building2, Map } from 'lucide-react';

export function DeploymentScenarios() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scenario-b');

  const selected = DEPLOYMENT_SCENARIOS.find((s) => s.id === selectedScenarioId) || DEPLOYMENT_SCENARIOS[1];

  return (
    <section id="scenarios" className="py-20 bg-[#F7F8FA] border-b border-[#E4E8EF] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Modular Scalability</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Deployment Footprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            Designed for Events of Different Scales.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            The system adapts to diverse venue topologies, crowd densities, and commercial objectives—from focused single-stage regional activations to multi-zone international festival ecosystems.
          </p>
        </div>

        {/* Actual Proposed Master Event Map Showcase */}
        <div className="mb-10 bg-white border border-[#E4E8EF] rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E4E8EF] gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2457A7]">
                <Map className="w-3.5 h-3.5" />
                <span>Master Site Integration Plan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#14243A] mt-0.5">
                Actual Proposed Event Site Map: Coachella Venue &amp; Perimeter Layout
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#D9A65A] bg-[#FAF4EB] border border-[#D9A65A]/40 px-3 py-1 rounded-2xs self-start sm:self-auto">
              PROPOSED MASTER CADASTRE
            </span>
          </div>

          <div className="relative aspect-16/9 w-full rounded-2xs overflow-hidden border border-[#E4E8EF] mb-4 bg-[#F7F8FA]">
            <Image
              src={theme.media.tcsnewmap}
              alt="TRUST CODE SYSTEM - Actual Proposed Event Site Map: Coachella Venue, Camping, Parking & Access Layout"
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1200px"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#657184] pt-2">
            <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
              <span className="font-bold text-[#14243A] block mb-1">Venue Core Commercial Ring:</span>
              Modular retail and hospitality pods stationed along main concourses (Outdoor Theatre, Mojave, Gobi, Rose Garden VIP).
            </div>
            <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
              <span className="font-bold text-[#14243A] block mb-1">Perimeter &amp; Avenue Corridors:</span>
              Connected panel barriers with internal utility conduit lines routed along Avenue 49 to Avenue 52.
            </div>
            <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
              <span className="font-bold text-[#14243A] block mb-1">Camping &amp; Essential Services:</span>
              24/7 modular convenience store pods and sanitation modules servicing zones 1A through 15D.
            </div>
          </div>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {DEPLOYMENT_SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === selectedScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setSelectedScenarioId(scenario.id)}
                className={`text-left p-5 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#2457A7] shadow-sm ring-1 ring-[#2457A7]'
                    : 'bg-white border-[#E4E8EF] hover:border-[#D0D7E2] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#D9A65A]">
                      {scenario.code}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-2xs ${
                        scenario.operationalComplexity === 'Moderate'
                          ? 'bg-[#EAF5EE] text-[#1B7A43]'
                          : scenario.operationalComplexity === 'High'
                          ? 'bg-[#EDF3FC] text-[#2457A7]'
                          : 'bg-[#FAF4EB] text-[#B87216]'
                      }`}
                    >
                      {scenario.operationalComplexity} Complexity
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#14243A] mb-1">
                    {scenario.title}
                  </h3>
                  <div className="text-xs text-[#2457A7] font-semibold">
                    {scenario.unitRange}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4E8EF] text-[11px] text-[#657184] flex items-center justify-between">
                  <span>Illustrative Potential:</span>
                  <span className="font-mono font-bold text-[#14243A]">
                    {scenario.illustrativePotential.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Detailed Blueprint View */}
        <div className="bg-white border border-[#E4E8EF] rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E4E8EF] gap-4">
            <div>
              <span className="text-xs font-mono text-[#D9A65A] font-bold uppercase">
                {selected.code} Configuration Blueprint
              </span>
              <h3 className="text-2xl font-bold text-[#14243A] mt-1">
                {selected.title}
              </h3>
              <p className="text-sm font-medium text-[#2457A7] mt-0.5">
                {selected.subtitle}
              </p>
            </div>

            <div className="p-3 bg-[#EDF3FC] border border-[#2457A7]/30 rounded-2xs self-start sm:self-auto text-right">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#2457A7]">
                Indicative Project Scope
              </div>
              <div className="text-base font-extrabold text-[#14243A] font-mono">
                {selected.illustrativePotential}
              </div>
            </div>
          </div>

          {/* Layout & Tenant Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Conceptual Layout */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-2">
                  Conceptual Layout &amp; Site Integration
                </h4>
                <p className="text-xs sm:text-sm text-[#657184] leading-relaxed mb-6">
                  {selected.conceptLayout}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-2">
                  Key Deployment Logistics Considerations
                </h4>
                <div className="space-y-2 mb-6">
                  {selected.indicativeConsiderations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#657184]">
                      <Check className="w-4 h-4 text-[#2457A7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Potential Tenants & Revenue Streams */}
            <div className="lg:col-span-6 bg-[#F7F8FA] border border-[#E4E8EF] p-5 sm:p-6 rounded-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-3">
                Target Commercial Tenants &amp; Operators
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {selected.tenantTypes.map((tenant, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white border border-[#E4E8EF] rounded-2xs text-xs font-medium text-[#14243A]"
                  >
                    {tenant}
                  </div>
                ))}
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#14243A] mb-3">
                Primary Revenue Generation Channels
              </h4>
              <div className="space-y-1.5">
                {selected.potentialRevenueSources.map((source, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#2457A7] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A65A]" />
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qualified Integrity Note */}
          <div className="pt-4 border-t border-[#E4E8EF] text-[11px] text-[#8E99A8] leading-relaxed">
            <span className="font-semibold text-[#657184]">Illustrative Scenario Disclosure: </span>
            Deployment configurations, unit numbers, and gross financial indicators shown above represent conceptual planning scenarios. They do not constitute historical performance, signed venue agreements, or guaranteed contract values. Actual commercial realization depends upon negotiated lease rates, festival attendance, and site execution parameters.
          </div>
        </div>
      </div>
    </section>
  );
}
