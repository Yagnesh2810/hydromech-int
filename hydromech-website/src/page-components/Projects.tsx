'use client';

import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Integrated Busbar Processing Line Setup',
      desc: 'Commissioned a multi-station numeric-control HMB-303NC integrated busbar line at a leading switchgear fabrication plant in Chennai.',
      image: '/images/busbar_3in1.jpg',
      category: 'Electrical Switchgear'
    },
    {
      title: 'Zero-Deflection Heavy C-Frame Line',
      desc: 'Installed custom-engineered rigid C-frame hydraulic press lines with optoelectronic guards for high-stroke stamping operations in Bangalore.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Sheet Metal Pressing'
    },
    {
      title: 'Precision Section Bending Commission',
      desc: 'Delivered high-capacity asymmetrical slip rolling and profile bending machines for precision metal fabrication operations in Pune.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Metal Bending'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fadeInUp">Our Projects</h1>
          <p className="text-2xl text-primary-100 max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Successful Machinery Commissionings and Plant Setups Nationwide
          </p>
        </div>
      </div>

      {/* Projects Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInLeft">
              <h6 className="text-primary-600 font-semibold mb-4">Our Success Stories</h6>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We Commission Precision Forming Projects Across India</h2>
            </div>
            <div className="animate-fadeInUp">
              <p className="text-gray-600 text-lg mb-8 font-light">
                From specialized busbar processing units to automated heavy structural clinching set-ups, we design and deliver reliable, deflection-free forming machineries built for high efficiency.
              </p>
              <button 
                onClick={() => window.location.href = 'https://wa.me/919738371651?text=Hello%20ETHICS!%20I%2527m%20interested%20in%20viewing%20your%20completed%20machine%20installation%20sites.'}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors uppercase text-xs font-bold tracking-wider"
              >
                Inquire Project Sites
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-xs font-light leading-relaxed mb-4">{project.desc}</p>
                    <a 
                      href="https://wa.me/919738371651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-650 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors inline-block"
                    >
                      Inquire Specs
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">More Successful Commissions</h3>
              <p className="text-gray-600 max-w-2xl mx-auto font-light">
                Explore our engineering footprint across diverse sheet metal and structural fabrication factories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Hydraulic Clinching Integration',
                  desc: 'Supplied and integrated low-noise high-force clinching heads with custom-designed pneumatic powerpacks for cabinet manufacturing lines.',
                  image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                },
                {
                  title: 'Heavy Slip Rolling Machine Delivery',
                  desc: 'Manufactured and dispatched heavy-duty slip rolls designed for asymmetrical sheet rolling operations with high rigidity.',
                  image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/logo.png';
                        }}
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h4>
                      <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">{project.desc}</p>
                      <a 
                        href="https://wa.me/919738371651"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 font-bold hover:text-primary-800 transition-colors text-xs uppercase tracking-wider"
                      >
                        Request Quote →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Machinery Solution?</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto font-light">
              From switchgear cabinet layout designs to specialty tool dies, let our in-house engineers build a precise solution for your production floor.
            </p>
            <button 
              onClick={() => window.location.href = '/contact-us'}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase text-xs font-bold tracking-wider"
            >
              Get Custom Engineering Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;