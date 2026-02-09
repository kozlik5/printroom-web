import { Car } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function PolepyPage() {
  return (
    <ServicePageLayout
      title="Polepy áut a interiérov"
      seoTitle="Polepy áut Bratislava | Polepy výkladov a interiérov | Print Room"
      metaDescription="Profesionálne polepy vozidiel, výkladov a interiérov v Bratislave. Od návrhu cez výrobu po aplikáciu. Kvalitné fólie s dlhou životnosťou."
      breadcrumbName="Polepy"
      description="Profesionálne polepy vozidiel, výkladov a interiérov. Od návrhu cez výrobu po samotnú aplikáciu. Používame kvalitné fólie s dlhou životnosťou."
      items={[
        'Celopolepy áut a dodávok',
        'Čiastočné polepy a logá na vozidlá',
        'Polepy výkladov a skiel',
        'Interiérové polepy a dekorácie',
        'Reklamné nálepky a samolepky',
      ]}
      images={[
        { src: '/images/services/polepy.jpg', alt: 'Polepy áut a interiérov' },
      ]}
      icon={<Car size={48} />}
      ctaText="Chcem naceniť polep"
    />
  );
}
