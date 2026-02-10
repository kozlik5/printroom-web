export const siteConfig = {
  // Základné info
  name: 'Print room',
  legalName: 'Print room s. r. o.',
  ico: '47 368 161',
  dic: '2023833449',
  icDph: 'SK2023833449',
  registracia: 'OR Mestského súdu Bratislava III, odd. Sro, vl.č. 133581/B',
  founded: 2013,
  logo: '/images/logo-white.png',
  
  // Kontakt
  phone: '+421 903 584 020',
  phoneRaw: '+421903584020',
  email: 'print@printroom.sk',
  address: {
    street: 'Fialová 5/A',
    city: 'Bratislava',
    district: 'Petržalka',
    zip: '851 07',
    full: 'Fialová 5/A, 851 07 Bratislava-Petržalka',
    short: 'Fialová 5/A, Bratislava',
    mapsUrl: 'https://maps.google.com/?q=Fialová+5/A,+851+07+Bratislava-Petržalka',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5!2d17.1119!3d48.1087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA2JzMxLjMiTiAxN8KwMDYnNDIuOCJF!5e0!3m2!1ssk!2ssk!4v1700000000000!5m2!1ssk!2ssk',
  },
  
  // Social
  social: {
    instagram: 'https://instagram.com/printroom.sk',
    facebook: 'https://facebook.com/people/Printroom/61564243379044',
  },
  whatsapp: {
    number: '421903584020',
    message: 'Dobrý deň, mám záujem o vaše služby.',
  },
  
  // Otváracie hodiny
  hours: 'Po-Pia: 9:00 - 17:00\nSo-Ne: zatvorené',
  
  // Hero section
  hero: {
    badge: '🖨️ Od roku 2013 v Petržalke',
    headline: ['MODERNÁ TLAČ', 'PRE VÁŠ', 'BIZNIS.'],
    subtitle: 'Váš partner v Petržalke od roku 2013. Prinášame komplexné riešenia od 1 kusu po tisícové série.',
    ctaText: 'Naše Služby',
    experienceYears: '11+',
    heroImage: '/images/services/hero-tlaciaren-splash-hd.jpg',
  },
  
  // Testimonials
  testimonials: [
    { name: 'Martin K.', role: 'Marketingový manažér', text: 'Spolupráca s Printroom bola bezproblémová. Tričká pre celý tím do 3 dní, perfektná kvalita.', rating: 5 },
    { name: 'Jana S.', role: 'Koordinátorka eventov', text: 'Bannery na konferenciu zvládli za 24 hodín. Farby presné, materiál odolný. Odporúčam.', rating: 5 },
    { name: 'Peter D.', role: 'Majiteľ e-shopu', text: 'Vizitky a katalógy vyzerajú prémiovo. Konečne dodávateľ, na ktorého sa môžeme spoľahnúť.', rating: 5 },
    { name: 'Lucia M.', role: 'Grafická dizajnérka', text: 'Rýchla komunikácia a výsledok presne podľa návrhu. Polepy na autá vyzerajú fantasticky.', rating: 5 },
  ],
  
  // Stats
  stats: [
    { end: 5000, suffix: '+', label: 'Dokončených zákaziek' },
    { end: 24, suffix: 'h', label: 'Express výroba' },
    { end: 11, suffix: '+', label: 'Rokov skúseností' },
    { end: 98, suffix: '%', label: 'Spokojných klientov' },
  ],
  
  // Services (pre HomePage, SluzbyPage, PortfolioPage filtre, ContactForm dropdown)
  services: [
    { title: 'Potlač Textilu', slug: 'potlac-textilu', desc: 'Tričká, mikiny, čiapky, pracovné odevy. Sieťotlač aj DTG.', size: 'large', img: '/images/services/potlac-textilu.jpg', imgPos: 'right' as const },
    { title: 'Reklamné Predmety', slug: 'reklamne-predmety', desc: 'Perá, hrnčeky, tašky, zápisníky s vašim logom.', size: 'small', img: '/images/services/firemne-darceky.jpg' },
    { title: '3D Služby', slug: '3d-sluzby', desc: '3D tlač, skenovanie a modelovanie. Prototypy aj hotové diely.', size: 'small', img: '/images/services/3d-sluzby.jpg' },
    { title: 'Bannery a Plagáty', slug: 'bannery-velkoformat', desc: 'Veľkoformátová tlač, roll-upy, mesh. Express do 24h.', size: 'small', img: '/images/services/bannery-plagaty.jpg' },
    { title: 'Vizitky a Brožúry', slug: 'tlac-polygrafia', desc: 'Vizitky, katalógy, letáky. Od kusovky po náklad.', size: 'large', img: '/images/services/vizitky.jpg' },
    { title: 'Polepy', slug: 'polepy', desc: 'Polepy áut, výkladov, interiérov. Návrh aj realizácia.', size: 'small', img: '/images/services/polepy.jpg' },
    { title: 'Vyšívanie na Textil', slug: 'vysivanie', desc: 'Luxusná aplikácia loga vyšívaním na textil.', size: 'small', img: '/images/services/potlac-alt.jpg' },
  ],

  // Service detail pages config
  servicePages: {
    'potlac-textilu': {
      title: 'Potlač textilu',
      seoTitle: 'Potlač textilu Bratislava | Tričká, mikiny, pracovné odevy | Print Room',
      metaDescription: 'Profesionálna potlač textilu v Bratislave. Tričká, mikiny, čiapky, pracovné odevy. Sieťotlač aj DTG. Už od 10 kusov. Express výroba do 48h.',
      breadcrumbName: 'Potlač textilu',
      description: 'Potlačíme čokoľvek - tričká, mikiny, čiapky, pracovné odevy, tašky. Používame sieťotlač pre veľké náklady a DTG pre malosériové zákazky. Minimálne množstvo už od 10 kusov.',
      items: [
        'Potlač tričiek a mikín',
        'Vyšívanie log a názvov',
        'Pracovné odevy s firemným brandingom',
        'Športové dresy a tímové oblečenie',
        'Reklamné tašky a batohy',
      ],
      images: [
        { src: '/images/services/potlac-textilu.jpg', alt: 'Potlač textilu - tričká a mikiny' },
        { src: '/images/services/potlac-alt.jpg', alt: 'Potlač textilu - ukážka prác' },
      ],
      ctaText: 'Chcem cenovú ponuku na textil',
    },
    'reklamne-predmety': {
      title: 'Reklamné predmety',
      seoTitle: 'Reklamné predmety Bratislava | Firemné darčeky | Print Room',
      metaDescription: 'Reklamné predmety a firemné darčeky v Bratislave. Perá, hrnčeky, zápisníky, powerbanky s vašim logom. Kvalitná potlač a rýchla výroba.',
      breadcrumbName: 'Reklamné predmety',
      description: 'Firemné darčeky, ktoré nezakončia v koši. Perá, hrnčeky, zápisníky, powerbanky a stovky ďalších produktov s vašim logom. Dodávame firmám v Bratislave a okolí.',
      items: [
        'Perá a písacie potreby',
        'Hrnčeky a termosky',
        'Zápisníky a diáre',
        'USB kľúče a powerbanky',
        'Tašky a batohy',
        'Dáždniky a outdoorové potreby',
      ],
      images: [
        { src: '/images/services/firemne-darceky.jpg', alt: 'Reklamné predmety - firemné darčeky' },
      ],
      ctaText: 'Chcem katalóg reklamných predmetov',
    },
    '3d-sluzby': {
      title: '3D tlač, skenovanie a modelovanie',
      seoTitle: '3D tlač Bratislava | 3D skenovanie a modelovanie | Print Room',
      metaDescription: 'Profesionálne 3D služby v Bratislave. 3D tlač, skenovanie objektov, modelovanie na mieru. Prototypy, náhradné diely, architektonické modely.',
      breadcrumbName: '3D služby',
      description: 'Komplexné 3D služby pre priemysel aj kreatívcov. Vytlačíme prototypy, náhradné diely, architektonické modely. Naskenujeme existujúce objekty a vytvoríme 3D model na mieru.',
      items: [
        '3D tlač FDM a SLA',
        '3D skenovanie objektov',
        '3D modelovanie na zákazku',
        'Prototypy a funkčné diely',
        'Architektonické makety',
      ],
      images: [
        { src: '/images/services/3d-sluzby.jpg', alt: '3D tlač a modelovanie' },
      ],
      ctaText: 'Chcem konzultáciu k 3D projektu',
    },
    'tlac-polygrafia': {
      title: 'Tlač a polygrafia',
      seoTitle: 'Tlačiareň Bratislava | Vizitky, brožúry, katalógy | Print Room',
      metaDescription: 'Profesionálna tlačiareň v Bratislave. Vizitky, brožúry, katalógy, letáky. Premium papiere, expresná výroba vizitiek do 24 hodín.',
      breadcrumbName: 'Tlač a polygrafia',
      description: 'Klasická polygrafia v modernom prevedení. Vizitky, brožúry, katalógy, letáky. Od jedného kusu po tisícové náklady. Expresná výroba vizitiek do 24 hodín.',
      items: [
        'Vizitky (štandard aj premium papiere)',
        'Brožúry a katalógy (V1, V2, V3 väzba)',
        'Letáky a plagáty',
        'Hlavičkové papiere a obálky',
        'Kalendáre a diáre',
      ],
      images: [
        { src: '/images/services/vizitky.jpg', alt: 'Vizitky a tlač' },
      ],
      ctaText: 'Chcem cenovú ponuku na tlač',
    },
    'bannery-velkoformat': {
      title: 'Bannery a veľkoformátová tlač',
      seoTitle: 'Bannery Bratislava | Veľkoformátová tlač | Roll-up bannery | Print Room',
      metaDescription: 'Bannery a veľkoformátová tlač v Bratislave. Roll-up bannery, X-bannery, mesh, plagáty. Express výroba do 24 hodín.',
      breadcrumbName: 'Bannery a veľkoformát',
      description: 'Veľkoformátová tlač pre eventy, predajne aj kancelárie. Roll-upy, X-bannery, mesh bannery, backlity. Dodanie už do 24 hodín pri expresných objednávkach.',
      items: [
        'Roll-up bannery',
        'X-bannery a L-bannery',
        'Mesh bannery a plachty',
        'Plagáty a fotoplátna',
        'PVC dosky a forex',
      ],
      images: [
        { src: '/images/services/bannery-plagaty.jpg', alt: 'Bannery a veľkoformát' },
      ],
      ctaText: 'Chcem cenovú ponuku na bannery',
    },
    'polepy': {
      title: 'Polepy áut a interiérov',
      seoTitle: 'Polepy áut Bratislava | Polepy vozidiel | Print Room',
      metaDescription: 'Profesionálne polepy vozidiel v Bratislave. Celopolepy áut, polepy výkladov, interiérové polepy. Od návrhu po aplikáciu.',
      breadcrumbName: 'Polepy',
      description: 'Profesionálne polepy vozidiel, výkladov a interiérov. Od návrhu cez výrobu po samotnú aplikáciu. Používame kvalitné fólie s dlhou životnosťou.',
      items: [
        'Celopolepy áut a dodávok',
        'Čiastočné polepy a logá na vozidlá',
        'Polepy výkladov a skiel',
        'Interiérové polepy a dekorácie',
        'Reklamné nálepky a samolepky',
      ],
      images: [
        { src: '/images/services/polepy.jpg', alt: 'Polepy vozidiel' },
      ],
      ctaText: 'Chcem naceniť polep',
    },
    'vysivanie': {
      title: 'Vyšívanie na textil',
      seoTitle: 'Vyšívanie textilu Bratislava | Výšivky log | Print Room',
      metaDescription: 'Profesionálne vyšívanie na textil v Bratislave. Výšivky log, názvov a designov na oblečenie. Luxusná aplikácia loga vyšívaním.',
      breadcrumbName: 'Vyšívanie',
      description: 'Luxusná aplikácia loga vyšívaním na textil. Kvalitné vyšívanie log, názvov a designov na všetky typy oblečenia.',
      items: [
        'Vyšívanie firemných log',
        'Výšivky názvov a textov',
        'Personalizované vyšívanie',
        'Opravy a úpravy výšiviek',
        'Vyšívanie na všetky typy textilu',
      ],
      images: [
        { src: '/images/services/potlac-alt.jpg', alt: 'Vyšívanie na textil' },
      ],
      ctaText: 'Chcem cenovú ponuku na vyšívanie',
    },
  },

  // SluzbyPage categories
  sluzbyCategories: [
    {
      id: 'potlac-textilu',
      title: 'Potlač textilu',
      text: 'Potlačíme čokoľvek - tričká, mikiny, čiapky, pracovné odevy, tašky. Používame sieťotlač pre veľké náklady a DTG pre malosériové zákazky. Minimálne množstvo už od 10 kusov.',
      items: [
        'Potlač tričiek a mikín',
        'Vyšívanie log a názvov',
        'Pracovné odevy s firemným brandingom',
        'Športové dresy a tímové oblečenie',
        'Reklamné tašky a batohy',
      ],
      slug: 'potlac-textilu',
      img: '/images/services/potlac-textilu.jpg',
    },
    {
      id: 'reklamne-predmety',
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
      slug: 'reklamne-predmety',
      img: '/images/services/firemne-darceky.jpg',
    },
    {
      id: '3d-sluzby',
      title: '3D tlač, skenovanie a modelovanie',
      text: 'Komplexné 3D služby pre priemysel aj kreatívcov. Vytlačíme prototypy, náhradné diely, architektonické modely. Naskenujeme existujúce objekty a vytvoríme 3D model na mieru.',
      items: [
        '3D tlač FDM a SLA',
        '3D skenovanie objektov',
        '3D modelovanie na zákazku',
        'Prototypy a funkčné diely',
        'Architektonické makety',
      ],
      slug: '3d-sluzby',
      img: '/images/services/3d-sluzby.jpg',
    },
    {
      id: 'tlac-polygrafia',
      title: 'Tlač a polygrafia',
      text: 'Klasická polygrafia v modernom prevedení. Vizitky, brožúry, katalógy, letáky. Od jedného kusu po tisícové náklady. Expresná výroba vizitiek do 24 hodín.',
      items: [
        'Vizitky (štandard aj premium papiere)',
        'Brožúry a katalógy (V1, V2, V3 väzba)',
        'Letáky a plagáty',
        'Hlavičkové papiere a obálky',
        'Kalendáre a diáre',
      ],
      slug: 'tlac-polygrafia',
      img: '/images/services/vizitky.jpg',
    },
    {
      id: 'bannery-velkoformat',
      title: 'Bannery a veľkoformátová tlač',
      text: 'Veľkoformátová tlač pre eventy, predajne aj kancelárie. Roll-upy, X-bannery, mesh bannery, backlity. Dodanie už do 24 hodín pri expresných objednávkach.',
      items: [
        'Roll-up bannery',
        'X-bannery a L-bannery',
        'Mesh bannery a plachty',
        'Plagáty a fotoplátna',
        'PVC dosky a forex',
      ],
      slug: 'bannery-velkoformat',
      img: '/images/services/bannery-plagaty.jpg',
    },
    {
      id: 'polepy',
      title: 'Polepy áut a interiérov',
      text: 'Profesionálne polepy vozidiel, výkladov a interiérov. Od návrhu cez výrobu po samotnú aplikáciu. Používame kvalitné fólie s dlhou životnosťou.',
      items: [
        'Celopolepy áut a dodávok',
        'Čiastočné polepy a logá na vozidlá',
        'Polepy výkladov a skiel',
        'Interiérové polepy a dekorácie',
        'Reklamné nálepky a samolepky',
      ],
      slug: 'polepy',
      img: '/images/services/polepy.jpg',
    },
  ],
  
  // Portfolio items
  portfolio: {
    filters: ['Všetko', 'Potlač textilu', 'Reklamné predmety', '3D služby', 'Tlač a polygrafia', 'Veľkoformát', 'Polepy'],
    items: [
      // Potlač textilu
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/comic-2.jpg', title: 'Potlač tričiek — Comic' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/dpm-1.jpg', title: 'Firemné oblečenie DPM' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/dpm-6.jpg', title: 'Pracovné odevy DPM' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/jednota-1.jpg', title: 'Potlač pre Jednotu' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/jednota-7.jpg', title: 'Firemný textil Jednota' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/move-2.jpg', title: 'Športové tričká MOVE' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/move.jpg', title: 'Kolekcia MOVE' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/img-5725.jpg', title: 'Potlač textilu — ukážka' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/img-5829.jpg', title: 'Sieťotlač na textil' },
      { cat: 'Potlač textilu', img: '/images/portfolio/potlac/steve.jpg', title: 'Potlačené tričko' },

      // Reklamné predmety
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/alfa-4.jpg', title: 'Reklamné predmety Alfa' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/alfa-5.jpg', title: 'Firemné darčeky Alfa' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/img-5701.jpg', title: 'Reklamné predmety — ukážka' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/img-5704.jpg', title: 'Firemné darčeky' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/olejova-pera.jpg', title: 'Perá s potlačou — Olejová akadémia' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/olejova-salky.jpg', title: 'Šálky s potlačou — Olejová akadémia' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/salvatora-tasky.jpg', title: 'Tašky — Lekáreň u Salvátora' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/salvatora-zapisniky.jpg', title: 'Zápisníky — Lekáreň u Salvátora' },
      { cat: 'Reklamné predmety', img: '/images/portfolio/reklamne/silver-3.jpg', title: 'Reklamné predmety Silver' },

      // 3D služby
      { cat: '3D služby', img: '/images/portfolio/3d/olejova-pera.jpg', title: '3D tlač — perá' },
      { cat: '3D služby', img: '/images/portfolio/3d/olejova-salky-2.jpg', title: '3D tlač — šálky' },
      { cat: '3D služby', img: '/images/portfolio/3d/olejova-salky.jpg', title: '3D realizácia' },

      // Veľkoformát / Bannery
      { cat: 'Veľkoformát', img: '/images/portfolio/bannery/banner-1.jpg', title: 'Veľkoformátový banner' },
      { cat: 'Veľkoformát', img: '/images/portfolio/bannery/banner-2.jpg', title: 'Roll-up banner' },

      // Tlač a polygrafia
      { cat: 'Tlač a polygrafia', img: '/images/portfolio/vizitky/vizitky.jpg', title: 'Premium vizitky' },
      { cat: 'Tlač a polygrafia', img: '/images/portfolio/brozury/img-5701.jpg', title: 'Brožúry a katalógy' },
      { cat: 'Tlač a polygrafia', img: '/images/portfolio/brozury/img-5704.jpg', title: 'Firemné katalógy' },
      { cat: 'Tlač a polygrafia', img: '/images/portfolio/brozury/img-5719.jpg', title: 'Tlačoviny' },

      // Polepy
      { cat: 'Polepy', img: '/images/portfolio/polepy/car-wrap-1.jpg', title: 'Celopolep vozidla' },
      { cat: 'Polepy', img: '/images/portfolio/polepy/car-wrap-2.jpg', title: 'Polep firemného auta' },
    ],
  },
  
  // Capacity bars (analytics section)
  capacity: [
    { label: 'Textil', value: 95, color: 'from-[#f97316] to-[#f59e0b]' },
    { label: 'Reklama', value: 85, color: 'from-[#005088] to-[#0070b8]' },
    { label: '3D', value: 80, color: 'from-[#8b5cf6] to-[#a78bfa]' },
    { label: 'Bannery', value: 90, color: 'from-[#f97316] to-[#ef4444]' },
    { label: 'Polygrafia', value: 100, color: 'from-[#005088] to-[#00a8e8]' },
    { label: 'Polepy', value: 75, color: 'from-[#10b981] to-[#34d399]' },
    { label: 'Výšivka', value: 85, color: 'from-[#f97316] to-[#f59e0b]' },
  ],
  
  // Process steps
  process: [
    { step: '01', title: 'Konzultácia', text: 'Vyberieme technológiu a vzorkovník materiálu.' },
    { step: '02', title: 'Prototyp', text: 'Kontrola grafiky a vytvorenie vzorky pred výrobou.' },
    { step: '03', title: 'Výroba', text: 'Precízna tlač pod dohľadom majstrov polygrafie.' },
    { step: '04', title: 'Expedícia', text: 'Doručenie kuriérom alebo odber v Petržalke.' },
  ],
  
  // Texty pre stránky
  pages: {
    sluzby: { 
      title: 'Kompletné tlačiarenské služby pre váš biznis',
      subtitle: 'Všetko pod jednou strechou — od návrhu po hotový produkt. Potlač textilu, reklamné predmety, 3D tlač, polygrafia, veľkoformát aj polepy v Bratislave.',
    },
    portfolio: { 
      title: 'Naše realizácie a portfólio',
      subtitle: 'Desiatky spokojných klientov z Bratislavy, Nitry a celého západného Slovenska. Pozrite si ukážky našej práce — od potlačených tričiek cez reklamné predmety až po 3D prototypy.',
    },
    kontakt: { 
      title: 'Kontaktujte nás',
      subtitle: 'Potrebujete cenovú ponuku alebo konzultáciu? Napíšte nám — ozveme sa do 24 hodín. Sídlime v Bratislave-Petržalke a obsluhujeme firmy z celého západného Slovenska.',
    },
    gdpr: { 
      title: 'Ochrana osobných údajov',
      subtitle: 'Informácie o spracúvaní osobných údajov v súlade s GDPR',
    },
    vop: { 
      title: 'Všeobecné obchodné podmienky',
      subtitle: 'Obchodné podmienky pre služby spoločnosti Print room s. r. o.',
    },
  },
  
  // Navigácia
  navigation: {
    main: [
      { to: '/sluzby', label: 'Služby' },
      { to: '/portfolio', label: 'Portfólio' },
      { to: '/kontakt', label: 'Kontakt' },
    ],
    footer: [
      { to: '/', label: 'Domov' },
      { to: '/sluzby', label: 'Služby' },
      { to: '/portfolio', label: 'Portfólio' },
      { to: '/kontakt', label: 'Kontakt' },
      { to: '/vop', label: 'VOP' },
      { to: '/gdpr', label: 'GDPR' },
    ],
  },
  
  // Farby (primárna, accent)
  colors: {
    primary: '#005088',
    primaryLight: '#0070b8',
    accent: '#f97316',
    accentEnd: '#f59e0b',
  },
  
  // SEO
  seo: {
    defaultTitle: 'Print room | Tlačiareň Bratislava',
    titleSuffix: ' | Print room',
    defaultDescription: 'Profesionálna tlačiareň v Bratislave. Potlač textilu, 3D tlač, reklamné predmety, bannery, polepy. Express výroba, kvalitné materiály.',
  },
  
  // Footer
  footer: {
    tagline: 'Profesionálna tlačiareň v Bratislave. Potlač, 3D tlač, reklamné predmety.',
    copyright: '© 2013—2026 Printroom Studio Bratislava • Všetky práva vyhradené',
    badges: ['Líder v kvalite', 'Vyrobené na Slovensku'],
  },
  
  // Contact form
  contactApi: '/api/contact',

  // Contact form service options
  serviceOptions: [
    'Potlač textilu',
    'Reklamné predmety', 
    '3D služby',
    'Tlač a polygrafia',
    'Veľkoformát',
    'Polepy',
    'Vyšívanie',
    'Iné',
  ],

  // CTA texts
  cta: {
    primary: 'Cenová ponuka',
    hero: 'Naše Služby',
    serviceDefault: 'Získať cenovú ponuku',
  },
};

export type SiteConfig = typeof siteConfig;