'use client';

import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/vijaypatil', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vijay-patil-4a335b11a', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vijaypatil', label: 'GitHub' },
    { icon: Mail, href: 'mailto:vijay.patil@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-10 md:py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-5 sm:space-x-6 mb-5 sm:mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg active:scale-95"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © {currentYear} Vijay Patil. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 text-center">
            Software Engineer & Scrum Master at Siemens
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
