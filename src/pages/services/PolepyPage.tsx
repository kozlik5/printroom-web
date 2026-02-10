import { Car } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['polepy'];

export default function PolepyPage() {
  return <ServicePageLayout {...page} icon={<Car size={48} />} />;
}
