'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800/90 backdrop-blur-md border-gray-700' 
        : 'bg-white/90 backdrop-blur-md border-gray-300'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-bold flex items-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Image src="/logo.svg" alt="Vanderlei Neto Logo" width={48} height={48} className="mr-2" />
            {/* <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Vanderlei Neto</span> */}
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`transition-colors duration-300 hover:text-blue-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {value}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                darkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
