import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Introduction from '@/components/sections/Introduction';
import Experience from '@/components/sections/Experience';
import Hobbies from '@/components/sections/Hobbies';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/LoadingScreen';
import MouseHighlight from '@/components/MouseHighlight';
import BackgroundShapes from '@/components/BackgroundShapes';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundShapes />
      <MouseHighlight />
      <Header />
      <main className="relative z-10">
        <Introduction />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;