
import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { ShoppingCart, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header: React.FC = () => {
  const { language, setLanguage, theme, setTheme, t, isRTL, cartItemsCount } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigationItems = [
    { key: 'nav.home', href: '#home' },
    {
      key: 'nav.shop',
      href: '#shop',
      submenu: [
        { key: 'nav.for-him', href: '#for-him' },
        { key: 'nav.for-her', href: '#for-her' },
        { key: 'nav.unisex', href: '#unisex' },
        { key: 'nav.all', href: '#all' }
      ]
    },
    { key: 'nav.our-story', href: '#our-story' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-heading font-bold text-primary">
              {language === 'ar' ? 'عطور الأناقة' : 'Elegance Parfums'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.key}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hover-gold flex items-center gap-1">
                      {t(item.key)}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border-border">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.key} asChild>
                        <a href={subItem.href} className="hover-gold">
                          {t(subItem.key)}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="hover-gold transition-colors duration-300 font-medium"
                >
                  {t(item.key)}
                </a>
              )
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            
            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative hover-gold">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover-gold font-medium"
            >
              {language === 'ar' ? 'EN' : 'عر'}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-gold"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <div key={item.key}>
                  <a
                    href={item.href}
                    className="block py-2 hover-gold transition-colors duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                  {item.submenu && (
                    <div className={`${isRTL ? 'mr-4' : 'ml-4'} mt-2 space-y-2`}>
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.key}
                          href={subItem.href}
                          className="block py-1 text-muted-foreground hover-gold transition-colors duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t(subItem.key)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
