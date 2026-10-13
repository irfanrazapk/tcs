'use client';

import React, { useState } from 'react';
import { REVENUE_STREAMS } from '@/lib/data';
import { DollarSign, ChevronDown, ChevronUp, UserCheck, Gift, FileText, AlertTriangle } from 'lucide-react';

export function RevenueStreamsSection() {
  const [expandedId, setExpandedId] = useState<string | null>('deployment-fees');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="revenue-streams" className="py-20 bg-[#F7F8FA] border-b border-[#E4E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Commercial Architecture</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">7 Distinct Revenue Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            Multiple Revenue Streams. One Modular Platform.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            By integrating structural boundary security, turnkey retail space, and high-visibility media surfaces into a unified asset, the platform unlocks diversified revenue sources across the event ecosystem.
          </p>
        </div>

        {/* 7 Revenue Streams Accordion / Card Matrix */}
        <div className="flex flex-col gap-4 mb-12">
          {REVENUE_STREAMS.map((stream) => {
            const isOpen = expandedId === stream.id;
            return (
              <div
                key={stream.id}
                className="bg-white border border-[#E4E8EF] rounded-sm overflow-hidden transition-all duration-150 shadow-2xs"
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(stream.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-sm font-mono font-bold text-[#D9A65A] w-8">
                      {stream.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#14243A]">
                        {stream.title}
                      </h3>
                      <div className="text-xs text-[#657184] mt-0.5 flex flex-wrap items-center gap-2">
                        <span>Payer: <strong className="text-[#14243A] font-semibold">{stream.whoPays}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-semibold text-[#2457A7] bg-[#EDF3FC] px-3 py-1 rounded-2xs">
                      View Model
                    </span>
                    <div className="p-1 rounded-2xs text-[#657184]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#E4E8EF] bg-white animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                      {/* Who Pays & What They Receive */}
                      <div className="p-4 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#2457A7] uppercase tracking-wider mb-2">
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Who Pays</span>
                        </div>
                        <p className="text-xs text-[#14243A] font-semibold mb-3">
                          {stream.whoPays}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#2457A7] uppercase tracking-wider mb-1">
                          <Gift className="w-3.5 h-3.5" />
                          <span>What They Receive</span>
                        </div>
                        <p className="text-xs text-[#657184] leading-relaxed">
                          {stream.whatTheyReceive}
                        </p>
                      </div>

                      {/* Revenue Model */}
                      <div className="p-4 bg-[#EDF3FC]/50 border border-[#2457A7]/30 rounded-2xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#2457A7] uppercase tracking-wider mb-2">
                          <DollarSign className="w-3.5 h-3.5" />
                          <span>How Revenue Is Earned</span>
                        </div>
                        <p className="text-xs text-[#14243A] font-medium leading-relaxed">
                          {stream.revenueModel}
                        </p>
                      </div>

                      {/* Operational Requirements */}
                      <div className="p-4 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#657184] uppercase tracking-wider mb-2">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Operational &amp; Cost Factors</span>
                        </div>
                        <p className="text-xs text-[#657184] leading-relaxed">
                          {stream.operationalConsiderations}
                        </p>
                      </div>

                      {/* Risk & Contractual Integrity */}
                      <div className="p-4 bg-[#FAF4EB] border border-[#D9A65A]/40 rounded-2xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#B87216] uppercase tracking-wider mb-2">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Risk &amp; Variance Factors</span>
                        </div>
                        <p className="text-xs text-[#14243A] leading-relaxed">
                          {stream.riskFactor}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Commercial Integrity Banner */}
        <div className="p-5 bg-white border border-[#E4E8EF] rounded-sm text-xs text-[#657184]">
          <div className="flex items-center gap-2 text-[#14243A] font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#D9A65A]" />
            <span>Commercial Realization Standard</span>
          </div>
          <p className="leading-relaxed">
            Not all seven revenue streams are collected simultaneously in every project. Contractual allocation varies based on whether TRUST CODE SYSTEM acts as an infrastructure lessor, a turnkey concession operator, or a joint-venture commercial partner with the venue organizer.
          </p>
        </div>
      </div>
    </section>
  );
}
