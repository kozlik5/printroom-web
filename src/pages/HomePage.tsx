import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer, Shirt, Maximize, FileText, Car,
  ArrowRight, CheckCircle2, Mail, Phone, MapPin, ChevronRight, Star, Gift, Box, Instagram, Facebook, Menu, X,
} from 'lucide-react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const services = [
  { title: 'Potlač Textilu', icon: <Shirt size={32} />, desc: 'Tričká, mikiny, čiapky, pracovné odevy. Sieťotlač aj DTG.', size: 'large', img: '/images/services/potlac-textilu.jpg', slug: 'potlac-textilu' },
  { title: 'Reklamné Predmety', icon: <Gift size={32} />, desc: 'Perá, hrnčeky, tašky, zápisníky s vašim logom.', size: 'small', img: '/images/services/firemne-darceky.jpg', slug: 'reklamne-predmety' },
  { title: '3D Služby', icon: <Box size={32} />, desc: '3D tlač, skenovanie a modelovanie. Prototypy aj hotové diely.', size: 'small', img: '/images/services/3d-sluzby.jpg', slug: '3d-sluzby' },
  { title: 'Bannery a Plagáty', icon: <Maximize size={32} />, desc: 'Veľkoformátová tlač, roll-upy, mesh. Express do 24h.', size: 'small', img: '/images/services/bannery-plagaty.jpg', slug: 'bannery-velkoformat' },
  { title: 'Vizitky a Brožúry', icon: <FileText size={32} />, desc: 'Vizitky, katalógy, letáky. Od kusovky po náklad.', size: 'large', img: '/images/services/vizitky.jpg', slug: 'tlac-polygrafia' },
  { title: 'Polepy', icon: <Car size={32} />, desc: 'Polepy áut, výkladov, interiérov. Návrh aj realizácia.', size: 'small', img: '/images/services/polepy.jpg', slug: 'polepy' },
  { title: 'Vyšívanie na Textil', icon: <Printer size={32} />, desc: 'Luxusná aplikácia loga vyšívaním na textil.', size: 'small', img: '/images/services/potlac-alt.jpg', slug: 'potlac-textilu' },
];

const chartData = {
  labels: ['Textil', 'Reklama', '3D', 'Bannery', 'Polygrafia', 'Polepy', 'Výšivka'],
  datasets: [
    {
      label: 'Kapacita',
      data: [95, 85, 80, 90, 100, 75, 85],
      backgroundColor: 'rgba(0, 80, 136, 0.8)',
      borderRadius: 8,
    },
  ],
};

