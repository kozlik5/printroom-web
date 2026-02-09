import { useState } from 'react';
import { X } from 'lucide-react';

const filters = ['Všetko', 'Potlač textilu', 'Reklamné predmety', '3D služby', 'Tlač', 'Veľkoformát', 'Polepy'];

const items = [
  { cat: 'Potlač textilu', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=500&fit=crop', title: 'Firemné tričká' },
  { cat: 'Reklamné predmety', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=700&fit=crop', title: 'Reklamné perá' },
  { cat: '3D služby', img: 'https://images.unsplash.com/photo-1581092160607-ee67df30e7db?w=600&h=600&fit=crop', title: '3D prototyp' },
  { cat: 'Tlač', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=500&fit=crop', title: 'Premium vizitky' },
  { cat: 'Veľkoformát', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=700&fit=crop', title: 'Roll-up banner' },
  { cat: 'Polepy', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=500&fit=crop', title: 'Polep dodávky' },
  { cat: 'Potlač textilu', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=600&fit=crop', title: 'Športové dresy' },
  { cat: 'Tlač', img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=700&fit=crop', title: 'Brožúra A4' },
  { cat: '3D služby', img: 'https://images.unsplash.com/photo-1631645353990-38f11b81de3e?w=600&h=500&fit=crop', title: 'Architektonický model' },
  { cat: 'Reklamné predmety', img: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&h=600&fit=crop', title: 'Firemné hrnčeky' },
  { cat: 'Veľkoformát', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=500&fit=crop', title: 'Event branding' },
  { cat: 'Polepy', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=700&fit=crop', title: 'Celopolep auta' },
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
      <section className="py-20 bg-light">
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
                    : 'bg-white text-slate-600 hover:bg-slate-100'
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
            src={lightbox.replace(/w=\d+&h=\d+/, 'w=1200&h=900')}
            alt="Detail"
            className="max-w-full max-h-[85vh] rounded-lg"
          />
        </div>
      )}
    </>
  );
}
