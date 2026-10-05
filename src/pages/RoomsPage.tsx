import React, { useState } from 'react';
import { ROOMS_DATA, Room } from '../data/hotelData';
import { Calendar, Users, Maximize2, BedDouble, Eye, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetail: (room: Room) => void;
  onNavigateContact: () => void;
  lang: 'en' | 'ar';
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBooking,
  onViewRoomDetail,
  onNavigateContact,
  lang
}) => {
  const isAr = lang === 'ar';

  const [activeCategory, setActiveCategory] = useState<'all' | 'royal' | 'executive' | 'deluxe' | 'family'>('all');

  const filteredRooms = activeCategory === 'all' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(r => r.category === activeCategory);

  const categories = [
    { id: 'all', labelEn: 'All Accommodations', labelAr: 'جميع الغرف والأجنحة' },
    { id: 'royal', labelEn: 'Royal Suites', labelAr: 'الأجنحة الملكية' },
    { id: 'executive', labelEn: 'Executive Suites', labelAr: 'الأجنحة التنفيذية' },
    { id: 'deluxe', labelEn: 'Deluxe Rooms', labelAr: 'غرف الديلوكس' },
    { id: 'family', labelEn: 'Family Suites', labelAr: 'الأجنحة العائلية' },
  ] as const;

  // Gallery collection
  const allGalleryImages = ROOMS_DATA.flatMap(r => r.gallery);

  return (
    <div className="min-h-screen bg-[#0b0612] text-stone-200 pt-20">
      
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d2c] via-[#10081d] to-[#0b0612] border-b border-amber-500/20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            {isAr ? 'إقامة فاخرة وحصرية' : 'LUXURY ACCOMMODATIONS'}
          </span>

          <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            {isAr ? 'الغرف والأجنحة - فندق لافونا' : 'Rooms & Suites'}
          </h1>

          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'اختر من بين مجموعة فاخرة من الأجنحة الملكية والتنفيذية والغرف الفسيحة المصممة بلمسات بنفسجية وذهبية توفر لك أعلى درجات الخصوصية والراحة.'
              : 'Choose from our lavishly appointed royal suites, executive retreats, and spacious family accommodations in Dammam.'}
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-8 bg-[#0d0718] border-b border-amber-500/10 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gold-accent text-stone-950 font-bold shadow-lg shadow-amber-500/20'
                      : 'bg-purple-950/60 text-stone-300 border border-amber-500/20 hover:border-amber-500/50'
                  }`}
                >
                  {isAr ? cat.labelAr : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rooms & Suites Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-purple-card border border-amber-500/30 rounded-3xl overflow-hidden hover:border-amber-500/60 transition-all duration-300 shadow-2xl grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image & Gallery Column */}
              <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={room.image}
                  alt={room.nameEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4 bg-purple-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/40 font-mono text-sm font-bold text-amber-300">
                  {room.priceSar} SAR <span className="text-xs font-normal text-stone-300">{isAr ? '/ ليلة' : '/ night'}</span>
                </div>
              </div>

              {/* Room Info Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                        {isAr ? 'جناح فندقي فاخر' : 'LUXURY SUITE'}
                      </span>
                      <h3 className="font-cinzel text-2xl font-bold text-amber-300">
                        {isAr ? room.nameAr : room.nameEn}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {isAr ? room.descriptionAr : room.descriptionEn}
                  </p>

                  {/* Room Key Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                    <div className="bg-purple-950/40 p-2.5 rounded-lg border border-amber-500/15 flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div>
                        <span className="block text-[9px] text-stone-400">{isAr ? 'المساحة' : 'Size'}</span>
                        <span className="font-mono font-semibold text-amber-200">{room.sizeSqM} m²</span>
                      </div>
                    </div>

                    <div className="bg-purple-950/40 p-2.5 rounded-lg border border-amber-500/15 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div>
                        <span className="block text-[9px] text-stone-400">{isAr ? 'النزلاء' : 'Guests'}</span>
                        <span className="font-semibold text-amber-200">{room.maxGuests}</span>
                      </div>
                    </div>

                    <div className="bg-purple-950/40 p-2.5 rounded-lg border border-amber-500/15 flex items-center gap-2">
                      <BedDouble className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div className="truncate">
                        <span className="block text-[9px] text-stone-400">{isAr ? 'الأسرة' : 'Bed'}</span>
                        <span className="font-semibold text-amber-200 truncate block text-[10px]">
                          {isAr ? room.bedTypeAr : room.bedTypeEn}
                        </span>
                      </div>
                    </div>

                    <div className="bg-purple-950/40 p-2.5 rounded-lg border border-amber-500/15 flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div className="truncate">
                        <span className="block text-[9px] text-stone-400">{isAr ? 'الإطلالة' : 'View'}</span>
                        <span className="font-semibold text-amber-200 truncate block text-[10px]">
                          {isAr ? room.viewAr : room.viewEn}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div className="pt-2 space-y-1.5">
                    <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider block">
                      {isAr ? 'خدمات ومميزات الغرفة:' : 'Room Amenities:'}
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {(isAr ? room.amenitiesAr : room.amenitiesEn).map((am, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-stone-300">
                          <Check className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onViewRoomDetail(room)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-amber-300 border border-amber-500/40 hover:bg-amber-500/10 transition-colors"
                  >
                    {isAr ? 'عرض المعرض والتفاصيل' : 'View Gallery & Details'}
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-950 bg-gold-accent hover:bg-gold-hover shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isAr ? 'احجز هذا الجناح الآن' : 'BOOK THIS ROOM'}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Spacious Image Gallery Section */}
      <section className="py-20 bg-[#07030d] border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'معرض الصور الفندقية' : 'PHOTO GALLERY'}
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-gold-gradient">
              {isAr ? 'لمحات من فندق لافونا' : 'Glimpse of Lavona Luxury'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allGalleryImages.map((imgUrl, i) => (
              <div key={i} className="relative h-60 rounded-2xl overflow-hidden border border-amber-500/30 group">
                <img
                  src={imgUrl}
                  alt={`Lavona Hotel Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
