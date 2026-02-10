import { Gift } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['reklamne-predmety'];

export default function ReklamnePredmetyPage() {
  return <ServicePageLayout {...page} icon={<Gift size={48} />} />;
}
