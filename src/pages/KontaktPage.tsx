import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Facebook } from '../components/icons';
import ContactForm from '../components/ContactForm';

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Kontakt
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            Ozvite sa nám a do 24 hodín sa ozveme s ponukou.
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
                      <span>Print room s. r. o.<br />Fialová 5/A<br />851 07 Bratislava-Petržalka</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Kontakt</h3>
                    <a href="tel:+421903584020" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                      <Phone size={18} /> +421 903 584 020
                    </a>
                    <a href="mailto:print@printroom.sk" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors mt-1">
                      <Mail size={18} /> print@printroom.sk
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-2">Otváracie hodiny</h3>
                    <p className="flex items-center gap-2 text-blue-100">
                      <Clock size={18} />
                      <span>Po-Pia: 9:00 - 17:00<br />So-Ne: zatvorené</span>
                    </p>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a href="https://instagram.com/printroom.sk" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      <Instagram size={22} />
                    </a>
                    <a href="https://facebook.com/people/Printroom/61564243379044" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
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
              title="Print Room - Fialová 5/A, Bratislava"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d17.1119!3d48.1087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA2JzMxLjMiTiAxN8KwMDYnNDIuOCJF!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk"
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
