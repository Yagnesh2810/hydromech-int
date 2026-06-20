'use client';

import React, { useState, useEffect, useRef } from 'react';

const StatsSection: React.FC = () => {
  const [counters, setCounters] = useState({ years: 0, offices: 0, workers: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { years: 12, offices: 350, workers: 120 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        offices: Math.floor(targets.offices * progress),
        workers: Math.floor(targets.workers * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold font-montserrat mb-6 animate-fadeInUp text-white">Manufacturing Network</h2>
            <p className="text-gray-300 mb-8 font-light text-sm leading-relaxed">
              ETHICS operates a dedicated production setup supplying high-precision sheet metal forming machines to switchgear, electrical panel board fabrication, and industrial automation clients across India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center animate-fadeInUp animation-delay-200 border border-white/10">
                <div className="text-4xl font-bold text-primary-400 mb-2 counter">
                  {counters.years}+
                </div>
                <div className="text-gray-300 text-sm">Years of Precision</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center animate-fadeInUp animation-delay-300 border border-white/10">
                <div className="text-4xl font-bold text-primary-400 mb-2 counter">
                  {counters.offices}+
                </div>
                <div className="text-gray-300 text-sm">Clients Served</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center animate-fadeInUp animation-delay-350 border border-white/10">
                <div className="text-4xl font-bold text-primary-400 mb-2 counter">
                  {counters.workers}+
                </div>
                <div className="text-gray-300 text-sm">Tested Setups</div>
              </div>
            </div>
          </div>
          
          {/* Right World Map */}
          <div className="flex justify-center">
            <img
              src="https://new.creativemox.com/oeelco/wp-content/uploads/sites/11/2025/07/World-map-a.png"
              alt="World Map"
              className="w-full max-w-lg opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/600x400/333333/666666?text=World+Map';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;