import React from 'react';
import { SHOWROOMS_DATA } from '../data/rijData';
import { Sparkles, Shield, Heart, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 border-t border-gold-mid/15 text-slate-300 font-sans text-xs">
      {/* Trust & Accreditations Banner */}
      <div className="border-b border-gold-mid/15 py-12 bg-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-gold-mid" />
              <h5 className="font-serif font-bold text-white text-sm">Patented 100-Facet Cut</h5>
              <p className="text-[11px] text-slate-400">Exclusive cut yielding +38% more light refraction than 58-facet stones.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Award className="w-6 h-6 text-emerald-400" />
              <h5 className="font-serif font-bold text-white text-sm">80 Years Since 1946</h5>
              <p className="text-[11px] text-slate-400">Three generations of family goldsmithing across the Mid-South region.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Heart className="w-6 h-6 text-gold-light" />
              <h5 className="font-serif font-bold text-white text-sm">98% Recommendation</h5>
              <p className="text-[11px] text-slate-400">Highest rated independent jeweler on Facebook with 4.9 stars.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Shield className="w-6 h-6 text-emerald-400" />
              <h5 className="font-serif font-bold text-white text-sm">100% Lifetime Trade-Up</h5>
              <p className="text-[11px] text-slate-400">Full 100% credit towards larger diamonds at any of our 5 salons.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Showrooms Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & History (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gold-mid/40 bg-emerald-900/60 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold-mid" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                ROBERT IRWIN JEWELERS
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Founded in 1946, Robert Irwin Jewelers has grown from a single workbench in Memphis into the Mid-South’s premier fine diamond destination. Home of the patented 100 Facet Diamond.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400">
              Perkins Flagship Direct:{' '}
              <a href="tel:9017673397" className="text-gold-mid hover:underline">
                (901) 767-3397
              </a>
            </div>
          </div>

          {/* Five Mid-South Showrooms Directory (8 cols) */}
          <div className="md:col-span-8 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-gold-mid">
              Five Showroom Locations (TN • AR • MS)
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHOWROOMS_DATA.map((showroom) => (
                <div key={showroom.id} className="p-3 bg-emerald-900/30 border border-gold-mid/15 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-semibold text-white block text-xs">
                      {showroom.name}
                    </span>
                    <span className="text-[9px] font-mono text-gold-mid bg-emerald-950 px-1.5 py-0.5 border border-gold-mid/20">
                      {showroom.state.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {showroom.address}
                  </p>
                  <a
                    href={`tel:${showroom.phone.replace(/[^0-9]/g, '')}`}
                    className="text-[11px] font-mono text-emerald-400 block pt-1 hover:underline"
                  >
                    {showroom.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-gold-mid/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Robert Irwin Jewelers. All rights reserved. Mid-South family owned since 1946.</p>
          <div className="flex items-center gap-6">
            <a href="#optical-lab" className="hover:text-slate-300">100 Facet Cut</a>
            <a href="#showrooms" className="hover:text-slate-300">5 Showrooms</a>
            <a href="#vault-collections" className="hover:text-slate-300">The Vault</a>
            <a href="#heritage-timeline" className="hover:text-slate-300">80 Years (1946)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
