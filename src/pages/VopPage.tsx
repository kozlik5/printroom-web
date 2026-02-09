export default function VopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Všeobecné obchodné podmienky
          </h1>
          <p className="mt-4 text-xl text-slate-300 italic max-w-2xl mx-auto">
            Podmienky poskytovania tlačiarenských a súvisiacich služieb
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>1. Úvodné ustanovenia</h2>
          <p>
            Tieto Všeobecné obchodné podmienky (ďalej len „VOP") upravujú vzťahy medzi spoločnosťou
            <strong> Print room s. r. o.</strong>, so sídlom Fialová 5/A, 851 07 Bratislava-Petržalka,
            IČO: 47 368 161, zapísanou v OR Mestského súdu Bratislava III, odd. Sro, vl.č. 133581/B
            (ďalej len „dodávateľ") a objednávateľom (ďalej len „zákazník").
          </p>
          <p>
            Odoslaním objednávky zákazník potvrdzuje, že sa s týmito VOP oboznámil a súhlasí s nimi.
          </p>

          <h2>2. Objednávky</h2>
          <p>
            Objednávku je možné zadať prostredníctvom kontaktného formulára na webovej stránke,
            emailom na <a href="mailto:print@printroom.sk">print@printroom.sk</a> alebo telefonicky
            na čísle <a href="tel:+421903584020">+421 903 584 020</a>.
          </p>
          <p>
            Objednávka sa považuje za záväznú po písomnom potvrdení dodávateľom (emailom).
            Súčasťou potvrdenia je cenová ponuka, predpokladaný termín dodania a špecifikácia služieb.
          </p>
          <p>
            Zákazník je povinný poskytnúť podklady v dostatočnej kvalite a vo formátoch
            špecifikovaných dodávateľom (PDF, AI, EPS, PNG min. 300 DPI).
          </p>

          <h2>3. Ceny a platobné podmienky</h2>
          <p>
            Všetky ceny sú uvádzané bez DPH, pokiaľ nie je uvedené inak.
            Dodávateľ je platcom DPH (IČ DPH: SK2023833449).
          </p>
          <p>Platba je možná:</p>
          <ul>
            <li>Prevodom na účet na základe vystavenej faktúry</li>
            <li>V hotovosti pri osobnom odbere</li>
          </ul>
          <p>
            Splatnosť faktúr je 14 dní od vystavenia, pokiaľ nie je dohodnuté inak.
            Pri prvej objednávke si dodávateľ vyhradzuje právo požadovať zálohu vo výške 50 % z celkovej sumy.
          </p>

          <h2>4. Dodacie podmienky</h2>
          <p>
            Štandardná doba výroby je 3–7 pracovných dní od potvrdenia objednávky a dodania
            finálnych podkladov. Expresná výroba (do 24–48 hodín) je možná po dohode a za príplatok.
          </p>
          <p>Spôsob dodania:</p>
          <ul>
            <li>Osobný odber na adrese Fialová 5/A, Bratislava-Petržalka (Po–Pia 9:00–17:00)</li>
            <li>Kuriérska služba (náklady na dopravu hradí zákazník)</li>
          </ul>

          <h2>5. Zodpovednosť za vady a reklamácie</h2>
          <p>
            Zákazník je povinný skontrolovať tovar ihneď pri prevzatí. Zjavné vady je potrebné
            reklamovať do 3 pracovných dní od prevzatia. Skryté vady je možné reklamovať
            do 6 mesiacov od prevzatia.
          </p>
          <p>
            Reklamáciu je potrebné zaslať emailom na{' '}
            <a href="mailto:print@printroom.sk">print@printroom.sk</a> spolu s fotografiou vady
            a popisom problému. Dodávateľ sa zaväzuje vybaviť reklamáciu do 30 dní.
          </p>
          <p>Dodávateľ nezodpovedá za vady spôsobené:</p>
          <ul>
            <li>Nekvalitnými podkladmi dodanými zákazníkom</li>
            <li>Odsúhlasením náhľadu zákazníkom (korektúra)</li>
            <li>Bežným opotrebením materiálu</li>
            <li>Nesprávnou manipuláciou s hotovým výrobkom</li>
          </ul>

          <h2>6. Korektúra a schvaľovanie</h2>
          <p>
            Pred začatím výroby dodávateľ zašle zákazníkovi náhľad (proof) na schválenie.
            Zákazník je povinný náhľad skontrolovať a písomne potvrdiť. Po schválení náhľadu
            dodávateľ nezodpovedá za chyby v texte, grafikách alebo farebnosti.
          </p>

          <h2>7. Odstúpenie od zmluvy</h2>
          <p>
            Zákazník môže od objednávky odstúpiť pred začatím výroby bez akýchkoľvek poplatkov.
            Po začatí výroby je zákazník povinný uhradiť náklady, ktoré dodávateľovi vznikli.
          </p>
          <p>
            Pri zákazkách vyrobených na mieru (personalizované produkty) nie je možné
            od zmluvy odstúpiť po začatí výroby v súlade s § 7 ods. 6 písm. c) zákona č. 102/2014 Z. z.
          </p>

          <h2>8. Autorské práva</h2>
          <p>
            Zákazník vyhlasuje, že je oprávnený používať všetky logá, texty, obrázky a iné
            podklady, ktoré dodávateľovi poskytne na spracovanie. Dodávateľ nenesie zodpovednosť
            za porušenie autorských práv tretích strán zákazníkom.
          </p>

          <h2>9. Ochrana osobných údajov</h2>
          <p>
            Informácie o spracúvaní osobných údajov sú uvedené v dokumente{' '}
            <a href="/gdpr">Ochrana osobných údajov (GDPR)</a>.
          </p>

          <h2>10. Záverečné ustanovenia</h2>
          <p>
            Právne vzťahy neupravené týmito VOP sa riadia právnym poriadkom Slovenskej republiky,
            najmä zákonom č. 513/1991 Zb. (Obchodný zákonník) v znení neskorších predpisov.
          </p>
          <p>
            Dodávateľ si vyhradzuje právo tieto VOP kedykoľvek zmeniť. Aktuálne znenie je vždy
            dostupné na webovej stránke dodávateľa.
          </p>
          <p>Tieto VOP sú platné a účinné od 1. 1. 2025.</p>
        </div>
      </section>
    </>
  );
}
