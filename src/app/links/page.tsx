import { Metadata } from 'next';
import LinksPageClient from './LinksPageClient';

export const metadata: Metadata = {
  title: "Links - Vanderlei Neto",
  description: "Encontre todos os links importantes de Vanderlei Neto - Portfolio, GitHub, LinkedIn, WhatsApp e redes sociais.",
  keywords: ["links", "contatos", "redes sociais", "portfolio", "Vanderlei Neto"],
  openGraph: {
    title: "Links - Vanderlei Neto",
    description: "Encontre todos os links importantes de Vanderlei Neto - Portfolio, GitHub, LinkedIn, WhatsApp e redes sociais.",
    type: "profile",
    images: ["/profile.jpeg"],
  },
  alternates: {
    canonical: '/links',
  },
};

export default function LinksPage() {
  return <LinksPageClient />;
}
