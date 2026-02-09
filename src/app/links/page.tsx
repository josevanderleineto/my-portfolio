 'use client';

import Image from 'next/image';
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Languages,
} from 'lucide-react';

import { useTheme, useLanguage } from '@/contexts/AppContext';

export default function LinksPage() {
  const { darkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const text = {
    name: 'Vanderlei Neto',
    role:
      language === 'pt'
        ? 'Desenvolvedor Full Stack'
        : 'Full Stack Developer',
    portfolio: language === 'pt' ? 'Portfólio' : 'Portfolio',
    footer:
      language === 'pt'
        ? 'Feito com ♥ por Vanderlei Neto'
        : 'Made with ♥ by Vanderlei Neto',
  };

  return (
    <main
      className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      <div className="w-full max-w-md text-center relative">
        {/* Botão idioma */}
        <button
          onClick={toggleLanguage}
          className="absolute top-0 right-0 flex items-center gap-2 text-xs px-3 py-2
                     rounded-full border shadow-sm transition
                     bg-white/80 text-gray-700 hover:bg-white
                     dark:bg-white/10 dark:text-gray-200 dark:border-white/20"
        >
          <Languages className="w-4 h-4" />
          {language === 'pt' ? 'EN' : 'PT'}
        </button>

        {/* Avatar */}
        <div className="flex justify-center mb-6 mt-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/profile.jpeg"
              alt={text.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Nome */}
        <h1
          className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {text.name}
        </h1>

        <p
          className={`text-sm mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {text.role}
        </p>

        {/* Links */}
        <div className="space-y-4">
          <LinkButton
            href="https://www.vanderleineto.online/"
            icon={<ExternalLink />}
          >
            {text.portfolio}
          </LinkButton>

          <LinkButton
            href="https://api.whatsapp.com/send/?phone=5571996751371"
            icon={<MessageCircle />}
          >
            WhatsApp
          </LinkButton>

          <LinkButton
            href="https://github.com/josevanderleineto"
            icon={<Github />}
          >
            GitHub
          </LinkButton>

          <LinkButton
            href="https://www.linkedin.com/in/vanderlei-desenvolvedor-front-end/"
            icon={<Linkedin />}
          >
            LinkedIn
          </LinkButton>

          <LinkButton
            href="https://www.instagram.com/josevanderleineto/"
            icon={<Instagram />}
          >
            Instagram
          </LinkButton>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-xs text-gray-500">
          {text.footer}
        </footer>
      </div>
    </main>
  );
}

/* -------------------------------------------------- */
/* COMPONENTE DE LINK                                 */
/* -------------------------------------------------- */
function LinkButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium
                 bg-white text-gray-800 border border-gray-200 shadow-lg
                 hover:scale-[1.03] hover:bg-gray-50 transition-all
                 dark:bg-white/5 dark:text-gray-200 dark:border-white/10 dark:hover:bg-white/10"
    >
      {icon}
      {children}
    </a>
  );
}
