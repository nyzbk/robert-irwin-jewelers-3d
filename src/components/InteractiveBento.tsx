import React, { useState } from 'react';
import { Award, Compass, Sparkles, Sliders, CheckCircle2, ShieldCheck, Gem } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenBooking: () => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenBooking }) => {
  const [cut, setCut] = useState<'round' | 'oval' | 'emerald' | 'radiant'>('round');
  const [carat, setCarat] = useState<'1.5' | '2.5' | '3.75'>('2.5');
  const [metal, setMetal] = useState<'platinum' | 'yellow' | 'rose'>('platinum');

  return (
    <section id="gemological-capabilities" className="relative py-28 md:py-36 bg-[#090A0E] text-[#FAF8F6] overflow-hidden border-t border-[#E2A898]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E2A898]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#14151B]/90 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#E2A898] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E2A898]" />
              OPTICAL BRILLIANCE & GEMOLOGY / 03
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[40px] md:text-[56px] leading-[0.95] text-[#FAF8F6]">
              The 100-Facet Benchmark.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#A6A29E] max-w-md font-['Montserrat',sans-serif] leading-relaxed">
            Every diamond in our collection is precision-evaluated across strict optical symmetry tolerances to deliver maximum fire and scintillation.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Interactive Diamond Ring Simulator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#14151B]/80 border border-[#E2A898]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#E2A898]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#E2A898] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#E2A898]" />
                  CUSTOM ENGAGEMENT SUITE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E2A898]/20 text-[#E2A898] text-[10px] font-mono font-bold">
                  GIA / IGI CERTIFIED
                </span>
              </div>

              <h3 className="font-['Cormorant_Garamond',serif] text-[24px] md:text-[30px] text-[#FAF8F6] mb-2">
                Configure your bespoke engagement ring.
              </h3>
              <p className="text-[13px] text-[#A6A29E] mb-6">
                Select your diamond cut, carat weight benchmark, and noble precious metal setting.
              </p>

              {/* Cut Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#A6A29E] block mb-2 uppercase">1. Diamond Cut:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['round', 'oval', 'emerald', 'radiant'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCut(c)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        cut === c
                          ? 'bg-[#E2A898] text-[#0C0D11] font-bold shadow-md shadow-[#E2A898]/20'
                          : 'bg-[#090A0E]/80 text-[#FAF8F6] border border-[#E2A898]/20 hover:border-[#E2A898]/50'
                      }`}
                    >
                      {c === 'round' ? '100-Facet Round' : c === 'oval' ? 'Oval Brilliant' : c === 'emerald' ? 'Emerald Step' : 'Radiant Cut'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Carat Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#A6A29E] block mb-2 uppercase">2. Carat Weight Tier:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['1.5', '2.5', '3.75'] as const).map((crt) => (
                    <button
                      key={crt}
                      onClick={() => setCarat(crt)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        carat === crt
                          ? 'bg-[#E2A898] text-[#0C0D11] font-bold shadow-md shadow-[#E2A898]/20'
                          : 'bg-[#090A0E]/80 text-[#FAF8F6] border border-[#E2A898]/20 hover:border-[#E2A898]/50'
                      }`}
                    >
                      {crt === '1.5' ? '1.50 CT • F/VS1' : crt === '2.5' ? '2.50 CT • E/VVS2' : '3.75 CT • D/IF'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metal Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#A6A29E] block mb-2 uppercase">3. Precious Metal Setting:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['platinum', 'yellow', 'rose'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMetal(m)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        metal === m
                          ? 'bg-[#E2A898] text-[#0C0D11] font-bold shadow-md shadow-[#E2A898]/20'
                          : 'bg-[#090A0E]/80 text-[#FAF8F6] border border-[#E2A898]/20 hover:border-[#E2A898]/50'
                      }`}
                    >
                      {m === 'platinum' ? '950 Pure Platinum' : m === 'yellow' ? '18K Yellow Gold' : '18K Rose Gold'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#E2A898]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#E2A898]">
                PROFILE: {cut.toUpperCase()} • {carat} CT • {metal.toUpperCase()}
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-[#E2A898] text-[#0C0D11] font-mono text-[11px] font-bold uppercase hover:bg-[#ecc0b3] transition-colors"
              >
                Inquire With Specifications
              </button>
            </div>
          </div>

          {/* Card 2: 47+ Years Provenance */}
          <div className="rounded-2xl bg-[#14151B]/80 border border-[#E2A898]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#E2A898]" />
                MID-SOUTH PROVENANCE
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[54px] font-bold text-[#FAF8F6] leading-none mb-2">
                47+
              </div>
              <div className="text-[13px] text-[#E2A898] font-medium mb-3">
                Years of Continuous Family Trust
              </div>
              <p className="text-[13px] text-[#A6A29E] font-['Montserrat',sans-serif] leading-relaxed">
                Founded in 1977. Family-owned and led by President Mark Irwin and VP Operations Amber Dyson, preserving the Mid-South's highest benchmark in fine jewelry.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2A898]/15 flex items-center gap-2 text-[11px] font-mono text-[#A6A29E]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Memphis & Little Rock Heritage
            </div>
          </div>

          {/* Card 3: 5 Showroom Locations */}
          <div className="rounded-2xl bg-[#14151B]/80 border border-[#E2A898]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Compass className="w-4 h-4 text-[#E2A898]" />
                REGIONAL REACH
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[54px] font-bold text-[#FAF8F6] leading-none mb-2">
                5
              </div>
              <div className="text-[13px] text-[#E2A898] font-medium mb-3">
                Regional Luxury Showrooms
              </div>
              <p className="text-[13px] text-[#A6A29E] font-['Montserrat',sans-serif] leading-relaxed">
                Perkins Extended Flagship, Bartlett TN, Little Rock Cantrell Rd, North Little Rock McCain Mall, and Southaven MS.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2A898]/15 flex items-center gap-2 text-[11px] font-mono text-[#A6A29E]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              4.9/5 Rating (237+ Reviews)
            </div>
          </div>

          {/* Card 4: GIA & IGI Graded Dual Diamonds */}
          <div className="md:col-span-2 rounded-2xl bg-[#14151B]/80 border border-[#E2A898]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#E2A898]" />
                CERTIFICATION INTEGRITY
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[36px] md:text-[44px] text-[#FAF8F6] leading-tight mb-2">
                Zero Compromise. GIA & IGI Certified.
              </div>
              <p className="text-[14px] text-[#A6A29E] font-['Montserrat',sans-serif] leading-relaxed mb-6">
                Every natural diamond and premium lab-grown stone is independently verified, laser-inscribed on the girdle, and backed by our lifetime warranty and free inspection protocol.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E2A898]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FAF8F6]">100%</div>
                <div className="text-[11px] font-mono text-[#A6A29E]">Conflict-Free Natural</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FAF8F6]">Lifetime</div>
                <div className="text-[11px] font-mono text-[#A6A29E]">Diamond Upgrade</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FAF8F6]">Complimentary</div>
                <div className="text-[11px] font-mono text-[#A6A29E]">Cleanings & Sizing</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FAF8F6]">Master</div>
                <div className="text-[11px] font-mono text-[#A6A29E]">Bench Goldsmiths</div>
              </div>
            </div>
          </div>

          {/* Card 5: Direct Executive Leadership */}
          <div className="md:col-span-2 rounded-2xl bg-[#14151B]/80 border border-[#E2A898]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Gem className="w-4 h-4 text-[#E2A898]" />
                DIRECT EXECUTIVE CONCIERGE
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[36px] md:text-[44px] text-[#FAF8F6] leading-tight mb-2">
                Personal Attention to Every Commission.
              </div>
              <p className="text-[14px] text-[#A6A29E] font-['Montserrat',sans-serif] leading-relaxed mb-4">
                Direct leadership access for custom engagement design, estate liquidations, and investment-grade diamond acquisitions with Amber Dyson and Mark Irwin.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2A898]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#E2A898]">amber@rijewelers.com</span>
              <span className="text-[11px] font-mono text-[#A6A29E]">VP Operations Direct</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
