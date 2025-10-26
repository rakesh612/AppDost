// src/components/common/CursorTrail.jsx
import React, { useEffect, useRef, useState } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const particles = useRef([]);
  const cursor = useRef({ x: 0, y: 0 });
  const animationId = useRef(null);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't run on mobile

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      cursor.current = { x: e.clientX, y: e.clientY };

      // Create new particle
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          life: 1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`, // Blue to purple range
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= 0.02;
        particle.size *= 0.97;

        if (particle.life > 0) {
          ctx.globalAlpha = particle.life;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      // Draw cursor glow
      const gradient = ctx.createRadialGradient(
        cursor.current.x,
        cursor.current.y,
        0,
        cursor.current.x,
        cursor.current.y,
        50
      );
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.1)');
      gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');

      ctx.globalAlpha = 0.5;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursor.current.x, cursor.current.y, 50, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      animationId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;