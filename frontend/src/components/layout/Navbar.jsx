// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../../utils/Constants.jsx';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
{/* Logo */}
<a
  href="/"
  className="flex items-center space-x-3 group"
  onClick={() => handleLinkClick('/')}
>
  <div className="relative">
    {/* Logo Container with Gradient Border */}
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
      {/* Replace with your image */}
      <img
        src="\src\assets\appdost-logo.png"  // 👈 Replace this with your logo URL
        alt="AppDost Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
    </div>

    {/* Animated Ring */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
  </div>

  <div className="flex flex-col">
    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {COMPANY_INFO.name}
    </span>
    <span className="text-xs text-slate-600 hidden sm:block">
      {COMPANY_INFO.tagline}
    </span>
  </div>
</a>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group ${
                    activeLink === link.href
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  
                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 ${
                      activeLink === link.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="/contact"
                className="ml-4 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 lg:px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <span className="relative z-10">Get Started</span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden mobile-menu-toggle p-2 rounded-lg hover:bg-slate-100 transition-colors relative z-50"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '64px' }}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mobile-menu fixed left-0 right-0 bg-white border-t border-slate-200 shadow-2xl transition-all duration-300 overflow-y-auto ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ 
            top: '64px',
            maxHeight: 'calc(100vh - 64px)'
          }}
        >
          <div className="px-4 py-6 space-y-2">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform ${
                  activeLink === link.href
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 scale-105 shadow-md'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 hover:scale-105'
                }`}
                style={{
                  animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  {activeLink === link.href && (
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  )}
                </span>
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <a
              href="/contact"
              onClick={() => handleLinkClick('/contact')}
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center mt-4"
              style={{
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${NAV_LINKS.length * 0.05}s both` : 'none'
              }}
            >
              Get Started →
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900 mb-2">Contact Us</p>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-2 py-2 hover:text-blue-600 transition-colors"
                >
                  <span>📧</span>
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 py-2 hover:text-blue-600 transition-colors"
                >
                  <span>📞</span>
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Styles for animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;