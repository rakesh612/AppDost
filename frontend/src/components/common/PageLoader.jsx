// src/components/common/PageLoader.jsx
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../utils/Constants.jsx';
import logo from '/assets/appdost-logo.png'


const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Loader Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-32 h-32 rounded-full border-4 border-blue-500/30 absolute animate-ping"></div>
            <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 absolute animate-ping animation-delay-1000"></div>
            
            {/* Main Logo Circle */}
<div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl animate-bounce-slow overflow-hidden">
  <img
    src={logo}
    alt={`${COMPANY_INFO.name} Logo`}
    className="w-24 h-24 object-contain animate-pulse"
  />
</div>

            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin"></div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 animate-fade-in-up">
          {COMPANY_INFO.name}
        </h1>
        <p className="text-lg text-blue-200 mb-8 animate-fade-in-up animation-delay-500">
          {COMPANY_INFO.tagline}
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto px-8">
          <div className="relative">
            {/* Background Track */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Progress Fill */}
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Progress Text */}
            <div className="mt-4 text-white font-semibold text-lg">
              <span className="animate-pulse">{Math.floor(progress)}%</span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="mt-6 text-blue-200 text-sm">
            <span className="inline-flex items-center">
              Loading amazing experience
              <span className="ml-2 flex space-x-1">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce animation-delay-200"></span>
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-400"></span>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;