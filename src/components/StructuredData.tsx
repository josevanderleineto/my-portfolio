import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vanderlei Neto",
    "jobTitle": "Front-End Developer",
    "description": "Desenvolvedor Front-End especializado em React, TypeScript, Angular e tecnologias modernas.",
    "url": "https://seudominio.com",
    "image": "https://seudominio.com/profile-photo.png",
    "sameAs": [
      "https://linkedin.com/in/seu-perfil",
      "https://github.com/seu-usuario"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "Angular",
      "JavaScript",
      "Next.js",
      "Web Development",
      "Front-End Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sua Instituição de Ensino"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}