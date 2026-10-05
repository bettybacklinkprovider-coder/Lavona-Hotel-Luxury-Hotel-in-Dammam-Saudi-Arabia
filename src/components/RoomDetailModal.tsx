import React, { useState } from 'react';
import { X, Check, Calendar, Users, Maximize2, BedDouble, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { Room } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
  lang: 'en' | 'ar';
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom,
  lang
}) => {
  if (!room) return null;
  const isAr = lang === 'ar';

  const [activeImage, setActiveImage] = useState<string>(room.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#120a1f] border border-amber-500/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-stone-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#0b0612]/95 border-b border-amber-500/20 px-6 py-4 flex items-center justify-between z-20">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'تفاصيل الإقامة الفاخرة' : 'LUXURY ACCOMMODATION DETAILS'}
            </span>
            <h3 className="font-cinzel text-xl font-bold text-amber-300">
              {isAr ? room.nameAr : room.nameEn}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white bg-stone-900/50 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Main Image Banner & Gallery Selector */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
              <img
                src={activeImage}
                alt={room.nameEn}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-amber-500/30 text-amber-200 font-medium">
                  {isAr ? room.viewAr : room.viewEn}
                </span>

                <div className="text-right bg-purple-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/40">
                  <span className="text-[10px] text-stone-400 block">{isAr ? 'السعر لليلة الواحدة' : 'Price per night'}</span>
                  <span className="font-mono text-xl font-bold text-gold-gradient">{room.priceSar} SAR</span>
                </div>
              </div>
            </div>

            {/* Thumbnail selector */}
            {room.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {room.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-amber-400 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specs Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-purple-950/40 p-3 rounded-xl border border-amber-500/20 text-center">
              <Maximize2 className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="block text-[10px] text-stone-400">{isAr ? 'المساحة' : 'Room Size'}</span>
              <span className="text-xs font-bold font-mono text-amber-200">{room.sizeSqM} m²</span>
            </div>

            <div className="bg-purple-950/40 p-3 rounded-xl border border-amber-500/20 text-center">
              <Users className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="block text-[10px] text-stone-400">{isAr ? 'الاستيعاب' : 'Occupancy'}</span>
              <span className="text-xs font-bold text-amber-200">
                {room.maxGuests} {isAr ? 'نزلاء' : 'Guests'}
              </span>
            </div>

            <div className="bg-purple-950/40 p-3 rounded-xl border border-amber-500/20 text-center">
              <BedDouble className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="block text-[10px] text-stone-400">{isAr ? 'الأسرة' : 'Bedding'}</span>
              <span className="text-[11px] font-semibold text-amber-200 truncate block">
                {isAr ? room.bedTypeAr : room.bedTypeEn}
              </span>
            </div>

            <div className="bg-purple-950/40 p-3 rounded-xl border border-amber-500/20 text-center">
              <Eye className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="block text-[10px] text-stone-400">{isAr ? 'الإطلالة' : 'View'}</span>
              <span className="text-[11px] font-semibold text-amber-200 truncate block">
                {isAr ? room.viewAr : room.viewEn}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              {isAr ? 'الوصف والتصميم' : 'OVERVIEW & DESIGN'}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed bg-[#1c102e] p-4 rounded-xl border border-amber-500/20">
              {isAr ? room.descriptionAr : room.descriptionEn}
            </p>
          </div>

          {/* Luxury Amenities List */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              {isAr ? 'مميزات وتجهيزات الغرفة' : 'PREMIUM AMENITIES'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {(isAr ? room.amenitiesAr : room.amenitiesEn).map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 bg-purple-950/30 p-2.5 rounded-lg border border-amber-500/10">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-stone-300">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="flex-1 py-3.5 rounded-xl text-xs font-bold tracking-wider text-stone-950 uppercase bg-gold-accent hover:bg-gold-hover shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{isAr ? 'احجز هذه الغرفة الآن' : 'BOOK THIS ROOM NOW'}</span>
            </button>

            <button
              onClick={onClose}
              className="py-3.5 px-6 rounded-xl text-xs font-semibold text-stone-300 border border-amber-500/30 hover:bg-stone-800 transition-colors"
            >
              {isAr ? 'رجوع' : 'Back'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
