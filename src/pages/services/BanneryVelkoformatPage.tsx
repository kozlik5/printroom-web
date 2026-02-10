import { Image } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['bannery-velkoformat'];

export default function BanneryVelkoformatPage() {
  return <ServicePageLayout {...page} icon={<Image size={48} />} />;
}
