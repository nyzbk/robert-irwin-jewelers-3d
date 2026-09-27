import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface AtelierItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  benchmark: string;
  features: string[];
}

const ATELIER_ITEMS: AtelierItem[] = [
  {
    id: 'perkins-flagship',
    category: 'FLAGSHIP SALON',
    title: 'The Perkins Extended Salon',
    subtitle: 'Memphis premier luxury address for high jewelry & private viewing.',
    description: 'Designed as a private diamond enclave featuring dedicated consultation salons, high-definition optical scopes, and private bridal design suites.',
    benchmark: 'MEMPHIS FLAGSHIP',
    features: ['Private Bridal Suites', 'Optical Scope Analysis', 'White-Glove Diamond Concierge'],
  },
  {
    id: '100-facet-vault',
    category: 'PROPRIETARY CUT',
    title: 'The Signature 100-Facet Vault',
    subtitle: 'Engineered for 40% greater optical light dispersion and fire.',
    description: 'While traditional round brilliant diamonds feature 57 facets, our master-cut 100-Facet diamond features 43 additional precision-angled facets for breathtaking scintillation.',
    benchmark: 'PATENTED BRILLIANCE',
    features: ['100 Optical Facets', 'Maximum Light Return', 'Laser-Inscribed Certification'],
  },
  {
    id: 'custom-design-atelier',
    category: 'BESPOKE BRIDAL',
    title: 'The 3D Custom Design Atelier',
    subtitle: 'From hand-drawn sketch to precision wax model to heirloom platinum.',
    description: 'Our in-house master jewelers transform your concept through bespoke artisan design modeling, high-resolution wax prototypes you can touch, and hand-cast precious metals.',
    benchmark: '100% IN-HOUSE',
    features: ['Custom Wax Model Try-Ons', 'Try-On Wax Resin Models', 'Hand-Cast 950 Platinum & 18K Gold'],
  },
  {
    id: 'natural-lab-grown',
    category: 'DUAL DIAMOND VAULT',
    title: 'Natural & Lab-Grown Diamond Vault',
    subtitle: 'Independent GIA & IGI grading with complete provenance transparency.',
    description: 'Whether choosing an ethically mined natural diamond or an optically identical lab-grown diamond, every stone is scrutinized for ideal cut symmetry and certified authenticity.',
    benchmark: 'GIA & IGI GRADED',
    features: ['Conflict-Free Natural Vault', 'Certified Lab-Grown Selection', 'Zero Middlemen Markup'],
  },
  {
    id: 'goldsmith-restoration',
    category: 'MASTER CRAFT',
    title: 'Master Goldsmith & Laser Workshop',
    subtitle: 'Over four decades of precision bench repair and heirloom restoration.',
    description: 'State-of-the-art laser welding microscopes, precision ring resizing, prong retipping, and historical estate restoration performed directly on-site in Memphis.',
    benchmark: 'ON-SITE BENCH',
    features: ['Microscopic Laser Welding', 'Vintage Estate Restoration', 'Same-Day Diamond Setting'],
  },
];

interface HorizontalWorksProps {
  onOpenBooking: () => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenBooking }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#07070A] text-[#FAF8F6]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#E2A898] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E2A898]" />
              THE ATELIER PORTFOLIO / 02
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[36px] md:text-[56px] leading-[0.95] text-[#FAF8F6]">
              Private Vaults & Master Ateliers.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#A6A29E] max-w-md font-['Montserrat',sans-serif] leading-relaxed">
            Pan across our five specialized divisions, from the Perkins Extended diamond salon to our master goldsmith restoration laboratories.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {ATELIER_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#14151B] to-[#0D0E12] border border-[#E2A898]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#E2A898]/60 hover:shadow-[#E2A898]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#E2A898]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#E2A898] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {item.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#E2A898]/15 text-[#E2A898] text-[11px] font-mono font-medium">
                      {item.benchmark}
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[34px] leading-tight text-[#FAF8F6] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#E2A898] font-medium mb-4 italic">
                    "{item.subtitle}"
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#A6A29E] leading-relaxed mb-6 font-['Montserrat',sans-serif]">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0A0A0D] border border-[#E2A898]/20 text-[11px] font-mono text-[#FAF8F6]/80"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-xl bg-[#E2A898]/15 border border-[#E2A898]/40 text-[#E2A898] hover:bg-[#E2A898] hover:text-[#0C0D11] text-[13px] font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#E2A898]"
                  >
                    <span>Reserve Atelier Viewing</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#14151B] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#E2A898]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#A6A29E] mt-2">
            <span>SALON 01: PERKINS FLAGSHIP</span>
            <span>ATELIER 05: MASTER GOLDSMITH WORKSHOP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
