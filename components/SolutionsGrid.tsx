'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SOLUTIONS_ECOSYSTEM } from '@/lib/data';
import { SolutionItem } from '@/types';
import { ArrowUpRight, Check, X, Building, DollarSign, ShieldAlert } from 'lucide-react';

export function SolutionsGrid() {
  const [activeModalItem, setActiveModalItem] = useState<SolutionItem | null>(null);

  return (
    <section id="solutions" className="py-20 bg-[#F7F8FA] border-b border-[#E4E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Modular Ecosystem</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Multi-Category Commercial Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            A New Layer of Infrastructure for Live Events.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            More than standalone shipping containers, TRUST CODE SYSTEM is a unified operational ecosystem. Explore the primary applications designed to transform dormant boundaries into activated commercial hubs.
          </p>
        </div>

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SOLUTIONS_ECOSYSTEM.map((sol) => (
            <div
              key={sol.id}
              className="group bg-white border border-[#E4E8EF] rounded-sm overflow-hidden shadow-2xs hover:shadow-md hover:border-[#2457A7]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F2F5F9]">
                  <Image
                    src={sol.image}
                    alt={sol.headline}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14243A]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#14243A] rounded-2xs">
                    {sol.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-bold text-[#14243A] group-hover:text-[#2457A7] transition-colors leading-snug mb-2">
                    {sol.headline}
                  </h3>
                  <p className="text-xs text-[#657184] leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2457A7] mb-1">
                      Commercial Opportunity
                    </div>
                    <div className="text-xs text-[#14243A] font-medium leading-relaxed">
                      {sol.commercialOpportunity}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(sol)}
                  className="w-full flex items-center justify-between py-2 px-3 text-xs font-semibold text-[#14243A] hover:text-[#2457A7] bg-[#F7F8FA] hover:bg-[#EDF3FC] border border-[#E4E8EF] rounded-2xs transition-colors cursor-pointer"
                >
                  <span>View Specifications &amp; Utility Hookups</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2457A7]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer banner */}
        <div className="p-4 bg-white border border-[#E4E8EF] rounded-sm text-xs text-[#657184] flex items-start gap-3">
          <span className="font-bold text-[#14243A] shrink-0">Application Notice:</span>
          <span>
            The six categories above represent prospective modular configurations and commercial opportunities. Actual unit availability, utility requirements, and commercial configurations are evaluated on a per-event basis subject to venue specifications and municipal code compliance.
          </span>
        </div>
      </div>

      {/* Modal Dialog for Expanded Solution Inspection */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14243A]/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-sm border border-[#E4E8EF] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-[#E4E8EF]">
              <div>
                <span className="text-[11px] font-bold text-[#2457A7] uppercase tracking-wider">
                  {activeModalItem.title}
                </span>
                <h3 className="text-xl font-bold text-[#14243A] mt-0.5">
                  {activeModalItem.headline}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-[#657184] hover:text-[#14243A] rounded-2xs cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-16/9 w-full rounded-2xs overflow-hidden mb-6 border border-[#E4E8EF]">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.headline}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 650px"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-[#657184] leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <div className="mb-6">
              <div className="text-xs font-bold text-[#14243A] uppercase tracking-wider mb-3">
                Key Module Features &amp; Infrastructure:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalItem.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs text-xs text-[#14243A]"
                  >
                    <Check className="w-4 h-4 text-[#2457A7] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#FAF4EB] border border-[#D9A65A]/40 rounded-2xs mb-6 text-xs text-[#14243A]">
              <div className="font-bold text-[#B87216] uppercase tracking-wider mb-1">
                Commercial Revenue Model
              </div>
              <div>{activeModalItem.commercialOpportunity}</div>
            </div>

            <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs text-xs text-[#657184]">
              <span className="font-semibold text-[#14243A]">Operational &amp; Regulatory Pre-requisites: </span>
              {activeModalItem.operationalRequirements}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E4E8EF] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#14243A] hover:bg-[#2457A7] rounded-2xs transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
