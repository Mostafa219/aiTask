
import React from 'react';
import { AppProvider } from '../contexts/AppContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ValuePropositions from '../components/ValuePropositions';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
          <ValuePropositions />
          <Testimonials />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Index;
