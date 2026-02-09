import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Facebook } from './icons';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        {/* Col 1 */}
        <div>
          <span className="text-2xl font-black uppercase tracking-tighter">
            Print<span className="text-accent">Room</span>
          </span>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Profesionálna tlačiareň v Bratislave. Potlač, 3D tlač, reklamné predmety.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Navigácia</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Domov</Link>
            <Link to="/sluzby" className="hover:text-white transition-colors">Služby</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfólio</Link>
            <Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
          </nav>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Kontakt</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <a href="tel:+421903584020" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} /> +421 903 584 020
            </a>
            <a href="mailto:print@printroom.sk" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} /> print@printroom.sk
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Fialová 5/A, Bratislava
            </span>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com/printroom.sk" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/people/Printroom/61564243379044" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Print room s.r.o. | IČO: 47 368 161 | Tlačiareň Bratislava
        </div>
      </div>
    </footer>
  );
}
