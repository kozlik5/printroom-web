import { useState } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const filters = siteConfig.portfolio.filters;
const items = siteConfig.portfolio.items;

export default function PortfolioPage() {
  const [active, setActive] = useState('Všetko');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'Všetko' ? items : items.filter((i) => i.cat === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-40 pb-20 overflow-hidden">
        <img src="/images/services/portfolio-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            {siteConfig.pages.portfolio.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            {siteConfig.pages.portfolio.subtitle}
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
                className={`px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  active === f
                    ? 'text-[#f97316] border-[#f97316] bg-white dark:bg-slate-800'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-[#f97316]'
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
