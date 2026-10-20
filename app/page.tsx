
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#14243A] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            TRUST CODE SYSTEM
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Choose a business division to explore
          </p>
        </div>

        {/* Business Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Trust Code System */}
          <Link
            href="/trust-code-system"
            className="group rounded-2xl border border-gray-200 p-8 md:p-10
            transition-all duration-300 hover:border-[#2457A7]
            hover:shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center
              rounded-xl bg-[#EDF3FC] text-2xl text-[#2457A7]">
              T
            </div>

            <h2 className="text-2xl font-bold">
              Trust Code System
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Discover our business solutions, modular systems, and
              investment opportunities.
            </p>

            <span className="mt-8 inline-block font-semibold text-[#2457A7]">
              Explore Trust Code System →
            </span>
          </Link>

          {/* Trust Code System Entertainments */}
          <Link
            href="/entertainments"
            className="group rounded-2xl border border-gray-200 p-8 md:p-10
            transition-all duration-300 hover:border-[#2457A7]
            hover:shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center
              rounded-xl bg-[#EDF3FC] text-2xl text-[#2457A7]">
              E
            </div>

            <h2 className="text-2xl font-bold">
              Trust Code System Entertainments
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore our entertainment division, event experiences,
              and related business opportunities.
            </p>

            <span className="mt-8 inline-block font-semibold text-[#2457A7]">
              Explore Entertainments →
            </span>
          </Link>

        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Trust Code System. All rights reserved.
        </p>

      </div>
    </main>
  );
}