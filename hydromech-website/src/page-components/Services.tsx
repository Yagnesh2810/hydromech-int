'use client';

import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Die & Tooling Design',
      desc: 'In-house CAD/CAM engineering of custom bending profiles, multi-hole punching dies, and clinching tools mapped to your specific metal thickness.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-4a2 2 0 012-2h4" />
        </svg>
      )
    },
    {
      title: 'On-Site Machine Commissioning',
      desc: 'Expert deployment, alignment verification, and calibration of hydraulic systems to secure zero-deflection operations in your factory floor.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Hydraulic System Retrofitting',
      desc: 'Upgrading older busbar processing or C-frame pressing lines with energy-efficient manifolds, newer pressure valves, and NC controls.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    },
    {
      title: 'Operator Training & Safety Setup',
      desc: 'Conducting intensive training on safe machine operations, optical guard alignment, and emergency control mechanisms for plant operators.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Annual Preventative Maintenance',
      desc: 'Preventative check-ups covering oil filtration, cylinder seal checks, structural weld testing, and control repeatability calibrations under AMC.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Die Refurbishment & Re-grinding',
      desc: 'Restoring damaged shearing blades, worn-out punching pins, and custom slip rolling blocks back to high precision.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6H16" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fadeInUp">Our Services</h1>
          <p className="text-2xl text-primary-100 max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Dedicated Engineering & Maintenance Support for High Factory Uptime
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industrial Engineering Services We Provide</h2>
            </div>
            <div className="animate-fadeInRight">
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                From initial plant die customisation to prompt annual maintenance agreements (AMC), our service engineers ensure your metal forming lines operate without micro-variations or structural stress.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Require Urgent Technical Assistance?</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto font-light">
              Get in touch with our machine support team to schedule on-site service calls, request tool re-grinding, or order spare seals.
            </p>
            <button 
              onClick={() => window.location.href = 'https://wa.me/919738371651?text=Hello%20ETHICS!%20I%20need%20urgent%20technical%20service%20support%20for%20my%20forming%20machinery.'}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase text-xs font-bold tracking-wider"
            >
              Inquire Support Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;