'use client';

import React, { useState } from 'react';
import { theme } from '@/src/config/theme';
import { LegalModal } from './LegalModal';
import { Grid, ArrowUp, Shield } from 'lucide-react';

export function Footer() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-white border-t border-[#E4E8EF] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E4E8EF]">
            {/* Col 1-2: Brand lockup and statement */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 text-slate-900 mb-4">
                <div className="w-8 h-8 rounded-sm bg-[#14243A] text-white flex items-center justify-center font-bold text-xs tracking-widest shadow-xs">
                  <Grid className="w-4 h-4 text-[#D9A65A]" />
                </div>
                <span className="font-bold tracking-tight text-lg text-[#14243A]">
                  {theme.brand.name}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#2457A7] mb-2">
                {theme.brand.tagline} {theme.brand.positioning}
              </p>
              <p className="text-xs text-[#657184] leading-relaxed max-w-sm mb-6">
                Modular event perimeter infrastructure unlocking commercial space, sponsor activation, and multi-stream revenue across temporary venues and festivals.
              </p>
              <div className="text-[11px] font-mono text-[#8E99A8]">
                ARCHITECTURAL EVENT INFRASTRUCTURE
              </div>
            </div>

            {/* Col 3: Architecture & System */}
            <div>
              <div className="text-xs font-bold text-[#14243A] uppercase tracking-wider mb-3">
                The Platform
              </div>
              <ul className="space-y-2 text-xs text-[#657184]">
                <li>
                  <a href="#the-system" className="hover:text-[#2457A7] transition-colors">
                    Modular Pods &amp; Panels
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-[#2457A7] transition-colors">
                    Commercial Solutions
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-[#2457A7] transition-colors">
                    Retail &amp; Concessions
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-[#2457A7] transition-colors">
                    VIP &amp; Hospitality
                  </a>
                </li>
                <li>
                  <a href="#scenarios" className="hover:text-[#2457A7] transition-colors">
                    Deployment Scenarios
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Business & Model */}
            <div>
              <div className="text-xs font-bold text-[#14243A] uppercase tracking-wider mb-3">
                Business &amp; Model
              </div>
              <ul className="space-y-2 text-xs text-[#657184]">
                <li>
                  <a href="#business-model" className="hover:text-[#2457A7] transition-colors">
                    4-Step Methodology
                  </a>
                </li>
                <li>
                  <a href="#revenue-streams" className="hover:text-[#2457A7] transition-colors">
                    7 Revenue Streams
                  </a>
                </li>
                <li>
                  <a href="#revenue-potential" className="hover:text-[#2457A7] transition-colors">
                    $200M–$500M Opportunity
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-[#2457A7] transition-colors">
                    Revenue Calculator
                  </a>
                </li>
                <li>
                  <a href="#gtm" className="hover:text-[#2457A7] transition-colors">
                    Go-to-Market Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Investors & Inquiries */}
            <div>
              <div className="text-xs font-bold text-[#14243A] uppercase tracking-wider mb-3">
                Investors &amp; Contact
              </div>
              <ul className="space-y-2 text-xs text-[#657184]">
                <li>
                  <a href="#investors" className="hover:text-[#2457A7] transition-colors">
                    Investment Thesis
                  </a>
                </li>
                <li>
                  <a href="#capital" className="hover:text-[#2457A7] transition-colors">
                    Capital Deployment
                  </a>
                </li>
                <li>
                  <a href="#vision-video" className="hover:text-[#2457A7] transition-colors">
                    Vision Presentation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#2457A7] transition-colors">
                    Executive Inquiries
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setLegalType('privacy')}
                    className="hover:text-[#2457A7] transition-colors text-left cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalType('terms')}
                    className="hover:text-[#2457A7] transition-colors text-left cursor-pointer"
                  >
                    Terms of Use
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E99A8]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>&copy; {new Date().getFullYear()} {theme.brand.name}. All rights reserved.</span>
              <span aria-hidden="true">·</span>
              <span>Modular Event Perimeter Infrastructure</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14243A] hover:text-[#2457A7] transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Legal Modal */}
      <LegalModal
        isOpen={legalType !== null}
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </>
  );
}
