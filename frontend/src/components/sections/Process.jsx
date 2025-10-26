// src/components/sections/ProcessSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { DEVELOPMENT_PROCESS } from '../../utils/Constants.jsx';

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (stepRefs.current[index]) {
          observer.unobserve(stepRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section id="process"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Development Process
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-white rounded-full"></div>
            <div className="h-1 w-20 bg-white rounded-full mx-2"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-white via-white to-transparent rounded-full"></div>
          </div>

          <p className="text-lg text-slate-300">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {DEVELOPMENT_PROCESS.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="relative"
            >
              {/* Timeline Connector Line */}
              {index < DEVELOPMENT_PROCESS.length - 1 && (
                <div 
                  className={`absolute left-8 sm:left-12 top-20 sm:top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-1000 ${
                    visibleSteps.includes(index) ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}
                  style={{ transformOrigin: 'top' }}
                ></div>
              )}

              <div className="flex gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div 
                    className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl sm:text-4xl font-bold shadow-2xl transition-all duration-700 ${
                      visibleSteps.includes(index) 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-50 -rotate-180'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div 
                  className={`flex-1 transition-all duration-700 ${
                    visibleSteps.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${200}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 group">
                    {/* Step Badge */}
                    <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-3 py-1 rounded-full mb-4">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                      <span className="text-sm font-semibold text-blue-300">Step {step.number}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              On-Time
            </div>
            <div className="text-slate-300">Project Delivery</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-300">Support Available</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Start Your Project Today</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;