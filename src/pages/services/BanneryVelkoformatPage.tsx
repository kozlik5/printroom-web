import { Image } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

export default function BanneryVelkoformatPage() {
  return (
    <ServicePageLayout
      title="Bannery a veľkoformátová tlač"
      seoTitle="Bannery a veľkoformátová tlač Bratislava | Roll-upy, plagáty | Print Room"
      metaDescription="Veľkoformátová tlač v Bratislave. Roll-up bannery, X-bannery, mesh, plagáty, PVC dosky. Express dodanie do 24 hodín. Kvalitná tlač pre eventy a predajne."
      breadcrumbName="Bannery a veľkoformát"
      description="Veľkoformátová tlač pre eventy, predajne aj kancelárie. Roll-upy, X-bannery, mesh bannery, backlity. Dodanie už do 24 hodín pri expresných objednávkach."
      items={[
        'Roll-up bannery',
        'X-bannery a L-bannery',
        'Mesh bannery a plachty',
        'Plagáty a fotoplátna',
        'PVC dosky a forex',
      ]}
      images={[
        { src: '/images/services/bannery-plagaty.jpg', alt: 'Bannery a veľkoformátová tlač' },
      ]}
      icon={<Image size={48} />}
      ctaText="Chcem cenovú ponuku na bannery"
    />
  );
}
