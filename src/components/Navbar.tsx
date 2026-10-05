import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Sparkles, Menu, X, Globe, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  currentPage: 'home' | 'rooms' | 'facilities' | 'contact';
  onNavigate: (page: 'home' | 'rooms' | 'facilities' | 'contact') => void;
  lang: 'en' | 'ar';
  onToggleLang: () => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
  onOpenBooking,
  onOpenConcierge
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'rooms', labelEn: 'Rooms & Suites', labelAr: 'الغرف والأجنحة' },
    { id: 'facilities', labelEn: 'Facilities & Services', labelAr: 'المرافق والخدمات' },
    { id: 'contact', labelEn: 'Contact Us', labelAr: 'اتصل بنا' },
  ] as const;

  const isAr = lang === 'ar';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0b0612]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-[#0b0612]/90 via-[#0b0612]/60 to-transparent py-5'
    }`}>
      {/* Top micro bar for phone & address */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs text-amber-200/80 border-b border-amber-500/10 pb-2">
        <div className="flex items-center gap-6">
          <a href={`tel:${HOTEL_INFO.rawPhone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">{HOTEL_INFO.phone}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? HOTEL_INFO.addressAr : HOTEL_INFO.addressEn}</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenConcierge}
            className="flex items-center gap-1 text-amber-300 hover:text-amber-100 transition-colors bg-purple-900/40 px-2.5 py-0.5 rounded-full border border-amber-500/30"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{isAr ? 'المساعد الذكي' : 'AI Concierge'}</span>
          </button>
          
          <button 
            onClick={onToggleLang}
            className="flex items-center gap-1 text-amber-200 hover:text-amber-100 font-medium transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </div>

      {/* Main Top Bar Contract: Brand title - 4 nav links - 1-2 primary actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Zone 1: Brand Title - Single text element */}
        <button 
          onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b0612] rounded-[7px] flex items-center justify-center">
              <span className="font-cinzel text-amber-400 font-bold text-xl tracking-wider">L</span>
            </div>
          </div>
          <div>
            <span className="block font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-gold-gradient uppercase">
              {isAr ? 'فندق لافونا' : 'LAVONA HOTEL'}
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-amber-300/70 uppercase">
              {isAr ? 'الدمام · المملكة العربية السعودية' : 'DAMMAM · SAUDI ARABIA'}
            </span>
          </div>
        </button>

        {/* Zone 2: 4 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                  isActive 
                    ? 'text-amber-300 font-semibold' 
                    : 'text-stone-300 hover:text-amber-200'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${HOTEL_INFO.rawPhone}`}
            className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{HOTEL_INFO.phone}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider text-stone-950 uppercase bg-gold-accent hover:bg-gold-hover shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{isAr ? 'احجز الآن' : 'BOOK NOW'}</span>
          </button>

          {/* Language Toggle for mobile/sm */}
          <button 
            onClick={onToggleLang}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-amber-300 border border-amber-500/30 bg-purple-900/30"
            title="Toggle Language"
          >
            <Globe className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden px-3 py-1.5 rounded-md text-xs font-bold text-stone-950 bg-gold-accent"
          >
            {isAr ? 'حجز' : 'Book'}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-amber-300 border border-amber-500/30 bg-purple-900/40 hover:bg-purple-800/60"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0612]/98 border-b border-amber-500/30 px-4 pt-4 pb-6 mt-3 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-amber-500/20 text-amber-300 border-l-4 border-amber-400' 
                      : 'text-stone-200 hover:bg-stone-900/60'
                  }`}
                >
                  {isAr ? link.labelAr : link.labelEn}
                </button>
              );
            })}

            <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-3">
              <a
                href={`tel:${HOTEL_INFO.rawPhone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-amber-300 border border-amber-500/30 bg-purple-900/30"
              >
                <Phone className="w-4 h-4" />
                <span>{HOTEL_INFO.phone}</span>
              </a>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={onToggleLang}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-amber-200 border border-stone-800 bg-stone-900/80"
                >
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'Switch to English' : 'التحويل للعربية'}</span>
                </button>

                <button
                  onClick={() => {
                    onOpenConcierge();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-amber-300 border border-amber-500/30 bg-purple-900/40"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'المساعد الذكي' : 'AI Concierge'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-lg text-sm font-bold tracking-wider text-stone-950 uppercase bg-gold-accent shadow-lg shadow-amber-500/20 mt-2"
              >
                {isAr ? 'احجز إقامتك الآن' : 'BOOK YOUR STAY NOW'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
