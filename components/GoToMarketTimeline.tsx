'use client';

import React from 'react';
import { GTM_PHASES } from '@/lib/data';
import { CheckCircle2, Milestone, ArrowRight } from 'lucide-react';

export function GoToMarketTimeline() {
  return (
    <section id="gtm" className="py-20 bg-white border-b border-[#E4E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Execution Roadmap</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">4-Phase Staged Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            A Practical Path From Concept to Scalable Deployment.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Our commercial strategy de-risks capital commitment through disciplined staged milestones—advancing from verified market demand and field pilots to scaled regional inventory hubs.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {GTM_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="bg-[#F7F8FA] border border-[#E4E8EF] p-6 rounded-sm flex flex-col justify-between shadow-2xs relative"
            >
              <div>
                {/* Phase Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#2457A7] uppercase tracking-wider">
                    {phase.phase}
                  </span>
                  <span className="text-[10px] font-bold text-[#D9A65A] uppercase tracking-widest font-mono">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#14243A] mb-2 leading-snug">
                  {phase.title}
                </h3>

                <p className="text-xs text-[#657184] leading-relaxed mb-6">
                  {phase.objective}
                </p>

                {/* Milestone Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#14243A]">
                    Key Activities:
                  </div>
                  {phase.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-[#657184]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2457A7] shrink-0 mt-0.5" />
                      <span className="leading-tight">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Deliverable Gate */}
              <div className="pt-4 border-t border-[#E4E8EF]">
                <div className="text-[10px] uppercase font-bold text-[#2457A7] tracking-wider mb-1">
                  Stage Gate Deliverable
                </div>
                <div className="text-xs font-bold text-[#14243A]">
                  {phase.keyDeliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
