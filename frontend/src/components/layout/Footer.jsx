// src/components/layout/Footer.jsx
import React from 'react';
import { Mail, Phone, Clock, MapPin, Heart, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO, FOOTER_LINKS, SOCIAL_LINKS, STATS } from '../../utils/Constants.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
                <span className="text-xs text-slate-400">{COMPANY_INFO.tagline}</span>
              </div>
            </a>

            {/* Description */}
            <p className="text-slate-400 mb-6 leading-relaxed">
              Delivering innovative IT solutions since {COMPANY_INFO.foundedYear}. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {STATS.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-center p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="text-lg font-bold text-blue-400">{stat.number}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group"
                  >
                    <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group"
                  >
                    <span className="text-purple-500 group-hover:translate-x-1 transition-transform">→</span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {/* Email */}
              <li>
                <div className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col space-y-1">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </li>

              {/* Phone */}
              <li>
                <div className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col space-y-1">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.alternatePhone}`} className="hover:underline text-sm">
                      {COMPANY_INFO.alternatePhone}
                    </a>
                  </div>
                </div>
              </li>

              {/* Working Hours */}
              <li>
                <div className="flex items-start space-x-3 text-slate-400 group">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-500 group-hover:scale-110 transition-transform" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </li>

              {/* Location */}
              <li>
                <div className="flex items-start space-x-3 text-slate-400 group">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <strong className="text-white">3 Offices:</strong>
                    <br />
                    {COMPANY_INFO.locations.join(', ')}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear} {COMPANY_INFO.name} - {COMPANY_INFO.tagline}. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {FOOTER_LINKS.legal.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < FOOTER_LINKS.legal.length - 1 && (
                    <span className="text-slate-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;