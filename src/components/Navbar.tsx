import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Phone, Calendar, Menu, X } from 'lucide-react';
import { SHOWROOMS_DATA, type Showroom } from '../data/rijData';

interface NavbarProps {
  onOpenBooking: (showroom?: Showroom) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showroomsDropdown, setShowroomsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-emerald-950/95 backdrop-blur-md border-b border-gold-mid/20 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-emerald-950/90 via-emerald-950/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & 1946 Heritage Crest */}
            <a href="#" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 rounded-full border border-gold-mid/50 bg-emerald-900/60 flex items-center justify-center group-hover:border-gold-mid transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-gold-mid" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold-light transition-colors">
                  ROBERT IRWIN
                </span>
                <span className="block text-[9px] tracking-widest text-gold-mid font-sans uppercase">
                  Jewelers • 100 Facet Diamond • Est. 1946
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-slate-300">
              <a href="#optical-lab" className="hover:text-gold-mid transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>The 100 Facet Cut</span>
              </a>
              
              {/* Showrooms Hover Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setShowroomsDropdown(true)}
                onMouseLeave={() => setShowroomsDropdown(false)}
              >
                <a
                  href="#showrooms"
                  className="flex items-center gap-1.5 hover:text-gold-mid transition-colors py-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-mid" />
                  <span>5 Mid-South Showrooms</span>
                </a>

                {/* Dropdown Menu */}
                {showroomsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-emerald-950/98 backdrop-blur-xl border border-gold-mid/30 shadow-2xl p-3 space-y-2 mt-1">
                    <p className="text-[10px] tracking-widest text-gold-mid font-semibold px-2 py-1 uppercase border-b border-gold-mid/15">
                      Select Mid-South Location
                    </p>
                    {SHOWROOMS_DATA.map((showroom) => (
                      <button
                        key={showroom.id}
                        onClick={() => {
                          setShowroomsDropdown(false);
                          onOpenBooking(showroom);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-emerald-900/80 rounded transition-colors group flex items-start justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-semibold text-white group-hover:text-gold-mid transition-colors">
                            {showroom.name}
                          </div>
                          <div className="text-[9px] text-slate-400 truncate max-w-[190px]">
                            {showroom.city}, {showroom.state}
                          </div>
                        </div>
                        <span className="text-[9px] text-emerald-400 font-mono">Book VIP</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#vault-collections" className="hover:text-gold-mid transition-colors">
                The Vault
              </a>
              <a href="#heritage-timeline" className="hover:text-gold-mid transition-colors">
                80 Years (1946)
              </a>
            </nav>

            {/* Direct Phone & VIP Appointment CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:9017673397"
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-gold-mid transition-colors"
                title="Call Memphis Perkins Flagship"
              >
                <Phone className="w-3.5 h-3.5 text-gold-mid" />
                <span>(901) 767-3397</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-900 to-emerald-850 hover:from-emerald-850 hover:to-emerald-800 text-white border border-gold-mid/60 hover:border-gold-mid text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-facet-100-glow flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-mid" />
                <span>VIP Diamond Viewing</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 bg-emerald-900 border border-gold-mid/40 text-[10px] uppercase tracking-wider text-gold-mid"
              >
                VIP Salon
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-emerald-950/98 border-b border-gold-mid/20 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs uppercase tracking-widest">
              <a
                href="#optical-lab"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-gold-mid py-2 border-b border-gold-mid/10"
              >
                The 100 Facet Diamond Cut
              </a>
              <a
                href="#showrooms"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-gold-mid py-2 border-b border-gold-mid/10"
              >
                5 Mid-South Showroom Locations
              </a>
              <a
                href="#vault-collections"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-gold-mid py-2 border-b border-gold-mid/10"
              >
                The Vault Collections
              </a>
              <a
                href="#heritage-timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-gold-mid py-2 border-b border-gold-mid/10"
              >
                80-Year Family Heritage (1946)
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:9017673397"
                className="flex items-center justify-center gap-2 py-3 bg-emerald-900 border border-gold-mid/20 text-xs font-mono text-slate-200"
              >
                <Phone className="w-4 h-4 text-gold-mid" />
                <span>Call Perkins Flagship: (901) 767-3397</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white border border-gold-mid text-xs font-semibold uppercase tracking-widest text-center"
              >
                Reserve VIP Champagne Viewing
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
