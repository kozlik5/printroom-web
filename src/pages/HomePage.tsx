import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer, Shirt, Maximize, FileText, Car,
  ArrowRight, CheckCircle2, Mail, Phone, MapPin, ChevronRight, Star, Gift, Box, Instagram, Facebook, Menu, X,
  Sun, Moon
} from 'lucide-react';
const services = [
  { title: 'Potlač Textilu', icon: <Shirt size={32} />, desc: 'Tričká, mikiny, čiapky, pracovné odevy. Sieťotlač aj DTG.', size: 'large', img: '/images/services/potlac-textilu.jpg', slug: 'potlac-textilu', imgPos: 'right' as const },
  { title: 'Reklamné Predmety', icon: <Gift size={32} />, desc: 'Perá, hrnčeky, tašky, zápisníky s vašim logom.', size: 'small', img: '/images/services/firemne-darceky.jpg', slug: 'reklamne-predmety' },
  { title: '3D Služby', icon: <Box size={32} />, desc: '3D tlač, skenovanie a modelovanie. Prototypy aj hotové diely.', size: 'small', img: '/images/services/3d-sluzby.jpg', slug: '3d-sluzby' },
  { title: 'Bannery a Plagáty', icon: <Maximize size={32} />, desc: 'Veľkoformátová tlač, roll-upy, mesh. Express do 24h.', size: 'small', img: '/images/services/bannery-plagaty.jpg', slug: 'bannery-velkoformat' },
  { title: 'Vizitky a Brožúry', icon: <FileText size={32} />, desc: 'Vizitky, katalógy, letáky. Od kusovky po náklad.', size: 'large', img: '/images/services/vizitky.jpg', slug: 'tlac-polygrafia' },
  { title: 'Polepy', icon: <Car size={32} />, desc: 'Polepy áut, výkladov, interiérov. Návrh aj realizácia.', size: 'small', img: '/images/services/polepy.jpg', slug: 'polepy' },
  { title: 'Vyšívanie na Textil', icon: <Printer size={32} />, desc: 'Luxusná aplikácia loga vyšívaním na textil.', size: 'small', img: '/images/services/potlac-alt.jpg', slug: 'potlac-textilu' },
];

const testimonials = [
  { name: 'Martin K.', role: 'Marketingový manažér', text: 'Spolupráca s Printroom bola bezproblémová. Tričká pre celý tím do 3 dní, perfektná kvalita.', rating: 5 },
  { name: 'Jana S.', role: 'Koordinátorka eventov', text: 'Bannery na konferenciu zvládli za 24 hodín. Farby presné, materiál odolný. Odporúčam.', rating: 5 },
  { name: 'Peter D.', role: 'Majiteľ e-shopu', text: 'Vizitky a katalógy vyzerajú prémiovo. Konečne dodávateľ, na ktorého sa môžeme spoľahnúť.', rating: 5 },
  { name: 'Lucia M.', role: 'Grafická dizajnérka', text: 'Rýchla komunikácia a výsledok presne podľa návrhu. Polepy na autá vyzerajú fantasticky.', rating: 5 },
];

/* Animated counter hook */
function useCountUp(end: number, duration = 2000, suffix = '') {
  const [value, setValue] = useState('0' + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * end) + suffix);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, suffix]);

  return { ref, value };
}

function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end, 2000, suffix);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">{value}</div>
      <div className="mt-2 text-sm text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">{label}</div>
    </div>
  );
}

function HomeContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      meno: fd.get('Meno') || '',
      email: fd.get('Email') || '',
      telefon: fd.get('Telefon') || '',
      sprava: fd.get('Sprava') || '',
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) { setStatus('success'); form.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-black uppercase mb-2 text-slate-900 dark:text-white">Ďakujeme!</h3>
        <p className="text-slate-500 dark:text-slate-400">Ozveme sa vám do 24 hodín.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-[#005088] dark:text-[#f97316] font-bold text-sm uppercase tracking-wider hover:text-[#f97316] transition">Poslať ďalší dopyt</button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Vaše Meno</label>
        <input type="text" name="Meno" required className="w-full bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-white/20 p-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-500/20 transition rounded-xl" placeholder="Jozef Mrkvička" />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Email</label>
        <input type="email" name="Email" required className="w-full bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-white/20 p-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-500/20 transition rounded-xl" placeholder="vas@email.sk" />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Telefón</label>
        <input type="tel" name="Telefon" className="w-full bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-white/20 p-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-500/20 transition rounded-xl" placeholder="+421 ..." />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Vaša Požiadavka</label>
        <textarea name="Sprava" rows={4} required className="w-full bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-white/20 p-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-500/20 transition rounded-xl" placeholder="Povedzte nám o vašich plánoch..."></textarea>
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required className="mt-1 accent-[#f97316]" />
        <span className="text-xs text-slate-500 dark:text-slate-400">Súhlasím so spracovaním osobných údajov podľa <a href="/gdpr" className="text-[#005088] dark:text-[#f97316] underline">Zásad ochrany osobných údajov</a></span>
      </label>
      {status === 'error' && <p className="text-red-500 text-sm font-bold">Nastala chyba. Skúste znova alebo nás kontaktujte telefonicky.</p>}
      <button disabled={status === 'sending'} className="w-full bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white py-6 font-black uppercase text-xs tracking-[0.3em] hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02] transition-all duration-300 rounded-xl group flex items-center justify-center gap-4 disabled:opacity-50">
        {status === 'sending' ? 'Odosielam...' : 'Odoslať dopyt'}
        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </form>
  );
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode initialization and persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1129] text-slate-900 dark:text-white font-sans selection:bg-orange-100 selection:text-orange-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#0f1129]/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center group cursor-pointer">
            <img src="/images/logo-white.png" alt="Print room" className={`h-12 w-auto group-hover:scale-105 transition-all duration-300 ${isScrolled ? 'invert dark:invert-0' : ''}`} />
          </a>
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <a href="#sluzby" className="hover:text-[#005088] dark:hover:text-[#f97316] transition">Služby</a>
            <a href="/portfolio" className="hover:text-[#005088] dark:hover:text-[#f97316] transition">Portfólio</a>
            <a href="#kontakt" className="hover:text-[#005088] dark:hover:text-[#f97316] transition">Kontakt</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="tel:+421903584020" className="hidden lg:flex items-center gap-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#005088] dark:hover:text-[#f97316] transition">
              <Phone size={14} className="text-[#f97316]" />
              <span>+421 903 584 020</span>
            </a>
            <a href="#kontakt" className="hidden lg:inline-block bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-xl hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
              Cenová Ponuka
            </a>
          </div>
          <button className="lg:hidden text-slate-900 dark:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white dark:bg-[#1a1d3a] shadow-2xl border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col p-6 gap-4">
              <a href="#sluzby" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 dark:text-slate-300 hover:text-[#005088] dark:hover:text-[#f97316]">Služby</a>
              <a href="/portfolio" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 dark:text-slate-300 hover:text-[#005088] dark:hover:text-[#f97316]">Portfólio</a>
              <a href="#kontakt" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 dark:text-slate-300 hover:text-[#005088] dark:hover:text-[#f97316]">Kontakt</a>
              <a href="tel:+421903584020" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-base font-bold py-2 text-[#005088] dark:text-[#f97316]">
                <Phone size={18} className="text-[#f97316]" /> +421 903 584 020
              </a>
              <a href="#kontakt" onClick={() => setMobileOpen(false)} className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white text-center px-6 py-4 rounded-xl font-bold uppercase tracking-wider mt-2">
                Cenová Ponuka
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0a0e27]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/services/hero-tlaciaren-splash-hd.jpg" alt="" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27] via-[#0a0e27]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md border border-white/15 px-5 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f97316]">🖨️ Od roku 2013 v Petržalke</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[90px] font-black leading-[1] tracking-tighter mb-8 text-white">
              MODERNÁ TLAČ <br />
              <span className="text-[#2a6f9a]">PRE VÁŠ</span> <br />
              <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent italic">BIZNIS.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed italic border-l-4 border-[#f97316] pl-6">
              Váš partner v Petržalke od roku 2013. Prinášame komplexné riešenia od 1 kusu po tisícové série.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#sluzby" className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 rounded-2xl">
                Naše Služby <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span className="text-2xl italic font-black tracking-normal bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">11+</span> rokov skúseností
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 min-h-[500px] hidden lg:block">
            {/* Floating testimonial bubbles */}
            {testimonials.map((t, i) => {
              const positions = [
                { top: '0%', left: '5%', rotate: '-2deg', delay: '0s' },
                { top: '30%', left: '45%', rotate: '1.5deg', delay: '0.5s' },
                { top: '55%', left: '0%', rotate: '-1deg', delay: '1s' },
                { top: '78%', left: '35%', rotate: '2deg', delay: '1.5s' },
              ];
              const pos = positions[i];
              return (
                <div
                  key={i}
                  className="absolute animate-float group"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: `rotate(${pos.rotate})`,
                    animationDelay: pos.delay,
                    animationDuration: `${4 + i}s`,
                  }}
                >
                  {/* Speech bubble */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 max-w-[280px] shadow-xl shadow-black/20 hover:bg-white/15 hover:scale-105 transition-all duration-300">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={10} className="fill-[#f97316] text-[#f97316]" />
                      ))}
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed">"{t.text}"</p>
                    {/* Bubble tail */}
                    <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/10 border-b border-r border-white/15 transform rotate-45"></div>
                  </div>
                  {/* Avatar */}
                  <div className="flex items-center gap-2 mt-4 ml-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f97316] to-[#f59e0b] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-orange-500/30 ring-2 ring-white/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs">{t.name}</div>
                      <div className="text-white/40 text-[10px]">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento Services Section */}
      <section id="sluzby" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 dark:from-slate-800/30 to-white dark:to-[#0f1129]">
        <div className="max-w-[1400px] mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic text-slate-900 dark:text-white">
              Čo <br />
              <span className="bg-gradient-to-r from-[#005088] to-[#0070b8] bg-clip-text text-transparent">dokážeme.</span>
            </h2>
            <p className="text-slate-400 dark:text-slate-500 max-w-sm text-xs font-bold uppercase tracking-[0.3em] text-center lg:text-right">
              01 — Produkčné disciplíny pod jednou strechou
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, idx) => (
              <Link
                to={`/sluzby/${service.slug}`}
                key={idx}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer block ${
                  service.size === 'large' ? 'md:col-span-8 h-[450px]' : 'md:col-span-4 h-[450px]'
                }`}
              >
                {/* Background photo */}
                <img src={service.img} alt={service.title} className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${'imgPos' in service && service.imgPos === 'right' ? 'object-right' : ''}`} />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500"></div>
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#005088] to-[#f97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="flex justify-between items-start">
                    <div className="text-white/90 group-hover:text-[#f97316] transition-colors duration-300 p-3 bg-white/10 backdrop-blur-sm rounded-xl">{service.icon}</div>
                    <span className="text-[10px] font-black text-white/30 group-hover:text-white/60 transition-colors">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black uppercase mb-4 leading-tight text-white group-hover:text-[#f97316] transition-colors">{service.title}</h3>
                    <p className="text-white/70 text-sm font-light max-w-xs">{service.desc}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/80 mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      Zistiť viac <ChevronRight size={14} className="text-[#f97316]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section id="proces" className="py-24 md:py-32 bg-white dark:bg-[#0f1129] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-r from-[#005088]/5 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic mb-12 text-slate-900 dark:text-white">
                Plynulá <br />
                <span className="bg-gradient-to-r from-[#f97316] to-[#ef4444] bg-clip-text text-transparent">produkcia.</span>
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Konzultácia', text: 'Vyberieme technológiu a vzorkovník materiálu.' },
                  { step: '02', title: 'Prototyp', text: 'Kontrola grafiky a vytvorenie vzorky pred výrobou.' },
                  { step: '03', title: 'Výroba', text: 'Precízna tlač pod dohľadom majstrov polygrafie.' },
                  { step: '04', title: 'Expedícia', text: 'Doručenie kuriérom alebo odber v Petržalke.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group items-start">
                    <span className="text-4xl font-black bg-gradient-to-b from-slate-200 to-slate-100 bg-clip-text text-transparent group-hover:from-[#005088] group-hover:to-[#0070b8] transition-all duration-300">{item.step}</span>
                    <div className="border-l-2 border-slate-100 dark:border-slate-700 group-hover:border-[#f97316] transition-colors pl-6">
                      <h4 className="font-black uppercase text-sm tracking-widest mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-light italic">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0a0e27] aspect-square rounded-3xl overflow-hidden relative group shadow-2xl shadow-blue-900/20 ring-[3px] ring-white/40 backdrop-blur-sm p-2">
              <img
                src="/images/services/printroom-kolaz.jpg"
                alt="Print room - služby a logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-[#1a1d3a]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat end={5000} suffix="+" label="Dokončených zákaziek" />
          <AnimatedStat end={24} suffix="h" label="Express výroba" />
          <AnimatedStat end={11} suffix="+" label="Rokov skúseností" />
          <AnimatedStat end={98} suffix="%" label="Spokojných klientov" />
        </div>
      </section>

      {/* Analytics Capacity */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-[200px] font-black italic whitespace-nowrap -translate-y-20">CAPACITY DATA</div>
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-[#005088]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-[#f97316]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 border border-white/10 rounded-2xl">
              <h4 className="text-center font-bold uppercase text-[10px] tracking-[0.4em] mb-10 bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">Aktuálna produkčná kapacita</h4>
              <div className="space-y-5">
                {[
                  { label: 'Textil', value: 95, color: 'from-[#f97316] to-[#f59e0b]' },
                  { label: 'Reklama', value: 85, color: 'from-[#005088] to-[#0070b8]' },
                  { label: '3D', value: 80, color: 'from-[#8b5cf6] to-[#a78bfa]' },
                  { label: 'Bannery', value: 90, color: 'from-[#f97316] to-[#ef4444]' },
                  { label: 'Polygrafia', value: 100, color: 'from-[#005088] to-[#00a8e8]' },
                  { label: 'Polepy', value: 75, color: 'from-[#10b981] to-[#34d399]' },
                  { label: 'Výšivka', value: 85, color: 'from-[#f97316] to-[#f59e0b]' },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs md:text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item.label}</span>
                      <span className="text-xs md:text-[10px] font-black text-white/80">{item.value}%</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-700`}
                        style={{ width: `${item.value}%`, animation: `growBar 1.5s ease-out ${i * 0.1}s both` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <style>{`@keyframes growBar { from { width: 0% } }`}</style>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic mb-8">
                Sme pripravení <br /> na <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">výzvy.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 italic">
                Neustále investujeme do technologického parku. Sledujeme trendy v sieťotlači aj 3D realizáciách, aby sme vám dodali výsledok svetovej úrovne.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl border-l-4 border-l-[#005088]">
                  <div className="text-2xl md:text-3xl font-black tracking-tighter italic bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">24/48h</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-2">Expres doručenie</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl border-l-4 border-l-[#f97316]">
                  <div className="text-2xl md:text-3xl font-black tracking-tighter italic bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">100%</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-2">Kvalita materiálu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 bg-white dark:bg-[#0f1129] relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#005088] to-[#003d68] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-blue-900/20">
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-10">
                  Napíšte <br /> <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">nám.</span>
                </h2>
                <p className="text-blue-100 text-lg font-light mb-16 max-w-sm italic">
                  Povedzte nám o svojom projekte a my vám navrhneme najlepšiu cestu k realizácii.
                </p>
                <div className="space-y-6">
                  <a href="mailto:print@printroom.sk" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#f97316] group-hover:bg-gradient-to-r group-hover:from-[#f97316] group-hover:to-[#f59e0b] group-hover:text-white transition-all rounded-xl">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">print@printroom.sk</span>
                  </a>
                  <a href="tel:+421903584020" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#f97316] group-hover:bg-gradient-to-r group-hover:from-[#f97316] group-hover:to-[#f59e0b] group-hover:text-white transition-all rounded-xl">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">+421 903 584 020</span>
                  </a>
                  <a href="https://maps.google.com/?q=Fialová+5/A,+851+07+Bratislava-Petržalka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#f97316] group-hover:bg-gradient-to-r group-hover:from-[#f97316] group-hover:to-[#f59e0b] group-hover:text-white transition-all rounded-xl">
                      <MapPin size={20} />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs text-blue-200">Fialová 5/A, Bratislava — Petržalka</span>
                  </a>
                </div>
              </div>
              <div className="mt-20 flex gap-4">
                <a href="https://instagram.com/printroom.sk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-xl hover:bg-[#f97316] transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/people/Printroom/61564243379044" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-xl hover:bg-[#f97316] transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-50 dark:bg-slate-800/50 p-12 md:p-20">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-[#0a0c1a] py-16 px-6 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center">
            <img src="/images/logo-white.png" alt="Print room" className="h-12 w-auto invert dark:invert-0" />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 dark:text-slate-500 text-center">
            © 2013—2026 Printroom Studio Bratislava • Všetky práva vyhradené
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#005088] dark:text-[#f97316]">
            Líder v kvalite
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
            Vyrobené na Slovensku
          </div>
        </div>
      </footer>
    </div>
  );
}
