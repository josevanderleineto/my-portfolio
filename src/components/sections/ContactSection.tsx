'use client';

import React from 'react';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section 
      id="contact" 
      className={`full-height-section ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.contact.title}
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t.contact.description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t.contact.phone}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    +55 71 98449-8113
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t.contact.email}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <a href="mailto:jv.neto@outlook.com.br" target="_blank" rel="noopener noreferrer">jv.neto@outlook.com.br</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t.contact.linkedin}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                   <a href="linkedin.com/in/josevanderleineto" target="_blank" rel="noopener noreferrer">josevanderleineto</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <Github className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h3 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t.contact.GitHub}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <a href="https://github.com/josevanderleineto" target="_blank" rel="noopener noreferrer">josevanderleineto</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

