'use client';

import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14243A]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-sm border border-[#E4E8EF] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4E8EF]">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#2457A7]" />
            ) : (
              <FileText className="w-5 h-5 text-[#2457A7]" />
            )}
            <h3 className="text-lg font-bold text-[#14243A]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#657184] hover:text-[#14243A] rounded-2xs cursor-pointer"
            aria-label="Close legal notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-[#657184] leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Information Collection &amp; Confidentiality</strong><br />
                TRUST CODE SYSTEM collects only corporate contact information explicitly submitted via this website&apos;s inquiry and partnership forms. We do not engage in unauthorized third-party tracking, consumer profiling, or marketing broker dissemination.
              </p>
              <p>
                <strong>2. Use of Information</strong><br />
                Data submitted is utilized exclusively for evaluating business partnerships, investor outreach, commercial proposals, and venue site engineering assessments.
              </p>
              <p>
                <strong>3. Security Standards</strong><br />
                All transmissions are handled via industry-standard TLS encryption. Confidential executive inquiries are restricted to authorized strategic relations personnel.
              </p>
              <p>
                <strong>4. Rights &amp; Inquiries</strong><br />
                You may request verification, updating, or removal of your submitted organizational contact details at any time by contacting our strategic relations office.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Conceptual &amp; Preliminary Nature of Materials</strong><br />
                The contents of this website, including all architectural renderings, financial calculators, potential gross revenue ranges, and deployment concepts, are provided solely for preliminary informational and exploratory strategic discussion.
              </p>
              <p>
                <strong>2. No Financial or Investment Solicitation</strong><br />
                Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or financial instrument. Stated figures ($200M–$500M gross revenue opportunity) represent illustrative operational modeling at potential scale and are not verified company performance or guaranteed returns.
              </p>
              <p>
                <strong>3. Intellectual Property</strong><br />
                All proprietary product architecture, names, diagrams, modular specifications, and trademarks associated with TRUST CODE SYSTEM remain exclusive intellectual property.
              </p>
              <p>
                <strong>4. Engineering &amp; Regulatory Pre-requisites</strong><br />
                Physical modular deployments require independent structural engineering review, crowd-flow certification, and local municipal regulatory permitting per event.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4E8EF] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#14243A] hover:bg-[#2457A7] rounded-2xs transition-colors cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
}
