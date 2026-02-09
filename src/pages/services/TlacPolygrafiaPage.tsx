import { FileText } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function TlacPolygrafiaPage() {
  return (
    <ServicePageLayout
      title="Tlač a polygrafia"
      seoTitle="Vizitky a polygrafia Bratislava | Brožúry, katalógy, letáky | Print Room"
      metaDescription="Profesionálna polygrafia v Bratislave. Vizitky, brožúry, katalógy, letáky. Od jedného kusu po tisícové náklady. Express vizitky do 24 hodín."
      breadcrumbName="Tlač a polygrafia"
      description="Klasická polygrafia v modernom prevedení. Vizitky, brožúry, katalógy, letáky. Od jedného kusu po tisícové náklady. Expresná výroba vizitiek do 24 hodín."
      items={[
        'Vizitky (štandard aj premium papiere)',
        'Brožúry a katalógy (V1, V2, V3 väzba)',
        'Letáky a plagáty',
        'Hlavičkové papiere a obálky',
        'Kalendáre a diáre',
      ]}
      images={[
        { src: '/images/services/vizitky.jpg', alt: 'Vizitky a polygrafia' },
        { src: '/images/services/brozury-katalogy.jpg', alt: 'Brožúry a katalógy' },
      ]}
      icon={<FileText size={48} />}
      ctaText="Chcem cenovú ponuku na tlač"
    />
  );
}
