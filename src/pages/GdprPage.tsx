import { siteConfig } from '../siteConfig';

export default function GdprPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            {siteConfig.pages.gdpr.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            {siteConfig.pages.gdpr.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 dark:bg-[#0f1129]">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate dark:prose-invert prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>1. Prevádzkovateľ</h2>
          <p>
            <strong>{siteConfig.legalName}</strong><br />
            {siteConfig.address.full}<br />
            IČO: {siteConfig.ico}<br />
            DIČ: {siteConfig.dic}<br />
            IČ DPH: {siteConfig.icDph}<br />
            {siteConfig.registracia}
          </p>
          <p>
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
            Telefón: <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
          </p>

          <h2>2. Aké osobné údaje zbierame</h2>
          <p>
            Prostredníctvom kontaktného formulára na našej webovej stránke zbierame nasledujúce osobné údaje:
          </p>
          <ul>
            <li>Meno a priezvisko</li>
            <li>Emailová adresa</li>
            <li>Telefónne číslo (nepovinné)</li>
            <li>Obsah správy</li>
          </ul>

          <h2>3. Účel spracúvania</h2>
          <p>
            Vaše osobné údaje spracúvame výlučne na účely:
          </p>
          <ul>
            <li>Spracovanie cenových ponúk na základe vašich dopytov</li>
            <li>Komunikácia súvisiaca s vašimi požiadavkami</li>
            <li>Vybavovanie objednávok a poskytovanie služieb</li>
          </ul>

          <h2>4. Právny základ spracúvania</h2>
          <p>
            Právnym základom spracúvania vašich osobných údajov je <strong>súhlas dotknutej osoby</strong> podľa
            čl. 6 ods. 1 písm. a) Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR).
            Súhlas udeľujete zaškrtnutím príslušného políčka v kontaktnom formulári.
          </p>
          <p>
            Svoj súhlas môžete kedykoľvek odvolať zaslaním emailu na{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>5. Doba uchovávania</h2>
          <p>
            Vaše osobné údaje uchovávame po dobu <strong>3 rokov</strong> od poslednej vzájomnej komunikácie.
            Po uplynutí tejto doby budú údaje bezpečne vymazané.
          </p>

          <h2>6. Práva dotknutej osoby</h2>
          <p>V súvislosti so spracúvaním vašich osobných údajov máte právo na:</p>
          <ul>
            <li><strong>Prístup</strong> — právo získať potvrdenie o tom, či sa vaše osobné údaje spracúvajú</li>
            <li><strong>Opravu</strong> — právo na opravu nesprávnych alebo neúplných údajov</li>
            <li><strong>Vymazanie</strong> — právo na vymazanie osobných údajov („právo byť zabudnutý")</li>
            <li><strong>Obmedzenie spracúvania</strong> — právo požadovať obmedzenie spracúvania v určených prípadoch</li>
            <li><strong>Prenositeľnosť</strong> — právo získať osobné údaje v štruktúrovanom formáte</li>
            <li><strong>Námietku</strong> — právo namietať proti spracúvaniu osobných údajov</li>
          </ul>
          <p>
            Svoje práva si môžete uplatniť zaslaním emailu na{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Naša webová stránka používa iba <strong>technické (nevyhnutné) cookies</strong>, ktoré sú potrebné
            pre správne fungovanie webu. Tieto cookies nezbierajú žiadne osobné údaje a nevyžadujú súhlas.
          </p>
          <p>
            Používame tiež cookie na uloženie vašej voľby ohľadom cookie bannera.
          </p>

          <h2>8. Dozorný orgán</h2>
          <p>
            V prípade, že sa domnievate, že spracúvanie vašich osobných údajov porušuje platné predpisy,
            máte právo podať sťažnosť na:
          </p>
          <p>
            <strong>Úrad na ochranu osobných údajov Slovenskej republiky</strong><br />
            Hraničná 12, 820 07 Bratislava 27<br />
            Web: <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a><br />
            Email: statny.dozor@pdp.gov.sk
          </p>

          <h2>9. Záverečné ustanovenia</h2>
          <p>
            Tieto zásady ochrany osobných údajov sú platné a účinné od 1. 1. 2025.
            Prevádzkovateľ si vyhradzuje právo tieto zásady kedykoľvek aktualizovať.
          </p>
        </div>
      </section>
    </>
  );
}
