import React from 'react';
import { Baby, Sparkles, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Magazin',
      links: [
        'Noutăți',
        'Rochii',
        'Topuri & Bluze',
        'Pantaloni & Fuste',
        'Activewear',
        'Pijamale',
        'Accesorii',
        'Reduceri'
      ]
    },
    {
      title: 'Experiență',
      links: [
        'Stilist AI',
        'Probare AR',
        'Ghid de Mărimi',
        'Chestionar Stil',
        'Consultanță Virtuală',
        'Cronologia Sarcinii',
        'Garanția Potrivirii',
        'Review-uri Clienți'
      ]
    },
    {
      title: 'Comunitate',
      links: [
        'Mama Hub',
        'Provocări de Stil',
        'Forumuri',
        'Povești de Succes',
        'Blog',
        'Sfaturi de Sarcină',
        'Tendințe Modă',
        'Sfaturi de la Experți'
      ]
    },
    {
      title: 'Suport',
      links: [
        'Centru de Ajutor',
        'Schimb de Mărimi',
        'Retururi & Rambursări',
        'Informații Livrare',
        'Urmărește Comanda',
        'Contactează-ne',
        'Chat Live',
        'Întrebări Frecvente'
      ]
    }
  ];

  return (
    <footer className="bg-pink-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">Rămâi la Curent, Mami!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Primește acces exclusiv la colecții noi, sfaturi de styling personalizate 
              și oferte speciale pentru călătoria ta de maternitate.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Introdu adresa ta de email"
                className="flex-1 bg-white/70 backdrop-blur-md border border-pink-200 rounded-2xl px-6 py-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-pink-400 transition-colors"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">Alătură-te Călătoriei</button>
            </div>

            <p className="text-slate-600 text-sm mt-4">
              Alătură-te celor 50.000+ de viitoare mămici care au încredere în BellyBoom
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Baby className="h-8 w-8 text-pink-400" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                BellyBoom
              </span>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Revoluționăm moda de maternitate cu stilizare asistată de AI, probe AR 
              și o comunitate care celebrează fiecare etapă a călătoriei tale frumoase.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-pink-400" />
                <span>1-800-BELLY-BOOM</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-pink-400" />
                <span>hello@bellyboom.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-pink-400" />
                <span>București, RO</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
                { icon: Youtube, href: '#', color: 'hover:text-red-400' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full bg-white/5 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-slate-900 font-semibold mb-6 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-pink-600 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-pink-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-slate-600 text-sm">
              <span>&copy; 2024 BellyBoom. Toate drepturile rezervate.</span>
              <a href="#" className="hover:text-pink-600 transition-colors">Politica de Confidențialitate</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Termeni și Condiții</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Accesibilitate</a>
            </div>
            
            <div className="flex items-center text-slate-600 text-sm">
              <span>Creat cu</span>
              <Heart className="w-4 h-4 mx-2 text-pink-500 animate-pulse" />
              <span>pentru viitoarele mămici de pretutindeni</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;