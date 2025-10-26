// src/components/sections/CTASection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large Circles */}
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>

            {/* Floating Particles */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-40 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
            
            {/* Sparkle Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
            }`}>
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>

            {/* Heading */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Ready to Start Your Project?
            </h2>

            {/* Description */}
            <p className={`text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development. 
              Get a free consultation today and see how we can accelerate your digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Primary CTA */}
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </a>

              {/* Secondary CTA */}
              <a
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <span>View Our Services</span>
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center space-x-2 text-white/90">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">No Commitment Required</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default CTASection;