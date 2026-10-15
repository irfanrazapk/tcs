'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { theme } from '@/src/config/theme';
import { Menu, X, ArrowUpRight, Grid } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: (type?: string) => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The System', href: '#the-system' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Business Model', href: '#business-model' },
    { label: 'Revenue Potential', href: '#revenue-potential' },
    { label: 'Investors', href: '#investors' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenInquiry) {
      onOpenInquiry('Investor');
    }
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E4E8EF]'
          : 'bg-white border-b border-[#E4E8EF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (1 single text element + minimal architectural mark) */}
          <a
            href="#top"
            onClick={handleBrandClick}
            className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="TRUST CODE SYSTEM Home"
          >
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <Image
                src={theme.media.logo}
                alt="TCSweREAL Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
                priority
              />
            </div>
            <span className="font-bold tracking-tight text-lg sm:text-xl text-[#14243A]">
              {theme.brand.name}
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#657184]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#2457A7] transition-colors whitespace-nowrap shrink-0 relative py-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14243A] hover:bg-[#2457A7] rounded-sm transition-all duration-150 shadow-xs whitespace-nowrap shrink-0 tracking-wide cursor-pointer"
            >
              <span>Explore Investment Opportunity</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9A65A]" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#14243A] hover:text-[#2457A7] focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E4E8EF] bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#14243A] hover:bg-[#F7F8FA] hover:text-[#2457A7] rounded-sm transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E4E8EF]">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-[#14243A] hover:bg-[#2457A7] rounded-sm transition-colors shadow-xs cursor-pointer"
              >
                <span>Explore Investment Opportunity</span>
                <ArrowUpRight className="w-4 h-4 text-[#D9A65A]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
