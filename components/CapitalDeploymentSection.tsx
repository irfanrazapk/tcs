'use client';

import React from 'react';
import { CAPITAL_DEPLOYMENT_AREAS } from '@/lib/data';
import { ArrowUpRight, FileSpreadsheet, ShieldCheck, Layers, Cpu, Wrench, Handshake, Truck } from 'lucide-react';

interface CapitalDeploymentProps {
  onSelectInquiryType?: (type: string, messagePreset?: string) => void;
}

export function CapitalDeploymentSection({ onSelectInquiryType }: CapitalDeploymentProps) {
  const handleCta = (type: string, preset: string) => {
    if (onSelectInquiryType) {
      onSelectInquiryType(type, preset);
    }
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAreaIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Wrench className="w-4 h-4 text-[#2457A7]" />;
      case 1:
        return <Layers className="w-4 h-4 text-[#2457A7]" />;
      case 2:
        return <ShieldCheck className="w-4 h-4 text-[#2457A7]" />;
      case 3:
        return <Truck className="w-4 h-4 text-[#2457A7]" />;
      case 4:
        return <Cpu className="w-4 h-4 text-[#2457A7]" />;
      case 5:
        return <Handshake className="w-4 h-4 text-[#2457A7]" />;
      default:
        return <Layers className="w-4 h-4 text-[#2457A7]" />;
    }
  };

  return (
    <section id="capital" className="py-20 bg-[#F7F8FA] border-b border-[#E4E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Capital Allocation</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Strategic Discussion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            Building the Infrastructure for the Next Generation of Live Events.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Potential growth capital and strategic funding will be deployed systematically across industrial engineering, physical asset inventory build-out, digital management systems, and regional deployment logistics.
          </p>
        </div>

        {/* 6 Capital Allocation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CAPITAL_DEPLOYMENT_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E8EF] p-6 rounded-sm shadow-2xs hover:border-[#2457A7]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="p-2 rounded-2xs bg-[#F7F8FA] border border-[#E4E8EF] w-fit mb-4">
                  {getAreaIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-[#14243A] mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-[#657184] leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E4E8EF] text-[10px] font-mono text-[#2457A7] uppercase tracking-wider">
                Capital Objective 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers & CTAs Box */}
        <div className="bg-white border border-[#E4E8EF] rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-6">
            <h4 className="text-base font-bold text-[#14243A] mb-2">
              Investor Partnership Framing &amp; Discussion
            </h4>
            <p className="text-xs sm:text-sm text-[#657184] leading-relaxed mb-4">
              Capital allocation, funding requirements, ownership terms, and investor returns will depend on the agreed business plan, financing structure, deployment strategy, and validated financial projections. We welcome confidential introductory meetings with institutional and private equity investors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => handleCta('Investor', 'I would like to schedule an introductory discussion regarding investment partnerships and capital allocation.')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#14243A] hover:bg-[#2457A7] rounded-sm transition-all shadow-xs cursor-pointer tracking-wide"
            >
              <span>Discuss an Investment Partnership</span>
              <ArrowUpRight className="w-4 h-4 text-[#D9A65A]" />
            </button>

            <button
              type="button"
              onClick={() => handleCta('Investor', 'Please send the TRUST CODE SYSTEM Executive Business Overview deck for preliminary review.')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#14243A] bg-[#F7F8FA] hover:bg-[#E4E8EF] border border-[#E4E8EF] rounded-sm transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#2457A7]" />
              <span>Request the Business Overview</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
