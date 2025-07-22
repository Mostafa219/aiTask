
import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Button } from './ui/button';
import { Sparkles, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useApp();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-primary/10"></div>
      
      {/* Background Image - Using a luxury perfume image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80)'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="h-12 w-12 text-primary animate-gentle-bounce" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Heart className="h-16 w-16 text-primary animate-gentle-bounce" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating perfume bottle illustration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl hover-lift"
            >
              {t('hero.shop-now')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl hover-lift"
            >
              {t('hero.find-fragrance')}
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Handcrafted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Authentic Ingredients</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
