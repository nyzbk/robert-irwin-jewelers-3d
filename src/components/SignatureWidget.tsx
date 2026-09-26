import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [metal, setMetal] = useState<'platinum' | 'rose-gold' | 'yellow-gold'>('platinum');
  const [setting, setSetting] = useState<'solitaire' | 'halo' | 'pave'>('pave');

  return (
    <section id="bridal-architect" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0C0D11] text-[#FAF8F6] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-['Urbanist'] uppercase tracking-[0.25em] text-[#E2A898] block mb-3 font-semibold">
            Memphis’ Premier Diamond House · 5 Showrooms
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Prata'] font-normal text-white tracking-tight">
            100-Facet Custom Bridal Ring Architect
          </h2>
          <p className="mt-4 text-[#9496A1] text-sm sm:text-base max-w-2xl mx-auto font-['Urbanist'] font-light">
            Exclusive to Robert Irwin Jewelers. 42 additional light-gathering facets engineered to eliminate dark spots and multiply scintillation.
          </p>
        </div>

        <div className="bg-[#171821] rounded-2xl p-6 sm:p-12 border border-[#E2A898]/25 shadow-2xl">
          <div className="space-y-8">
            {/* Precious Metal Selector */}
            <div>
              <label className="block text-xs font-['Urbanist'] uppercase tracking-wider text-[#E2A898] mb-3 font-semibold">
                1. Precious Metal Band
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'platinum', label: 'Solid Platinum 950' },
                  { id: 'rose-gold', label: '18k Champagne Rose Gold' },
                  { id: 'yellow-gold', label: '18k Rich Royal Yellow Gold' }
                ].map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMetal(m.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Urbanist'] font-semibold transition-all text-center ${
                      metal === m.id
                        ? 'bg-[#E2A898] text-[#0C0D11] shadow-lg'
                        : 'bg-[#0C0D11] text-[#9496A1] border border-white/5 hover:border-[#E2A898]/40'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Setting Style */}
            <div>
              <label className="block text-xs font-['Urbanist'] uppercase tracking-wider text-[#E2A898] mb-3 font-semibold">
                2. Custom Setting Silhouette
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'solitaire', label: 'Minimalist High Solitaire' },
                  { id: 'halo', label: 'Hidden Micro-Halo Crown' },
                  { id: 'pave', label: 'French Pavé Scalloped Band' }
                ].map(st => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSetting(st.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Urbanist'] font-semibold transition-all text-center ${
                      setting === st.id
                        ? 'bg-[#E2A898] text-[#0C0D11] shadow-lg'
                        : 'bg-[#0C0D11] text-[#9496A1] border border-white/5 hover:border-[#E2A898]/40'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Atelier Consultation Card */}
            <div className="bg-[#0C0D11] p-6 rounded-xl border border-[#E2A898]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-['Urbanist'] uppercase tracking-widest text-[#E2A898] block mb-1">
                  Exclusive Mid-South Atelier
                </span>
                <h4 className="text-xl font-['Prata'] text-white">Custom 100-Facet Bridal Ring Package</h4>
                <p className="text-xs text-[#9496A1] font-['Urbanist'] mt-1">Includes 3D Wax Mold Preview, Master Goldsmith Bench Fitting, and Lifetime Free Sizing.</p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#E2A898] text-[#0C0D11] font-['Urbanist'] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-rose-200 transition-all btn-spring text-center flex items-center justify-center gap-2"
              >
                <span>Book Master Jeweler Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
