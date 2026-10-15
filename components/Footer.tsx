'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from '@/src/config/theme';
import { LegalModal } from './LegalModal';
import { Grid, ArrowUp } from 'lucide-react';

export function Footer() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-white border-t border-[#E4E8EF] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E4E8EF]">
            {/* Col 1-2: Brand lockup and statement */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 text-slate-900 mb-4">
                <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                  <Image
                    src={theme.media.logo}
                    alt="TCSweREAL Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
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
                  <a
                    href="#opportunity"
                    onClick={(e) => handleLinkClick(e, '#opportunity')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    The Opportunity
                  </a>
                </li>
                <li>
                  <a
                    href="#the-system"
                    onClick={(e) => handleLinkClick(e, '#the-system')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    Modular Pods &amp; Panels
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    onClick={(e) => handleLinkClick(e, '#solutions')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    Commercial Ecosystem
                  </a>
                </li>
                <li>
                  <a
                    href="#scenarios"
                    onClick={(e) => handleLinkClick(e, '#scenarios')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
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
                  <a
                    href="#business-model"
                    onClick={(e) => handleLinkClick(e, '#business-model')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    4-Step Methodology
                  </a>
                </li>
                <li>
                  <a
                    href="#revenue-streams"
                    onClick={(e) => handleLinkClick(e, '#revenue-streams')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    7 Revenue Streams
                  </a>
                </li>
                <li>
                  <a
                    href="#revenue-potential"
                    onClick={(e) => handleLinkClick(e, '#revenue-potential')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    $200M–$500M Opportunity
                  </a>
                </li>
                <li>
                  <a
                    href="#calculator"
                    onClick={(e) => handleLinkClick(e, '#calculator')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    Revenue Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#gtm"
                    onClick={(e) => handleLinkClick(e, '#gtm')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
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
                  <a
                    href="#investors"
                    onClick={(e) => handleLinkClick(e, '#investors')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    Investment Thesis
                  </a>
                </li>
                <li>
                  <a
                    href="#capital"
                    onClick={(e) => handleLinkClick(e, '#capital')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    Capital Deployment
                  </a>
                </li>
                <li>
                  <a
                    href="#vision-video"
                    onClick={(e) => handleLinkClick(e, '#vision-video')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
                    Vision Presentation
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, '#contact')}
                    className="hover:text-[#2457A7] transition-colors cursor-pointer"
                  >
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
