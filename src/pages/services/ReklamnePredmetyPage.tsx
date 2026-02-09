import { Gift } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function ReklamnePredmetyPage() {
  return (
    <ServicePageLayout
      title="Reklamné predmety"
      seoTitle="Reklamné predmety Bratislava | Firemné darčeky s logom | Print Room"
      metaDescription="Reklamné predmety s potlačou vášho loga. Perá, hrnčeky, zápisníky, powerbanky. Dodávame firmám v Bratislave a okolí. Stovky produktov na výber."
      breadcrumbName="Reklamné predmety"
      description="Firemné darčeky, ktoré nezakončia v koši. Perá, hrnčeky, zápisníky, powerbanky a stovky ďalších produktov s vašim logom. Dodávame firmám v Bratislave a okolí."
      items={[
        'Perá a písacie potreby',
        'Hrnčeky a termosky',
        'Zápisníky a diáre',
        'USB kľúče a powerbanky',
        'Tašky a batohy',
        'Dáždniky a outdoorové potreby',
      ]}
      images={[
        { src: '/images/services/reklamne-predmety.jpg', alt: 'Reklamné predmety s logom' },
      ]}
      icon={<Gift size={48} />}
      ctaText="Chcem katalóg reklamných predmetov"
    />
  );
}
