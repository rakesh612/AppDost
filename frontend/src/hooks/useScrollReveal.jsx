// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll reveal animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {boolean} options.once - Trigger animation only once
 * @param {string} options.animation - Animation type: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'rotate'
 */
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    once = true,
    animation = 'fade-up'
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-10`;
        case 'fade-down':
          return `${baseClass} opacity-0 -translate-y-10`;
        case 'fade-left':
          return `${baseClass} opacity-0 translate-x-10`;
        case 'fade-right':
          return `${baseClass} opacity-0 -translate-x-10`;
        case 'scale':
          return `${baseClass} opacity-0 scale-75`;
        case 'rotate':
          return `${baseClass} opacity-0 rotate-12 scale-90`;
        default:
          return `${baseClass} opacity-0 translate-y-10`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return { ref, isVisible, className: getAnimationClass() };
};

export default useScrollReveal;