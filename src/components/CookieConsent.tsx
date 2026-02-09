import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white p-4 md:p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-slate-300 flex-1">
          Táto stránka používa cookies na zlepšenie používateľského zážitku. Viac informácií nájdete v{' '}
          <Link to="/gdpr" className="underline text-white hover:text-accent transition-colors">Zásadách ochrany osobných údajov</Link>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Odmietnuť
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-accent rounded-lg hover:bg-orange-600 font-bold transition-colors"
          >
            Prijať
          </button>
        </div>
      </div>
    </div>
  );
}
