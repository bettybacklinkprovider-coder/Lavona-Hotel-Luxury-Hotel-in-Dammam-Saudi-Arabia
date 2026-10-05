import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, MessageSquare, Send, CheckCircle2, ArrowUpRight, Compass, ShieldCheck, Share2 } from 'lucide-react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';

interface ContactPageProps {
  onOpenBooking: () => void;
  lang: 'en' | 'ar';
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenBooking,
  lang
}) => {
  const isAr = lang === 'ar';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setFormSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Lavona Hotel Dammam,\nMy name is ${name || 'Guest'}.\nI have an inquiry regarding reservation/services.`
  )}`;

  return (
    <div className="min-h-screen bg-[#0b0612] text-stone-200 pt-20">
      
      {/* Page Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d2c] via-[#10081d] to-[#0b0612] border-b border-amber-500/20 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            {isAr ? 'تواصل مباشر ومعلومات الموقع' : 'GET IN TOUCH'}
          </span>

          <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            {isAr ? 'اتصل بنا - فندق لافونا' : 'Contact Us'}
          </h1>

          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'فريق استقبال فندق لافونا في خدمتك على مدار 24 ساعة. لا تتردد في الاتصال بنا لحجز غرفتك أو الاستفسار عن كافة الخدمات.'
              : 'Our reception desk is available 24/7 to assist you with room bookings, airport transfers, and tailored hospitality.'}
          </p>
        </div>
      </section>

      {/* Main Info Cards & Contact Form Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Official Hotel Info & Direct Phone CTA */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Hotel Master Card */}
              <div className="bg-purple-card border-2 border-amber-500/30 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-4 border-b border-amber-500/20 pb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-accent flex items-center justify-center text-stone-950 font-bold font-cinzel text-xl shadow-lg">
                    L
                  </div>
                  <div>
                    <h2 className="font-cinzel text-xl font-bold text-amber-300">
                      {isAr ? HOTEL_INFO.nameAr : HOTEL_INFO.nameEn}
                    </h2>
                    <span className="text-xs text-amber-400 font-medium block">
                      {isAr ? 'الدمام - المملكة العربية السعودية' : 'Dammam, Saudi Arabia'}
                    </span>
                  </div>
                </div>

                {/* Direct Phone Highlight Card */}
                <div className="bg-gradient-to-r from-purple-950 to-[#180d2c] p-4 rounded-2xl border border-amber-500/40 space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    {isAr ? 'الهاتف المباشر للاستقبال' : 'DIRECT DESK PHONE'}
                  </span>
                  <a
                    href={`tel:${HOTEL_INFO.rawPhone}`}
                    className="font-mono text-2xl font-bold text-gold-gradient block hover:underline"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <p className="text-[11px] text-stone-400">
                    {isAr ? 'متاح 24 ساعة طوال أيام الأسبوع' : 'Available 24/7 for instant inquiries'}
                  </p>
                </div>

                {/* Info List */}
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <span className="block font-bold text-amber-300">{isAr ? 'العنوان المعتمد:' : 'Official Address:'}</span>
                      <span className="text-stone-300 leading-relaxed block mt-0.5">
                        {isAr ? HOTEL_INFO.addressAr : HOTEL_INFO.addressEn}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <span className="block font-bold text-amber-300">{isAr ? 'مواعيد الاستقبال:' : 'Reception Times:'}</span>
                      <span className="text-stone-300 block mt-0.5">
                        {isAr ? `تسجيل الدخول: ${HOTEL_INFO.checkIn} | تسجيل المغادرة: ${HOTEL_INFO.checkOut}` : `Check-In: ${HOTEL_INFO.checkIn} | Check-Out: ${HOTEL_INFO.checkOut}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <div>
                      <span className="block font-bold text-amber-300">{isAr ? 'البريد الإلكتروني:' : 'Email Address:'}</span>
                      <span className="font-mono text-stone-300 block mt-0.5">{HOTEL_INFO.email}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${HOTEL_INFO.rawPhone}`}
                    className="flex-1 py-3 rounded-xl text-xs font-bold text-stone-950 bg-gold-accent hover:bg-gold-hover transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{isAr ? 'اتصل الآن' : 'Call Hotel'}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl text-xs font-semibold text-amber-300 border border-amber-500/30 bg-purple-950/60 hover:bg-purple-900 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column: Contact & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-purple-card border border-amber-500/25 rounded-3xl p-8 shadow-2xl space-y-6">
                
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    {isAr ? 'إرسال استفسار أو طلب حجز' : 'SEND AN INQUIRY'}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-amber-300 mt-1">
                    {isAr ? 'تواصل مع إدارة فندق لافونا' : 'Contact Lavona Management'}
                  </h3>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1">
                          {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={isAr ? 'مثال: عبد الله الغامدي' : 'e.g. Abdullah Al-Ghamdi'}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-4 py-3 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1">
                          {isAr ? 'رقم الجوال *' : 'Phone Number *'}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 50 000 0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-4 py-3 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1">
                          {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                        </label>
                        <input
                          type="email"
                          placeholder="email@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-4 py-3 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-300 mb-1">
                          {isAr ? 'موضوع الرسالة' : 'Inquiry Subject'}
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-4 py-3 text-xs text-amber-200 focus:outline-none focus:border-amber-400"
                        >
                          <option value="General Inquiry">{isAr ? 'استفسار عام' : 'General Inquiry'}</option>
                          <option value="Room Reservation">{isAr ? 'حجز غرفة أو جناح' : 'Room Reservation'}</option>
                          <option value="Airport Shuttle">{isAr ? 'توصيل المطار' : 'Airport Shuttle Transfer'}</option>
                          <option value="Restaurant Dining">{isAr ? 'حجز المطعم والمناسبات' : 'Restaurant Dining'}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        {isAr ? 'نص الرسالة أو الاستفسار *' : 'Message or Inquiry Details *'}
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder={isAr ? 'اكتب تفاصيل استفسارك هنا...' : 'Type your detailed inquiry or booking request here...'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl p-4 text-xs text-stone-200 focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-950 bg-gold-accent hover:bg-gold-hover shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isAr ? 'إرسال الرسالة لإدارة الفندق' : 'SEND MESSAGE TO LAVONA'}</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4 animate-fadeIn">
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                    <h4 className="font-cinzel text-xl font-bold text-amber-300">
                      {isAr ? 'تم استلام رسالتك بنجاح' : 'Message Received Successfully'}
                    </h4>
                    <p className="text-xs text-stone-300 max-w-md mx-auto">
                      {isAr
                        ? 'شكراً لتواصلكم مع فندق لافونا بالدمام. سيقوم موظف الاستقبال بالرد عليكم في أقرب وقت.'
                        : 'Thank you for reaching out to Lavona Hotel Dammam. Our reception team will contact you shortly.'}
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-amber-300 border border-amber-500/30 bg-purple-900/40"
                    >
                      {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Location & Google Map Simulation Section */}
      <section className="py-20 bg-[#07030d] border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isAr ? 'خريطة فندق لافونا الدمام' : 'HOTEL LOCATION & MAP'}
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-gold-gradient">
              {isAr ? 'موقعنا المميز في حي الضباب' : 'Al Dabab, Dammam Location'}
            </h2>
          </div>

          {/* Map Simulated Frame */}
          <div className="bg-[#120a1f] border-2 border-amber-500/30 rounded-3xl p-6 shadow-2xl relative space-y-6">
            
            {/* Visual Simulated Map Display */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-amber-500/30 bg-[#160c26] flex items-center justify-center text-center p-6">
              <img
                src={HOTEL_IMAGES.hotelFacade}
                alt="Lavona Hotel Facade Dammam"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0612] via-[#0b0612]/70 to-transparent" />

              <div className="relative z-10 space-y-4 max-w-md">
                <div className="w-12 h-12 rounded-full bg-gold-accent flex items-center justify-center text-stone-950 font-bold mx-auto shadow-xl animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-amber-300">
                  {isAr ? 'فندق لافونا - حي الضباب، الدمام' : 'Lavona Hotel – Al Dabab, Dammam 32261'}
                </h3>
                <p className="text-xs text-stone-300">
                  {isAr ? 'الدمام 32261، المنطقة الشرقية، المملكة العربية السعودية' : 'Dammam 32261, Eastern Province, Kingdom of Saudi Arabia'}
                </p>

                <a
                  href="https://maps.google.com/?q=Al+Dabab+Dammam+Saudi+Arabia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-stone-950 bg-gold-accent hover:bg-gold-hover shadow-xl transition-all"
                >
                  <span>{isAr ? 'فتح الملاحة في Google Maps' : 'OPEN IN GOOGLE MAPS'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Distance to Key Dammam Landmarks */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                {isAr ? 'المسافة إلى أهم المعالم بالدمام:' : 'PROXIMITY TO DAMMAM LANDMARKS:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
                {HOTEL_INFO.nearbyLandmarks.map((lm, i) => (
                  <div key={i} className="bg-purple-950/50 p-3 rounded-xl border border-amber-500/20 text-center">
                    <span className="block font-bold text-amber-200 text-xs mb-1">
                      {isAr ? lm.nameAr : lm.nameEn}
                    </span>
                    <span className="font-mono text-stone-400 text-[11px]">
                      {isAr ? lm.distanceAr : lm.distanceEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
