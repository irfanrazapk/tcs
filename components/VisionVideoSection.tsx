'use client';

import React from 'react';
import { theme } from '@/src/config/theme';
import { Play, ExternalLink, ShieldCheck } from 'lucide-react';

export function VisionVideoSection() {
  return (
    <section id="vision-video" className="py-20 bg-white border-b border-[#E4E8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Executive Presentation</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Concept Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            See the Vision Behind TRUST CODE SYSTEM.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Explore the concept and the opportunity to transform event perimeter infrastructure into a more flexible, commercially productive environment.
          </p>
        </div>

        {/* 16:9 Responsive Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-16/9 w-full rounded-sm overflow-hidden border border-[#E4E8EF] shadow-lg bg-[#14243A]">
            <iframe
              src={theme.media.visionVideoUrl}
              title="TRUST CODE SYSTEM - Modular Event Perimeter Vision Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Video Metadata & Fallback */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm text-xs text-[#657184]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2457A7]" />
              <span className="font-semibold text-[#14243A]">Overview Film: </span>
              <span>Modular Event Perimeter Concept &amp; Investor Overview</span>
            </div>

            <a
              href={theme.media.visionVideoExternal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#2457A7] hover:text-[#1B4589] transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
