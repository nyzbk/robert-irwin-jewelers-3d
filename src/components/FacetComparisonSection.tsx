import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Eye } from 'lucide-react';

interface ComparisonProps {
  onOpenBooking: () => void;
}

export const FacetComparisonSection: React.FC<ComparisonProps> = ({ onOpenBooking }) => {
  const [selectedCut, setSelectedCut] = useState<'58' | '100'>('100');

  return (
    <section id="optical-lab" className="relative py-24 bg-emerald-900 border-t border-b border-gold-mid/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-950 border border-gold-mid/30 text-gold-mid font-sans text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Optical Science of Brilliance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Standard 58 Facets vs. The 100 Facet Diamond.
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
            In 1919, Marcel Tolkowsky published the mathematical foundation for the 58-facet diamond. In 2012, Robert Irwin Jewelers perfected it with 42 additional precision-cut facets, unlocking previously impossible light reflection.
          </p>
        </div>

        {/* Interactive Comparison Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-emerald-950 p-1.5 border border-gold-mid/30 inline-flex rounded-sm">
            <button
              onClick={() => setSelectedCut('58')}
              className={`px-6 py-2.5 text-xs font-sans uppercase tracking-widest transition-all ${
                selectedCut === '58'
                  ? 'bg-emerald-900 text-white font-bold border border-gold-mid/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard Cut (58 Facets)
            </button>
            <button
              onClick={() => setSelectedCut('100')}
              className={`px-6 py-2.5 text-xs font-sans uppercase tracking-widest transition-all ${
                selectedCut === '100'
                  ? 'bg-gradient-to-r from-emerald-800 to-emerald-700 text-white font-bold border border-gold-mid shadow-lg shadow-facet-100-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ★ The 100 Facet Diamond
            </button>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="bg-emerald-950/80 border border-gold-mid/25 p-6 sm:p-10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Dynamic Visual Simulation (5 cols) */}
          <div className="lg:col-span-5 relative aspect-square overflow-hidden bg-emerald-950 border border-gold-mid/20 flex flex-col items-center justify-center p-6 group">
            <img
              src={
                selectedCut === '100'
                  ? 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
                  : 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
              }
              alt="Diamond optical comparison"
              className={`w-full h-full object-contain transition-all duration-700 ${
                selectedCut === '100'
                  ? 'scale-105 filter drop-shadow-2xl'
                  : 'scale-95 filter drop-shadow-md opacity-75'
              }`}
            />

            <div className="absolute top-4 left-4 bg-emerald-950/90 border border-gold-mid/40 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold-mid">
              {selectedCut === '100' ? 'Patented 100-Facet Cut' : 'Traditional 58-Facet Cut'}
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-emerald-950/90 border border-gold-mid/20 p-3 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Optical Light Dispersion
              </span>
              <span className="text-sm font-serif font-bold text-white">
                {selectedCut === '100' ? '+38% Measured Scintillation Fire' : 'Standard Baseline Reflection'}
              </span>
            </div>
          </div>

          {/* Right: Technical Breakdown & Benefits (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-400">
                Gemological Engineering
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedCut === '100'
                  ? '100 Facets: Eliminating Optical Blindspots'
                  : '58 Facets: The Traditional Century-Old Standard'}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {selectedCut === '100'
                ? 'By adding 42 microscopic facets around the lower girdle and pavilion, the stone prevents light from leaking out of the bottom. Light is recirculated across multiple internal mirrors, creating dramatic rainbow fire even in low candlelight.'
                : 'Standard 58-facet brilliant cuts lose a portion of incoming light through the pavilion angles when viewed from certain tilts. While classic, traditional diamonds have noticeable dark extinction zones under dim illumination.'}
            </p>

            {/* Spec Comparison Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center font-mono">
              <div className="bg-emerald-900/60 p-3 border border-gold-mid/20">
                <span className="block text-[10px] text-slate-400 uppercase">Total Facets</span>
                <span className="text-lg font-serif font-bold text-gold-mid">
                  {selectedCut === '100' ? '100 Facets' : '58 Facets'}
                </span>
              </div>
              <div className="bg-emerald-900/60 p-3 border border-gold-mid/20">
                <span className="block text-[10px] text-slate-400 uppercase">Pavilion Mirrors</span>
                <span className="text-lg font-serif font-bold text-white">
                  {selectedCut === '100' ? '55 Facets' : '25 Facets'}
                </span>
              </div>
              <div className="bg-emerald-900/60 p-3 border border-gold-mid/20 col-span-2 sm:col-span-1">
                <span className="block text-[10px] text-slate-400 uppercase">Perceived Size</span>
                <span className="text-lg font-serif font-bold text-emerald-400">
                  {selectedCut === '100' ? '+15% Larger' : 'Standard'}
                </span>
              </div>
            </div>

            {/* Bullet Proof Points */}
            <div className="space-y-2 pt-2 border-t border-gold-mid/15 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Exclusively available in the Mid-South at Robert Irwin Jewelers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lifetime trade-up privilege at 100% of original purchase price</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Individually laser-inscribed with registered patent certification</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-gold-mid transition-all shadow-lg hover:shadow-facet-100-glow flex items-center justify-center gap-3"
              >
                <Eye className="w-4 h-4 text-gold-mid" />
                <span>Experience 100 Facets Under a Gemological Microscope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
