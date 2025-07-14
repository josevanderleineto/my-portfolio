'use client';

import React from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';

export default function Footer() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <footer className={`py-8 px-4 border-t transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-700 text-gray-400' 
        : 'bg-white border-gray-200 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto text-center">
        <p>© 2025 Vanderlei Neto. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

