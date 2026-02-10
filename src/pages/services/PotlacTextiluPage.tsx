import { Shirt } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['potlac-textilu'];

export default function PotlacTextiluPage() {
  return <ServicePageLayout {...page} icon={<Shirt size={48} />} />;
}
