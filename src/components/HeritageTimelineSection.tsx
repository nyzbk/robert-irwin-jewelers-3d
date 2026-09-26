import React from 'react';
import { HERITAGE_MILESTONES } from '../data/rijData';
import { Award, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeritageProps {
  onOpenBooking: () => void;
}

export const HeritageTimelineSection: React.FC<HeritageProps> = ({ onOpenBooking }) => {
  return (
    <section id="heritage-timeline" className="relative py-24 bg-emerald-950 border-t border-gold-mid/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-900 border border-gold-mid/30 text-gold-mid font-sans text-xs tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Celebrating 80 Years of Mid-South Excellence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The Irwin Dynasty: 1946 — 2026.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            For eight decades, the Irwin family has remained family-owned, locally operated, and anchored right here in the Mid-South. Discover the heritage that earned a 98% customer recommendation rate across generations.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-gold-mid/20 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
          {HERITAGE_MILESTONES.map((milestone) => (
            <div key={milestone.year} className="relative group">
              {/* Year Pill Bubble */}
              <div className="sm:absolute sm:-left-36 sm:top-0 mb-2 sm:mb-0">
                <span className="inline-block px-3 py-1 bg-emerald-900 border border-gold-mid/40 text-gold-light font-mono text-xs font-bold tracking-wider">
                  {milestone.year}
                </span>
              </div>

              {/* Pin indicator on the line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-gold-mid border-2 border-emerald-950 group-hover:scale-125 transition-transform" />

              <div className="bg-emerald-900/40 border border-gold-mid/15 p-6 hover:border-gold-mid/50 transition-colors">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-light transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Design Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-900 border border-gold-mid/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>In-House Mid-South Goldsmithing</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white">
              Design a Custom Engagement Ring with Our Master Jeweler
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 font-sans max-w-2xl">
              From an initial napkin sketch to an exact 3D wax prototype, create your dream ring with certified 100-facet center stones and heirloom precious metals in our Memphis or Little Rock studios.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-gold-mid transition-all shadow-lg hover:shadow-facet-100-glow flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-gold-mid" />
            <span>Book Custom Design Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
