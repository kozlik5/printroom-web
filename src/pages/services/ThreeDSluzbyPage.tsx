import { Box } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function ThreeDSluzbyPage() {
  return (
    <ServicePageLayout
      title="3D tlač, skenovanie a modelovanie"
      seoTitle="3D tlač Bratislava | 3D skenovanie, modelovanie, prototypy | Print Room"
      metaDescription="Komplexné 3D služby v Bratislave. 3D tlač FDM a SLA, 3D skenovanie, modelovanie na zákazku. Prototypy, náhradné diely, architektonické makety."
      breadcrumbName="3D služby"
      description="Komplexné 3D služby pre priemysel aj kreatívcov. Vytlačíme prototypy, náhradné diely, architektonické modely. Naskenujeme existujúce objekty a vytvoríme 3D model na mieru."
      items={[
        '3D tlač FDM a SLA',
        '3D skenovanie objektov',
        '3D modelovanie na zákazku',
        'Prototypy a funkčné diely',
        'Architektonické makety',
      ]}
      images={[
        { src: '/images/services/3d-sluzby.jpg', alt: '3D tlač a skenovanie' },
      ]}
      icon={<Box size={48} />}
      ctaText="Chcem konzultáciu k 3D projektu"
    />
  );
}
