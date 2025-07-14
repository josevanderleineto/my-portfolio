import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usando Inter como fallback ou para testes
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

// Se as fontes Geist estiverem causando problemas, podemos removê-las temporariamente ou usar uma abordagem diferente.
// Por exemplo, importá-las diretamente no CSS ou usar fontes do Google Fonts de forma mais tradicional.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanderlei Neto - Front-End Developer",
  description: "Desenvolvedor Front-End especializado em React, TypeScript, Angular e tecnologias modernas. Criando interfaces intuitivas e responsivas.",
  keywords: "desenvolvedor, front-end, react, typescript, angular, javascript, web developer",
  authors: [{ name: "Vanderlei Neto" }],
  openGraph: {
    title: "Vanderlei Neto - Front-End Developer",
    description: "Desenvolvedor Front-End especializado em React, TypeScript, Angular e tecnologias modernas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}> {/* Usando inter.className como fallback */}
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
