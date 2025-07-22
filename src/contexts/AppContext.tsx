
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
  isRTL: boolean;
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartItemsCount: number;
}

export interface Product {
  id: string;
  name: { ar: string; en: string };
  nameEn: string;
  nameAr: string;
  price: number;
  image: string;
  concentration: { ar: string; en: string };
  rating: number;
  reviews: number;
  description?: { ar: string; en: string };
}

export interface CartItem extends Product {
  quantity: number;
}

const translations = {
  // Navigation
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.shop': { ar: 'تسوق', en: 'Shop' },
  'nav.for-him': { ar: 'رجالي', en: 'For Him' },
  'nav.for-her': { ar: 'نسائي', en: 'For Her' },
  'nav.unisex': { ar: 'للجنسين', en: 'Unisex' },
  'nav.all': { ar: 'الكل', en: 'All' },
  'nav.our-story': { ar: 'قصتنا', en: 'Our Story' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact Us' },
  
  // Hero Section
  'hero.title': { ar: 'اكتشف عطرك الذي يمثلك', en: 'Discover Your Signature Scent' },
  'hero.subtitle': { ar: 'اكتشف مجموعتنا الحصرية من العطور المصنّعة يدوياً، والمصممة لإثارة الذكريات والمشاعر. جودة لا تضاهى، وروائح لا تُنسى.', en: 'Explore our exclusive collection of handcrafted fragrances, designed to evoke memories and inspire emotions. Unmatched quality, unforgettable scents.' },
  'hero.shop-now': { ar: 'تسوق الآن', en: 'Shop Now' },
  'hero.find-fragrance': { ar: 'ابحث عن عطرك', en: 'Find Your Fragrance' },
  
  // Products
  'products.best-sellers': { ar: 'عطورنا الأكثر مبيعاً', en: 'Our Best-Sellers' },
  'products.add-to-cart': { ar: 'أضف إلى السلة', en: 'Add to Cart' },
  'products.view-all': { ar: 'عرض الكل', en: 'View All' },
  
  // Value Props
  'value.free-shipping': { ar: 'شحن مجاني', en: 'Free Shipping' },
  'value.free-shipping-desc': { ar: 'على الطلبات أكثر من 500 ريال', en: 'On orders over 500 SAR' },
  'value.secure-payment': { ar: 'دفع آمن', en: 'Secure Payment' },
  'value.secure-payment-desc': { ar: 'دفع آمن 100% عبر الإنترنت', en: '100% secure online payment' },
  'value.authentic': { ar: 'مكونات أصلية', en: 'Authentic Ingredients' },
  'value.authentic-desc': { ar: 'مصنوعة من أجود المكونات الطبيعية', en: 'Sourced from the finest natural ingredients' },
  'value.support': { ar: 'دعم فني متخصص', en: 'Expert Support' },
  'value.support-desc': { ar: 'هنا لمساعدتك في العثور على عطرك المثالي', en: 'Here to help you find your perfect scent' },
  
  // Testimonials
  'testimonials.title': { ar: 'ماذا يقول عملاؤنا', en: 'What Our Customers Say' },
  
  // Newsletter
  'newsletter.title': { ar: 'انضم إلى نادينا', en: 'Join The Club' },
  'newsletter.subtitle': { ar: 'اشترك في نشرتنا البريدية واحصل على خصم 15% على طلبك الأول، بالإضافة إلى عروض حصرية على الإصدارات الجديدة.', en: 'Subscribe to our newsletter and get 15% off your first order, plus exclusive access to new launches and private sales.' },
  'newsletter.email-placeholder': { ar: 'أدخل بريدك الإلكتروني', en: 'Enter your email address' },
  'newsletter.subscribe': { ar: 'اشتراك', en: 'Subscribe' },
  
  // Contact
  'contact.title': { ar: 'تواصل معنا', en: 'Get in Touch' },
  'contact.name': { ar: 'الاسم', en: 'Name' },
  'contact.email': { ar: 'البريد الإلكتروني', en: 'Email' },
  'contact.message': { ar: 'الرسالة', en: 'Message' },
  'contact.send': { ar: 'إرسال الرسالة', en: 'Send Message' },
  
  // Footer
  'footer.tagline': { ar: 'شريكك الموثوق للعطور الفاخرة.', en: 'Your trusted partner for premium fragrances.' },
  'footer.quick-links': { ar: 'روابط سريعة', en: 'Quick Links' },
  'footer.follow-us': { ar: 'تابعنا', en: 'Follow Us' },
  'footer.copyright': { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
  
  // Cart
  'cart.title': { ar: 'سلة التسوق', en: 'Shopping Cart' },
  'cart.empty': { ar: 'سلة التسوق فارغة', en: 'Your cart is empty' },
  'cart.total': { ar: 'المجموع', en: 'Total' },
  'cart.checkout': { ar: 'إتمام الشراء', en: 'Checkout' },
  'cart.continue-shopping': { ar: 'متابعة التسوق', en: 'Continue Shopping' },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');
  const [theme, setThemeState] = useState<Theme>('light');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] : key;
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Set initial direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, []);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      t,
      isRTL: language === 'ar',
      cartItems,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      cartTotal,
      cartItemsCount
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
