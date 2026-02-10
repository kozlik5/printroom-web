import { Scissors } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['vysivanie'];

export default function VysivaniePage() {
  return <ServicePageLayout {...page} icon={<Scissors size={48} />} />;
}
