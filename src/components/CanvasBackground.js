// src/components/CanvasBackground.js
import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Canvas boyutlarını ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Parçacık sınıfı
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
      }

      draw() {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Parçacıkları oluştur
    const init = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
      }
    };

    // Fare pozisyonunu takip et
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Animasyon döngüsü
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Parçacıkları çiz
      particles.forEach(particle => {
        particle.draw();
      });

      // Fare ile parçacıklar arasındaki bağlantıları çiz
      particles.forEach(particle => {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance/150)})`;
          ctx.lineWidth = 2;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listener'ları ekle
    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });
    window.addEventListener('mousemove', handleMouseMove);

    // İlk kurulum
    resizeCanvas();
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default CanvasBackground;
