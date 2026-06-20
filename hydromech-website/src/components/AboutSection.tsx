'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Our Corporate Identity
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-primary-900 leading-tight">
                Engineering Precision & <br className="hidden sm:inline" />
                <span className="gradient-text-blue">Deflection-Free Design</span>
              </h2>
            </div>
            
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              ETHICS Metal Forming Machineries India is committed to providing reliable, robust, and economical sheet metal machinery solutions. We take pride in the quality of our machines and the service we provide, utilizing high-quality materials and components to ensure that our products are durable and long-lasting. Devoted to manufacturing premium machines and press brake tools, we focus on engineering-grade precision, industrial trust, and manufacturing strength.
            </p>
            
            <div className="border-t border-slate-100 pt-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary-100 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-bold text-primary-900 font-montserrat">
                    Our Quality & Service Vision
                  </h4>
                  <p className="text-xs text-slate-400 font-light">Engineered to exceed industrial expectations and uptime.</p>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Industrial Busbar Solutions',
                  'Asymmetrical Slip Rollers',
                  'Tested IS:2062 Grade Steel',
                  'Rigid Deflection-Free C-Frames',
                  'Optical Protection Safety Guards',
                  'Prompt After-Sales Setup Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-xs text-slate-600 hover:text-primary-700 transition-colors duration-200">
                    <svg className="w-4 h-4 text-emerald-500 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Image Frame Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            {/* Background design accents */}
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary-100 rounded-3xl -z-10 blur-lg opacity-60"></div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-slate-100 rounded-full -z-10 blur-xl opacity-80"></div>
            
            {/* Image Border wrapper */}
            <div className="relative p-2.5 bg-slate-50 border border-slate-200 rounded-3xl shadow-xl w-full max-w-[420px] overflow-hidden group">
              <img
                src="/images/busbar_3in1.jpg"
                alt="ETHICS Busbar Processing Machine"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-103"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo.png';
                }}
              />
              
              {/* Floating Overlap Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl shadow-lg border border-white/30 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-700 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  ★
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Certified Quality</p>
                  <p className="text-xs text-primary-900 font-extrabold">Deflection-Free Frame Structures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;