 'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipos TypeScript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    location: string;
    description: string;
    contactBtn: string;
    portfolioBtn: string;
  };
  about: {
    title: string;
    description: string;
    freelancer: string;
    languages: string;
  };
  skills: {
    title: string;
    list: string[];
  };
  experience: {
    title: string;
    current: string;
    libraryAssistant: string;
    libraryDescription: string;
    scholarship: string;
    scholarshipDescription: string;
  };
  projects: {
    title: string;
    description: string;
    viewProject: string;
    viewCode: string;
    projectList: Project[];
  };
  education: {
    title: string;
    degree: string;
    university: string;
    certifications: string;
    certs: string[];
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    linkedin: string;
    portfolio?: string;
    GitHub?: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    rights: string;
  };
}

interface LanguageContextType {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
  t: Translations;
}

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Contextos
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// -----------------------------------------------------
// TRADUÇÕES COMPLETAS
// -----------------------------------------------------
const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Educação',
      contact: 'Contato'
    },
    hero: {
      title: 'Vanderlei Neto',
      subtitle:
        'Desenvolvedor Full Stack | JavaScript | TypeScript | Node.js | React | NestJS | PostgreSQL',
      location: 'Salvador, Bahia, Brasil',
      description:
        'Desenvolvedor Web com foco em frontend e backend. Apaixonado por tecnologia e interfaces intuitivas.',
      contactBtn: 'Entre em Contato',
      portfolioBtn: 'Ver Portfólio'
    },
    about: {
      title: 'Sobre Mim',
      description:
        'Desenvolvedor web com foco em criação de interfaces e APIs modernas.',
      freelancer: 'Atualmente curso Biblioteconomia na UFBA e trabalho como assistente de biblioteca.',
      languages: 'Idiomas'
    },
    skills: {
      title: 'Habilidades Técnicas',
      list: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'NestJS',
        'Node.js',
        'PostgreSQL',
        'TailwindCSS',
        'HTML5',
        'CSS3'
      ]
    },
    experience: {
      title: 'Experiência Profissional',
      current: 'Atual',
      libraryAssistant: 'Assistente de Biblioteca',
      libraryDescription:
        'Atuação com sistemas de gestão e suporte a usuários.',
      scholarship: 'Bolsista de Pesquisa',
      scholarshipDescription:
        'Projeto de incentivo à leitura em comunidades quilombolas.'
    },
    projects: {
      title: 'Projetos Web',
      description: 'Projetos desenvolvidos com tecnologias modernas.',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      projectList: [
        {
          title: 'Projeto Autorretrato',
          description: 'Projeto para a Rede Eperrei: laboratório de fotografia com jovens quilombolas, feito em React e Styled Components.',
          technologies: ['React', 'Styled Components'],
          image: '/capa_autorretrato.webp',
          liveUrl: 'https://eparreiautorretrato.com.br/',
          codeUrl: 'https://github.com/autoretaro/autorretrato-lab'
        },
        
        {
          title: 'Tudo na Tela',
          description: 'Projeto fullstack: catálogo de filmes com frontend, backend, API própria e banco PostgreSQL. Solução completa e integrada.',
          technologies: ['NestJS', 'PostgreSQL', 'TypeScript', ],
          image: '/capa-tudo-na-tela.svg',
          liveUrl: 'https://www.tudonatela.com/',
          codeUrl: 'https://github.com/josevanderleineto/tudo_na_tela'
        }
      ]
    },
    education: {
      title: 'Educação',
      degree: 'Biblioteconomia e Documentação',
      university: 'UFBA - Universidade Federal da Bahia',
      certifications: 'Certificações',
      certs: [
        'Fundamentos de Angular',
        'React Hooks e Styled Components',
        'HTML e CSS básicos',
        'JavaScript e lógica de programação'
      ]
    },
    contact: {
      title: 'Entre em Contato',
      description: 'Sempre aberto a novas oportunidades.',
      phone: 'Telefone',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      portfolio: 'Portfólio',
      GitHub: 'GitHub',
      form: {
        title: 'Envie uma Mensagem',
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        email: 'E-mail',
        emailPlaceholder: 'email@exemplo.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Assunto da mensagem',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem.'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.'
    }
  },

  // -----------------------------------------------------
  // INGLÊS
  // -----------------------------------------------------
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      title: 'Vanderlei Neto',
      subtitle:
        'Full Stack Developer | JavaScript | TypeScript | Node.js | React | NestJS | PostgreSQL',
      location: 'Salvador, Bahia, Brazil',
      description:
        'Web Developer focused on building interfaces and APIs.',
      contactBtn: 'Get in Touch',
      portfolioBtn: 'View Portfolio'
    },
    about: {
      title: 'About Me',
      description: 'Fullstack project: movie catalog with frontend, backend, custom API, and PostgreSQL. Complete and integrated solution.',
      freelancer: 'Currently studying Library Science and working as a library assistant.',
      languages: 'Languages'
    },
    skills: {
      title: 'Technical Skills',
      list: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'NestJS',
        'Node.js',
        'PostgreSQL',
        'TailwindCSS',
        'HTML5',
        'CSS3'
      ]
    },
    experience: {
      title: 'Professional Experience',
      current: 'Present',
      libraryAssistant: 'Library Assistant',
      libraryDescription: 'Work with management systems and user support.',
      scholarship: 'Research Scholarship',
      scholarshipDescription:
        'Reading project for quilombola communities.'
    },
    projects: {
      title: 'Web Projects',
      description: 'Projects developed using modern technologies.',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projectList: [
        {
          title: 'Autorretrato Project',
          description: 'Project for the Eperrei Network: a photography lab with quilombola youth, built with React and Styled Components.',
          technologies: ['React', 'Styled Components'],
          image: '/capa_autorretrato.webp',
          liveUrl: 'https://eparreiautorretrato.com.br/',
          codeUrl: 'https://github.com/autoretaro/autorretrato-lab'
        },
        
        {
          title: 'Tudo na Tela',
          description: 'Fullstack project developed for a client: a complete movie catalog system with frontend, backend, a custom API, and a PostgreSQL database',
          technologies: ['NestJS', 'PostgreSQL', 'TypeScript'],
          image: '/capa-tudo-na-tela.svg',
          liveUrl: 'https://www.tudonatela.com/',
          codeUrl: 'https://github.com/josevanderleineto/tudo_na_tela'
        }
      ]
    },
    education: {
      title: 'Education',
      degree: 'Library Science and Documentation',
      university: 'UFBA - Federal University of Bahia',
      certifications: 'Certifications',
      certs: [
        'Angular Fundamentals',
        'React Hooks & Styled Components',
        'HTML and CSS basics',
        'JavaScript and logic'
      ]
    },
    contact: {
      title: 'Get in Touch',
      description: 'Always open to new opportunities.',
      phone: 'Phone',
      email: 'Email',
      linkedin: 'LinkedIn',
      portfolio: 'Portfolio',
      GitHub: 'GitHub',
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Full name',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Write your message...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message successfully sent!',
        error: 'Error sending message.'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

// -----------------------------------------------------
// PROVIDER
// -----------------------------------------------------
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  const toggleTheme = () => setDarkMode(prev => !prev);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

// Hooks
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside AppProvider');
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside AppProvider');
  return context;
}
