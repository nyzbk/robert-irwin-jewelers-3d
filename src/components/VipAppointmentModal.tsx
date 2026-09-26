import React, { useState, useEffect } from 'react';
import { X, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOWROOMS_DATA, type Showroom, type VaultPiece } from '../data/rijData';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedShowroom?: Showroom | null;
  preselectedPiece?: VaultPiece | null;
}

export const VipAppointmentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  preselectedShowroom,
  preselectedPiece
}) => {
  const [selectedShowroomId, setSelectedShowroomId] = useState<string>(
    preselectedShowroom ? preselectedShowroom.id : SHOWROOMS_DATA[0].id
  );
  const [inquiryType, setInquiryType] = useState<string>(
    preselectedPiece ? 'Specific Vault Piece Viewing' : '100 Facet Diamond Microscope Comparison'
  );
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Afternoon (1:00 PM – 4:00 PM)');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedShowroom) {
      setSelectedShowroomId(preselectedShowroom.id);
    }
  }, [preselectedShowroom]);

  if (!isOpen) return null;

  const currentShowroom = SHOWROOMS_DATA.find(s => s.id === selectedShowroomId) || SHOWROOMS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4ade80', '#d8b268', '#f8fafc', '#03140e']
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-emerald-950 border border-gold-mid/40 shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-900 border border-gold-mid flex items-center justify-center mx-auto shadow-lg shadow-facet-100-glow">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-gold-mid uppercase">
                Reservation Confirmed // Mid-South VIP
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                We Await Your Visit, {fullName || 'Valued Guest'}.
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans max-w-lg mx-auto leading-relaxed">
                Your private viewing appointment at our <strong className="text-white">{currentShowroom.name}</strong> ({currentShowroom.city}) has been reserved. Our master jeweler will prepare loose 100-facet stones and chilled refreshments for your arrival.
              </p>
            </div>

            <div className="bg-emerald-900/60 border border-gold-mid/20 p-4 max-w-md mx-auto text-left text-xs font-mono space-y-2">
              <div className="flex justify-between border-b border-gold-mid/10 pb-1.5">
                <span className="text-slate-400">Confirmation Reference:</span>
                <span className="text-gold-light font-bold">#RIJ-1946-8821</span>
              </div>
              <div className="flex justify-between border-b border-gold-mid/10 pb-1.5">
                <span className="text-slate-400">Showroom:</span>
                <span className="text-white">{currentShowroom.name}</span>
              </div>
              <div className="flex justify-between border-b border-gold-mid/10 pb-1.5">
                <span className="text-slate-400">Address:</span>
                <span className="text-white">{currentShowroom.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direct Telephone:</span>
                <span className="text-emerald-400">{currentShowroom.phone}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-emerald-900 hover:bg-emerald-850 text-white font-sans text-xs uppercase tracking-widest border border-gold-mid transition-colors"
            >
              Return to Showcase
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold-mid">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Mid-South Showroom Reservation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Reserve Your VIP Diamond Consultation.
              </h3>
              <p className="text-xs text-slate-300 font-sans">
                Experience the 100 Facet Diamond under a 40x microscope in an unhurried, private salon environment.
              </p>
            </div>

            {/* Preselected Vault Piece (if any) */}
            {preselectedPiece && (
              <div className="p-3 bg-emerald-900/60 border border-gold-mid/30 text-xs flex items-center justify-between">
                <span className="text-slate-300">Selected Vault Piece:</span>
                <span className="font-serif font-bold text-gold-light">{preselectedPiece.title} ({preselectedPiece.price})</span>
              </div>
            )}

            {/* Select Showroom Location */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                1. Select Showroom Location
              </label>
              <select
                value={selectedShowroomId}
                onChange={(e) => setSelectedShowroomId(e.target.value)}
                className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-mid"
                required
              >
                {SHOWROOMS_DATA.map((showroom) => (
                  <option key={showroom.id} value={showroom.id} className="bg-emerald-950 text-white">
                    [{showroom.state}] {showroom.name} — {showroom.address}
                  </option>
                ))}
              </select>
            </div>

            {/* Consultation Purpose */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                2. Consultation Focus
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-mid"
              >
                <option value="100 Facet Diamond Microscope Comparison">100 Facet Diamond Microscope Comparison (vs Standard 58)</option>
                <option value="Custom Engagement Ring Design">Custom Engagement Ring Design (In-House Goldsmith)</option>
                <option value="80th Anniversary Bands & Heirlooms">80th Anniversary Bands & Heirlooms</option>
                <option value="Certified Natural & Lab Diamond Sourcing">Certified Natural & Lab Diamond Sourcing</option>
                <option value="Heirloom Remounting & Laser Repair">Heirloom Remounting & Laser Repair</option>
              </select>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Harrison Irwin"
                  className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-mid"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(901) 555-0188"
                  className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-mid"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="harrison@example.com"
                  className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-mid"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-mid"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-mid"
                >
                  <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM – 6:00 PM)">Late Afternoon (4:00 PM – 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                Custom Ring Details or Questions (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Interested in comparing 100-facet round vs oval, or custom platinum mounting..."
                className="w-full bg-emerald-900 border border-gold-mid/20 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-mid resize-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-gold-mid transition-all duration-300 shadow-xl hover:shadow-facet-100-glow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold-mid" />
                <span>Confirm VIP Showroom Reservation</span>
              </button>
              <p className="text-[10px] text-slate-400 text-center font-sans mt-2">
                All consultations are complimentary with zero purchase obligation.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
