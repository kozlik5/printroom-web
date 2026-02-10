import { Box } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['3d-sluzby'];

export default function ThreeDSluzbyPage() {
  return <ServicePageLayout {...page} icon={<Box size={48} />} />;
}
