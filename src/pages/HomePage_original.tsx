import { useState, useEffect } from 'react';
import {
  Printer, Shirt, Maximize, FileText, Layers, Palette,
  ArrowRight, CheckCircle2, Mail, Phone, MapPin, ChevronRight,
} from 'lucide-react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const colors = {
  blue: '#005088',
  orange: '#f97316',
  lightBlue: '#f0f9ff',
};

const services = [
  { title: 'Potlač Textilu', icon: <Shirt size={32} />, desc: 'Sieťotlač, DTG a komplexný merch.', size: 'large', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800' },
  { title: 'Veľkoformát', icon: <Maximize size={32} />, desc: 'Bannery, polepy a billboardy.', size: 'small', img: 'https://images.unsplash.com/photo-1588534510807-86dfb5ed5d5b?q=80&w=800' },
  { title: 'Ofsetová Tlač', icon: <Layers size={32} />, desc: 'Veľké náklady s vernými farbami.', size: 'small', img: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=800' },
  { title: 'Maloformát', icon: <FileText size={32} />, desc: 'Vizitky, letáky a brožúry.', size: 'small', img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800' },
  { title: 'Strojové Vyšívanie', icon: <Printer size={32} />, desc: 'Luxusná aplikácia loga na textil.', size: 'large', img: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=800' },
  { title: 'Grafický Dizajn', icon: <Palette size={32} />, desc: 'Zhmotníme vaše nápady do dát.', size: 'small', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800' },
];

const chartData = {
  labels: ['Textil', 'Veľkoformát', 'Maloformát', 'Ofset', 'Výšivka', 'Grafika'],
  datasets: [
    {
      label: 'Kapacita',
      data: [95, 85, 90, 100, 80, 85],
      backgroundColor: colors.blue,
      borderRadius: 4,
    },
  ],
};

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-[#005088] text-white flex items-center justify-center font-black text-xl rounded-sm group-hover:bg-[#f97316] transition-colors">P</div>
            <span className="text-2xl font-black uppercase tracking-tighter text-slate-900">Printroom</span>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-[#005088] transition">Domov</a>
            <a href="#sluzby" className="hover:text-[#005088] transition">Služby</a>
            <a href="#proces" className="hover:text-[#005088] transition">O nás</a>
            <a href="#kontakt" className="hover:text-[#005088] transition">Kontakt</a>
          </div>
          <a href="#kontakt" className="bg-[#f97316] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#005088] transition-all shadow-xl shadow-orange-200/50">
            Cenová Ponuka
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f9ff]/50 -z-10 skew-x-12 translate-x-20"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[#f97316]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#005088]">Líder v polygrafickej produkcii</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[1] tracking-tighter mb-8 text-slate-900">
              MODERNÁ TLAČ <br />
              <span className="text-[#005088]">PRE VÁŠ</span> <br />
              <span className="text-[#f97316] italic">BIZNIS.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed italic border-l-4 border-[#005088] pl-6">
              Váš partner v Petržalke od roku 2013. Prinášame komplexné riešenia od 1 kusu po tisícové série.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#sluzby" className="bg-[#005088] text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:bg-[#f97316] transition-all shadow-xl shadow-blue-900/20">
                Naše Služby <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="text-[#f97316] text-2xl italic font-black tracking-normal">11+</span> rokov skúseností
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden shadow-2xl relative group border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=800&auto=format&fit=crop"
                alt="Prémiový detail tlače"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 right-6 bg-[#005088] text-white p-6 rounded-sm shadow-xl">
                <CheckCircle2 className="text-[#f97316] mb-3" size={32} />
                <div className="text-xl font-black">99.8%</div>
                <div className="text-[8px] font-bold uppercase tracking-widest opacity-70">Spokojnosť klientov</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Services Section */}
      <section id="sluzby" className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic text-slate-900">
              Čo <br />
              <span className="text-[#005088]">dokážeme.</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-xs font-bold uppercase tracking-[0.3em] text-center lg:text-right">
              01 — Produkčné disciplíny pod jednou strechou
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-white rounded-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:border-orange-200 flex flex-col justify-between p-10 cursor-pointer ${
                  service.size === 'large' ? 'md:col-span-8 h-[450px]' : 'md:col-span-4 h-[450px]'
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <div className="text-[#005088] group-hover:text-[#f97316] transition-colors">{service.icon}</div>
                  <span className="text-[10px] font-black text-slate-200 group-hover:text-[#005088] transition-colors">0{idx + 1}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase mb-4 leading-tight group-hover:text-[#005088] transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm font-light max-w-xs">{service.desc}</p>
                </div>
                <div className="relative z-10 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#005088] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  Zistiť viac <ChevronRight size={14} className="text-[#f97316]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section id="proces" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic mb-12 text-slate-900">
                Plynulá <br />
                <span className="text-[#f97316]">produkcia.</span>
              </h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Konzultácia', text: 'Vyberieme technológiu a vzorkovník materiálu.' },
                  { step: '02', title: 'Prototyp', text: 'Kontrola grafiky a vytvorenie vzorky pred výrobou.' },
                  { step: '03', title: 'Výroba', text: 'Precízna tlač pod dohľadom majstrov polygrafie.' },
                  { step: '04', title: 'Expedícia', text: 'Doručenie kuriérom alebo odber v Petržalke.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-4xl font-black text-slate-100 group-hover:text-[#005088] transition-colors">{item.step}</span>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-widest mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-light italic">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#005088] aspect-square rounded-sm overflow-hidden relative group shadow-2xl border-[16px] border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1000"
                alt="Produkčný stroj"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#005088] shadow-2xl cursor-pointer hover:scale-110 transition group-hover:bg-[#f97316] group-hover:text-white">
                  <ArrowRight size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Capacity */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none text-[200px] font-black italic whitespace-nowrap -translate-y-20">CAPACITY DATA</div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 border border-white/10 rounded-sm">
              <h4 className="text-center font-bold uppercase text-[10px] tracking-[0.4em] mb-12 text-[#f97316]">Aktuálna produkčná kapacita</h4>
              <div className="h-[300px]">
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      y: { display: false },
                      x: {
                        grid: { display: false },
                        ticks: { color: 'rgba(255,255,255,0.4)', font: { size: 9, weight: 'bold' } },
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic mb-8">
                Sme pripravení <br /> na <span className="text-[#f97316]">výzvy.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 italic">
                Neustále investujeme do technologického parku. Sledujeme trendy v sieťotlači aj 3D realizáciách, aby sme vám dodali výsledok svetovej úrovne.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 border-l-4 border-[#005088]">
                  <div className="text-3xl font-black tracking-tighter italic">24/48h</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-2">Expres doručenie</div>
                </div>
                <div className="p-6 bg-white/5 border-l-4 border-[#f97316]">
                  <div className="text-3xl font-black tracking-tighter italic">100%</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-2">Kvalita materiálu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-[#005088] rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-6xl font-black uppercase italic leading-none mb-10">
                  Napíšte <br /> <span className="text-[#f97316]">nám.</span>
                </h2>
                <p className="text-blue-100 text-lg font-light mb-16 max-w-sm italic">
                  Povedzte nám o svojom projekte a my vám navrhneme najlepšiu cestu k realizácii.
                </p>
                <div className="space-y-6">
                  <a href="mailto:print@printroom.sk" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all rounded-sm">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">print@printroom.sk</span>
                  </a>
                  <a href="tel:+421903584020" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all rounded-sm">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">+421 903 584 020</span>
                  </a>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all rounded-sm">
                      <MapPin size={20} />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs text-blue-200">Fialová 5/A, Bratislava — Petržalka</span>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
                <a href="https://instagram.com/printroom.sk" target="_blank" rel="noopener noreferrer" className="font-black text-[10px] tracking-widest uppercase">Instagram</a>
                <a href="https://facebook.com/people/Printroom/61564243379044" target="_blank" rel="noopener noreferrer" className="font-black text-[10px] tracking-widest uppercase">Facebook</a>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-50 p-12 md:p-20">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Vaše Meno</label>
                  <input type="text" className="w-full bg-white border border-slate-200 p-5 text-slate-900 outline-none focus:border-[#f97316] transition shadow-inner" placeholder="Jozef Mrkvička" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Vaša Požiadavka</label>
                  <textarea rows={5} className="w-full bg-white border border-slate-200 p-5 text-slate-900 outline-none focus:border-[#f97316] transition shadow-inner" placeholder="Povedzte nám o vašich plánoch..."></textarea>
                </div>
                <button className="w-full bg-[#f97316] text-white py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-[#005088] transition-all shadow-2xl shadow-orange-900/20 group flex items-center justify-center gap-4">
                  Odoslať dopyt
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 px-6 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#005088] text-white flex items-center justify-center font-black rounded-sm text-lg">P</div>
            <span className="text-xl font-black uppercase tracking-tighter text-slate-900 italic">Printroom.</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 text-center">
            © 2013—2026 Printroom Studio Bratislava • Všetky práva vyhradené
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#005088]">
            Líder v kvalite
            <div className="h-4 w-px bg-slate-300"></div>
            Made in Slovakia
          </div>
        </div>
      </footer>
    </div>
  );
}
