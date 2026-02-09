import { Link } from 'react-router-dom';
import { Shirt, Gift, Box, FileText, Image, Car } from 'lucide-react';
import type { ReactNode } from 'react';

const categories: {
  icon: ReactNode;
  title: string;
  text: string;
  items: string[];
  cta: string;
}[] = [
  {
    icon: <Shirt size={32} />,
    title: 'Potlač textilu',
    text: 'Potlačíme čokoľvek - tričká, mikiny, čiapky, pracovné odevy, tašky. Používame sieťotlač pre veľké náklady a DTG pre malosériové zákazky. Minimálne množstvo už od 10 kusov.',
    items: [
      'Potlač tričiek a mikín',
      'Vyšívanie log a názvov',
      'Pracovné odevy s firemným brandingom',
      'Športové dresy a tímové oblečenie',
      'Reklamné tašky a batohy',
    ],
    cta: 'Chcem cenovú ponuku na textil',
  },
  {
    icon: <Gift size={32} />,
    title: 'Reklamné predmety',
    text: 'Firemné darčeky, ktoré nezakončia v koši. Perá, hrnčeky, zápisníky, powerbanky a stovky ďalších produktov s vašim logom. Dodávame firmám v Bratislave a okolí.',
    items: [
      'Perá a písacie potreby',
      'Hrnčeky a termosky',
      'Zápisníky a diáre',
      'USB kľúče a powerbanky',
      'Tašky a batohy',
      'Dáždniky a outdoorové potreby',
    ],
    cta: 'Chcem katalóg reklamných predmetov',
  },
  {
    icon: <Box size={32} />,
    title: '3D tlač, skenovanie a modelovanie',
    text: 'Komplexné 3D služby pre priemysel aj kreatívcov. Vytlačíme prototypy, náhradné diely, architektonické modely. Naskenujeme existujúce objekty a vytvoríme 3D model na mieru.',
    items: [
      '3D tlač FDM a SLA',
      '3D skenovanie objektov',
      '3D modelovanie na zákazku',
      'Prototypy a funkčné diely',
      'Architektonické makety',
    ],
    cta: 'Chcem konzultáciu k 3D projektu',
  },
  {
    icon: <FileText size={32} />,
    title: 'Tlač a polygrafia',
    text: 'Klasická polygrafia v modernom prevedení. Vizitky, brožúry, katalógy, letáky. Od jedného kusu po tisícové náklady. Expresná výroba vizitiek do 24 hodín.',
    items: [
      'Vizitky (štandard aj premium papiere)',
      'Brožúry a katalógy (V1, V2, V3 väzba)',
      'Letáky a plagáty',
      'Hlavičkové papiere a obálky',
      'Kalendáre a diáre',
    ],
    cta: 'Chcem cenovú ponuku na tlač',
  },
  {
    icon: <Image size={32} />,
    title: 'Bannery a veľkoformátová tlač',
    text: 'Veľkoformátová tlač pre eventy, predajne aj kancelárie. Roll-upy, X-bannery, mesh bannery, backlity. Dodanie už do 24 hodín pri expresných objednávkach.',
    items: [
      'Roll-up bannery',
      'X-bannery a L-bannery',
      'Mesh bannery a plachty',
      'Plagáty a fotoplátna',
      'PVC dosky a forex',
    ],
    cta: 'Chcem cenovú ponuku na bannery',
  },
  {
    icon: <Car size={32} />,
    title: 'Polepy áut a interiérov',
    text: 'Profesionálne polepy vozidiel, výkladov a interiérov. Od návrhu cez výrobu po samotnú aplikáciu. Používame kvalitné fólie s dlhou životnosťou.',
    items: [
      'Celopolepy áut a dodávok',
      'Čiastočné polepy a logá na vozidlá',
      'Polepy výkladov a skiel',
      'Interiérové polepy a dekorácie',
      'Reklamné nálepky a samolepky',
    ],
    cta: 'Chcem naceniť polep',
  },
];

export default function SluzbyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Kompletné tlačiarenské služby
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            Všetko pod jednou strechou. Od návrhu po hotový produkt.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="text-primary mb-4">{cat.icon}</div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">
                  {cat.title}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{cat.text}</p>
                <ul className="mt-6 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="mt-6 inline-block bg-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  {cat.cta}
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center text-slate-300">
                  <div className="text-center">
                    <div className="text-primary mb-2">{cat.icon}</div>
                    <span className="text-sm">Fotka čoskoro</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
