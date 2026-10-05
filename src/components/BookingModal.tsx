import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle, Printer, MessageSquare, ShieldCheck } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO, Room } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
  lang: 'en' | 'ar';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId,
  lang
}) => {
  const isAr = lang === 'ar';

  const defaultRoom = ROOMS_DATA.find(r => r.id === selectedRoomId) || ROOMS_DATA[0];
  const [roomId, setRoomId] = useState<string>(defaultRoom.id);

  // Dates
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  const defaultCheckOut = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(defaultCheckOut);
  const [guests, setGuests] = useState<number>(2);

  // Guest Contact
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Confirmation state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find(r => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const dateIn = new Date(checkIn);
  const dateOut = new Date(checkOut);
  const nights = Math.max(1, Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 3600 * 24)));
  
  const roomTotal = currentRoom.priceSar * nights;
  const vatTax = Math.round(roomTotal * 0.15); // 15% VAT in Saudi
  const grandTotal = roomTotal + vatTax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    const refCode = 'LAV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Lavona Hotel Dammam,\nI would like to confirm my booking reservation:\nReference: ${bookingRef}\nName: ${fullName}\nRoom: ${currentRoom.nameEn}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nTotal: ${grandTotal} SAR\nPhone: ${phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#120a1f] border border-amber-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-stone-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#0b0612]/95 border-b border-amber-500/20 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold-accent flex items-center justify-center text-stone-950 font-bold font-cinzel">
              L
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-amber-300">
                {isAr ? 'حجز فندقي مباشر - فندق لافونا' : 'Lavona Hotel Direct Reservation'}
              </h3>
              <p className="text-xs text-stone-400">
                {isAr ? 'ضمان أفضل الأسعار وتأكيد فوري' : 'Best Rate Guarantee & Instant Voucher'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white bg-stone-900/50 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Room Selection & Info */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  {isAr ? 'اختر نوع الغرفة / الجناح' : 'SELECT ROOM OR SUITE'}
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-4 py-3 text-sm text-amber-200 font-medium focus:outline-none focus:border-amber-400"
                >
                  {ROOMS_DATA.map((rm) => (
                    <option key={rm.id} value={rm.id}>
                      {isAr ? rm.nameAr : rm.nameEn} — {rm.priceSar} SAR / {isAr ? 'ليلة' : 'night'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Room Preview Strip */}
              <div className="flex items-center gap-4 bg-purple-950/40 p-3.5 rounded-xl border border-amber-500/20">
                <img
                  src={currentRoom.image}
                  alt={currentRoom.nameEn}
                  className="w-20 h-16 object-cover rounded-lg border border-amber-500/30"
                />
                <div className="flex-1 text-xs">
                  <h4 className="font-bold text-amber-300 text-sm">{isAr ? currentRoom.nameAr : currentRoom.nameEn}</h4>
                  <p className="text-stone-400 mt-0.5">{isAr ? currentRoom.bedTypeAr : currentRoom.bedTypeEn} · {currentRoom.sizeSqM} m²</p>
                  <p className="text-amber-400 font-bold font-mono mt-1">{currentRoom.priceSar} SAR <span className="text-stone-400 font-normal">{isAr ? '/ ليلة' : '/ night'}</span></p>
                </div>
              </div>

              {/* Dates & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {isAr ? 'تاريخ الوصول' : 'Check-In Date'}
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-3 py-2.5 text-xs text-amber-200 focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {isAr ? 'تاريخ المغادرة' : 'Check-Out Date'}
                  </label>
                  <input
                    type="date"
                    min={checkIn}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-3 py-2.5 text-xs text-amber-200 focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {isAr ? 'عدد النزلاء' : 'Number of Guests'}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl px-3 py-2.5 text-xs text-amber-200 focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {isAr ? (num === 1 ? 'نزيل' : 'نزلاء') : (num === 1 ? 'Guest' : 'Guests')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Information */}
              <div className="space-y-4 pt-2 border-t border-amber-500/20">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  {isAr ? 'بيانات النزيل الرئيسي' : 'MAIN GUEST DETAILS'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">{isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder={isAr ? 'مثال: محمد العتيبي' : 'e.g. John Smith'}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-stone-300 mb-1">{isAr ? 'رقم الجوال *' : 'Phone Number *'}</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder={isAr ? 'مثال: +966 50 123 4567' : '+966 50 123 4567'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="guest@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1">
                    {isAr ? 'طلبات خاصة (توصيل مطار، دور مرتفع، سرير إضافي)' : 'Special Requests (Airport transfer, high floor, etc.)'}
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder={isAr ? 'اكتب أي طلبات إضافية هنا...' : 'Mention any special hospitality preferences...'}
                    className="w-full bg-[#1c102e] border border-amber-500/30 rounded-xl p-3 text-xs text-stone-200 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="bg-gradient-to-r from-purple-950/60 to-[#180e29] border border-amber-500/30 rounded-xl p-4 text-xs space-y-2">
                <div className="flex justify-between text-stone-300">
                  <span>{currentRoom.priceSar} SAR × {nights} {isAr ? (nights === 1 ? 'ليلة' : 'ليالٍ') : (nights === 1 ? 'night' : 'nights')}</span>
                  <span className="font-mono">{roomTotal} SAR</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>{isAr ? 'ضريبة القيمة المضافة (15%)' : 'VAT & Municipal Fees (15%)'}</span>
                  <span className="font-mono">{vatTax} SAR</span>
                </div>
                <div className="pt-2 border-t border-amber-500/20 flex justify-between items-center text-sm font-bold text-amber-300">
                  <span>{isAr ? 'المبلغ الإجمالي المبدئي' : 'Grand Total'}</span>
                  <span className="font-mono text-lg text-gold-gradient">{grandTotal} SAR</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wider text-stone-950 uppercase bg-gold-accent hover:bg-gold-hover shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isAr ? 'تأكيد طلب الحجز والحصول على القسيمة' : 'CONFIRM RESERVATION & VOUCHER'}</span>
              </button>

              <p className="text-[11px] text-center text-stone-400 flex items-center justify-center gap-1">
                <span>{isAr ? 'دفع عند الوصول بالفندق أو عبر الاستقبال. لا يتطلب كرت ائتمان مسبق.' : 'Pay upon arrival or at front desk. No upfront card required.'}</span>
              </p>
            </form>
          ) : (
            /* Confirmation Voucher View */
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                  {isAr ? 'تم تأكيد طلب الحجز بنجاح' : 'RESERVATION CONFIRMED'}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-gold-gradient mt-1">
                  {isAr ? 'أهلاً بك في فندق لافونا' : 'Welcome to Lavona Hotel'}
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  {isAr ? 'تم إصدار قسيمة الحجز الخاصة بك. يمكنك حفظ القسيمة أو إرسالها مباشرة لإدارة الفندق.' : 'Your official voucher is generated below. Present this upon check-in.'}
                </p>
              </div>

              {/* Printable Voucher Card */}
              <div className="bg-[#1a0e2e] border-2 border-amber-500/40 rounded-2xl p-6 text-left space-y-4 shadow-2xl relative overflow-hidden">
                <div className="flex justify-between items-start border-b border-amber-500/20 pb-4">
                  <div>
                    <h4 className="font-cinzel font-bold text-amber-300 text-lg">LAVONA HOTEL DAMMAM</h4>
                    <p className="text-[11px] text-stone-400">{HOTEL_INFO.addressEn}</p>
                    <p className="text-[11px] text-amber-300 font-mono">{HOTEL_INFO.phone}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-stone-400 block">{isAr ? 'رقم المرجع' : 'REF CODE'}</span>
                    <span className="font-mono text-lg font-bold text-amber-400 bg-purple-950 px-2.5 py-1 rounded border border-amber-500/30">
                      {bookingRef}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">{isAr ? 'اسم النزيل:' : 'Guest Name:'}</span>
                    <span className="font-semibold text-stone-100 text-sm">{fullName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">{isAr ? 'الجوال:' : 'Phone:'}</span>
                    <span className="font-mono text-stone-200">{phone}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">{isAr ? 'الغرفة / الجناح:' : 'Room Type:'}</span>
                    <span className="font-semibold text-amber-300">{isAr ? currentRoom.nameAr : currentRoom.nameEn}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">{isAr ? 'عدد الليالي:' : 'Nights:'}</span>
                    <span className="font-mono text-stone-200">{nights} {isAr ? 'ليلة' : 'night(s)'}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">{isAr ? 'تاريخ الوصول:' : 'Check-In:'}</span>
                    <span className="font-mono text-amber-300">{checkIn}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">{isAr ? 'تاريخ المغادرة:' : 'Check-Out:'}</span>
                    <span className="font-mono text-amber-300">{checkOut}</span>
                  </div>
                </div>

                <div className="bg-purple-950/80 p-3 rounded-xl flex justify-between items-center border border-amber-500/20 text-xs">
                  <span>{isAr ? 'المبلغ الإجمالي المستحق بالفندق:' : 'Total Payable at Hotel:'}</span>
                  <span className="font-mono text-base font-bold text-amber-300">{grandTotal} SAR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isAr ? 'إرسال التأكيد للواتساب' : 'Send via WhatsApp'}</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="w-full sm:flex-1 py-3 rounded-xl text-xs font-semibold text-amber-300 border border-amber-500/30 bg-purple-900/40 hover:bg-purple-800/60 transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>{isAr ? 'طباعة القسيمة' : 'Print Voucher'}</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-stone-400 hover:text-stone-200 transition-colors"
              >
                {isAr ? 'إغلاق النافذة' : 'Close Window'}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
