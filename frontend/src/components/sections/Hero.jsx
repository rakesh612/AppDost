// src/components/sections/Hero.jsx
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react';
import { COMPANY_INFO, TRUST_BADGES, STATS } from '../../utils/Constants.jsx';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-shape absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="hero-shape absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="hero-shape absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-2xl animate-bounce">🚀</span>
              <span className="text-sm font-semibold text-slate-700">
                Complete IT Solution Provider Since {COMPANY_INFO.foundedYear}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Ideas
              </span>{' '}
              Into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Digital Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
              we bring innovation and excellence to every project with our expert team of developers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center space-x-2 text-slate-700">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium">Secure & Scalable</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Floating Cards */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Main Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center Glow */}
                <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>

                {/* Floating Card 1 - Web Development */}
                <div className="floating-card absolute top-10 left-10 sm:left-20 bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 border border-blue-100 animate-float">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                      💻
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-600">Web Development</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        +10 Projects
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 - Mobile Apps */}
                <div className="floating-card absolute top-32 right-10 sm:right-20 bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 border border-purple-100 animate-float-delayed">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
                      📱
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-600">Mobile Apps</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        +4 Apps
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 3 - Fast Delivery */}
                <div className="floating-card absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 border border-green-100 animate-float-slow">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-3xl shadow-lg">
                      ⚡
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-600">Fast Delivery</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        On Time
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Decorative Elements */}
                <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-400/20 blur-2xl animate-pulse-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(-50%);
          }
          50% {
            transform: translateY(-15px) translateX(-50%);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-delayed {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 3s ease-in-out infinite 0.5s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;