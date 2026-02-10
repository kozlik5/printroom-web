import { FileText } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';
import { siteConfig } from '../../siteConfig';

const page = siteConfig.servicePages['tlac-polygrafia'];

export default function TlacPolygrafiaPage() {
  return <ServicePageLayout {...page} icon={<FileText size={48} />} />;
}
