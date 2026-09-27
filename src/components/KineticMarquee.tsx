import React from 'react';
import { Sparkles, Gem, Award, ShieldCheck, Compass } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED 1977 • MEMPHIS, TN', icon: Award },
    { text: '5 LUXURY SHOWROOMS (TN / AR / MS)', icon: Compass },
    { text: 'PROPRIETARY 100-FACET DIAMONDS', icon: Gem },
    { text: 'MASTER BENCH GOLDSMITH WORKSHOP', icon: ShieldCheck },
    { text: 'PERKINS EXTENDED FLAGSHIP ATELIER', icon: Sparkles },
    { text: 'NATURAL & CERTIFIED LAB-GROWN VAULT', icon: Gem },
    { text: '4.9-STAR RATED • 98% RECOMMENDED', icon: Award },
  ];

  return (
    <div className="relative py-8 bg-[#07070A] border-y border-[#E2A898]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#07070A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#07070A] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#E2A898]" />
                  <span className="font-['Cormorant_Garamond',serif] text-[20px] md:text-[24px] tracking-wider text-[#FAF8F6]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E2A898]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
