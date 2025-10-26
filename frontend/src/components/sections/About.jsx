// src/components/sections/AboutSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, EXPERTISE, WHY_CHOOSE_US, WORK_CULTURE } from '../../utils/Constants.jsx';

const AboutSection = () => {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    expertise: false,
    whyChoose: false,
    culture: false,
  });

  const sectionRefs = {
    header: useRef(null),
    expertise: useRef(null),
    whyChoose: useRef(null),
    culture: useRef(null),
  };

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs).forEach((key) => {
      observers[key] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      if (sectionRefs[key].current) {
        observers[key].observe(sectionRefs[key].current);
      }
    });

    return () => {
      Object.keys(observers).forEach((key) => {
        if (sectionRefs[key].current) {
          observers[key].unobserve(sectionRefs[key].current);
        }
      });
    };
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          ref={sectionRefs.header}
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6 border border-blue-100">
            <span className="text-xl">🚀</span>
            <span className="text-sm font-semibold text-slate-700">About AppDost</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Trusted Partner for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Complete Digital Transformation
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* What We Do - Expertise Grid */}
        <div ref={sectionRefs.expertise} className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
              <span>💼</span> What We Do
            </h3>
            <p className="text-lg text-slate-600">Our Core Expertise</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {EXPERTISE.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Hover Line */}
                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose AppDost */}
        <div ref={sectionRefs.whyChoose} className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
              <span>🌟</span> Why Choose AppDost?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  visibleSections.whyChoose ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Check Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Culture & Contact CTA */}
        <div ref={sectionRefs.culture} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Work Culture Values */}
          <div className={`transition-all duration-1000 ${
            visibleSections.culture ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span>👥</span> Work Culture & Values
              </h3>
              <p className="text-slate-600 mb-6">At AppDost, we believe in:</p>
              
              <div className="space-y-4">
                {WORK_CULTURE.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-2xl flex-shrink-0">{value.icon}</span>
                    <div>
                      <span className="font-bold text-slate-900">{value.title}</span>
                      <span className="text-slate-600"> - {value.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className={`transition-all duration-1000 ${
            visibleSections.culture ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white h-full shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>📞</span> Get In Touch
                </h4>

                <div className="space-y-4 mb-8">
                  {/* Website */}
                  <div>
                    <div className="text-sm text-slate-400 mb-1">🌐 Website</div>
                    <a 
                      href={COMPANY_INFO.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                    >
                      {COMPANY_INFO.website.replace('https://', '')}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="text-sm text-slate-400 mb-1">📧 Email</div>
                    <div className="space-y-1">
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="block text-white hover:text-blue-400 transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <a 
                        href={`mailto:${COMPANY_INFO.hrEmail}`}
                        className="block text-white hover:text-blue-400 transition-colors"
                      >
                        {COMPANY_INFO.hrEmail}
                      </a>
                    </div>
                  </div>

                  {/* Locations */}
                  <div>
                    <div className="text-sm text-slate-400 mb-1">📍 Locations</div>
                    <div className="text-white">
                      {COMPANY_INFO.locations.join(', ')}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="text-sm text-slate-400 mb-1">📞 Phone</div>
                    <div className="space-y-1">
                      <a 
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="block text-white hover:text-blue-400 transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <a 
                        href={`tel:${COMPANY_INFO.alternatePhone}`}
                        className="block text-white hover:text-blue-400 transition-colors"
                      >
                        {COMPANY_INFO.alternatePhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-3">
  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      const element = document.getElementById('contact');
      if (element) {
        const navHeight = 80;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }}
    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <span>Start Your Project</span>
    <ArrowRight className="w-5 h-5" />
  </a>
  <a
    href={`mailto:${COMPANY_INFO.email}`}
    className="flex-1 text-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-slate-200 hover:border-blue-300"
  >
    Email Us
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;