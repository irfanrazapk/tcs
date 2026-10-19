'use client';

import React, { useState, useMemo } from 'react';
import { theme } from '@/src/config/theme';
import { Calculator, RefreshCw, AlertCircle, TrendingUp, DollarSign, Layers, Calendar, BarChart3, HelpCircle } from 'lucide-react';

export function RevenueCalculator() {
  // Slider states with realistic defaults
  const [eventsPerYear, setEventsPerYear] = useState<number>(30);
  const [unitsPerEvent, setUnitsPerEvent] = useState<number>(40);
  const [avgRevenuePerUnit, setAvgRevenuePerUnit] = useState<number>(55000); // $55,000 per unit per event
  const [additionalAnnualRevenue, setAdditionalAnnualRevenue] = useState<number>(15000000); // $15M additional
  const [projectionHorizon, setProjectionHorizon] = useState<'annual' | 'multiyear'>('annual');

  // Format currency helper
  const formatCurrency = (val: number): string => {
    if (val >= 1000000000) {
      return `$${(val / 1000000000).toFixed(2)}B`;
    }
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(1)}M`;
    }
    return `$${val.toLocaleString()}`;
  };

  // Calculations
  const unitGeneratedAnnual = useMemo(() => {
    return eventsPerYear * unitsPerEvent * avgRevenuePerUnit;
  }, [eventsPerYear, unitsPerEvent, avgRevenuePerUnit]);

  const totalAnnualGrossOpportunity = useMemo(() => {
    return unitGeneratedAnnual + additionalAnnualRevenue;
  }, [unitGeneratedAnnual, additionalAnnualRevenue]);

  // Multi-Year Program Scenarios (Illustrative Ramp)
  const multiYearProjections = useMemo(() => {
    // Year 1: Pilot & Initial Hub (approx 20% of current setting)
    const y1Events = Math.max(4, Math.round(eventsPerYear * 0.25));
    const y1Units = Math.max(12, Math.round(unitsPerEvent * 0.4));
    const y1Gross = y1Events * y1Units * (avgRevenuePerUnit * 0.85) + additionalAnnualRevenue * 0.2;

    // Year 3: Regional Cluster Expansion (approx 65% of setting)
    const y3Events = Math.round(eventsPerYear * 0.65);
    const y3Units = Math.round(unitsPerEvent * 0.75);
    const y3Gross = y3Events * y3Units * (avgRevenuePerUnit * 0.95) + additionalAnnualRevenue * 0.6;

    // Year 5: Multi-Region Scaled Program (Full model scale)
    const y5Gross = totalAnnualGrossOpportunity;

    return {
      year1: { events: y1Events, units: y1Units, gross: y1Gross },
      year3: { events: y3Events, units: y3Units, gross: y3Gross },
      year5: { events: eventsPerYear, units: unitsPerEvent, gross: y5Gross },
    };
  }, [eventsPerYear, unitsPerEvent, avgRevenuePerUnit, additionalAnnualRevenue, totalAnnualGrossOpportunity]);

  // Presets
  const applyPreset = (preset: 'pilot' | 'base' | 'scaled') => {
    if (preset === 'pilot') {
      setEventsPerYear(12);
      setUnitsPerEvent(20);
      setAvgRevenuePerUnit(35000);
      setAdditionalAnnualRevenue(4000000);
    } else if (preset === 'base') {
      setEventsPerYear(30);
      setUnitsPerEvent(40);
      setAvgRevenuePerUnit(55000);
      setAdditionalAnnualRevenue(15000000);
    } else if (preset === 'scaled') {
      setEventsPerYear(65);
      setUnitsPerEvent(60);
      setAvgRevenuePerUnit(70000);
      setAdditionalAnnualRevenue(35000000);
    }
  };

  return (
    <section id="revenue-potential" className="py-20 bg-white border-b border-[#E4E8EF] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Headline & Investor Opportunity Statement */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2457A7] uppercase tracking-wider mb-2">
            <span>Financial Modeling &amp; Sizing</span>
            <span aria-hidden="true" className="text-[#D0D7E2]">·</span>
            <span className="text-[#D9A65A]">Illustrative Model</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight leading-tight mb-4 text-balance">
            A Significant Revenue Opportunity at Scale.
          </h2>

          {/* Stated Potential Banner */}
          <div className="inline-block p-4 sm:p-5 bg-[#EDF3FC] border border-[#2457A7]/30 rounded-sm mb-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14243A] tracking-tight tabular-nums">
              $200M–$500M Potential Gross Revenue Opportunity
            </div>
            <p className="text-xs sm:text-sm text-[#2457A7] font-medium mt-1">
              {theme.brand.tagline} {theme.brand.subMessage}
            </p>
          </div>

          <p className="text-base text-[#657184] leading-relaxed mb-4">
            TRUST CODE SYSTEM is exploring the potential to unlock substantial gross revenue across large-scale event deployments by combining modular infrastructure, commercial space, sponsorship, media, rentals, and strategic operating partnerships.
          </p>

          {/* Primary Mandatory Investor Qualification */}
          <div className="p-4 bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm text-xs text-[#657184] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#B87216] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold text-[#14243A]">Important Qualification: </span>
              This figure represents a preliminary potential gross revenue opportunity, not verified revenue, company valuation, profit, or a guaranteed financial forecast. Actual results would depend on the number and scale of events, deployment capacity, pricing, utilization, commercial agreements, operating costs, and market demand.
            </div>
          </div>
        </div>

        {/* Interactive Calculator Section */}
        {/* <div id="calculator" className="bg-[#F7F8FA] border border-[#E4E8EF] rounded-sm p-6 sm:p-8 shadow-xs scroll-mt-20 lg:scroll-mt-24"> */}
          {/* Controls Bar */}
          {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#E4E8EF] gap-4"> */}
            {/* <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#2457A7]" />
                <h3 className="text-lg font-bold text-[#14243A]">
                  Interactive Illustrative Revenue Calculator
                </h3>
              </div>
              <p className="text-xs text-[#657184] mt-0.5">
                Adjust key operating assumptions to model illustrative gross revenue potential.
              </p>
            </div> */}

            {/* Presets */}
            {/* <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-[#657184] uppercase tracking-wide">
                Presets:
              </span>
              <button
                type="button"
                onClick={() => applyPreset('pilot')}
                className="px-2.5 py-1 text-xs font-medium bg-white hover:bg-[#EDF3FC] text-[#14243A] border border-[#E4E8EF] rounded-2xs transition-colors cursor-pointer"
              >
                Pilot Year
              </button>
              <button
                type="button"
                onClick={() => applyPreset('base')}
                className="px-2.5 py-1 text-xs font-medium bg-white hover:bg-[#EDF3FC] text-[#14243A] border border-[#E4E8EF] rounded-2xs transition-colors cursor-pointer"
              >
                Base Case
              </button>
              <button
                type="button"
                onClick={() => applyPreset('scaled')}
                className="px-2.5 py-1 text-xs font-semibold bg-[#14243A] text-white rounded-2xs transition-colors cursor-pointer shadow-2xs"
              >
                Scaled Fleet Target
              </button>
            </div> */}
          {/* </div> */}

          {/* Calculator Grid */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"> */}
            {/* Left Column: Sliders & Inputs (7 Cols) */}
            {/* <div className="lg:col-span-7 flex flex-col gap-6"> */}
              {/* Input 1: Number of events per year */}
              {/* <div className="p-4 bg-white border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#14243A] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2457A7]" />
                    <span>Number of Events per Year</span>
                  </label>
                  <span className="text-sm font-bold font-mono text-[#14243A] tabular-nums bg-[#F7F8FA] px-2 py-0.5 border border-[#E4E8EF] rounded-2xs">
                    {eventsPerYear} events
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={eventsPerYear}
                  onChange={(e) => setEventsPerYear(Number(e.target.value))}
                  className="w-full accent-[#2457A7] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8E99A8] mt-1 font-mono">
                  <span>5 (Regional Pilot)</span>
                  <span>30 (Standard Season)</span>
                  <span>100 (Multi-Region Fleet)</span>
                </div>
              </div> */}

              {/* Input 2: Average monetizable units per event */}
              {/* <div className="p-4 bg-white border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#14243A] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#2457A7]" />
                    <span>Average Monetizable Units per Event</span>
                  </label>
                  <span className="text-sm font-bold font-mono text-[#14243A] tabular-nums bg-[#F7F8FA] px-2 py-0.5 border border-[#E4E8EF] rounded-2xs">
                    {unitsPerEvent} units
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={unitsPerEvent}
                  onChange={(e) => setUnitsPerEvent(Number(e.target.value))}
                  className="w-full accent-[#2457A7] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8E99A8] mt-1 font-mono">
                  <span>10 (Focused Pods)</span>
                  <span>40 (Perimeter Ring)</span>
                  <span>100 (Full 360° Grid)</span>
                </div>
              </div> */}

              {/* Input 3: Average gross revenue per unit per event */}
              {/* <div className="p-4 bg-white border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#14243A] flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#2457A7]" />
                    <span>Average Gross Revenue per Unit per Event</span>
                  </label>
                  <span className="text-sm font-bold font-mono text-[#14243A] tabular-nums bg-[#F7F8FA] px-2 py-0.5 border border-[#E4E8EF] rounded-2xs">
                    ${avgRevenuePerUnit.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="120000"
                  step="2500"
                  value={avgRevenuePerUnit}
                  onChange={(e) => setAvgRevenuePerUnit(Number(e.target.value))}
                  className="w-full accent-[#2457A7] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8E99A8] mt-1 font-mono">
                  <span>$15,000 (Basic Concession)</span>
                  <span>$55,000 (Blended Retail/F&amp;B)</span>
                  <span>$120,000 (VIP/Title Sponsor)</span>
                </div>
              </div> */}

              {/* Input 4: Additional annual gross revenue from deployment/sponsorship */}
              {/* <div className="p-4 bg-white border border-[#E4E8EF] rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#14243A] flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#2457A7]" />
                    <span>Additional Annual Revenue (Deployment Fees &amp; Sponsorship)</span>
                  </label>
                  <span className="text-sm font-bold font-mono text-[#14243A] tabular-nums bg-[#F7F8FA] px-2 py-0.5 border border-[#E4E8EF] rounded-2xs">
                    ${(additionalAnnualRevenue / 1000000).toFixed(1)}M
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="1000000"
                  value={additionalAnnualRevenue}
                  onChange={(e) => setAdditionalAnnualRevenue(Number(e.target.value))}
                  className="w-full accent-[#2457A7] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8E99A8] mt-1 font-mono">
                  <span>$0</span>
                  <span>$15M (Enterprise Retainers)</span>
                  <span>$50M (Scaled Media Network)</span>
                </div>
              </div> */}

            {/* </div> */}

            {/* Right Column: Calculated Output Card (5 Cols) */}
            {/* <div className="lg:col-span-5 bg-white border border-[#E4E8EF] p-6 rounded-sm shadow-xs flex flex-col justify-between"> */}
              {/* <div> */}
                {/* <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4E8EF]">
                  <span className="text-[11px] font-bold text-[#657184] uppercase tracking-wider">
                    Modeled Output
                  </span>
                  <div className="inline-flex p-0.5 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
                    <button
                      type="button"
                      onClick={() => setProjectionHorizon('annual')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-2xs transition-colors ${
                        projectionHorizon === 'annual'
                          ? 'bg-white text-[#14243A] shadow-2xs'
                          : 'text-[#657184]'
                      }`}
                    >
                      Single Year
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectionHorizon('multiyear')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-2xs transition-colors ${
                        projectionHorizon === 'multiyear'
                          ? 'bg-white text-[#14243A] shadow-2xs'
                          : 'text-[#657184]'
                      }`}
                    >
                      Multi-Year Ramp
                    </button>
                  </div>
                </div> */}

                {/* {projectionHorizon === 'annual' ? ( */}
                  {/* <div> */}
                    {/* <div className="text-xs font-semibold text-[#2457A7] uppercase tracking-wide">
                      Annual Gross Revenue Opportunity
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight tabular-nums mt-1 mb-2">
                      {formatCurrency(totalAnnualGrossOpportunity)}
                    </div>
                    <p className="text-[11px] text-[#657184] leading-relaxed mb-6">
                      Illustrative gross commercial potential across {eventsPerYear} events with {unitsPerEvent} units per event, before operating and capital deductions.
                    </p> */}

                    {/* Breakdown Math */}
                    {/* <div className="space-y-3 pt-4 border-t border-[#E4E8EF] text-xs">
                      <div className="flex justify-between items-center text-[#657184]">
                        <span>Unit Commercial Gross ({eventsPerYear} × {unitsPerEvent} @ ${avgRevenuePerUnit.toLocaleString()}):</span>
                        <span className="font-mono font-semibold text-[#14243A]">
                          {formatCurrency(unitGeneratedAnnual)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[#657184]">
                        <span>Additional Deployment &amp; Media Revenue:</span>
                        <span className="font-mono font-semibold text-[#14243A]">
                          {formatCurrency(additionalAnnualRevenue)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center font-bold text-[#14243A] pt-2 border-t border-[#E4E8EF]">
                        <span>Total Illustrative Gross Opportunity:</span>
                        <span className="font-mono text-[#2457A7]">
                          {formatCurrency(totalAnnualGrossOpportunity)}
                        </span>
                      </div>
                    </div> */}
                  {/* </div> */}
                {/* ) : ( */}
                  {/* <div> */}
                    {/* <div className="text-xs font-semibold text-[#2457A7] uppercase tracking-wide">
                      Multi-Year Fleet Deployment Ramp
                    </div>
                    <p className="text-[11px] text-[#657184] mb-4">
                      Illustrative growth trajectory across 5 years of modular asset expansion:
                    </p> */}

                    {/* <div className="space-y-3">
                      <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
                        <div className="flex justify-between text-xs font-bold text-[#14243A]">
                          <span>Year 1 (Pilot Hub):</span>
                          <span className="font-mono text-[#2457A7]">
                            {formatCurrency(multiYearProjections.year1.gross)}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#657184] mt-0.5">
                          {multiYearProjections.year1.events} events · {multiYearProjections.year1.units} units/event
                        </div>
                      </div>

                      <div className="p-3 bg-[#F7F8FA] border border-[#E4E8EF] rounded-2xs">
                        <div className="flex justify-between text-xs font-bold text-[#14243A]">
                          <span>Year 3 (Regional Expansion):</span>
                          <span className="font-mono text-[#2457A7]">
                            {formatCurrency(multiYearProjections.year3.gross)}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#657184] mt-0.5">
                          {multiYearProjections.year3.events} events · {multiYearProjections.year3.units} units/event
                        </div>
                      </div>

                      <div className="p-3 bg-[#EDF3FC] border border-[#2457A7]/30 rounded-2xs">
                        <div className="flex justify-between text-xs font-bold text-[#14243A]">
                          <span>Year 5 (Scaled Enterprise Target):</span>
                          <span className="font-mono text-[#2457A7]">
                            {formatCurrency(multiYearProjections.year5.gross)}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#657184] mt-0.5">
                          {eventsPerYear} events · {unitsPerEvent} units/event
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                {/* )} */}
              {/* </div> */}

              {/* Operating Cost Deductions Box */}
              {/* <div className="mt-6 pt-4 border-t border-[#E4E8EF] bg-[#F7F8FA] p-3 rounded-2xs text-[11px] text-[#657184]">
                <div className="font-semibold text-[#14243A] mb-1">
                  Operating Cost &amp; Net Realization Reminder:
                </div>
                <p className="leading-tight">
                  Gross revenue is before operating expenses, transport logistics, crane rigging, on-site labor, asset maintenance, insurance, partner revenue shares, and taxes. Detailed unit-level margin waterfall provided in investor discussions.
                </p>
              </div> */}


            {/* </div> */}



          {/* </div> */}


        {/* </div> */}


      </div>
    </section>
  );
}
