import React, { useEffect, useState } from 'react';

const MouseHighlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main highlight effect */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: '40px',
          height: '40px',
        }}
      >
        <div className="w-full h-full bg-primary/20 rounded-full blur-xl animate-pulse-soft"></div>
      </div>

      {/* Secondary trailing effect */}
      <div
        className="fixed pointer-events-none z-39 transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          width: '30px',
          height: '30px',
        }}
      >
        <div className="w-full h-full bg-secondary/30 rounded-full blur-lg"></div>
      </div>
    </>
  );
};

export default MouseHighlight;