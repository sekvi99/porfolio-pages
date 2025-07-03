import React from 'react';
import { Loader2, Code, Zap, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Main Loader */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <Loader2 className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>

        {/* Floating Icons */}
        <div className="relative w-40 h-20 mx-auto">
          <Code className="w-6 h-6 text-blue-500 absolute top-0 left-0 animate-float" />
          <Zap className="w-6 h-6 text-yellow-500 absolute top-0 right-0 animate-float" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="w-6 h-6 text-purple-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold animate-pulse">Loading Portfolio</h2>
          <p className="text-muted-foreground animate-fade-in-up">Preparing something amazing...</p>
        </div>

        {/* Progress Dots */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;