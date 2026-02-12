import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vanderlei Neto - Front-End Developer",
    template: "%s | Vanderlei Neto"
  },
  description: "Desenvolvedor Front-End especializado em React, TypeScript, Angular e tecnologias modernas. Criando interfaces intuitivas e responsivas com foco na experiência do usuário.",
  keywords: [
    "desenvolvedor front-end",
    "react developer",
    "typescript",
    "angular",
    "javascript",
    "web developer",
    "portfolio",
    "Vanderlei Neto",
    "UI/UX",
    "responsive design"
  ],
  authors: [{ name: "Vanderlei Neto", url: "https://www.vanderleineto.online" }],
  creator: "Vanderlei Neto",
  publisher: "Vanderlei Neto",
  metadataBase: new URL('https://www.vanderleineto.online'), // Substitua pelo seu domínio
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vanderlei Neto - Front-End Developer",
    description: "Desenvolvedor Front-End especializado em React, TypeScript, Angular e tecnologias modernas. Criando interfaces intuitivas e responsivas.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.vanderleineto.online",
    siteName: "Vanderlei Neto Portfolio",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Vanderlei Neto - Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanderlei Neto - Front-End Developer",
    description: "Desenvolvedor Front-End especializado em React, TypeScript, Angular e tecnologias modernas.",
    images: ["/profile-photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://www.vanderleineto.online" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
