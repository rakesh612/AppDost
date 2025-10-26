// src/components/sections/TechnologiesSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { TECHNOLOGIES } from '../../utils/Constants.jsx';

const TechnologiesSection = () => {
  const [visibleTechs, setVisibleTechs] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all tech items with stagger
            TECHNOLOGIES.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTechs((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="technologies" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technologies We Master
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mx-2"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
          </div>

          <p className="text-lg text-slate-600">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 border-slate-100 hover:border-blue-300 ${
                visibleTechs.includes(index) 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-75 rotate-12'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {tech.icon}
                </div>

                {/* Name */}
                <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-pink-600 via-purple-600 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-3xl shadow-lg">
                🚀
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Always Learning, Always Evolving
                </h3>
                <p className="text-slate-600">
                  Our team stays up-to-date with the latest technologies and best practices to deliver cutting-edge solutions. 
                  We continuously expand our tech stack to meet evolving market demands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Categories - Optional Additional Info */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="font-bold text-slate-900 mb-2">Frontend</h4>
            <p className="text-sm text-slate-600">React, TypeScript, Next.js</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">⚙️</div>
            <h4 className="font-bold text-slate-900 mb-2">Backend</h4>
            <p className="text-sm text-slate-600">Node.js, Python, MongoDB</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">☁️</div>
            <h4 className="font-bold text-slate-900 mb-2">Cloud & DevOps</h4>
            <p className="text-sm text-slate-600">AWS, Docker, CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;