import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart, Trophy } from 'lucide-react';

const Hobbies = () => {
  const { t } = useTranslation();

  const hobbies = [
    {
      icon: Brain,
      title: t('hobbies.ai.title'),
      description: t('hobbies.ai.description'),
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-500/10 to-purple-500/10'
    },
    {
      icon: Heart,
      title: t('hobbies.cats.title'),
      description: t('hobbies.cats.description'),
      gradient: 'from-pink-500 to-red-500',
      bgGradient: 'from-pink-500/10 to-red-500/10'
    },
    {
      icon: Trophy,
      title: t('hobbies.esports.title'),
      description: t('hobbies.esports.description'),
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {t('hobbies.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('hobbies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <Card 
                key={hobby.title}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-card/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${hobby.bgGradient} flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                    <IconComponent className={`w-8 h-8 bg-gradient-to-br ${hobby.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {hobby.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-60">
          <div className="text-6xl animate-float">🤖</div>
          <div className="text-6xl animate-float" style={{ animationDelay: '1s' }}>🐱</div>
          <div className="text-6xl animate-float" style={{ animationDelay: '2s' }}>🎮</div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;