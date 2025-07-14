'use client';

import React from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section id="experience" className={`full-height-section ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-3xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.experience.title}
          </h2>
        </div>
        
        <div className="space-y-8">
          <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.experience.libraryAssistant}
                </h3>
                <p className="text-blue-600 font-medium">UniFTC</p>
              </div>
              <span className={`text-sm px-3 py-1 rounded-full ${
                darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
              }`}>
                Março 2024 - {t.experience.current}
              </span>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.experience.libraryDescription}
            </p>
          </div>
          
          <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.experience.scholarship}
                </h3>
                <p className="text-blue-600 font-medium">UFBA - Universidade Federal da Bahia</p>
              </div>
              <span className={`text-sm px-3 py-1 rounded-full ${
                darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
              }`}>
                Julho 2021 - Março 2024
              </span>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.experience.scholarshipDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

