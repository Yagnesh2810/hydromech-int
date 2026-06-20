'use client';

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-steel-100/10 text-steel-200 border border-steel-200/20 rounded-full text-xs font-semibold tracking-wider mb-4 uppercase">
            Engineering Trust
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">About ETHICS Metal Forming</h1>
          <p className="text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            Engineering Precision, Industrial Trust, and Manufacturing Strength in Sheet Metal Solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Who We Are Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fadeInLeft">
              <h6 className="text-primary-700 font-semibold mb-4 uppercase tracking-wider text-xs">Who We Are</h6>
              <h2 className="text-4xl font-bold font-montserrat text-primary-700 mb-6">Leading Manufacturer of Metal Forming Solutions</h2>
              <p className="text-steel-400 mb-8 font-light text-sm leading-relaxed">
                Welcome to ETHICS Metal Forming Machineries India (Engineers Hydro Mech) – where engineering precision meets manufacturing strength. We are a young sheet metal company with a strong vision to deliver reliable and economical sheet metal solutions. We take pride in the quality of our machines and the service we provide, utilizing high-quality materials and components to ensure our machines are reliable, long-lasting, and highly efficient.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'World-class hydraulic busbar processing machines',
                  'Heavy-duty clinching & fastener insertion machinery',
                  'High-precision profile section bending & slip rolling machines',
                  'Induction hardened & ground CNC press brake tools'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-steel-400">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fadeInRight">
              <img
                src="/images/busbar_3in1.jpg"
                alt="ETHICS Hydraulic Machinery Works"
                className="w-full h-96 object-cover rounded-lg shadow-lg border border-steel-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo.png';
                }}
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white py-16 rounded-xl border border-steel-200 shadow-sm mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat text-primary-700 mb-4">Our Commitment & Excellence</h2>
              <p className="text-steel-400 max-w-2xl mx-auto font-light text-sm">
                Our commitment goes beyond assembly — we deliver reliability, rigidity, and performance. By continuously adapting to evolving demands, we ensure our clients always receive the best.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              {[
                { number: '100%', label: 'Deflection-Free Structures' },
                { number: 'IS:2062', label: 'Grade Tested Steel Frames' },
                { number: '±2%', label: 'Hydraulic Force Repeatability' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-steel-100 p-8 rounded-lg border border-steel-200">
                  <div className="text-4xl font-bold font-montserrat text-primary-700 mb-4">{stat.number}</div>
                  <div className="text-steel-400 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold font-montserrat text-primary-700 mb-6">Our Approach</h2>
              <h3 className="text-xl font-bold text-primary-600 mb-6 font-montserrat">Building Long-term Partnerships</h3>
              <p className="text-steel-400 mb-8 font-light text-sm leading-relaxed">
                At ETHICS (Engineers Hydro Mech), we believe in building long-term relationships by offering not just products, but complete solutions tailored to client needs. We maintain frequent contact with customers to address their requirements and guarantee reliable after-sales support for all installations.
              </p>
            </div>
            
            <div className="space-y-6 animate-fadeInRight">
              {[
                { title: 'Continuous Improvement', desc: 'We will continue improving our products, quality, and specifications of the products to provide the best forming solutions to all clients.' },
                { title: 'Customer-First Support', desc: 'With an excellent after-sales support team, we resolve technical queries quickly and assist clients in selecting the best tooling matches.' },
                { title: 'Technical Rigidity', desc: 'Every frame structure is tensile and ultrasonically tested to ensure maximum durability, low maintenance, and deflection resistance.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-700 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-montserrat text-primary-700 mb-2">{item.title}</h4>
                    <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;