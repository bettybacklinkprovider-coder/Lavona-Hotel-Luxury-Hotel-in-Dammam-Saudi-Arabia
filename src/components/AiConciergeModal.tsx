import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, Phone, MapPin, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
  onNavigateContact?: () => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({
  isOpen,
  onClose,
  lang,
  onNavigateContact
}) => {
  const isAr = lang === 'ar';

  const initialBotMessage = isAr
    ? `مرحباً بك في فندق لافونا الدمام! أنا مساعدك الذكي الخاص. يسعدني الإجابة عن استفساراتك حول الغرف، الأجنحة الملكية، الخدمات، المطعم، أو معالم مدينة الدمام. كيف يمكنني مساعدتك اليوم؟`
    : `Welcome to Lavona Hotel Dammam! I am your personal Virtual Concierge. I am delighted to assist you with room inquiries, luxury amenities, dining, or local guidance in Dammam. How may I serve you today?`;

  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: initialBotMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = isAr ? [
    'أين يقع فندق لافونا وما هو رقم التواصل؟',
    'ما هي أفضل الغرف المتاحة مع الأسعار؟',
    'كيف يمكنني طلب خدمة توصيل المطار؟',
    'ما هي أبرز الأماكن السياحية القريبة بالدمام؟'
  ] : [
    'Where is Lavona Hotel located & phone number?',
    'What room types and prices are available?',
    'How do I request airport shuttle transfer?',
    'What are nearby attractions in Dammam?'
  ];

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { sender: 'user', text: textToSend, time };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend, language: lang })
      });

      const data = await res.json();
      const botReply = data.reply || (isAr ? 'نسعد بخدمتك في فندق لافونا.' : 'We are happy to assist you at Lavona Hotel.');
      setMessages(prev => [...prev, { sender: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch {
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: isAr
          ? `فندق لافونا يرحب بكم في حي الضباب بالدمام. الهاتف المباشر للاستقبال: ${HOTEL_INFO.phone}`
          : `Lavona Hotel welcomes you in Al Dabab, Dammam. Reception phone: ${HOTEL_INFO.phone}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#120a1f] border border-amber-500/30 rounded-2xl max-w-xl w-full h-[600px] flex flex-col shadow-2xl overflow-hidden relative text-stone-200">
        
        {/* Header */}
        <div className="bg-[#0b0612] border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md">
              <div className="w-full h-full bg-[#120a1f] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-amber-300">
                {isAr ? 'المساعد الذكي - فندق لافونا' : 'Lavona AI Virtual Concierge'}
              </h3>
              <p className="text-[11px] text-stone-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isAr ? 'متصل الآن لخدمتك 24/7' : 'Online 24/7 Hospitality Assistant'}</span>
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

        {/* Message History Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0510]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-purple-900/60 border border-amber-500/30 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-amber-400" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gold-accent text-stone-950 font-medium rounded-br-none shadow-md'
                    : 'bg-[#1a0e2e] text-stone-200 border border-amber-500/20 rounded-bl-none shadow-md'
                }`}
              >
                <p>{msg.text}</p>
                <span
                  className={`block text-[9px] mt-1 text-right ${
                    msg.sender === 'user' ? 'text-stone-800' : 'text-stone-400'
                  }`}
                >
                  {msg.time}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4 text-amber-300" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2 items-center text-xs text-amber-300/80 italic p-2">
              <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
              <span>{isAr ? 'جاري كتابة الرد الفندقي...' : 'Lavona Concierge is typing...'}</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-[#0b0612] border-t border-amber-500/10 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              className="px-3 py-1.5 rounded-full text-[11px] text-amber-300 bg-purple-950/60 hover:bg-purple-900 border border-amber-500/20 transition-colors shrink-0"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0b0612] border-t border-amber-500/20 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isAr ? 'اسأل المساعد الذكي أي سؤال عن فندق لافونا...' : 'Ask the Virtual Concierge anything about Lavona Hotel...'}
            className="flex-1 bg-[#1a0e2e] border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
          />
          
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="p-2.5 rounded-xl bg-gold-accent hover:bg-gold-hover disabled:opacity-50 text-stone-950 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Contact Footer Strip */}
        <div className="bg-[#07030d] px-4 py-2 text-[10px] text-stone-400 flex items-center justify-between border-t border-stone-800">
          <a href={`tel:${HOTEL_INFO.rawPhone}`} className="flex items-center gap-1 hover:text-amber-300">
            <Phone className="w-3 h-3 text-amber-400" />
            <span className="font-mono">{HOTEL_INFO.phone}</span>
          </a>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Al Dabab, Dammam</span>
          </span>
        </div>

      </div>
    </div>
  );
};
