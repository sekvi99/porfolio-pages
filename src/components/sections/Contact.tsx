import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const handleEmailClick = () => {
    window.location.href = 'mailto:filmatkozlik@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/filip-ko%C5%BAlik-666625289/', '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200 dark:border-blue-800 animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Mail className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your project over email
                </p>
                <Button 
                  onClick={handleEmailClick}
                  className="bg-blue-500 hover:bg-blue-600 group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  {t('contact.email')}
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-700/10 to-blue-800/10 border-blue-300 dark:border-blue-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-700/20 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <ExternalLink className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with me professionally
                </p>
                <Button 
                  onClick={handleLinkedInClick}
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                  {t('contact.linkedin')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Decorative gradient background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border">
              <p className="text-lg text-muted-foreground">
                {t('contact.additionalInfo')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
