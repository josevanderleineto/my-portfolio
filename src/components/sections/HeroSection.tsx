 'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import { MapPin, Mail, Briefcase } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`full-height-section ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Coluna de Texto */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.hero.location}
              </span>
            </div>

            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.hero.title}
            </h1>

            <p className={`text-xl lg:text-2xl mb-6 font-medium ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {t.hero.subtitle}
            </p>

            <p className={`text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                {t.hero.contactBtn}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg ${
                  darkMode 
                    ? 'border border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                {t.hero.portfolioBtn}
              </button>
            </div>
          </div>

          {/* Coluna da Foto */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Efeito de fundo decorativo */}
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
                darkMode ? 'bg-blue-500' : 'bg-blue-400'
              }`} style={{ transform: 'scale(1.2)' }}></div>
              
              {/* Foto principal */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/profile.jpeg"
                  alt="Vanderlei Neto"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Elementos decorativos flutuantes */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
                darkMode ? 'bg-blue-500' : 'bg-blue-400'
              } opacity-60 animate-pulse`}></div>
              <div className={`absolute -bottom-6 -left-6 w-6 h-6 rounded-full ${
                darkMode ? 'bg-purple-500' : 'bg-purple-400'
              } opacity-60 animate-pulse`} style={{ animationDelay: '1s' }}></div>
              <div className={`absolute top-1/2 -left-8 w-4 h-4 rounded-full ${
                darkMode ? 'bg-cyan-500' : 'bg-cyan-400'
              } opacity-60 animate-pulse`} style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

