 'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, icon: '🟨', category: 'frontend' },
  { name: 'TypeScript', level: 85, icon: '🔷', category: 'frontend' },
  { name: 'React', level: 88, icon: '⚛️', category: 'frontend' },
  { name: 'Angular', level: 80, icon: '🅰️', category: 'frontend' },
  { name: 'HTML5', level: 95, icon: '🌐', category: 'frontend' },
  { name: 'CSS3', level: 92, icon: '🎨', category: 'frontend' },
  { name: 'TailwindCSS', level: 90, icon: '💨', category: 'frontend' },
  { name: 'Bootstrap', level: 85, icon: '🅱️', category: 'frontend' },
  { name: 'Node.js', level: 75, icon: '🟢', category: 'backend' },
  { name: 'Git', level: 88, icon: '📝', category: 'tools' },
  { name: 'Figma', level: 70, icon: '🎯', category: 'tools' },
  { name: 'VS Code', level: 95, icon: '💻', category: 'tools' }
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar as barras de progresso com delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, skill.name]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return darkMode ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-cyan-400';
      case 'backend':
        return darkMode ? 'from-green-500 to-emerald-500' : 'from-green-400 to-emerald-400';
      case 'tools':
        return darkMode ? 'from-purple-500 to-pink-500' : 'from-purple-400 to-pink-400';
      default:
        return darkMode ? 'from-gray-500 to-gray-600' : 'from-gray-400 to-gray-500';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Front-End';
      case 'backend':
        return 'Back-End';
      case 'tools':
        return 'Ferramentas';
      default:
        return '';
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section 
      id="skills" 
      className={`full-height-section ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.skills.title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Tecnologias e ferramentas que domino para criar experiências digitais excepcionais
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div 
              key={category}
              className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {getCategoryTitle(category)}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 animate-pulse-hover ${
                      darkMode 
                        ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' 
                        : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm shadow-lg'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Barra de Progresso */}
                    <div className={`w-full h-3 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} transition-all duration-1500 ease-out ${
                          animatedSkills.has(skill.name) ? 'progress-bar' : 'w-0'
                        }`}
                        style={{ 
                          '--progress-width': `${skill.level}%`,
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Certificações */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certificações Recentes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Fundamentos do Angular Framework',
              'React: Hooks e Contextos',
              'JavaScript Avançado',
              'Styled Components'
            ].map((cert, index) => (
              <span
                key={cert}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30'
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 border border-blue-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
