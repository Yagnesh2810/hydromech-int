import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ClientsSection from '../components/ClientsSection';
import ProgressSection from '../components/ProgressSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

const Home: React.FC = () => {
  useEffect(() => {
    if (window.location.hash === '#why-choose-us') {
      setTimeout(() => {
        const element = document.getElementById('why-choose-us');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <ClientsSection />
      <ProgressSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;