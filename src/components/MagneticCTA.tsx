import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenBooking: () => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenBooking }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="vault-inquiry" className="relative py-28 md:py-40 bg-[#07070A] text-[#FAF8F6] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E2A898]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#E2A898] font-semibold mb-4">
            PRIVATE ATELIER ACCESS / 05
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[13vw] md:text-[8.5vw] leading-[0.88] tracking-tight text-[#FAF8F6]">
            TIMELESS BRILLIANCE.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#A6A29E] max-w-2xl mx-auto font-light leading-relaxed font-['Montserrat',sans-serif]">
            Reserve an exclusive private diamond viewing or bespoke bridal design consultation with our master jewelers at the Perkins Extended flagship or Little Rock showroom.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#E2A898] text-[#0C0D11] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#E2A898]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#ecc0b3]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Book Private Atelier Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#E2A898]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#0C0D11] border border-[#E2A898]/20">
            <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#E2A898]" />
              EXECUTIVE LEADERSHIP
            </div>
            <div className="text-[16px] font-semibold text-[#FAF8F6]">Amber Dyson</div>
            <div className="text-[12px] text-[#A6A29E] mb-1">VP of Operations & Client Experience</div>
            <div className="text-[14px] font-semibold text-[#FAF8F6] mt-2">Mark Irwin</div>
            <div className="text-[12px] text-[#A6A29E]">President & Founder</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#0C0D11] border border-[#E2A898]/20">
            <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#E2A898]" />
              SHOWROOM HOTLINES
            </div>
            <a href="tel:9017673397" className="block text-[16px] font-semibold text-[#FAF8F6] hover:text-[#E2A898] transition-colors">
              (901) 767-3397
            </a>
            <div className="text-[12px] text-[#A6A29E] mt-1">Memkins Flagship Line</div>
            <a href="tel:5016649000" className="block text-[13px] font-mono text-[#E2A898] mt-2">
              Little Rock: (501) 664-9000
            </a>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#0C0D11] border border-[#E2A898]/20">
            <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#E2A898]" />
              DIRECT COMMUNICATIONS
            </div>
            <a href="mailto:amber@rijewelers.com" className="block text-[13px] font-mono text-[#FAF8F6] hover:text-[#E2A898] transition-colors">
              amber@rijewelers.com
            </a>
            <a href="mailto:support@rijewelers.com" className="block text-[13px] font-mono text-[#E2A898] mt-1 hover:underline">
              support@rijewelers.com
            </a>
            <div className="text-[11px] text-[#A6A29E] mt-2">Direct executive concierge response</div>
          </div>

          {/* Physical Showrooms */}
          <div className="p-6 rounded-xl bg-[#0C0D11] border border-[#E2A898]/20">
            <div className="flex items-center gap-2 text-[#E2A898] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#E2A898]" />
              FLAGSHIP ATELIER
            </div>
            <div className="text-[14px] text-[#FAF8F6]">376 Perkins Extended Ste 100</div>
            <div className="text-[13px] text-[#A6A29E]">Memphis, TN 38117</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#E2A898]">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon-Sat 10:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#A6A29E] border-t border-[#E2A898]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              47+ Years Mid-South Jewelry Heritage
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              GIA & IGI Certified Diamonds
            </span>
          </div>
          <div>© {new Date().getFullYear()} Robert Irwin Jewelers, Inc. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
