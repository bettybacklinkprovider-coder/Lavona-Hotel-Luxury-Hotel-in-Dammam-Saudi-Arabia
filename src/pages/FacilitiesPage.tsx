import React from 'react';
import { FACILITIES_DATA, HOTEL_INFO } from '../data/hotelData';
import { Wifi, Car, Clock, Utensils, Wind, Bus, Coffee, Sparkles, Calendar, Phone } from 'lucide-react';

interface FacilitiesPageProps {
  onOpenBooking: () => void;
  onNavigateContact: () => void;
  lang: 'en' | 'ar';
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onOpenBooking,
  onNavigateContact,
  lang
}) => {
  const isAr = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#0b0612] text-stone-200 pt-20">
      
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d2c] via-[#10081d] to-[#0b0612] border-b border-amber-500/20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            {isAr ? 'خدمات فندقية متكاملة' : 'PREMIER SERVICES'}
          </span>

          <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            {isAr ? 'المرافق والخدمات - فندق لافونا' : 'Facilities & Services'}
          </h1>

          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'يوفر فندق لافونا مجموعة ممتازة من المرافق والخدمات الفندقية المصممة لراحة ضيوفنا الكرام في مدينة الدمام.'
              : 'Enjoy unmatched Saudi hospitality, gourmet dining, 24/7 reception, private shuttle, and high-speed Wi-Fi.'}
          </p>
        </div>
      </section>

      {/* Featured Service Spotlight: Gourmet Restaurant & Saudi Feast */}
      <section className="py-16 bg-[#0e0717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1b0f30] to-[#0e0717] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-6 relative h-80 lg:h-auto">
              <img
                src="/src/assets/images/arabic_gourmet_buffet_1791196677358.jpg"
                alt="Gourmet Saudi Restaurant Lavona Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-transparent to-transparent opacity-60" />
            </div>

            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase w-fit">
                <Utensils className="w-3.5 h-3.5" />
                <span>{isAr ? 'تجربة الطهي السعودية الفاخرة' : 'FINE SAUDI DINING EXPERIENCE'}</span>
              </div>

              <h2 className="font-cinzel text-3xl font-bold text-gold-gradient">
                {isAr ? 'مطعم لافونا المتميز' : 'Lavona Gourmet Restaurant'}
              </h2>

              <p className="text-xs text-stone-300 leading-relaxed">
                {isAr
                  ? 'يستمتع نزلاء فندق لافونا بوجبات الإفطار الغنية والغداء والعشاء المستوحاة من المطبخ السعودي الأصيل والمأكولات البحرية الطازجة بالدمام بالإضافة للأطباق العالمية الراعية.'
                  : 'Savor gourmet culinary offerings curated by seasoned executive chefs. Enjoy lavish morning breakfast spreads, authentic Saudi kabsa and grilled specialties, seafood delicacies, and in-room dining services.'}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-purple-950/40 p-3 rounded-xl border border-amber-500/15">
                  <span className="font-bold text-amber-300 block">{isAr ? 'الإفطار اليومي' : 'Daily Breakfast'}</span>
                  <span className="text-stone-400 text-[11px]">{isAr ? 'بوفيه مفتوح من 6:30 إلى 10:30 صباحاً' : 'Buffet 6:30 AM – 10:30 AM'}</span>
                </div>

                <div className="bg-purple-950/40 p-3 rounded-xl border border-amber-500/15">
                  <span className="font-bold text-amber-300 block">{isAr ? 'خدمة الغرف 24/7' : 'In-Room Service'}</span>
                  <span className="text-stone-400 text-[11px]">{isAr ? 'وجبات سريعة ومشروبات طازجة' : 'Available 24 hours a day'}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Full Grid of Facilities with Photo Headers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'جميع مرافق الفندق بالصور' : 'AMENITIES PHOTO DIRECTORY'}
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-gold-gradient">
              {isAr ? 'خدمات مخصصة لراحتك' : 'Comprehensive Hotel Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES_DATA.map((facility) => {
              const getIcon = (id: string) => {
                switch(id) {
                  case 'free-wifi': return <Wifi className="w-5 h-5 text-amber-400" />;
                  case 'free-parking': return <Car className="w-5 h-5 text-amber-400" />;
                  case 'front-desk': return <Clock className="w-5 h-5 text-amber-400" />;
                  case 'restaurant': return <Utensils className="w-5 h-5 text-amber-400" />;
                  case 'air-conditioning': return <Wind className="w-5 h-5 text-amber-400" />;
                  case 'airport-shuttle': return <Bus className="w-5 h-5 text-amber-400" />;
                  default: return <Coffee className="w-5 h-5 text-amber-400" />;
                }
              };

              return (
                <div
                  key={facility.id}
                  className="bg-purple-card border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-500/60 transition-all shadow-xl space-y-4 flex flex-col justify-between group"
                >
                  {/* Photo Header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140b24] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/90 border border-amber-500/40 flex items-center justify-center backdrop-blur-md">
                        {getIcon(facility.id)}
                      </div>
                      <span className="text-[10px] font-bold text-amber-300 bg-purple-950/90 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
                        {isAr ? facility.highlightAr : facility.highlightEn}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 pb-2 space-y-2 flex-1">
                    <h3 className="font-cinzel text-lg font-bold text-amber-300">
                      {isAr ? facility.titleAr : facility.titleEn}
                    </h3>

                    <p className="text-xs text-stone-300 leading-relaxed">
                      {isAr ? facility.fullDescAr : facility.fullDescEn}
                    </p>
                  </div>

                  <div className="p-6 pt-0 border-t border-amber-500/15">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{isAr ? 'حجز إقامة للاستفادة من هذه الخدمة' : 'Book Stay with Service'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Special Saudi Gahwa & Dates Experience Section */}
      <section className="py-20 bg-[#07030d] border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-950/80 via-[#190d2e] to-purple-950/80 border border-amber-500/30 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 h-64 rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl">
              <img
                src="/src/assets/images/arabic_gahwa_welcome_1791196654593.jpg"
                alt="Saudi Coffee Welcome"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                {isAr ? 'تقاليد الضيافة السعودية' : 'SAUDI HOSPITALITY TRADITION'}
              </span>

              <h3 className="font-cinzel text-2xl font-bold text-gold-gradient">
                {isAr ? 'القهوة السعودية والتمر في استقبال الفندق' : 'Saudi Gahwa & Premium Dates Welcome'}
              </h3>

              <p className="text-xs text-stone-300 leading-relaxed">
                {isAr
                  ? 'يعبر فندق لافونا عن ترحيبه الحار بجميع الضيوف عبر تقديم القهوة السعودية الفاخرة المحضرة بعناية مع أجود أنواع التمور في البهو الرئيسي فور وصولكم.'
                  : 'Upon arrival in our grand lobby, enjoy a heartwarming cup of traditional Saudi Gahwa scented with cardamom and saffron, accompanied by delicious local dates.'}
              </p>

              <div className="pt-2">
                <a
                  href={`tel:${HOTEL_INFO.rawPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-stone-950 bg-gold-accent hover:bg-gold-hover transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isAr ? 'للاستفسار المباشر اتصل بنا: +966 13 843 0111' : 'Direct Desk Call: +966 13 843 0111'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
