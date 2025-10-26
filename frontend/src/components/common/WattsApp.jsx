// src/components/common/WhatsAppFloat.jsx
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/Constants.jsx';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip after 3 seconds on initial load
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  // WhatsApp message template
  const whatsappMessage = encodeURIComponent(
    "Hi AppDost! I'm interested in your services. I'd like to discuss my project."
  );

  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* WhatsApp Float Button - LEFT SIDE */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full left-0 mb-4 transition-all duration-300 ${
            showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="relative bg-white rounded-xl shadow-2xl p-4 max-w-xs border border-slate-200">
            {/* Close button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4 text-slate-600" />
            </button>

            {/* Content */}
            <div className="pr-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Chat with us!</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                    Online now
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Need help? Chat with our team on WhatsApp. We're here 24/7!
              </p>
            </div>

            {/* Arrow pointer - pointing to LEFT */}
            <div className="absolute bottom-0 left-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-200"></div>
          </div>
        </div>

        {/* Main Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center space-x-3 px-5 py-4">
            {/* WhatsApp Icon */}
            <div className="relative">
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </div>

            {/* Text (hidden on mobile, shown on larger screens) */}
            <span className="hidden sm:block font-semibold whitespace-nowrap pr-1">
              Chat with us
            </span>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </a>

        {/* Animated Dots around button */}
        <div className="absolute -inset-2 pointer-events-none">
          <div className="absolute top-0 left-0 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2s' }}></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }

        /* Smooth hover scale */
        @media (hover: hover) {
          .group:hover {
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;