'use client';

import Link from 'next/link';

export default function LinksPageClient() {
  const links = [
    {
      title: 'Portfolio',
      description: 'Conheça meu trabalho e projetos',
      url: '/',
      icon: '🌐'
    },
    {
      title: 'GitHub',
      description: 'Veja meus códigos e repositórios',
      url: 'https://github.com/vanderleineto',
      icon: '💻'
    },
    {
      title: 'LinkedIn',
      description: 'Conecte-se comigo profissionalmente',
      url: 'https://linkedin.com/in/vanderleineto',
      icon: '💼'
    },
    {
      title: 'WhatsApp',
      description: 'Entre em contato direto',
      url: 'https://wa.me/5511999999999',
      icon: '📱'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <img 
              src="/profile.jpeg" 
              alt="Vanderlei Neto" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Vanderlei Neto</h1>
          <p className="text-gray-300">Front-End Developer</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <div key={index}>
              {link.url.startsWith('/') ? (
                <Link href={link.url} className="block">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{link.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{link.title}</h3>
                        <p className="text-gray-300 text-sm">{link.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{link.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{link.title}</h3>
                        <p className="text-gray-300 text-sm">{link.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Vanderlei Neto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}