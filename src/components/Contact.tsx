
import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'ar' ? 'الهاتف' : 'Phone',
      value: '+966 11 123 4567',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      label: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'info@eleganceparfums.com',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: language === 'ar' ? 'العنوان' : 'Address',
      value: language === 'ar' 
        ? 'الرياض، المملكة العربية السعودية' 
        : 'Riyadh, Saudi Arabia',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      label: language === 'ar' ? 'ساعات العمل' : 'Working Hours',
      value: language === 'ar' 
        ? 'السبت - الخميس: 9:00 - 18:00' 
        : 'Sat - Thu: 9:00 AM - 6:00 PM',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {language === 'ar' ? 'تم إرسال رسالتك!' : 'Message Sent!'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' 
                        ? 'شكراً لتواصلك معنا. سنرد عليك قريباً.'
                        : 'Thank you for contacting us. We will get back to you soon.'
                      }
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                      {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Name Field */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.name')}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-border focus:border-primary bg-background"
                          dir={language === 'ar' ? 'rtl' : 'ltr'}
                        />
                      </div>
                      
                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.email')}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-border focus:border-primary bg-background"
                          dir={language === 'ar' ? 'rtl' : 'ltr'}
                        />
                      </div>
                      
                      {/* Message Field */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.message')}
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="border-2 border-border focus:border-primary bg-background resize-none"
                          dir={language === 'ar' ? 'rtl' : 'ltr'}
                        />
                      </div>
                      
                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl font-medium hover-lift"
                      >
                        {isSubmitting 
                          ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') 
                          : t('contact.send')
                        }
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
