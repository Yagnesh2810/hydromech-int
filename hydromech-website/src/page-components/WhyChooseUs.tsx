'use client';

import React from 'react';
import Link from 'next/link';

const WhyChooseUs: React.FC = () => {
  const values = [
    {
      title: 'Structural Deflection-Free Integrity',
      subtitle: 'Ultrasonically & Tensile Tested Grade Steel',
      desc: 'All C-Frame and H-Frame structures are engineered using premium IS:2062 Grade steel plates. Heavy force workloads are supported by ultrasonically and tensile tested welds to avoid frame deflection over decades of high-capacity output.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Precision Hydraulic Alignment',
      subtitle: '±2% Power & Force Repeatability',
      desc: 'We utilize energy-efficient hydraulic manifolds and valves that secure precise repeatability. Whether clinching studs at 53KN or bending 16mm thick busbars, our systems prevent micro-variations and ensure consistent quality.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'End-to-End Technical Customization',
      subtitle: 'Bespoke Tooling & Profile Adjustments',
      desc: 'Unlike generic equipment assemblers, our local engineering division designs customized profiles, induction-hardened CNC press brake tools, and custom hydraulic rams optimized exactly to your metal fabrication drawings.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Prompt Setup & After-Sales Services',
      subtitle: 'Complete Operational Onsite Support',
      desc: 'We guarantee timely onsite installation assistance, operator safety induction, and immediate service response to minimize production line downtime. Our tools support division carries standard stocks for swift replacements.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="font-inter bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-200 border border-primary-500/30 rounded-full text-xs font-bold tracking-widest uppercase">
            Manufacturing Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight">
            Why Choose ETHICS?
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Delivering structural stability, precision engineering, and lifetime reliability in metal forming machineries.
          </p>
        </div>
      </div>

      {/* Trust Badges Grid */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((val, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start hover:border-primary-100 group"
            >
              <div className="w-16 h-16 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <span className="group-hover:text-white transition-colors">{val.icon}</span>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] text-primary-600 font-extrabold uppercase tracking-wider">{val.subtitle}</span>
                  <h3 className="text-xl font-bold font-montserrat text-primary-900 leading-snug">{val.title}</h3>
                </div>
                <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Testing & Standard Specifications Details */}
      <div className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full">
              Testing Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-primary-900 tracking-tight leading-tight">
              Ultrasonically & Tensile Tested Weld Foundations
            </h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              Frame deflection can lead to component inaccuracies, fast tooling wear, and structural fatigue. At ETHICS, all welded frames undergo strict ultrasonic and tensile testing to guarantee frame rigidity. This enables our clinching and busbar machines to perform flawlessly even under continuous 24/7 manufacturing workloads.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <span className="block text-2xl font-extrabold text-primary-700">IS:2062</span>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Certified Steel Grade</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-extrabold text-primary-700">±2%</span>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Repeatable Precision</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img 
              src="/images/busbar_3in1.jpg" 
              alt="Tested Weld Foundation Showcase" 
              className="w-full max-w-lg h-96 object-cover rounded-3xl border border-slate-200 shadow-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/logo.png';
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA Upgrade Banner */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary-900 to-slate-900 rounded-3xl shadow-2xl p-8 md:p-14 text-center relative overflow-hidden border border-white/5">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold font-montserrat text-white tracking-tight">
              Ready to Partner With Us?
            </h3>
            <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              Upgrade your workshop with deflection-free forming machineries built for high precision and lifetime rigidity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all duration-200 text-xs uppercase tracking-wider shadow-md hover:shadow-lg shadow-primary-700/20"
              >
                Contact Us Today
              </Link>
              <Link 
                href="/products/busbar" 
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-600 hover:border-white text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-200 text-xs uppercase tracking-wider hover:bg-white/5"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
