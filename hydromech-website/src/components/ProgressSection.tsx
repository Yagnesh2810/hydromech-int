'use client';

import React, { useState, useEffect, useRef } from 'react';

const ProgressSection: React.FC = () => {
  const [progress, setProgress] = useState({ cleaner: 0, stronger: 0, better: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateProgress();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateProgress = () => {
    const targets = { cleaner: 95, stronger: 92, better: 88 };
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progressValue = step / steps;
      
      setProgress({
        cleaner: Math.floor(targets.cleaner * progressValue),
        stronger: Math.floor(targets.stronger * progressValue),
        better: Math.floor(targets.better * progressValue)
      });

      if (step >= steps) {
        clearInterval(timer);
        setProgress(targets);
      }
    }, stepTime);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Images */}
          <div className="relative">
            <div className="relative">
              <img
               src="/images/busbar_3in1.jpg" 
                alt="ETHICS machinery manufacturing"
                className="w-full h-96 object-cover rounded-lg animate-fadeInLeft border border-steel-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/logo.png';
                }}
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h6 className="text-primary-700 font-semibold mb-4 uppercase tracking-wider text-xs">Why Choose Us</h6>
            <h2 className="text-4xl font-bold font-montserrat text-primary-700 mb-6 animate-fadeInUp">
              Excellence, Innovation & Custom Forming Setup
            </h2>
            <p className="text-steel-400 mb-8 font-light text-sm leading-relaxed">
              At ETHICS, we are committed to delivering more than just forming machinery – we deliver precision, quality, and long-term value. Devoted to sheet metal solutions, we focus on engineering trust and structural rigidity, ensuring our machines operate seamlessly under heavy workloads. What sets us apart is our customer-first approach, offering complete custom design, setup guidance, and excellent after-sales support.
            </p>
            
            <div className="w-24 h-1 bg-primary-700 mb-8"></div>
            
            {/* Progress Bars */}
            <div className="space-y-6">
              {[
                { label: 'Quality & Durability', value: progress.cleaner, target: 95 },
                { label: 'Customer Satisfaction', value: progress.stronger, target: 92 },
                { label: 'Hydraulic Repeatability', value: progress.better, target: 88 }
              ].map((item, index) => (
                <div key={index} className="space-y-2 text-xs">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-primary-700">{item.label}</span>
                    <span className="font-bold text-primary-700">{item.value}%</span>
                  </div>
                  <div className="w-full bg-steel-200 rounded-full h-2">
                    <div 
                      className="bg-primary-700 h-2 rounded-full transition-all duration-1500 ease-out"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;