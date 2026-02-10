import { Link } from 'react-router-dom';
import { Shirt, Gift, Box, FileText, Image, Car } from 'lucide-react';
import type { ReactNode } from 'react';
import { siteConfig } from '../siteConfig';

// Icon mapping for categories
const categoryIcons: Record<string, ReactNode> = {
  'potlac-textilu': <Shirt size={32} />,
  'reklamne-predmety': <Gift size={32} />,
  '3d-sluzby': <Box size={32} />,
  'tlac-polygrafia': <FileText size={32} />,
  'bannery-velkoformat': <Image size={32} />,
  'polepy': <Car size={32} />,
};

const categories = siteConfig.sluzbyCategories.map(cat => ({
  ...cat,
  icon: categoryIcons[cat.slug] || <Box size={32} />,
}));

export default function SluzbyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-40 pb-20 overflow-hidden">
        <img src="/images/services/subpage-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            {siteConfig.pages.sluzby.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            {siteConfig.pages.sluzby.subtitle}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              id={cat.id}
              className={`scroll-mt-24 flex flex-col md:flex-row gap-10 items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="text-primary mb-4">{cat.icon}</div>
                <Link to={`/sluzby/${cat.slug}`} className="hover:text-[#005088] transition-colors">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
                    {cat.title}
                  </h2>
                </Link>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{cat.text}</p>
                <ul className="mt-6 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/sluzby/${cat.slug}`}
                  className="mt-6 inline-block bg-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  Zistiť viac →
                </Link>
              </div>
              <div className="flex-1 w-full">
                <Link to={`/sluzby/${cat.slug}`}>
                  <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
