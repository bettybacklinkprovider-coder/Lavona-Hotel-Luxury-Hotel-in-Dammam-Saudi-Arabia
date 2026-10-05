import React from 'react';
import { Phone, MapPin, Mail, Clock, Calendar, ArrowUpRight, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onNavigate: (page: 'home' | 'rooms' | 'facilities' | 'contact') => void;
  lang: 'en' | 'ar';
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  lang,
  onOpenBooking,
  onOpenConcierge
}) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#07030d] border-t border-amber-500/20 text-stone-300 pt-16 pb-10 relative overflow-hidden">
      {/* Subtle gold glow background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-500/15">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0b0612] rounded-[7px] flex items-center justify-center">
                  <span className="font-cinzel text-amber-400 font-bold text-xl">L</span>
                </div>
              </div>
              <div>
                <span className="block font-cinzel text-xl font-bold tracking-wider text-gold-gradient uppercase">
                  {isAr ? 'فندق لافونا' : 'LAVONA HOTEL'}
                </span>
                <span className="block text-[10px] tracking-widest text-amber-300/70 uppercase">
                  {isAr ? 'الدمام · المملكة العربية السعودية' : 'DAMMAM · SAUDI ARABIA'}
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-stone-400">
              {isAr 
                ? 'تجربة إقامة فاخرة تجمع بين الراحة العصرية وأصالة الضيافة السعودية في قلب مدينة الدمام، حي الضباب.' 
                : 'A luxury hospitality sanctuary offering modern refinement and timeless Saudi generosity in Al Dabab, Dammam.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg text-xs font-bold text-stone-950 bg-gold-accent hover:bg-gold-hover transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isAr ? 'حجز مباشر' : 'Book Stay'}</span>
              </button>
              
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg text-xs font-medium text-amber-300 border border-amber-500/30 bg-purple-950/40 hover:bg-purple-900/60 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-amber-300 uppercase border-b border-amber-500/20 pb-2 inline-block">
              {isAr ? 'صفحات الموقع' : 'EXPLORE PAGES'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  <span>{isAr ? 'الصفحة الرئيسية' : 'Home Page'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('rooms')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  <span>{isAr ? 'الغرف والأجنحة' : 'Rooms & Suites'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('facilities')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  <span>{isAr ? 'المرافق والخدمات' : 'Facilities & Services'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  <span>{isAr ? 'اتصل بنا والمعلومات' : 'Contact Us & Location'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenConcierge} 
                  className="text-amber-400/90 hover:text-amber-200 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-amber-200" />
                  <span>{isAr ? 'المساعد الرقمي المباشر' : 'Live Virtual Concierge'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-amber-300 uppercase border-b border-amber-500/20 pb-2 inline-block">
              {isAr ? 'معلومات التواصل' : 'CONTACT INFO'}
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href={`tel:${HOTEL_INFO.rawPhone}`}
                className="flex items-start gap-2.5 hover:text-amber-300 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-400 text-[11px]">{isAr ? 'الهاتف المباشر:' : 'Direct Phone:'}</span>
                  <span className="font-mono text-amber-200 font-semibold">{HOTEL_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-400 text-[11px]">{isAr ? 'العنوان:' : 'Address:'}</span>
                  <span className="text-stone-200">{isAr ? HOTEL_INFO.addressAr : HOTEL_INFO.addressEn}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-400 text-[11px]">{isAr ? 'تسجيل الوصول / المغادرة:' : 'Check-In / Out:'}</span>
                  <span className="text-stone-200">
                    {isAr ? `تسجيل الدخول: ${HOTEL_INFO.checkIn} | المغادرة: ${HOTEL_INFO.checkOut}` : `Check-In: ${HOTEL_INFO.checkIn} | Check-Out: ${HOTEL_INFO.checkOut}`}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-stone-400 text-[11px]">{isAr ? 'البريد الإلكتروني:' : 'Email:'}</span>
                  <span className="font-mono text-stone-300">{HOTEL_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Map & Distance */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold tracking-wider text-amber-300 uppercase border-b border-amber-500/20 pb-2 inline-block">
              {isAr ? 'الموقع والمعالم' : 'LOCATION & MAP'}
            </h4>
            <div className="bg-purple-950/40 rounded-xl p-3.5 border border-amber-500/20 space-y-2.5 text-xs">
              <p className="text-amber-200 font-medium">
                {isAr ? 'موقع مميز في حي الضباب بالدمام' : 'Prime Location in Al Dabab, Dammam'}
              </p>
              <ul className="space-y-1 text-stone-400 text-[11px]">
                <li className="flex justify-between">
                  <span>{isAr ? 'كورنيش الدمام' : 'Dammam Corniche'}</span>
                  <span className="text-amber-300 font-mono">12 min</span>
                </li>
                <li className="flex justify-between">
                  <span>{isAr ? 'مطار الملك فهد' : 'King Fahd Airport'}</span>
                  <span className="text-amber-300 font-mono">25 min</span>
                </li>
                <li className="flex justify-between">
                  <span>{isAr ? 'مركز إثراء' : 'Ithra Center'}</span>
                  <span className="text-amber-300 font-mono">18 min</span>
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=Al+Dabab+Dammam+Saudi+Arabia"
                target="_blank"
                rel="noreferrer"
                className="w-full mt-2 py-1.5 px-3 rounded-lg text-[11px] font-semibold text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-colors flex items-center justify-center gap-1 text-center"
              >
                <span>{isAr ? 'عرض الخريطة على Google Maps' : 'Open Google Maps'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {isAr ? 'فندق لافونا (Lavona Hotel). جميع الحقوق محفوظة.' : 'Lavona Hotel Dammam. All Rights Reserved.'}
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>{isAr ? 'حي الضباب، الدمام 32261' : 'Al Dabab, Dammam 32261'}</span>
            <span>·</span>
            <span className="font-mono">{HOTEL_INFO.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
