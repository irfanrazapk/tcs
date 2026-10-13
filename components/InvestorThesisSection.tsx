'use client';

import React from 'react';
import { INVESTOR_THESIS_POINTS } from '@/lib/data';
import { ShieldCheck, TrendingUp, Layers, RefreshCw, Handshake, Compass, AlertCircle } from 'lucide-react';

export function InvestorThesisSection() {
  const getThesisIcon = (num: string) => {
    switch (num) {
      case '01':
        return <TrendingUp className="w-4 h-4 text-[#2457A7]" />;
      case '02':
        return <RefreshCw className="w-4 h-4 text-[#2457A7]" />;
      case '03':
        return <Handshake className="w-4 h-4 text-[#2457A7]" />;
      case '04':
        return <Compass className="w-4 h-4 text-[#2457A7]" />;
      case '05':
        return <Layers className="w-4 h-4 text-[#2457A7]" />;
      case '06':
        return <ShieldCheck className="w-4 h-4 text-[#2457A7]" />;
      default:
        return <TrendingUp className="w-4 h-4 text-[#2457A7]" />;
    }
  };

  return (
    <section id="investors" className="py-20 bg-[#F7F8FA] border-b border-[#E4E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Investment Thesis</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Infrastructure Asset Class</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            A Modular Approach to a Large-Scale Commercial Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            By turning transient perimeter boundaries into modular, reusable, and utility-connected commercial infrastructure, TRUST CODE SYSTEM addresses structural inefficiencies in temporary live event production.
          </p>
        </div>

        {/* 6 Thesis Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {INVESTOR_THESIS_POINTS.map((thesis) => (
            <div
              key={thesis.number}
              className="bg-white border border-[#E4E8EF] p-6 rounded-sm shadow-2xs hover:border-[#2457A7]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#D9A65A]">
                    Pillar {thesis.number}
                  </span>
                  <div className="p-1.5 rounded-2xs bg-[#F7F8FA] border border-[#E4E8EF]">
                    {getThesisIcon(thesis.number)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#14243A] mb-2 leading-snug">
                  {thesis.title}
                </h3>

                <p className="text-xs text-[#657184] leading-relaxed mb-4">
                  {thesis.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4E8EF]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#2457A7] mb-1">
                  Economic Rationale
                </div>
                <p className="text-[11px] text-[#14243A] leading-relaxed">
                  {thesis.commercialRationale}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Investor Qualification Note */}
        <div className="p-5 bg-white border border-[#E4E8EF] rounded-sm text-xs text-[#657184] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#B87216] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-[#14243A]">Important Investor Note: </span>
            This presentation is for preliminary strategic discussion. Investment decisions should be based on verified market demand, customer commitments, unit economics, asset utilization, capital requirements, operating margins, and execution capability. No guaranteed returns or financial performance are expressed or implied.
          </div>
        </div>
      </div>
    </section>
  );
}
