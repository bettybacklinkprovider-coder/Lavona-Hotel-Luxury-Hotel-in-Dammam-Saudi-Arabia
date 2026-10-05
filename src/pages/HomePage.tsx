import React from 'react';
import { Wifi, Car, Clock, Utensils, Wind, Bus, ArrowRight, Star, ShieldCheck, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA, TESTIMONIALS, HOTEL_IMAGES, Room } from '../data/hotelData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'rooms' | 'facilities' | 'contact') => void;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetail: (room: Room) => void;
  lang: 'en' | 'ar';
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onViewRoomDetail,
  lang
}) => {
  const isAr = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#0b0612] text-stone-200">
      
      {/* SECTION 1 — LUXURY HERO */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Luxury Saudi Lobby with Calligraphy & Gold */}
        <img
          src={HOTEL_IMAGES.luxuryLobby}
          alt="Lavona Hotel Dammam Luxury Saudi Lobby"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />

        {/* Dark Purple Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-[#120822]/80 to-[#0b0612]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-[#0b0612]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-16">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'فندق فاخر في قلب الدمام · حي الضباب' : 'LUXURY HOSPITALITY IN AL DABAB, DAMMAM'}</span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gold-gradient drop-shadow-2xl text-wrap-balance leading-tight">
            {isAr ? 'أهلاً بكم في فندق لافونا' : 'Welcome to Lavona Hotel'}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed font-light drop-shadow">
            {isAr
              ? 'ملاذ فاخر يجمع بين الفخامة العصرية، الراحة الفائقة، وحفاوة الضيافة السعودية الأصيلة في مدينة الدمام.'
              : 'Experience unexcelled comfort, refined elegance, and authentic Saudi hospitality in the vibrant heart of Dammam.'}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-stone-950 bg-gold-accent hover:bg-gold-hover shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>{isAr ? 'استكشف الغرف والأجنحة' : 'EXPLORE ROOMS'}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-amber-200 border border-amber-500/40 bg-purple-950/60 hover:bg-purple-900/80 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'تواصل مع الفندق' : 'CONTACT US'}</span>
            </button>
          </div>

          {/* Quick info badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs text-amber-200/90 font-medium">
            <div className="bg-purple-950/50 backdrop-blur-md py-2.5 px-3 rounded-xl border border-amber-500/20">
              {isAr ? 'واي فاي مجاني 300M' : 'Free 300M Wi-Fi'}
            </div>
            <div className="bg-purple-950/50 backdrop-blur-md py-2.5 px-3 rounded-xl border border-amber-500/20">
              {isAr ? 'مواقف مجانية مراقبة' : 'Free Valet Parking'}
            </div>
            <div className="bg-purple-950/50 backdrop-blur-md py-2.5 px-3 rounded-xl border border-amber-500/20">
              {isAr ? 'استقبال على مدار 24h' : '24/7 Desk Service'}
            </div>
            <div className="bg-purple-950/50 backdrop-blur-md py-2.5 px-3 rounded-xl border border-amber-500/20">
              {isAr ? 'توصيل المطار متوفر' : 'Airport Shuttle'}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — ABOUT LAVONA HOTEL */}
      <section className="py-24 bg-[#0e0717] relative border-t border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
                <img
                  src={HOTEL_IMAGES.gahwaWelcome}
                  alt="Saudi Hospitality Gahwa at Lavona Hotel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-6 bg-gradient-to-br from-[#1c102e] to-[#0b0612] p-5 rounded-2xl border border-amber-500/40 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent flex items-center justify-center text-stone-950 font-bold">
                    ★ 4.8
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-300 block">
                      {isAr ? 'أعلى تقييمات الضيوف' : 'Top Guest Ratings'}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      {isAr ? 'خدمة استثنائية ونظافة ممتازة' : 'Exceptional Saudi Hospitality'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                {isAr ? 'عن فندق لافونا' : 'ABOUT LAVONA HOTEL'}
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold-gradient leading-snug">
                {isAr
                  ? 'الرفاهية والأصالة في قلب الدمام'
                  : 'Refined Comfort & Traditional Hospitality in Dammam'}
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed">
                {isAr
                  ? 'يقع فندق لافونا في حي الضباب الحيوي بالدمام، ويقدم تجربة إقامة متكاملة تناسب رجال الأعمال والعائلات والزوار من كافة أنحاء المملكة والخليج العربي. نسعى دائماً إلى تقديم أرفع مستويات الراحة بخدمات فندقية متطورة وديكورات ملكية تنبض بالفخامة.'
                  : 'Strategically situated in Al Dabab, Dammam, Lavona Hotel combines standard-setting modern guest suites with classic Arabian warmth. Whether visiting for executive business or family holidays, our hotel offers an atmosphere of pristine tranquility and personalized care.'}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                <div className="bg-purple-950/40 p-4 rounded-xl border border-amber-500/20">
                  <span className="font-bold text-amber-300 text-sm block mb-1">
                    {isAr ? 'موقع استراتيجي' : 'Strategic Location'}
                  </span>
                  <span className="text-stone-400">
                    {isAr ? 'بالقرب من كورنيش الدمام ومطار الملك فهد' : 'Minutes from Dammam Corniche & King Fahd Airport'}
                  </span>
                </div>

                <div className="bg-purple-950/40 p-4 rounded-xl border border-amber-500/20">
                  <span className="font-bold text-amber-300 text-sm block mb-1">
                    {isAr ? 'ضيافة سعودية أصيلة' : 'Authentic Hospitality'}
                  </span>
                  <span className="text-stone-400">
                    {isAr ? 'قهوة سعودية وتمر فاخر عند الاستقبال' : 'Saudi Gahwa coffee & premium dates welcome'}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/10 transition-colors"
                >
                  {isAr ? 'اكتشف موقعنا وتواصل معنا' : 'Discover Our Location & Details'}
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED ROOMS & SUITES */}
      <section className="py-24 bg-[#0b0612] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'الأجنحة والغرف المتميزة' : 'ACCOMMODATIONS'}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold-gradient">
              {isAr ? 'الغرف والأجنحة الفاخرة' : 'Featured Rooms & Suites'}
            </h2>
            <p className="text-stone-400 text-xs">
              {isAr ? 'مصممة خصيصاً لتمنحك أقصى درجات الراحة والهدوء' : 'Thoughtfully designed spaces adorned in dark purple velvet and warm gold accents.'}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-purple-card border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.nameEn}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-amber-300 border border-amber-500/30">
                    {room.priceSar} SAR / {isAr ? 'ليلة' : 'night'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-lg font-bold text-amber-300">
                      {isAr ? room.nameAr : room.nameEn}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                      {isAr ? room.descriptionAr : room.descriptionEn}
                    </p>
                  </div>

                  {/* Amenities highlights */}
                  <div className="space-y-2 pt-2 border-t border-amber-500/15">
                    <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">
                      {isAr ? 'أبرز المزايا:' : 'Key Amenities:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      {(isAr ? room.amenitiesAr : room.amenitiesEn).slice(0, 3).map((a, i) => (
                        <span key={i} className="text-amber-200/90 bg-purple-950/60 px-2 py-0.5 rounded border border-amber-500/10">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onViewRoomDetail(room)}
                      className="flex-1 py-2.5 rounded-lg text-xs font-semibold text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-colors"
                    >
                      {isAr ? 'عرض الغرفة' : 'View Room'}
                    </button>

                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="flex-1 py-2.5 rounded-lg text-xs font-bold text-stone-950 bg-gold-accent hover:bg-gold-hover transition-colors"
                    >
                      {isAr ? 'احجز الآن' : 'Book Room'}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => onNavigate('rooms')}
              className="px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider text-amber-300 border border-amber-500/40 bg-purple-950/40 hover:bg-purple-900/60 transition-colors inline-flex items-center gap-2"
            >
              <span>{isAr ? 'عرض كافة الغرف والأجنحة' : 'VIEW ALL ROOMS & SUITES'}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4 — HOTEL FACILITIES WITH PHOTO CARDS */}
      <section className="py-24 bg-[#0e0717] relative border-t border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'مرافق وخدمات متكاملة' : 'HOTEL AMENITIES'}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold-gradient">
              {isAr ? 'خدمات فندقية رفيعة المستوى' : 'Hotel Facilities & Services'}
            </h2>
            <p className="text-stone-400 text-xs">
              {isAr ? 'كل ما تحتاجه لإقامة مريحة وسلسة في فندق لافونا' : 'Every amenity provided for your seamless stay in Dammam.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_DATA.map((facility) => {
              const getIcon = (id: string) => {
                switch(id) {
                  case 'free-wifi': return <Wifi className="w-5 h-5 text-amber-400" />;
                  case 'free-parking': return <Car className="w-5 h-5 text-amber-400" />;
                  case 'front-desk': return <Clock className="w-5 h-5 text-amber-400" />;
                  case 'restaurant': return <Utensils className="w-5 h-5 text-amber-400" />;
                  case 'air-conditioning': return <Wind className="w-5 h-5 text-amber-400" />;
                  case 'airport-shuttle': return <Bus className="w-5 h-5 text-amber-400" />;
                  default: return <Sparkles className="w-5 h-5 text-amber-400" />;
                }
              };

              return (
                <div
                  key={facility.id}
                  className="bg-purple-card border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 space-y-3 group flex flex-col justify-between"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120822] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-purple-950/90 border border-amber-500/30 flex items-center justify-center backdrop-blur-md">
                        {getIcon(facility.id)}
                      </div>
                      <span className="text-[10px] font-bold text-amber-300 bg-purple-950/90 px-2.5 py-0.5 rounded-full border border-amber-500/20 backdrop-blur-md">
                        {isAr ? facility.highlightAr : facility.highlightEn}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-2 flex-1">
                    <h3 className="font-cinzel text-base font-bold text-amber-300">
                      {isAr ? facility.titleAr : facility.titleEn}
                    </h3>

                    <p className="text-xs text-stone-400 leading-relaxed">
                      {isAr ? facility.shortDescAr : facility.shortDescEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-10">
            <button
              onClick={() => onNavigate('facilities')}
              className="px-6 py-3 rounded-xl text-xs font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/10 transition-colors"
            >
              {isAr ? 'استكشف التفاصيل الكاملة للمرافق' : 'Explore All Facilities & Services'}
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5 — LUXURY EXPERIENCE */}
      <section className="py-24 bg-[#0b0612] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#1b0f30] via-[#130a22] to-[#0b0612] border-2 border-amber-500/30 rounded-3xl p-8 sm:p-12 relative shadow-2xl overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              
              <div className="space-y-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  {isAr ? 'تجربة فندقية فاخرة' : 'THE LAVONA EXPERIENCE'}
                </span>

                <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-gold-gradient leading-tight">
                  {isAr
                    ? 'راحة مطلقة واهتمام بأدق التفاصيل'
                    : 'Unrivaled Luxury & Thoughtful Attention'}
                </h2>

                <p className="text-stone-300 text-sm leading-relaxed">
                  {isAr
                    ? 'في فندق لافونا، حرصنا على توفير بيئة هادئة ونظيفة للغاية تضمن لك ولعائلتك تجربة استرخاء لا تُنسى. من الأسرة الملكية الفاخرة، إلى استقبال الضيوف بالقهوة السعودية والتمر، نهتم بكل تفصيلة لتشعر وكأنك في بيتك الثاني.'
                    : 'At Lavona Hotel, every guest touchpoint is crafted with passion. From hyper-clean sanitized rooms to custom velvet furnishings, quiet climate control, and genuine Saudi hospitality, your stay is elevated from simple lodging to a memorable experience.'}
                </p>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{isAr ? 'تعقيم وتنظيف يومي معتمد بأعلى المعايير' : 'Highest hygiene & deep sanitization protocols'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{isAr ? 'استقبال حار بالقهوة السعودية الأصيلة والتمور' : 'Traditional Saudi Gahwa welcome coffee & premium dates'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{isAr ? 'مطعم ومأكولات شرقية وعالمية شهية' : 'Exquisite Middle Eastern & international dining'}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider text-stone-950 bg-gold-accent hover:bg-gold-hover shadow-lg shadow-amber-500/20 transition-all"
                  >
                    {isAr ? 'احجز تجربتك الفاخرة الآن' : 'BOOK YOUR SPECIAL STAY'}
                  </button>
                </div>

              </div>

              {/* Photo Showcase Grid */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={HOTEL_IMAGES.suiteBedroom}
                  alt="Royal Suite Interior"
                  className="rounded-2xl border border-amber-500/30 object-cover h-48 sm:h-56 w-full shadow-lg"
                />
                <img
                  src={HOTEL_IMAGES.gourmetBuffet}
                  alt="Gourmet Restaurant Dining"
                  className="rounded-2xl border border-amber-500/30 object-cover h-48 sm:h-56 w-full shadow-lg mt-6"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-16 bg-[#08040f] border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'آراء الضيوف والزوار' : 'GUEST REVIEWS'}
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-amber-300 mt-1">
              {isAr ? 'ماذا يقول ضيوف فندق لافونا' : 'What Our Guests Say'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-purple-950/40 p-6 rounded-2xl border border-amber-500/20 space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-300 italic leading-relaxed">
                  "{isAr ? t.commentAr : t.commentEn}"
                </p>
                <div className="pt-2 border-t border-amber-500/10">
                  <span className="font-bold text-xs text-amber-300 block">{isAr ? t.nameAr : t.nameEn}</span>
                  <span className="text-[10px] text-stone-400">{isAr ? t.roleAr : t.roleEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#180a2c] via-[#220d3f] to-[#180a2c] border-t border-amber-500/30 text-center relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="w-12 h-12 bg-gold-accent rounded-2xl flex items-center justify-center text-stone-950 font-bold font-cinzel mx-auto text-xl shadow-xl">
            L
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight drop-shadow">
            {isAr ? 'اجعل إقامتك مميزة في فندق لافونا' : 'Make Your Stay Special at Lavona Hotel'}
          </h2>

          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            {isAr
              ? 'احجز غرفتك أو جناحك الفاخر الآن واستمتع بأجواء الضيافة السعودية والخدمات الفندقية المتكاملة في الدمام.'
              : 'Book your room or suite today and experience true comfort and luxury hospitality in Al Dabab, Dammam.'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-stone-950 bg-gold-accent hover:bg-gold-hover shadow-2xl transition-all"
            >
              {isAr ? 'استكشف الغرف والأجنحة' : 'EXPLORE ROOMS'}
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-amber-200 border border-amber-500/40 bg-purple-950/80 hover:bg-purple-900 transition-all"
            >
              {isAr ? 'تواصل مع الفندق' : 'CONTACT HOTEL'}
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-amber-300/80 flex items-center justify-center gap-4">
            <a href={`tel:${HOTEL_INFO.rawPhone}`} className="hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Al Dabab, Dammam 32261</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
