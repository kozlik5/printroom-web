import { useState } from 'react';
import { X } from 'lucide-react';

const filters = ['Všetko', 'Potlač textilu', 'Reklamné predmety', '3D služby', 'Tlač a polygrafia', 'Veľkoformát', 'Polepy'];

const items = [
  // Potlač textilu
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/comic-2.jpg', title: 'Potlač tričiek — Comic' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/dpm-1.jpg', title: 'Firemné oblečenie DPM' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/dpm-6.jpg', title: 'Pracovné odevy DPM' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/jednota-1.jpg', title: 'Potlač pre Jednotu' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/jednota-7.jpg', title: 'Firemný textil Jednota' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/move-2.jpg', title: 'Športové tričká MOVE' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/move.jpg', title: 'Kolekcia MOVE' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/img-5725.jpg', title: 'Potlač textilu — ukážka' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/img-5829.jpg', title: 'Sieťotlač na textil' },
  { cat: 'Potlač textilu', img: '/images/portfolio/potlac/steve.jpg', title: 'Potlačené tričko' },

  // Reklamné predmety
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/alfa-4.jpg', title: 'Reklamné predmety Alfa' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/alfa-5.jpg', title: 'Firemné darčeky Alfa' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/img-5701.jpg', title: 'Reklamné predmety — ukážka' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/img-5704.jpg', title: 'Firemné darčeky' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/olejova-pera.jpg', title: 'Perá s potlačou — Olejová akadémia' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/olejova-salky.jpg', title: 'Šálky s potlačou — Olejová akadémia' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/salvatora-tasky.jpg', title: 'Tašky — Lekáreň u Salvátora' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/salvatora-zapisniky.jpg', title: 'Zápisníky — Lekáreň u Salvátora' },
  { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/silver-3.jpg', title: 'Reklamné predmety Silver' },

  // 3D služby
  { cat: '3D služby', img: '/images/portfolio/3d/olejova-pera.jpg', title: '3D tlač — perá' },
  { cat: '3D služby', img: '/images/portfolio/3d/olejova-salky-2.jpg', title: '3D tlač — šálky' },
  { cat: '3D služby', img: '/images/portfolio/3d/olejova-salky.jpg', title: '3D realizácia' },

  // Veľkoformát / Bannery
  { cat: 'Veľkoformát', img: '/images/portfolio/bannery/banner-1.jpg', title: 'Veľkoformátový banner' },
  { cat: 'Veľkoformát', img: '/images/portfolio/bannery/banner-2.jpg', title: 'Roll-up banner' },

  // Tlač a polygrafia
  { cat: 'Tlač a polygrafia', img: '/images/portfolio/vizitky/vizitky.jpg', title: 'Premium vizitky' },
  { cat: 'Tlač a polygrafia', img: '/images/portfolio/brozury/img-5701.jpg', title: 'Brožúry a katalógy' },
  { cat: 'Tlač a polygrafia', img: '/images/portfolio/brozury/img-5704.jpg', title: 'Firemné katalógy' },
  { cat: 'Tlač a polygrafia', img: '/images/portfolio/brozury/img-5719.jpg', title: 'Tlačoviny' },

  // Polepy
  { cat: 'Polepy', img: '/images/portfolio/polepy/car-wrap-1.jpg', title: 'Celopolep vozidla' },
  { cat: 'Polepy', img: '/images/portfolio/polepy/car-wrap-2.jpg', title: 'Polep firemného auta' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('Všetko');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'Všetko' ? items : items.filter((i) => i.cat === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Naše realizácie a portfólio
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            Desiatky spokojných klientov z Bratislavy, Nitry a celého západného Slovenska. Pozrite si ukážky našej práce — od potlačených tričiek cez reklamné predmety až po 3D prototypy.
          </p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-20 bg-light dark:bg-[#0f1129]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                  active === f
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => setLightbox(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <p className="font-black uppercase tracking-tight text-lg">{item.title}</p>
                    <p className="text-sm text-white/70">{item.cat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Detail"
            className="max-w-full max-h-[85vh] rounded-lg"
          />
        </div>
      )}
    </>
  );
}
