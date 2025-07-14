 'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';

export default function AboutSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className={`full-height-section ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.about.title}
            </h2>

            <div className="space-y-4">
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {t.about.description}
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {t.about.freelancer}
              </p>
            </div>

            {/* Tecnologias Principais */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Principais Tecnologias
              </h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Angular', 'TailwindCSS', 'Bootstrap'].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna de Imagem/Visual */}
          <div className={`flex justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className={`relative p-8 rounded-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50'
            }`}>
              <div className="text-center space-y-6">
                {/* Imagem Temática */}
                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden">
                  <img 
                    src="/about-developer.png" 
                    alt="Desenvolvimento Web" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Estatísticas */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      2+
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Anos de Experiência
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      10+
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Projetos Concluídos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
