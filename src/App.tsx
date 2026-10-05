import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { AiConciergeModal } from './components/AiConciergeModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { Room } from './data/hotelData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rooms' | 'facilities' | 'contact'>('home');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  // Modals state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);

  // Sync URL query or path with page state
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/rooms') setCurrentPage('rooms');
      else if (path === '/facilities') setCurrentPage('facilities');
      else if (path === '/contact') setCurrentPage('contact');
      else setCurrentPage('home');
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: 'home' | 'rooms' | 'facilities' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  const handleToggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setBookingOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#0b0612] font-sans-custom ${lang === 'ar' ? 'font-tajawal' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenBooking={handleOpenBooking}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Main Page Rendering */}
      <main>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onViewRoomDetail={(room) => setDetailRoom(room)}
            lang={lang}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
            onViewRoomDetail={(room) => setDetailRoom(room)}
            onNavigateContact={() => handleNavigate('contact')}
            lang={lang}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigateContact={() => handleNavigate('contact')}
            lang={lang}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={() => handleOpenBooking()}
            lang={lang}
          />
        )}
      </main>

      {/* Footer Component */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Interactive Reservation / Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedRoomId={selectedRoomId}
        lang={lang}
      />

      {/* Virtual AI Concierge Assistant Modal */}
      <AiConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
        lang={lang}
        onNavigateContact={() => handleNavigate('contact')}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={detailRoom}
        onClose={() => setDetailRoom(null)}
        onBookRoom={(roomId) => handleOpenBooking(roomId)}
        lang={lang}
      />

    </div>
  );
}
