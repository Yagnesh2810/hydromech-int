import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ClientsSection from '../components/ClientsSection';
import ProgressSection from '../components/ProgressSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

export default function HomePage() {
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
}
