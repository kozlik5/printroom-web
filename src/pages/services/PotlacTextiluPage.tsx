import { Shirt } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function PotlacTextiluPage() {
  return (
    <ServicePageLayout
      title="Potlač textilu"
      seoTitle="Potlač textilu Bratislava | Tričká, mikiny, pracovné odevy | Print Room"
      metaDescription="Profesionálna potlač textilu v Bratislave. Tričká, mikiny, čiapky, pracovné odevy. Sieťotlač aj DTG. Už od 10 kusov. Express výroba do 48h."
      breadcrumbName="Potlač textilu"
      description="Potlačíme čokoľvek - tričká, mikiny, čiapky, pracovné odevy, tašky. Používame sieťotlač pre veľké náklady a DTG pre malosériové zákazky. Minimálne množstvo už od 10 kusov."
      items={[
        'Potlač tričiek a mikín',
        'Vyšívanie log a názvov',
        'Pracovné odevy s firemným brandingom',
        'Športové dresy a tímové oblečenie',
        'Reklamné tašky a batohy',
      ]}
      images={[
        { src: '/images/services/potlac-textilu.jpg', alt: 'Potlač textilu - tričká a mikiny' },
        { src: '/images/services/potlac-alt.jpg', alt: 'Potlač textilu - ukážka prác' },
      ]}
      icon={<Shirt size={48} />}
      ctaText="Chcem cenovú ponuku na textil"
    />
  );
}
