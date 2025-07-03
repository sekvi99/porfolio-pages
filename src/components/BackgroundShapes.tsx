import React from 'react';

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient orbs for light mode */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-secondary/40 rounded-full animate-pulse-soft"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-accent/50 animate-float"></div>
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        <path
          d="M10,20 Q30,10 50,30 T90,20"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          fill="none"
          className="animate-pulse-soft"
        />
        <path
          d="M20,80 Q40,70 60,90 T100,80"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          fill="none"
          className="animate-pulse-soft"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
};

export default BackgroundShapes;