
import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: { ar: 'نورة عبدالله', en: 'Noura Abdullah' },
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c1e4?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    rating: 5,
    text: {
      ar: 'عطور رائعة وجودة عالية. عطر عود منتصف الليل أصبح عطري المفضل، يدوم طوال اليوم برائحة مميزة.',
      en: 'Amazing fragrances with exceptional quality. Midnight Oud has become my signature scent, lasting all day with its distinctive aroma.'
    }
  },
  {
    id: 2,
    name: { ar: 'أحمد محمد', en: 'Ahmed Mohammed' },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    rating: 5,
    text: {
      ar: 'خدمة عملاء ممتازة وتوصيل سريع. العطور أصلية وتركيزها عالي. أنصح بشدة!',
      en: 'Excellent customer service and fast delivery. The fragrances are authentic with high concentration. Highly recommended!'
    }
  },
  {
    id: 3,
    name: { ar: 'سارة أحمد', en: 'Sara Ahmed' },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    rating: 5,
    text: {
      ar: 'مجموعة عطور متنوعة ورائعة. حرير الزعفران له رائحة مميزة وفريدة. سأطلب المزيد قريباً.',
      en: 'Diverse and wonderful fragrance collection. Saffron Silk has a distinctive and unique scent. I will order more soon.'
    }
  }
];

const Testimonials: React.FC = () => {
  const { t, language, isRTL } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Fallback to a user icon placeholder
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGM0Y0RjYiLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyMCIgcj0iOCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNOCAzNmMwLTggOC04IDE2LThzMTYgMCAxNiA4IiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPg==';
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-card overflow-hidden hover-lift">
            <CardContent className="p-8 md:p-12 text-center">
              
              {/* Quote Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium">
                "{currentTestimonial.text[language]}"
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>
              
              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted/20">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name[language]}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-semibold text-foreground">
                    {currentTestimonial.name[language]}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'عميل محقق' : 'Verified Customer'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
            >
              {isRTL ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
            >
              {isRTL ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
