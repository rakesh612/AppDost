// src/components/common/ScrollProgress.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp, Rocket } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Scroll to Top Button with Progress Circle */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 z-40 transition-all duration-500 ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <div className="relative group">
          {/* Progress Circle */}
          <svg className="w-14 h-14 transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-slate-200"
            />
            {/* Progress Circle */}
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-150"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
              <Rocket className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-xl">
            Back to Top
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-8 border-transparent border-l-slate-900"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Side Reading Progress Indicator */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative h-64 w-1 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 rounded-full"
            style={{ height: `${scrollProgress}%` }}
          >
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Percentage Label */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default ScrollProgress;