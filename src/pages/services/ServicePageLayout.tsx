import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ServicePageLayoutProps {
  title: string;
  seoTitle: string;
  metaDescription: string;
  breadcrumbName: string;
  description: string;
  items: string[];
  images: { src: string; alt: string }[];
  icon: ReactNode;
  ctaText?: string;
}

export default function ServicePageLayout({
  title,
  seoTitle,
  metaDescription,
  breadcrumbName,
  description,
  items,
  images,
  icon,
  ctaText = 'Získať cenovú ponuku',
}: ServicePageLayoutProps) {
  useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', metaDescription);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = metaDescription;
      document.head.appendChild(newMeta);
    }
  }, [seoTitle, metaDescription]);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <Link to="/" className="hover:text-[#005088] transition">Domov</Link>
            <ChevronRight size={12} />
            <Link to="/sluzby" className="hover:text-[#005088] transition">Služby</Link>
            <ChevronRight size={12} />
            <span className="text-slate-700">{breadcrumbName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-slate-900 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#005088]/80 to-slate-900/95" />
        {images[0] && (
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#f97316] mb-6">{icon}</div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
                {title}
              </h1>
              <p className="mt-6 text-xl text-slate-300 italic max-w-xl leading-relaxed">
                {description}
              </p>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white font-black uppercase text-xs tracking-[0.2em] px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
              >
                {ctaText} <ArrowRight size={16} />
              </Link>
            </div>
            {images[0] && (
              <div className="hidden lg:block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">
                Čo{' '}
                <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent">
                  ponúkame
                </span>
              </h2>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-4 group">
                    <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#f97316] to-[#f59e0b] flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-700 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary image or card */}
            <div className="space-y-6">
              {images.slice(0, 2).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Máte záujem o{' '}
            <span className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] bg-clip-text text-transparent italic">
              {breadcrumbName.toLowerCase()}
            </span>
            ?
          </h2>
          <p className="text-slate-400 text-lg mb-10 italic">
            Napíšte nám a do 24 hodín sa ozveme s nezáväznou cenovou ponukou.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white font-black uppercase text-sm tracking-[0.2em] px-10 py-5 rounded-xl hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
          >
            Získať cenovú ponuku <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
