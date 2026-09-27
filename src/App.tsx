import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { MagneticCTA } from './components/MagneticCTA';
import { Footer } from './components/Footer';
import { VipAppointmentModal } from './components/VipAppointmentModal';
import type { Showroom, VaultPiece } from './data/rijData';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedShowroom, setPreselectedShowroom] = useState<Showroom | null>(null);
  const [preselectedPiece, setPreselectedPiece] = useState<VaultPiece | null>(null);

  const handleOpenBooking = (showroom?: Showroom) => {
    setPreselectedShowroom(showroom || null);
    setPreselectedPiece(null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0C0D11] text-[#FAF8F6] flex flex-col font-['Montserrat',sans-serif] selection:bg-[#E2A898] selection:text-[#0C0D11] overflow-x-clip">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke 100-Facet Custom Bridal Ring Architect Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenBooking()} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      <VipAppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedShowroom={preselectedShowroom}
        preselectedPiece={preselectedPiece}
      />
    </div>
  );
}

export default App;
