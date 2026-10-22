
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { theme } from '@/src/config/theme';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#14243A] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <header className="mb-10 text-center sm:mb-14">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            TRUST CODE SYSTEM
          </h1>

          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Choose a business division to explore
          </p>
        </header>

        {/* Business Images */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">

          {/* Trust Code System */}
          <Link
            href="/trust-code-system"
            aria-label="Explore Trust Code System"
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2457A7]"
          >
            <div className="relative w-full">
              <Image
                src={theme.media.tcsthumb}
                alt="Trust Code System Entertainments"
                width={1200}
                height={800}
                sizes="(max-width: 639px) 100vw, 50vw"
                className="block h-auto w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-xl font-bold sm:text-2xl">
                Trust Code System
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Explore our business solutions, modular systems, and
                innovative opportunities.
              </p>

              <span className="mt-4 inline-block font-semibold text-[#2457A7]">
                Explore Trust Code System →
              </span>
            </div>
          </Link>

          {/* Trust Code System Entertainments */}
          <Link
            href="/entertainments"
            aria-label="Explore Trust Code System Entertainments"
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2457A7]"
          >
            <div className="relative w-full">
              <Image
                src={theme.media.tcsentertainmnt1}
                alt="Trust Code System Entertainments"
                width={1200}
                height={800}
                sizes="(max-width: 639px) 100vw, 50vw"
                className="block h-auto w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-xl font-bold sm:text-2xl">
                Trust Code System Entertainments
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Explore our entertainment division, event experiences,
                and related business opportunities.
              </p>

              <span className="mt-4 inline-block font-semibold text-[#2457A7]">
                Explore Entertainments →
              </span>
            </div>
          </Link>

        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-500 sm:mt-14">
          © {new Date().getFullYear()} Trust Code System. All rights reserved.
        </footer>

      </div>
    </main>
  );
}
