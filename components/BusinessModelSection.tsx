'use client';

import React from 'react';
import { BUSINESS_MODEL_STEPS } from '@/lib/data';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Users, Building, Coins, Sparkles } from 'lucide-react';

export function BusinessModelSection() {
  const flowNodes = [
    { label: 'Event Organizers', icon: <Users className="w-4 h-4 text-[#2457A7]" />, desc: 'Venues & Promoters' },
    { label: 'Modular Infrastructure', icon: <Layers className="w-4 h-4 text-[#2457A7]" />, desc: 'TRUST CODE SYSTEM' },
    { label: 'Commercial Partners', icon: <Building className="w-4 h-4 text-[#2457A7]" />, desc: 'Brands, F&B & Tenants' },
    { label: 'Audience Experiences', icon: <Sparkles className="w-4 h-4 text-[#D9A65A]" />, desc: 'Curated Concessions & VIP' },
    { label: 'Revenue Opportunities', icon: <Coins className="w-4 h-4 text-[#1B7A43]" />, desc: 'Shared Commercial Yield' },
  ];

  return (
    <section id="business-model" className="py-20 bg-white border-b border-[#E4E8EF] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Operating Methodology</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Value Creation Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            Infrastructure That Creates Multiple Paths to Revenue.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            We partner with major live event organizers to transform underutilized perimeter boundaries into high-performing commercial assets through a structured four-stage operational process.
          </p>
        </div>

        {/* Visual Flow Chain */}
        <div className="mb-16 p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm">
          <div className="text-xs font-bold text-[#14243A] uppercase tracking-wider mb-4">
            The Value Acceleration Pipeline
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {flowNodes.map((node, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-full p-4 bg-white border border-[#E4E8EF] rounded-sm shadow-2xs text-center flex flex-col items-center">
                  <div className="p-2 rounded-2xs bg-[#F7F8FA] border border-[#E4E8EF] mb-2">
                    {node.icon}
                  </div>
                  <div className="text-xs font-bold text-[#14243A] leading-tight">
                    {node.label}
                  </div>
                  <div className="text-[10px] text-[#657184] mt-0.5">
                    {node.desc}
                  </div>
                </div>

                {idx < flowNodes.length - 1 && (
                  <div className="hidden md:flex text-[#D0D7E2] shrink-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BUSINESS_MODEL_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-[#E4E8EF] p-6 rounded-sm shadow-2xs hover:border-[#2457A7]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-[#D9A65A]">
                    Step {step.step}
                  </span>
                  <span className="text-[10px] font-semibold text-[#2457A7] uppercase tracking-wider">
                    Phase {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#14243A] mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#2457A7] mb-3">
                  {step.lead}
                </div>
                <p className="text-xs text-[#657184] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4E8EF]">
                <div className="text-[10px] uppercase font-bold text-[#657184] tracking-wider mb-1">
                  Key Deliverable
                </div>
                <div className="text-xs font-semibold text-[#14243A]">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct vs Shared Revenue Operating Model Explainer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm">
          <div>
            <div className="text-xs font-bold text-[#2457A7] uppercase tracking-wider mb-1">
              Commercial Structuring
            </div>
            <h4 className="text-base font-bold text-[#14243A] mb-2">
              Direct and Shared Revenue Frameworks
            </h4>
            <p className="text-xs text-[#657184] leading-relaxed">
              TRUST CODE SYSTEM operates flexible commercial models tailored to promoter objectives. Revenue may be generated directly via proprietary asset leases, or co-earned through shared concession percentage waterfalls with festival ownership groups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-[#E4E8EF] rounded-2xs">
              <div className="text-xs font-bold text-[#14243A] mb-1">
                A. Promoter Infrastructure Model
              </div>
              <p className="text-[11px] text-[#657184] leading-relaxed">
                Fixed turnkey deployment &amp; equipment lease fee paid by festival promoter; promoter retains 100% of tenant booth rents and concession fees.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E4E8EF] rounded-2xs">
              <div className="text-xs font-bold text-[#14243A] mb-1">
                B. Shared Concession JV Model
              </div>
              <p className="text-[11px] text-[#657184] leading-relaxed">
                Reduced upfront mobilization fee paired with structured revenue sharing on tenant subleases, sponsor activations, and digital media advertising.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
