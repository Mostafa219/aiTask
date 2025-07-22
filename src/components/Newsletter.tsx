
import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  const { t, language } = useApp();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate subscription process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              {language === 'ar' ? 'شكراً لك!' : 'Thank You!'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'تم اشتراكك بنجاح. ستحصل على خصم 15% في بريدك الإلكتروني قريباً.'
                : 'You have been successfully subscribed. You will receive your 15% discount in your email shortly.'
              }
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t('newsletter.title')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('newsletter.subtitle')}
          </p>
          
          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder={t('newsletter.email-placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-4 rounded-xl border-2 border-border focus:border-primary bg-background text-foreground placeholder:text-muted-foreground"
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-xl font-medium hover-lift"
              >
                {isSubmitting 
                  ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') 
                  : t('newsletter.subscribe')
                }
              </Button>
            </div>
          </form>
          
          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{language === 'ar' ? 'خصم 15% فوري' : '15% Instant Discount'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{language === 'ar' ? 'عروض حصرية' : 'Exclusive Offers'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>{language === 'ar' ? 'إصدارات جديدة أولاً' : 'New Launches First'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
