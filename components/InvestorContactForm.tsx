'use client';

import React, { useState, useEffect } from 'react';
import { InquiryType } from '@/types';
import { Send, CheckCircle2, AlertCircle, Loader2, Building, Mail, User, ShieldCheck } from 'lucide-react';

interface ContactFormProps {
  initialInquiryType?: string;
  initialMessage?: string;
}

export function InvestorContactForm({
  initialInquiryType = 'Investor',
  initialMessage = '',
}: ContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [prevType, setPrevType] = useState(initialInquiryType);
  const [inquiryType, setInquiryType] = useState<InquiryType>(
    (initialInquiryType as InquiryType) || 'Investor'
  );

  if (initialInquiryType !== prevType) {
    setPrevType(initialInquiryType);
    setInquiryType((initialInquiryType as InquiryType) || 'Investor');
  }

  const [prevMessage, setPrevMessage] = useState(initialMessage);
  const [message, setMessage] = useState(initialMessage || '');

  if (initialMessage !== prevMessage) {
    setPrevMessage(initialMessage);
    setMessage(initialMessage || '');
  }

  const [projectScale, setProjectScale] = useState('');
  const [consent, setConsent] = useState(false);

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ referenceId: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!company.trim()) {
      setErrorMessage('Please enter your company or organization name.');
      return;
    }
    if (!businessEmail.trim() || !businessEmail.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }
    if (!consent) {
      setErrorMessage('Please confirm your consent to be contacted regarding this inquiry.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          company,
          businessEmail,
          inquiryType,
          projectScale: projectScale || undefined,
          message,
          consent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message,
      });

      // Clear form
      setFullName('');
      setCompany('');
      setBusinessEmail('');
      setMessage('');
      setProjectScale('');
      setConsent(false);
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryOptions: InquiryType[] = [
    'Investor',
    'Event Organizer',
    'Strategic Partner',
    'Brand or Sponsor',
    'Commercial Operator',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#E4E8EF] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Confidential Inquiry</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#657184]">Direct Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            Let&apos;s Build More Value Into Every Inch.
          </h2>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            We welcome discussions with investors, event organizers, strategic partners, sponsors, and commercial operators interested in the future of modular event infrastructure.
          </p>
        </div>

        <div className="max-w-3xl bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm p-6 sm:p-10 shadow-xs">
          {successData ? (
            <div className="bg-white border border-[#1B7A43]/30 p-8 rounded-sm animate-in fade-in duration-200">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#1B7A43] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-[#14243A] mb-2">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-sm text-[#657184] leading-relaxed mb-4">
                    {successData.message}
                  </p>
                  <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs inline-block text-xs font-mono text-[#14243A] mb-6">
                    <span className="text-[#657184]">Inquiry Reference ID: </span>
                    <strong className="text-[#2457A7]">{successData.referenceId}</strong>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setSuccessData(null)}
                      className="px-5 py-2.5 text-xs font-semibold text-[#14243A] bg-[#F7F8FA] hover:bg-[#E4E8EF] border border-[#E4E8EF] rounded-2xs transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Inquiry Type Radio / Segmented selector */}
              <div>
                <label className="block text-xs font-bold text-[#14243A] uppercase tracking-wider mb-2.5">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {inquiryOptions.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-2xs border text-left transition-colors cursor-pointer ${
                        inquiryType === type
                          ? 'bg-[#14243A] text-white border-[#14243A] shadow-2xs'
                          : 'bg-white text-[#657184] border-[#E4E8EF] hover:border-[#D0D7E2] hover:text-[#14243A]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#14243A] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E4E8EF] focus:border-[#2457A7] focus:outline-hidden rounded-2xs text-sm text-[#14243A] placeholder:text-[#8E99A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-[#14243A] mb-1.5">
                    Company or Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Venues &amp; Live"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E4E8EF] focus:border-[#2457A7] focus:outline-hidden rounded-2xs text-sm text-[#14243A] placeholder:text-[#8E99A8] transition-colors"
                  />
                </div>
              </div>

              {/* Row: Email and Project Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="businessEmail" className="block text-xs font-bold text-[#14243A] mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="businessEmail"
                    type="email"
                    required
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    placeholder="e.g. mvance@apexvenues.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E4E8EF] focus:border-[#2457A7] focus:outline-hidden rounded-2xs text-sm text-[#14243A] placeholder:text-[#8E99A8] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="projectScale" className="block text-xs font-bold text-[#14243A] mb-1.5">
                    Estimated Project Scale or Investment Range <span className="text-[#8E99A8] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="projectScale"
                    value={projectScale}
                    onChange={(e) => setProjectScale(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E4E8EF] focus:border-[#2457A7] focus:outline-hidden rounded-2xs text-sm text-[#14243A] transition-colors cursor-pointer"
                  >
                    <option value="">Select scope or capital allocation...</option>
                    <option value="Single Event / Pilot Pilot ($500K - $1.5M)">Single Event / Pilot ($500K - $1.5M)</option>
                    <option value="Multi-Event Festival Tour ($2M - $5M)">Multi-Event Festival Tour ($2M - $5M)</option>
                    <option value="Enterprise Venue Portfolio ($5M - $20M+)">Enterprise Venue Portfolio ($5M - $20M+)</option>
                    <option value="Strategic Growth Equity Investment ($5M - $25M)">Strategic Growth Equity Investment ($5M - $25M)</option>
                    <option value="Commercial Tenant / Brand Activation Partnership">Commercial Tenant / Brand Activation Partnership</option>
                    <option value="General Exploration">General Exploration</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#14243A] mb-1.5">
                  Message &amp; Strategic Objectives <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your event footprint, venue location, investment criteria, or brand activation objectives..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E4E8EF] focus:border-[#2457A7] focus:outline-hidden rounded-2xs text-sm text-[#14243A] placeholder:text-[#8E99A8] transition-colors resize-y"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  id="consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-[#2457A7] border-[#E4E8EF] rounded-2xs focus:ring-[#2457A7] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#657184] leading-relaxed cursor-pointer">
                  I consent to TRUST CODE SYSTEM processing this confidential inquiry and contacting me regarding commercial deployments, strategic partnerships, or investment discussions.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-[#14243A] hover:bg-[#2457A7] disabled:bg-[#8E99A8] rounded-sm transition-all duration-150 shadow-xs cursor-pointer tracking-wider uppercase"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5 text-[#D9A65A]" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-[#8E99A8] pt-2 border-t border-[#E4E8EF]">
                All inquiries are treated strictly confidential. Submissions are transmitted securely and verified against corporate records.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
