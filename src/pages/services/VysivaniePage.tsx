import { Printer } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function VysivaniePage() {
  return (
    <ServicePageLayout
      title="Vyšívanie na textil"
      seoTitle="Vyšívanie na textil Bratislava | Vyšívané logá a nápisy | Print Room"
      metaDescription="Profesionálne vyšívanie na textil v Bratislave. Vyšívané logá, názvy firiem, monogramy. Prémiová aplikácia na pracovné odevy, čiapky a tašky."
      breadcrumbName="Vyšívanie"
      description="Luxusná aplikácia loga vyšívaním na textil. Vyšívanie dodáva profesionálny a prémiový vzhľad vašim pracovným odevom, čiapkam a taškám. Ideálne pre firmy, ktoré chcú vystupovať na vyššej úrovni."
      items={[
        'Vyšívanie firemných log',
        'Mená a monogramy na pracovné odevy',
        'Vyšívanie na čiapky a šiltovky',
        'Vyšívané nášivky a odznaky',
        'Prémiový branding textilu',
      ]}
      images={[
        { src: '/images/services/potlac-alt.jpg', alt: 'Vyšívanie na textil' },
      ]}
      icon={<Printer size={48} />}
      ctaText="Chcem cenovú ponuku na vyšívanie"
    />
  );
}
