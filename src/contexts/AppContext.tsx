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
    about: string;
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

// Traduções
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
      subtitle: 'Desenvolvedor Full Stack | JavaScript | TypeScript | Node.js | React | Next.js | Angular | Bootstrap | TailwindCSS',
      location: 'Salvador, Bahia, Brasil',
      description: 'Desenvolvedor Web focado no Front-End, apaixonado por tecnologia. Tenho habilidades comprovadas na criação de interfaces intuitivas e responsivas que proporcionam uma experiência excepcional ao usuário.',
      contactBtn: 'Entre em Contato',
      portfolioBtn: 'Ver Portfólio'
    },
    about: {
      title: 'Sobre Mim',
      description: 'Sou um Desenvolvedor Web com foco dedicado em Front-End, apaixonado por tecnologia e interfaces intuitivas. Tenho habilidades comprovadas na criação de experiências digitais modernas, acessíveis e responsivas, utilizando tecnologias como JavaScript, TypeScript, React, Angular, Bootstrap, TailwindCSS, HTML5 e CSS3.',
      freelancer: 'Atualmente curso Biblioteconomia e Documentação na Universidade Federal da Bahia (UFBA) e atuo como Assistente de Biblioteca na UniFTC, onde combino minhas habilidades técnicas e acadêmicas para oferecer um suporte completo aos usuários. Como freelancer, desenvolvo soluções personalizadas que aliam design funcional e acessível a um código de alta qualidade.',
      languages: 'Idiomas'
    },
    skills: {
      title: 'Habilidades Técnicas',
      list: [
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'Bootstrap',
        'TailwindCSS',
        'HTML5',
        'CSS3',
        'Node.js'
      ]
    },
    experience: {
      title: 'Experiência Profissional',
      current: 'Atual',
      libraryAssistant: 'Assistente de Biblioteca',
      libraryDescription: 'Assistente de Biblioteca na UniFTC, onde combino habilidades de tecnologia e biblioteconomia para fornecer suporte abrangente aos usuários. Trabalho com sistemas como Pergamum, Minha Biblioteca, Service Desk e Repositório Institucional.',
      scholarship: 'Bolsista de Pesquisa',
      scholarshipDescription: 'Práticas de leitura com crianças em comunidades quilombolas, projeto de pesquisa promovido pelo programa Sankofa e vinculado ao grupo BiblioQuilombola.'
    },
    projects: {
      title: 'Projetos Web',
      description: 'Alguns dos projetos que desenvolvi utilizando tecnologias modernas',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      projectList: [
        {
          title: 'Projeto Autorretrato',
          description: 'Desenvolvi o site do Projeto Autorretrato, iniciativa real da Rede Quilombola Eparrei.',
          technologies: ['React', 'Styled Components'],
          image: '/capa_autorretrato.webp',
          liveUrl: '#',
          codeUrl: '#'
        }
      ]
    },
    education: {
      title: 'Educação',
      degree: 'Biblioteconomia e Documentação',
      university: 'UFBA - Universidade Federal da Bahia',
      certifications: 'Certificações',
      certs: [
        'Fundamentos do Angular Framework',
        'React: Hooks, Contextos e boas práticas',
        'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
        'JavaScript e HTML: pratique lógica com desenhos, animações e um jogo',
        'React: abstraindo seu CSS com Styled Components'
      ]
    },
    contact: {
      title: 'Entre em Contato',
      description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos conversar!',
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
        emailPlaceholder: 'seu@email.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Assunto da mensagem',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Tente novamente.'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.'
    }
  },
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
      subtitle: 'Full Stack Developer | JavaScript | TypeScript | Node.js | React | Next.js | Angular | Bootstrap | TailwindCSS',
      location: 'Salvador, Bahia, Brazil',
      description: 'Front-End Web Developer passionate about technology. I specialize in building intuitive and responsive interfaces that provide an exceptional user experience.',
      contactBtn: 'Get in Touch',
      portfolioBtn: 'View Portfolio'
    },
    about: {
      title: 'About Me',
      description: 'I’m a Web Developer focused on Front-End, passionate about technology and intuitive interfaces. I have proven skills in building modern, accessible, and responsive digital experiences using technologies such as JavaScript, TypeScript, React, Angular, Bootstrap, TailwindCSS, HTML5, and CSS3.',
      freelancer: 'I’m currently pursuing a degree in Library Science and Documentation at the Federal University of Bahia (UFBA) and working as a Library Assistant at UniFTC, where I combine my technical and academic skills to provide comprehensive user support. As a freelancer, I deliver customized solutions that blend functional design with high-quality code.',
      languages: 'Languages'
    },
    skills: {
      title: 'Technical Skills',
      list: [
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'Bootstrap',
        'TailwindCSS',
        'HTML5',
        'CSS3',
        'Node.js'
      ]
    },
    experience: {
      title: 'Professional Experience',
      current: 'Present',
      libraryAssistant: 'Library Assistant',
      libraryDescription: 'Library Assistant at UniFTC, where I combine technology and library science skills to provide comprehensive user support. I work with systems like Pergamum, Minha Biblioteca, Service Desk, and Institutional Repository.',
      scholarship: 'Research Scholarship Holder',
      scholarshipDescription: 'Reading practices with children in quilombola communities, a research project promoted by the Sankofa program and linked to the BiblioQuilombola group.'
    },
    projects: {
      title: 'Web Projects',
      description: 'Some of the projects I\'ve developed using modern technologies',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projectList: [
        {
          title: 'Autorretrato Project',
          description: 'I developed the website for the Autorretrato Project, a real initiative by the Quilombola Development Network Eparrei.',
          technologies: ['React', 'Styled Components'],
          image: '/capa_autorretrato.webp',
          liveUrl: '#',
          codeUrl: '#'
        }
      ]
    },
    education: {
      title: 'Education',
      degree: 'Library Science and Documentation',
      university: 'UFBA - Federal University of Bahia',
      certifications: 'Certifications',
      certs: [
        'Angular Framework Fundamentals',
        'React: Hooks, Contexts and best practices',
        'HTML and CSS: development environments, file structure and tags',
        'JavaScript and HTML: practice logic with drawings, animations and a game',
        'React: abstracting your CSS with Styled Components'
      ]
    },
    contact: {
      title: 'Get in Touch',
      description: 'I\'m always open to new opportunities and interesting projects. Let\'s talk!',
      phone: 'Phone',
      email: 'Email',
      linkedin: 'LinkedIn',
      portfolio: 'Portfolio',
      GitHub: 'GitHub',
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

// Provider
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');
  const toggleTheme = () => setDarkMode(!darkMode);

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
  if (!context) throw new Error('useLanguage must be used within AppProvider');
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within AppProvider');
  return context;
}
