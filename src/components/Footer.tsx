
import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const { t, language } = useApp();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.shop', href: '#shop' },
    { key: 'nav.our-story', href: '#our-story' },
    { key: 'nav.contact', href: '#contact' },
    { key: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQs', href: '#faq' },
    { key: language === 'ar' ? 'سياسة الإرجاع' : 'Return Policy', href: '#returns' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {language === 'ar' ? 'عطور الأناقة' : 'Elegance Parfums'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('footer.tagline')}
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-4">
                  {t('footer.follow-us')}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      asChild
                      className={`rounded-full border border-border hover:border-primary ${social.color} transition-all duration-300 hover-lift`}
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-6">
                {t('footer.quick-links')}
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={typeof link.key === 'string' ? link.key : link.href}
                    href={link.href}
                    className="block text-muted-foreground hover-gold transition-colors duration-300"
                  >
                    {typeof link.key === 'string' && link.key.startsWith('nav.') 
                      ? t(link.key) 
                      : link.key
                    }
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Contact Info Column */}
            <div className="space-y-6">
              <h4 className="font-heading font-semibold text-foreground mb-6">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Info'}
              </h4>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-1">
                    {language === 'ar' ? 'الهاتف' : 'Phone'}
                  </p>
                  <p>+966 11 123 4567</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </p>
                  <p>info@eleganceparfums.com</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-1">
                    {language === 'ar' ? 'العنوان' : 'Address'}
                  </p>
                  <p>
                    {language === 'ar' 
                      ? 'الرياض، المملكة العربية السعودية' 
                      : 'Riyadh, Saudi Arabia'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            
            {/* Copyright */}
            <p className="flex items-center gap-2">
              © 2025 {language === 'ar' ? 'عطور الأناقة' : 'Elegance Parfums'}. {t('footer.copyright')}
            </p>
            
            {/* Made with love */}
            <p className="flex items-center gap-2">
              {language === 'ar' ? 'صُنع بـ' : 'Made with'} 
              <Heart className="h-4 w-4 text-red-500 fill-current" /> 
              {language === 'ar' ? 'في المملكة العربية السعودية' : 'in Saudi Arabia'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
