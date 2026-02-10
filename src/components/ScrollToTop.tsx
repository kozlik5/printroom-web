import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide label after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <div className="flex items-center gap-2">
        {showLabel && (
          <div className="bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-lg animate-pulse">
            Napíšte nám 💬
          </div>
        )}
        <a
          href="https://wa.me/421903584020?text=Dobrý%20deň%2C%20mám%20záujem%20o%20cenovú%20ponuku."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Napíšte nám na WhatsApp"
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
        >
          <MessageCircle size={26} />
        </a>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`w-12 h-12 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white rounded-full shadow-lg shadow-orange-500/25 flex items-center justify-center hover:scale-110 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Späť hore"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
