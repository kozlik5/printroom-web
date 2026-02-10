import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Facebook } from '../components/icons';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../siteConfig';

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            {siteConfig.pages.kontakt.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            {siteConfig.pages.kontakt.subtitle}
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left: Info */}
              <div className="text-white">
                <h2 className="text-2xl font-black uppercase tracking-tighter">Ozvite sa nám</h2>

                <div className="mt-8 space-y-5">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Adresa</h3>
                    <p className="flex items-start gap-2 text-blue-100">
                      <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{siteConfig.legalName}<br />{siteConfig.address.street}<br />{siteConfig.address.zip} {siteConfig.address.city}-{siteConfig.address.district}</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Kontakt</h3>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                      <Phone size={18} /> {siteConfig.phone}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors mt-1">
                      <Mail size={18} /> {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Otváracie hodiny</h3>
                    <p className="flex items-center gap-2 text-blue-100">
                      <Clock size={18} />
                      <span style={{ whiteSpace: 'pre-line' }}>{siteConfig.hours}</span>
                    </p>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      <Instagram size={22} />
                    </a>
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      <Facebook size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-2xl p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title={`${siteConfig.name} - ${siteConfig.address.full}`}
              src={siteConfig.address.mapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
