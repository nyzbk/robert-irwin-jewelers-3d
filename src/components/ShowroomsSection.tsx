import React, { useState } from 'react';
import { SHOWROOMS_DATA, type Showroom } from '../data/rijData';
import { MapPin, Phone, Clock, UserCheck, Calendar, CheckCircle2 } from 'lucide-react';

interface ShowroomsProps {
  onOpenBooking: (showroom: Showroom) => void;
}

export const ShowroomsSection: React.FC<ShowroomsProps> = ({ onOpenBooking }) => {
  const [selectedShowroom, setSelectedShowroom] = useState<Showroom>(SHOWROOMS_DATA[0]);

  return (
    <section id="showrooms" className="relative py-24 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900 border border-gold-mid/30 text-gold-mid font-sans text-xs tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Presence Across 3 States</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Five Mid-South Showrooms. 80 Years of Care.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            From our Perkins Extended flagship in Memphis to our Pleasant Ridge salon in Little Rock and Airways showroom in Southaven. Experience certified diamonds and in-house goldsmithing close to home.
          </p>
        </div>

        {/* Showrooms Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SHOWROOMS_DATA.map((showroom) => (
            <button
              key={showroom.id}
              onClick={() => setSelectedShowroom(showroom)}
              className={`px-4 py-2.5 text-xs font-sans tracking-wider uppercase transition-all duration-300 border ${
                selectedShowroom.id === showroom.id
                  ? 'bg-emerald-900 border-gold-mid text-white shadow-md shadow-facet-100-glow'
                  : 'bg-emerald-950/60 border-gold-mid/20 text-slate-400 hover:border-gold-mid/40 hover:text-white'
              }`}
            >
              <span className="text-gold-mid mr-1.5 font-bold">[{showroom.state.slice(0, 2).toUpperCase()}]</span>
              {showroom.name}
            </button>
          ))}
        </div>

        {/* Selected Showroom Detailed Card */}
        <div className="bg-emerald-900/60 border border-gold-mid/20 p-6 sm:p-10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Showroom Image (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-gold-mid/20 group">
            <img
              src={selectedShowroom.image}
              alt={selectedShowroom.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-black/30" />
            
            <div className="absolute bottom-4 left-4 right-4 bg-emerald-950/90 border border-gold-mid/20 p-3 backdrop-blur-sm">
              <span className="text-[10px] font-mono tracking-widest text-gold-mid uppercase">
                {selectedShowroom.city}, {selectedShowroom.state}
              </span>
              <h4 className="text-sm font-serif font-bold text-white">
                {selectedShowroom.name}
              </h4>
            </div>
          </div>

          {/* Right: Showroom Details & Booking (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-400">
                Showroom Information
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedShowroom.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-300">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gold-mid font-mono text-[11px] uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Address</span>
                </div>
                <p className="text-white font-medium pl-5">{selectedShowroom.address}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gold-mid font-mono text-[11px] uppercase">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Showroom Phone</span>
                </div>
                <a href={`tel:${selectedShowroom.phone.replace(/[^0-9]/g, '')}`} className="text-white font-medium pl-5 hover:text-gold-mid transition-colors">
                  {selectedShowroom.phone}
                </a>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gold-mid font-mono text-[11px] uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Hours</span>
                </div>
                <p className="text-white font-medium pl-5">{selectedShowroom.hours}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] uppercase">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Managing Director</span>
                </div>
                <p className="text-white font-medium pl-5">{selectedShowroom.director}</p>
              </div>
            </div>

            {/* Specialties */}
            <div className="pt-4 border-t border-gold-mid/15">
              <p className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-3">
                On-Site Artisan Facilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedShowroom.specialties.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking(selectedShowroom)}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-gold-mid transition-all duration-300 shadow-lg hover:shadow-facet-100-glow flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold-mid" />
                <span>Reserve VIP Viewing At This Location</span>
              </button>

              <a
                href={`tel:${selectedShowroom.phone.replace(/[^0-9]/g, '')}`}
                className="px-5 py-3.5 bg-emerald-950 hover:bg-emerald-900 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider border border-gold-mid/30 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-mid" />
                <span>Call {selectedShowroom.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
