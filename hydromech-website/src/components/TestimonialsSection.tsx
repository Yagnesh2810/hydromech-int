'use client';

import React, { useState, useEffect } from 'react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "ETHICS' busbar processing machine is built with precision and durability in mind. The quality and force repeatability of their HMB-303 model have drastically improved our panel shop throughput. Highly recommended!",
      author: "Panel Shop Manager",
      location: "Switchgear Industry",
      rating: 5
    },
    {
      text: "We purchased the HM-640 clinching machine. The deflection-free C-frame structure and the safety controls are outstanding. Very low maintenance and excellent after-sales support.",
      author: "Production Lead",
      location: "Sheet Metal Assembly",
      rating: 5
    },
    {
      text: "What I value most about ETHICS (Engineers Hydro Mech) is their technical capability. They customized the section bending rolls to meet our specific structural profile needs.",
      author: "Fabrication Partner",
      location: "Heavy Engineering",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-steel-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary-700 font-semibold mb-4 uppercase tracking-wider text-xs">Client Reviews</h6>
          <h2 className="text-4xl font-bold font-montserrat text-primary-700 mb-6">
            Trusted by Switchgear & Sheet Metal Industry
          </h2>
          <p className="text-xl text-steel-400 max-w-3xl mx-auto font-light leading-relaxed">
            Reliable forming machines and press tools backed by excellent after-sales support.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-steel-200">
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonials[currentTestimonial].author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-primary-700">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-steel-400 text-xs uppercase tracking-wider mt-0.5">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary-700 w-8' 
                    : 'bg-steel-300 hover:bg-steel-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-steel-50 transition-colors border border-steel-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-steel-50 transition-colors border border-steel-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold font-montserrat text-primary-700 mb-2">IS:2062</div>
            <div className="text-steel-400 text-xs uppercase tracking-wider">Tested Steel Grade</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-montserrat text-primary-700 mb-2">53 KN</div>
            <div className="text-steel-400 text-xs uppercase tracking-wider">Hydraulic Power</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-montserrat text-primary-700 mb-2">±2%</div>
            <div className="text-steel-400 text-xs uppercase tracking-wider">Force Repeatability</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-montserrat text-primary-700 mb-2">100%</div>
            <div className="text-steel-400 text-xs uppercase tracking-wider">After-Sales Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;