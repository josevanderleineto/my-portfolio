'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, useTheme } from '@/contexts/AppContext';
import { Code, ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <section 
      id="projects" 
      className={`full-height-section ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2
            className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.projects.title}
          </h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.projects.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.projectList.map((project, index: number) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {t.projects.viewProject}
                  </button>
                  <button
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
                      darkMode
                        ? 'border border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    {t.projects.viewCode}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
