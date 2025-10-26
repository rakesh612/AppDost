// src/components/common/FloatingElements.jsx
import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random floating elements
    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      type: Math.floor(Math.random() * 4),
    }));
    setElements(newElements);
  }, []);

  const getGradient = (type) => {
    const gradients = [
      'from-blue-400/20 to-cyan-400/20',
      'from-purple-400/20 to-pink-400/20',
      'from-green-400/20 to-teal-400/20',
      'from-orange-400/20 to-red-400/20',
    ];
    return gradients[type];
  };

  const getShape = (type) => {
    switch (type) {
      case 0:
        return 'rounded-full';
      case 1:
        return 'rounded-2xl rotate-45';
      case 2:
        return 'rounded-3xl';
      case 3:
        return 'rounded-full';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute bg-gradient-to-br ${getGradient(element.type)} ${getShape(
            element.type
          )} blur-2xl animate-float-random`}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.left}%`,
            top: `${element.top}%`,
            opacity: element.opacity,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>

      {/* Styles */}
      <style>{`
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(20px, -30px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translate(-15px, 20px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) rotate(270deg) scale(1.05);
          }
        }

        .animate-float-random {
          animation: float-random linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;