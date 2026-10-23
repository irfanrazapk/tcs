'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '@/src/config/theme';
import { SYSTEM_COMPONENTS } from '@/lib/data';
import { Box, Layers, Monitor, Truck, Check, Info } from 'lucide-react';

export function ModularSystemSection() {
  const [selectedComponentId, setSelectedComponentId] = useState<string>('pods');

  const selected = SYSTEM_COMPONENTS.find((c) => c.id === selectedComponentId) || SYSTEM_COMPONENTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'pods':
        return <Box className="w-4 h-4" />;
      case 'panels':
        return <Layers className="w-4 h-4" />;
      case 'commercial':
        return <Monitor className="w-4 h-4" />;
      case 'deployment':
        return <Truck className="w-4 h-4" />;
      default:
        return <Box className="w-4 h-4" />;
    }
  };

  return (
    <section id="the-system" className="py-20 bg-white border-b border-[#E4E8EF] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Modular Architecture</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Core Hardware Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            One Integrated System. Multiple Commercial Possibilities.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Our modular event perimeter system combines deployable pods and connected panels to create flexible infrastructure that can adapt to different event formats, site requirements, and commercial strategies.
          </p>
        </div>

        {/* Technical Architectural Diagram Visual */}
        <div className="mb-12">
          <div className="relative rounded-sm overflow-hidden border border-[#E4E8EF] shadow-sm bg-[#F7F8FA]">
            <div className="relative aspect-16/9 w-full">
              <Image
                src={theme.media.container}
                alt="TRUST CODE SYSTEM - Actual Assembled Container Pod Architecture with Café & Digital Perimeter Screens"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14243A]/50 via-transparent to-transparent pointer-events-none" />

              {/* Exploded callout overlay */}
              <div className="absolute top-4 left-4 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-xs border border-[#E4E8EF] text-[11px] font-semibold text-[#14243A] rounded-2xs shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2457A7]" />
                <span>Actual Pod Assembly Concept &amp; Architecture</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#14243A]/90 backdrop-blur-xs text-white rounded-2xs text-xs">
                <div>
                  <span className="font-bold text-[#D9A65A]">POD ARCHITECTURE: </span>
                  <span className="text-slate-200">
                    Assembled custom container pod with central high-throughput service window and flanking digital perimeter screens.
                  </span>
                </div>
                <div className="text-[10px] text-slate-300 font-mono shrink-0">
                  REF: TCS-POD-CAFE-01
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 4 Component Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Component Tabs (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <div className="text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
              Select System Subsystem
            </div>
            {SYSTEM_COMPONENTS.map((comp) => {
              const isSelected = comp.id === selectedComponentId;
              return (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => setSelectedComponentId(comp.id)}
                  className={`text-left p-4 rounded-sm border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#EDF3FC] border-[#2457A7] text-[#14243A] shadow-2xs'
                      : 'bg-white border-[#E4E8EF] text-[#657184] hover:bg-[#F7F8FA] hover:text-[#14243A]'
                  }`}
                >
                  <div
                    className={`p-2 rounded-2xs mt-0.5 shrink-0 ${
                      isSelected
                        ? 'bg-[#2457A7] text-white'
                        : 'bg-[#F7F8FA] text-[#657184] border border-[#E4E8EF]'
                    }`}
                  >
                    {getIcon(comp.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#14243A]">{comp.title}</span>
                      <span className="text-[10px] font-medium text-[#2457A7] uppercase tracking-wider">
                        {comp.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#657184] line-clamp-2 mt-1">
                      {comp.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Component Detailed Spec Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#F7F8FA] border border-[#E4E8EF] p-6 sm:p-8 rounded-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4E8EF]">
              <div>
                <span className="text-[11px] font-mono text-[#D9A65A] font-bold uppercase">
                  Subsystem Deep-Dive
                </span>
                <h3 className="text-xl font-bold text-[#14243A] mt-0.5">
                  {selected.title}
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#2457A7] bg-white border border-[#E4E8EF] px-3 py-1 rounded-2xs">
                {selected.tag}
              </span>
            </div>

            <p className="text-sm text-[#657184] leading-relaxed mb-6">
              {selected.description}
            </p>

            <div className="text-xs font-bold text-[#14243A] uppercase tracking-wider mb-3">
              Standard Engineering &amp; Operational Specifications:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selected.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-white border border-[#E4E8EF] rounded-2xs"
                >
                  <Check className="w-4 h-4 text-[#2457A7] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#14243A] leading-snug">
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border border-[#E4E8EF] rounded-2xs flex items-start gap-3">
              <Info className="w-4 h-4 text-[#2457A7] shrink-0 mt-0.5" />
              <div className="text-xs text-[#657184] leading-relaxed">
                <span className="font-semibold text-[#14243A]">Deployment Assurance: </span>
                Units feature universal ISO twist-lock corner castings compatible with standard intermodal maritime chassis, flatbed & haulage.
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Compliance Footnote */}
        <div className="mt-12 p-4 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm flex items-start gap-3 text-xs text-[#657184]">
          <span className="font-bold text-[#14243A] shrink-0">Regulatory Disclosure:</span>
          <span>
            Final physical system deployment is subject to structural engineering load calculations, venue egress geometry, local municipal fire marshal approvals, health department sanitary permits, accessibility guidelines (ADA / Part M), and regional temporary building codes.
          </span>
        </div>
      </div>
    </section>
  );
}
