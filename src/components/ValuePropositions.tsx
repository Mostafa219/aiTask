
import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Truck, Shield, Leaf, Headphones } from 'lucide-react';

const ValuePropositions: React.FC = () => {
  const { t } = useApp();

  const valueProps = [
    {
      icon: Truck,
      title: 'value.free-shipping',
      description: 'value.free-shipping-desc',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'value.secure-payment',
      description: 'value.secure-payment-desc',
      color: 'text-blue-500'
    },
    {
      icon: Leaf,
      title: 'value.authentic',
      description: 'value.authentic-desc',
      color: 'text-emerald-500'
    },
    {
      icon: Headphones,
      title: 'value.support',
      description: 'value.support-desc',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={prop.title}
              className="text-center group animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <prop.icon className={`h-8 w-8 ${prop.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {t(prop.title)}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(prop.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
