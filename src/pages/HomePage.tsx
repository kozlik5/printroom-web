import { Link } from 'react-router-dom';
import { Shirt, Gift, Box, FileText, Image, Car, Zap, Award, BadgeEuro, Heart, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import type { ReactNode } from 'react';

const services: { icon: ReactNode; title: string; text: string; img: string }[] = [
  {
    icon: <Shirt size={28} />,
    title: 'Potlač textilu',
    text: 'Tričká, mikiny, čiapky, pracovné odevy. Sieťotlač aj DTG.',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop',
  },
  {
    icon: <Gift size={28} />,
    title: 'Reklamné predmety',
    text: 'Perá, hrnčeky, tašky, zápisníky s vašim logom.',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop',
  },
  {
    icon: <Box size={28} />,
    title: '3D služby',
    text: '3D tlač, skenovanie a modelovanie. Prototypy aj hotové diely.',
    img: 'https://images.unsplash.com/photo-1581092160607-ee67df30e7db?w=600&h=400&fit=crop',
  },
  {
    icon: <FileText size={28} />,
    title: 'Tlač a polygrafia',
    text: 'Vizitky, brožúry, katalógy, plagáty. Od kusovky po náklad.',
    img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop',
  },
  {
    icon: <Image size={28} />,
    title: 'Veľkoformát',
    text: 'Bannery, roll-upy, plagáty, mesh. Aj express do 24h.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  },
  {
    icon: <Car size={28} />,
    title: 'Polepy',
    text: 'Polepy áut, výkladov, interiérov. Návrh aj realizácia.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop',
  },
];

const reasons = [
  { icon: <Zap size={32} />, title: 'Rýchlosť', text: 'Express výroba do 24-48 hodín. Keď to potrebujete zajtra, sme tu.' },
  { icon: <Award size={32} />, title: 'Kvalita', text: 'Používame prémiové materiály a overené technológie. Výsledok, ktorý vydrží.' },
  { icon: <BadgeEuro size={32} />, title: 'Cena', text: 'Férové ceny bez skrytých poplatkov. Množstevné zľavy od 10 kusov.' },
  { icon: <Heart size={32} />, title: 'Prístup', text: 'Osobný prístup, rýchla komunikácia. Sme malý tím, ktorý sa stará.' },
];

const stats = [
  { value: '5000+', label: 'Dokončených zákaziek' },
  { value: '24h', label: 'Express výroba' },
  { value: '10+', label: 'Rokov skúseností' },
  { value: '98%', label: 'Spokojných klientov' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-slate-900/95" />
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&h=800&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95]">
            Profesionálna tlač<br />
            <span className="text-accent">a 3D služby</span><br />
            v Bratislave
          </h1>
          <div className="mt-8 border-l-4 border-accent pl-6 max-w-xl">
            <p className="text-lg md:text-xl text-slate-300 italic">
              Od vizitiek po veľkoformátovú tlač. Od 3D skenovania po hotový prototyp.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="bg-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors shadow-2xl"
            >
              Získať cenovú ponuku
            </a>
            <a
              href="#sluzby"
              className="border-2 border-white/30 hover:border-white text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors"
            >
              Pozrieť služby
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="sluzby" className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Naše služby" subtitle="Kompletné riešenia pre váš biznis pod jednou strechou." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">{s.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{s.text}</p>
                  <Link
                    to="/sluzby"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Zistiť viac <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/sluzby"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-accent transition-colors"
            >
              Všetky služby <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Prečo Print Room" subtitle="Denne pomáhame firmám v Bratislave, Nitre, Trnave a na celom západnom Slovensku." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {r.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - dark */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Ako to funguje" subtitle="Jednoduchý proces od dopytu po hotový produkt." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Dopyt', 'Návrh', 'Výroba', 'Dodanie'].map((step, i) => (
              <div key={step} className="relative bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl font-black text-primary/10 absolute top-4 right-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <div className="text-2xl font-black text-primary mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-lg font-black uppercase tracking-tight">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="text-white">
                <h2 className="text-3xl font-black uppercase tracking-tighter">
                  Nezáväzná cenová ponuka
                </h2>
                <p className="mt-4 text-blue-200 italic">
                  Napíšte nám a do 24 hodín sa ozveme s ponukou.
                </p>
                <div className="mt-8 space-y-3 text-sm text-blue-100">
                  <p>📞 +421 903 584 020</p>
                  <p>📧 print@printroom.sk</p>
                  <p>📍 Fialová 5/A, 851 07 Bratislava</p>
                  <p>🕐 Po-Pia: 9:00 - 17:00</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
