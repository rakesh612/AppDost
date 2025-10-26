// src/components/sections/StatsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../../utils/Constants.jsx';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            animateNumbers();
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

  // Animate numbers counting up
  const animateNumbers = () => {
    STATS.forEach((stat, index) => {
      const target = parseInt(stat.number.replace(/\+/g, ''));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, 16);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 -mt-20 z-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-slate-100 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 relative z-10">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 hover:scale-110 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon with Gradient Background */}
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                </div>

                {/* Number with Counter Animation */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {counts[index]}
                  {stat.number.includes('+') && '+'}
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>

                {/* Hover Line */}
                <div className="mt-3 mx-auto w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Optional: Achievement Badge */}
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-semibold text-slate-700">
                Trusted by businesses since 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional effects */}
      <style>{`
        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .group:hover {
          animation: float-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;