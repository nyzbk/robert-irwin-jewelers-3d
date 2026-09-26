import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { FacetComparisonSection } from './components/FacetComparisonSection';
import { ShowroomsSection } from './components/ShowroomsSection';
import { VaultSection } from './components/VaultSection';
import { HeritageTimelineSection } from './components/HeritageTimelineSection';
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

  const handleSelectPiece = (piece: VaultPiece) => {
    setPreselectedPiece(piece);
    setPreselectedShowroom(null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0C0D11] text-[#FAF8F6] flex flex-col font-['Urbanist'] selection:bg-[#E2A898] selection:text-[#0C0D11]">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} totalFrames={60} />
        
        {/* Bespoke 100-Facet Custom Bridal Ring Architect Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenBooking()} />

        <FacetComparisonSection onOpenBooking={() => handleOpenBooking()} />
        <ShowroomsSection onOpenBooking={handleOpenBooking} />
        <VaultSection onSelectPiece={handleSelectPiece} />
        <HeritageTimelineSection onOpenBooking={() => handleOpenBooking()} />
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
