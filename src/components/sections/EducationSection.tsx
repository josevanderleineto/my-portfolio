'use client';

import React from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section 
      id="education" 
      className={`full-height-section ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-3xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.education.title}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.education.degree}
                </h3>
                <p className="text-blue-600">{t.education.university}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t.education.certifications}
              </h3>
            </div>
            <ul className="space-y-2">
              {t.education.certs.map((cert: string, index: number) => (
                <li key={index} className={`flex items-start ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

