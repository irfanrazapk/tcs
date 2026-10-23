'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { OpportunitySection } from '@/components/OpportunitySection';
import { ModularSystemSection } from '@/components/ModularSystemSection';
import { SolutionsGrid } from '@/components/SolutionsGrid';
import { BusinessModelSection } from '@/components/BusinessModelSection';
import { RevenueStreamsSection } from '@/components/RevenueStreamsSection';
import { RevenueCalculator } from '@/components/RevenueCalculator';
import { DeploymentScenarios } from '@/components/DeploymentScenarios';
import { VisionVideoSection } from '@/components/VisionVideoSection';
import { InvestorThesisSection } from '@/components/InvestorThesisSection';
import { GoToMarketTimeline } from '@/components/GoToMarketTimeline';
import { CapitalDeploymentSection } from '@/components/CapitalDeploymentSection';
import { InvestorContactForm } from '@/components/InvestorContactForm';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('Investor');
  const [inquiryPresetMessage, setInquiryPresetMessage] = useState<string>('');

  const handleInquirySelect = (type?: string, presetMessage?: string) => {
    if (type) {
      setSelectedInquiryType(type);
    }
    if (presetMessage) {
      setInquiryPresetMessage(presetMessage);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#14243A] selection:bg-[#EDF3FC] selection:text-[#2457A7]">
      {/* 1. Navigation */}
      <Navbar onOpenInquiry={handleInquirySelect} />

      <main id="main-content">
        {/* 2. Hero — Every Inch Matters */}
        <HeroSection />

        {/* 3. The Opportunity */}
        <OpportunitySection />

        {/* 4. Modular Event Perimeter System */}
        <ModularSystemSection />

        {/* 5. The Ecosystem — More Than Containers */}
        <SolutionsGrid />

        {/* 6. How the Business Model Works */}
        <BusinessModelSection />

        {/* 7. Revenue Streams */}
        {/* <RevenueStreamsSection /> */}

        {/* 8. The $200M–$500M Potential Gross Revenue Opportunity & Calculator */}
        <RevenueCalculator />

        {/* 9. Illustrative Deployment Scenarios */}
        <DeploymentScenarios />

        {/* 10. Embedded Vision Video */}
        {/* <VisionVideoSection /> */}

        {/* 11. Why Investors May Be Interested */}
        {/* <InvestorThesisSection /> */}

        {/* 12. Go-to-Market Strategy */}
        {/* <GoToMarketTimeline /> */}

        {/* 13. Capital Deployment & Investor Discussion */}
        {/* <CapitalDeploymentSection onSelectInquiryType={handleInquirySelect} /> */}

        {/* 14. Contact & Investor Inquiry */}
        <InvestorContactForm
          initialInquiryType={selectedInquiryType}
          initialMessage={inquiryPresetMessage}
        />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
