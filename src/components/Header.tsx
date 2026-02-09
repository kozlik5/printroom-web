import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Domov' },
  { to: '/sluzby', label: 'Služby' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-lg py-2' : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#005088] to-[#0070b8] text-white flex items-center justify-center font-black text-xl rounded-xl">P</div>
            <span className="text-2xl font-black uppercase tracking-tighter text-slate-900">Printroom</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                location.pathname === l.to
                  ? 'text-accent'
                  : 'text-slate-700 hover:text-primary'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors"
          >
            Cenová ponuka
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-2xl border-t">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-base font-bold uppercase tracking-wider py-2 ${
                  location.pathname === l.to ? 'text-accent' : 'text-slate-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-accent text-white text-center px-5 py-3 rounded-lg font-bold uppercase tracking-wider mt-2"
            >
              Cenová ponuka
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
