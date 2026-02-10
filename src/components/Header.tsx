import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const navLinks = siteConfig.navigation.main;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0f1129]/95 backdrop-blur shadow-lg py-2'
          : 'bg-white dark:bg-[#0f1129] shadow-md dark:shadow-slate-900/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
        <Link to="/" className="flex items-center group">
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="h-12 w-auto invert dark:invert-0 group-hover:scale-105 transition-all duration-300"
          />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                location.pathname === l.to
                  ? 'text-[#f97316] border border-[#f97316]'
                  : 'text-slate-500 dark:text-slate-400 border border-transparent hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-[#f97316]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side — theme + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            to="/kontakt"
            className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 text-white px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300"
          >
            {siteConfig.cta.primary}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-slate-900 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#1a1d3a] shadow-2xl border-t border-slate-200 dark:border-slate-700">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-base font-bold uppercase tracking-wider py-2 ${
                  location.pathname === l.to ? 'text-[#f97316]' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white text-center px-5 py-3 rounded-xl font-bold uppercase tracking-wider mt-2"
            >
              {siteConfig.cta.primary}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
