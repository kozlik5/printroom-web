import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Facebook } from './icons';
import { siteConfig } from '../siteConfig';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        {/* Col 1 */}
        <div>
          <img src={siteConfig.logo} alt={siteConfig.name} className="h-12 w-auto" />
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            {siteConfig.footer.tagline}
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Navigácia</h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-400">
            {siteConfig.navigation.footer.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-white transition-colors">{link.label}</Link>
            ))}
          </nav>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Kontakt</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} /> {siteConfig.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {siteConfig.address.short}
            </span>
            <div className="flex gap-4 mt-2">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.legalName} | IČO: {siteConfig.ico} | Tlačiareň {siteConfig.address.city}
        </div>
      </div>
    </footer>
  );
}
