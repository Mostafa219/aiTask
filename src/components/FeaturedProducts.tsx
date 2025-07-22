
import React from 'react';
import { useApp, Product } from '../contexts/AppContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Star, Plus } from 'lucide-react';

// Sample luxury perfume data with reliable placeholder images
const sampleProducts: Product[] = [
  {
    id: '1',
    name: { ar: 'عود منتصف الليل', en: 'Midnight Oud' },
    nameEn: 'Midnight Oud',
    nameAr: 'عود منتصف الليل',
    price: 850,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    concentration: { ar: 'عطر مركز', en: 'Eau de Parfum' },
    rating: 4.8,
    reviews: 124,
    description: { 
      ar: 'عطر شرقي فاخر يجمع بين العود الكمبودي الأصيل والورد الدمشقي',
      en: 'A luxurious oriental fragrance combining authentic Cambodian oud with Damascus rose'
    }
  },
  {
    id: '2',
    name: { ar: 'حرير الزعفران', en: 'Saffron Silk' },
    nameEn: 'Saffran Silk',
    nameAr: 'حرير الزعفران',
    price: 750,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    concentration: { ar: 'عطر مركز', en: 'Eau de Parfum' },
    rating: 4.6,
    reviews: 89,
    description: { 
      ar: 'تركيبة أنيقة من الزعفران الفاخر والياسمين الأبيض',
      en: 'An elegant composition of luxury saffron and white jasmine'
    }
  },
  {
    id: '3',
    name: { ar: 'أمبر ملكي', en: 'Royal Amber' },
    nameEn: 'Royal Amber',
    nameAr: 'أمبر ملكي',
    price: 950,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    concentration: { ar: 'عطر مركز', en: 'Eau de Parfum' },
    rating: 4.9,
    reviews: 156,
    description: { 
      ar: 'عطر ملكي يجمع بين الأمبر الذهبي والمسك الأبيض',
      en: 'A regal fragrance combining golden amber with white musk'
    }
  },
  {
    id: '4',
    name: { ar: 'ياسمين الليل', en: 'Night Jasmine' },
    nameEn: 'Night Jasmine',
    nameAr: 'ياسمين الليل',
    price: 680,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
    concentration: { ar: 'عطر خفيف', en: 'Eau de Toilette' },
    rating: 4.7,
    reviews: 92,
    description: { 
      ar: 'عطر زهري رقيق يجمع بين الياسمين والفانيليا',
      en: 'A delicate floral fragrance combining jasmine and vanilla'
    }
  }
];

const FeaturedProducts: React.FC = () => {
  const { t, language, addToCart } = useApp();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Fallback to a solid color placeholder
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMDAgMjQwSDIwMFYyNjBIMjAwVjI0MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  };

  return (
    <section id="shop" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t('products.best-sellers')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sampleProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover-lift border-0 shadow-lg bg-card overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-0">
                
                {/* Product Image */}
                <div className="relative overflow-hidden bg-muted/20">
                  <img 
                    src={product.image} 
                    alt={product.name[language]}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  
                  {/* Quick Add Button */}
                  <Button
                    size="icon"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleAddToCart(product)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  
                  {/* Product Name */}
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name[language]}
                  </h3>
                  
                  {/* Concentration */}
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.concentration[language]}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {product.price} {language === 'ar' ? 'ر.س' : 'SAR'}
                    </span>
                    
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg"
                    >
                      {t('products.add-to-cart')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl hover-lift"
          >
            {t('products.view-all')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
