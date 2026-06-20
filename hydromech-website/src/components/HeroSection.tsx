'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SpecDetail {
  label: string;
  value: string;
}

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  path: string;
  model: string;
  specs: SpecDetail[];
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides: Slide[] = [
    {
      image: '/images/busbar_3in1.jpg',
      title: 'Hydraulic Busbar Processing',
      subtitle: 'Efficient 3-in-1 integrated solutions for precise punching, bending, and shearing of copper and aluminum busbars.',
      cta: 'Explore Busbar Machines',
      path: '/products/busbar',
      model: 'HMB-303',
      specs: [
        { label: 'Force Capacity', value: '16 Tons' },
        { label: 'Motor Power', value: '5 HP' },
        { label: 'Stations', value: '3-in-1 Compact' },
        { label: 'Bending Max', value: '16T x W200mm' }
      ]
    },
    {
      image: '/images/clinching_machine.jpg',
      title: 'Fastener Insertion & Clinching',
      subtitle: 'Model HM-640 featuring high-rigidity C-frame structures, 53KN hydraulic force, and positive stop safety systems.',
      cta: 'View Clinching Machines',
      path: '/products/clinching',
      model: 'HM-640',
      specs: [
        { label: 'Insertion Force', value: '53 KN' },
        { label: 'Safety Guard', value: 'Positive Stop' },
        { label: 'Throat Depth', value: '450 mm' },
        { label: 'Nut Capacity', value: 'M2 to M10' }
      ]
    },
    {
      image: '/images/section_bending_machine.jpg',
      title: 'Hydraulic Section Bending',
      subtitle: 'Precision profile bending for round pipes, square pipes, angles, and flat bars with horizontal & vertical operations.',
      cta: 'Discover Bending Machines',
      path: '/products/bending-rolling',
      model: 'HM-SB50',
      specs: [
        { label: 'Shaft Diameter', value: 'Ø50 mm' },
        { label: 'Motor Power', value: '3 HP' },
        { label: 'Rolls Adjust', value: 'Hydraulic' },
        { label: 'Operation', value: 'Horiz & Vert' }
      ]
    },
    {
      image: '/images/plate_rolling_machine.jpg',
      title: 'Electric Slip Rolling',
      subtitle: 'Asymmetrical 3-roll bending machines with quick release top rollers for thin sheet metal forming.',
      cta: 'Explore Rolling Machines',
      path: '/products/bending-rolling',
      model: 'HM-SR312',
      specs: [
        { label: 'Rolling Width', value: '1200 mm' },
        { label: 'Plate Capacity', value: '3.0 mm Max' },
        { label: 'Rolls Diameter', value: 'Ø90 mm' },
        { label: 'Roll Type', value: 'Asymmetrical' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 450);
  };

  const handleDotClick = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 450);
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950 font-inter">
      
      {/* Background Slideshow with Better Visibility */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 bg-center bg-cover ease-in-out ${
              index === currentSlide ? 'opacity-55 scale-103' : 'opacity-0 scale-100'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transition: 'transform 6500ms ease-out, opacity 1000ms ease-in-out'
            }}
          />
        ))}
        {/* Subtle high-contrast tech gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-slate-950/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 text-white space-y-6">
            <div className={`transition-all duration-300 transform ${isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 text-primary-200 border border-primary-500/20 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Industrial Quality Certified
              </span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat tracking-tight leading-[1.1] transition-all duration-500 transform ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {slides[currentSlide].title}
            </h1>
            
            <p className={`text-base sm:text-lg text-slate-350 max-w-lg font-light leading-relaxed transition-all duration-500 delay-100 transform ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {slides[currentSlide].subtitle}
            </p>
            
            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-500 delay-200 transform ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <Link 
                href={slides[currentSlide].path}
                className="group relative inline-flex items-center justify-center px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(74,95,142,0.3)] hover:shadow-[0_0_25px_rgba(74,95,142,0.5)] transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-primary-750 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2 text-xs uppercase tracking-wider">
                  {slides[currentSlide].cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/why-choose-us"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-650 hover:border-white text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/5 text-xs uppercase tracking-wider backdrop-blur-sm"
              >
                Why Choose Us
              </Link>
            </div>
          </div>

          {/* Right Column Content: Showcase Frame with dynamic visual highlight */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className={`w-full max-w-md dark-glass-card rounded-[32px] p-6 lg:p-8 shadow-2xl transition-all duration-500 transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              
              {/* Image Frame containing the actual machine */}
              <div className="relative h-60 w-full bg-slate-900/60 border border-white/5 rounded-2xl p-4 flex items-center justify-center overflow-hidden mb-6 group">
                <div className="absolute inset-0 bg-radial-glow opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo.png';
                  }}
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-primary-700 text-white border border-primary-500/30 text-[9px] font-extrabold uppercase tracking-widest rounded-md shadow-sm">
                    {slides[currentSlide].model}
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Technical Specs</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary-300 font-bold">Standard Spec Sheet</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {slides[currentSlide].specs.map((spec, index) => (
                    <div key={index} className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                      <span className="block text-[9px] text-slate-400 font-semibold mb-0.5 uppercase tracking-wider">{spec.label}</span>
                      <span className="block text-xs text-white font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Slide Indicators & Auto-Play Progress */}
        <div className="absolute bottom-6 left-6 right-6 max-w-7xl mx-auto flex items-center justify-between z-10">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="group flex flex-col items-start focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold transition-all duration-300 ${index === currentSlide ? 'text-primary-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    0{index + 1}
                  </span>
                </div>
                <div className="w-16 h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div 
                    className={`h-full bg-primary-500 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'progress-active' : 'w-0'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Scroll to explore</span>
            <div className="w-5 h-8 border-2 border-slate-650 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;