const testimonials = [
  { name: 'Martin K.', role: 'Marketingový manažér', text: 'Spolupráca s Printroom bola bezproblémová. Tričká pre celý tím do 3 dní, perfektná kvalita.', rating: 5 },
  { name: 'Jana S.', role: 'Koordinátorka eventov', text: 'Bannery na konferenciu zvládli za 24 hodín. Farby presné, materiál odolný. Odporúčam.', rating: 5 },
  { name: 'Peter D.', role: 'Majiteľ e-shopu', text: 'Vizitky a katalógy vyzerajú prémiovo. Konečne dodávateľ, na ktorého sa môžeme spoľahnúť.', rating: 5 },
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
      <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">{value}</div>
      <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider font-semibold">{label}</div>
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
        <h3 className="text-2xl font-black uppercase mb-2">Ďakujeme!</h3>
        <p className="text-slate-500">Ozveme sa vám do 24 hodín.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-[#005088] font-bold text-sm uppercase tracking-wider hover:text-[#f97316] transition">Poslať ďalší dopyt</button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Vaše Meno</label>
        <input type="text" name="Meno" required className="w-full bg-white border border-slate-200 p-5 text-slate-900 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 transition rounded-xl" placeholder="Jozef Mrkvička" />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Email</label>
        <input type="email" name="Email" required className="w-full bg-white border border-slate-200 p-5 text-slate-900 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 transition rounded-xl" placeholder="vas@email.sk" />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Telefón</label>
        <input type="tel" name="Telefon" className="w-full bg-white border border-slate-200 p-5 text-slate-900 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 transition rounded-xl" placeholder="+421 ..." />
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Vaša Požiadavka</label>
        <textarea name="Sprava" rows={4} required className="w-full bg-white border border-slate-200 p-5 text-slate-900 outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100 transition rounded-xl" placeholder="Povedzte nám o vašich plánoch..."></textarea>
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required className="mt-1 accent-[#f97316]" />
        <span className="text-xs text-slate-500">Súhlasím so spracovaním osobných údajov podľa <a href="/gdpr" className="text-[#005088] underline">Zásad ochrany osobných údajov</a></span>
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#005088] to-[#0070b8] text-white flex items-center justify-center font-black text-xl rounded-xl group-hover:from-[#f97316] group-hover:to-[#f59e0b] transition-all duration-300 shadow-lg shadow-blue-500/20">P</div>
            <span className={`text-2xl font-black uppercase tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Printroom</span>
          </div>
          <div className={`hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
            <a href="#" className={`transition ${isScrolled ? 'hover:text-[#005088]' : 'hover:text-white'}`}>Domov</a>
            <a href="#sluzby" className={`transition ${isScrolled ? 'hover:text-[#005088]' : 'hover:text-white'}`}>Služby</a>
            <a href="#proces" className={`transition ${isScrolled ? 'hover:text-[#005088]' : 'hover:text-white'}`}>O nás</a>
            <a href="#kontakt" className={`transition ${isScrolled ? 'hover:text-[#005088]' : 'hover:text-white'}`}>Kontakt</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+421903584020" className={`flex items-center gap-2 text-[11px] font-bold transition-colors duration-500 ${isScrolled ? 'text-slate-500 hover:text-[#005088]' : 'text-white/70 hover:text-white'}`}>
              <Phone size={14} className="text-[#f97316]" />
              <span className="hidden sm:inline">+421 903 584 020</span>
              <span className="sm:hidden">Zavolať</span>
            </a>
            <a href="#kontakt" className="hidden sm:inline-block bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-xl hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300">
              Cenová Ponuka
            </a>
          </div>
          <button className={`lg:hidden transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-2xl border-t">
            <div className="flex flex-col p-6 gap-4">
              <a href="#" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 hover:text-[#005088]">Domov</a>
              <a href="#sluzby" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 hover:text-[#005088]">Služby</a>
              <a href="#proces" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 hover:text-[#005088]">O nás</a>
              <a href="#kontakt" onClick={() => setMobileOpen(false)} className="text-base font-bold uppercase tracking-wider py-2 text-slate-700 hover:text-[#005088]">Kontakt</a>
              <a href="tel:+421903584020" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-base font-bold py-2 text-[#005088]">
                <Phone size={18} className="text-[#f97316]" /> +421 903 584 020
              </a>
              <a href="#kontakt" onClick={() => setMobileOpen(false)} className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white text-center px-6 py-4 rounded-xl font-bold uppercase tracking-wider mt-2">
                Cenová Ponuka
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section — Dark */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-[#0f1129]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Concentric circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/[0.02] rounded-full"></div>
          {/* Colorful gradient blobs */}
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-gradient-to-bl from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-gradient-to-t from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
          {/* Dot grid */}
          <div className="absolute top-20 right-20 grid grid-cols-5 gap-3 opacity-20">
            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>)}
          </div>
          {/* Chevron arrows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-10">
            {Array.from({ length: 5 }).map((_, i) => <ChevronRight key={i} size={28} className="text-white/60" />)}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Od roku 2013 v Petržalke</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[85px] font-black leading-[0.95] tracking-tighter mb-8 text-white uppercase">
                DO TLAČE<br />
                <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">S NAMI</span>
              </h1>

              <p className="text-white/50 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed border-l-2 border-[#f97316] pl-6">
                Komplexné tlačové riešenia od 1 kusu po tisícové série. Potlač textilu, veľkoformát, 3D tlač a ďalšie.
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                <a href="#sluzby" className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 rounded-2xl">
                  Naše Služby <ArrowRight size={18} />
                </a>
                <a href="#kontakt" className="border-2 border-white/20 text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:border-white/40 hover:bg-white/5 transition-all duration-300 rounded-2xl">
                  Cenová Ponuka
                </a>
              </div>

              {/* Stats row */}
              <div className="flex gap-10 mt-14 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white">5000<span className="text-[#f97316]">+</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Zákaziek</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">11<span className="text-[#f97316]">+</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Rokov</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">24<span className="text-[#f97316]">h</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Express</div>
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group">
                <img
                  src="/images/services/hero-alt.jpg"
                  alt="Veľkoformátová tlačiareň v akcii"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1129]/60 via-transparent to-transparent"></div>
                {/* Yellow accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] to-[#f59e0b]"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl text-white p-5 rounded-2xl shadow-xl border border-white/10">
                <CheckCircle2 className="text-[#f97316] mb-2" size={28} />
                <div className="text-xl font-black">99.8%</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/50">Spokojnosť</div>
              </div>

              {/* Floating circles with service previews */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f97316] to-[#f59e0b] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Printer size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Bento Services Section */}
      <section id="sluzby" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic text-slate-900">
              Čo <br />
              <span className="bg-gradient-to-r from-[#005088] to-[#0070b8] bg-clip-text text-transparent">dokážeme.</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-xs font-bold uppercase tracking-[0.3em] text-center lg:text-right">
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
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
      <section id="proces" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-r from-[#005088]/5 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic mb-12 text-slate-900">
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
                    <div className="border-l-2 border-slate-100 group-hover:border-[#f97316] transition-colors pl-6">
                      <h4 className="font-black uppercase text-sm tracking-widest mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-light italic">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#005088] to-[#003d68] aspect-square rounded-3xl overflow-hidden relative group shadow-2xl shadow-blue-900/20">
              <img
                src="/images/services/3d-sluzby.jpg"
                alt="3D služby - hrnček s potlačou"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
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
              <h4 className="text-center font-bold uppercase text-[10px] tracking-[0.4em] mb-12 bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">Aktuálna produkčná kapacita</h4>
              <div className="h-[300px]">
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      y: { display: false },
                      x: {
                        grid: { display: false },
                        ticks: { color: 'rgba(255,255,255,0.4)', font: { size: 9, weight: 'bold' } },
                      },
                    },
                  }}
                />
              </div>
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
                  <div className="text-3xl font-black tracking-tighter italic bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">24/48h</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-2">Expres doručenie</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl border-l-4 border-l-[#f97316]">
                  <div className="text-3xl font-black tracking-tighter italic bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">100%</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-2">Kvalita materiálu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">
              Čo hovoria <span className="bg-gradient-to-r from-[#005088] to-[#0070b8] bg-clip-text text-transparent">klienti.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[#f97316] text-[#f97316]" />
                  ))}
                </div>
                <p className="text-slate-600 italic font-light mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005088] to-[#0070b8] flex items-center justify-center text-white font-black text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-sm">{t.name}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#005088] to-[#003d68] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-blue-900/20">
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-6xl font-black uppercase italic leading-none mb-10">
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
            <div className="lg:w-1/2 bg-slate-50 p-12 md:p-20">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#005088] to-[#0070b8] text-white flex items-center justify-center font-black rounded-xl text-lg">P</div>
            <span className="text-xl font-black uppercase tracking-tighter text-slate-900 italic">Printroom.</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 text-center">
            © 2013—2026 Printroom Studio Bratislava • Všetky práva vyhradené
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#005088]">
            Líder v kvalite
            <div className="h-4 w-px bg-slate-300"></div>
            Vyrobené na Slovensku
          </div>
        </div>
      </footer>
    </div>
  );
}
