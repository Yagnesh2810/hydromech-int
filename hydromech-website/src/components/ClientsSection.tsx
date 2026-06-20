'use client';

import React from 'react';

interface Certificate {
  name: string;
  image: string;
}

const ClientsSection: React.FC = () => {
  const certificates: Certificate[] = [
    { name: 'GST Registration', image: '/images/certificates/GST logo .png' },
    { name: 'IEC Certificate', image: '/images/certificates/IEC.png' },
    { name: 'MSME Registration', image: '/images/certificates/MSME.png' },
    { name: 'Udyog Aadhar', image: '/images/certificates/Udyog Aadhar.png' }
  ];

  return (
    <section className="py-20 bg-slate-50 font-inter border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-extrabold text-primary-600 uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full">
            Compliance & Registrations
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold font-montserrat text-primary-900">
            Certified Manufacturing Operations
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
            Registered and certified in compliance with Indian MSME and export-import regulations.
          </p>
        </div>
        
        {/* Certificate Glass Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 glow-border glow-shadow-hover transition-all duration-300"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/logo.png';
                  }}
                />
              </div>
              <span className="text-xs font-bold text-slate-700 text-center tracking-wide">{cert.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;