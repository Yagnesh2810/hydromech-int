'use client';

import React from 'react';

const OurTeam: React.FC = () => {
  const team = [
    { 
      name: 'Rajesh Patel', 
      role: 'Managing Director & Founder', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading the company with over 20 years of experience in heavy machinery manufacturing, industrial hydraulics, and structural engineering.'
    },
    { 
      name: 'Amit Kumar', 
      role: 'Head of R&D Engineering', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Directing CAD/CAM structural modeling, deflection stress testing, and custom hydraulic circuit designs for zero-flex output.'
    },
    { 
      name: 'Suresh Rao', 
      role: 'Head of Production & QC', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Overseeing heavy plate fabrication, IS:2062 grade steel weld integrity, and strict ultrasonic alignment checks.'
    },
    { 
      name: 'Vikram Sharma', 
      role: 'Technical Service Lead', 
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Managing nationwide after-sales installation, preventative maintenance support, and hands-on client operator training.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fadeInUp">Our Team</h1>
          <p className="text-2xl text-primary-100 max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Precision Engineers & Machine Builders Dedicated to Structural Rigidity
          </p>
        </div>
      </div>

      {/* Team Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInRight">
              <h6 className="text-primary-600 font-semibold mb-4">Meet Our Leadership</h6>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Mechanical and Hydraulic Builders Committed to Excellence</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-8">
                Our team blends decades of mechanical engineering experience with modern structural analysis to manufacture high-capacity metal forming machineries. We ensure every hydraulic system, slip roller, and C-frame press meets heavy industrial compliance standards.
              </p>
              <button 
                onClick={() => window.location.href = '/contact-us'}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-bold text-sm uppercase tracking-wider"
              >
                Contact Our Engineers
              </button>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center space-x-3">
                      {[
                        { 
                          name: 'email', 
                          icon: (
                            <svg className="w-5 h-5 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )
                        },
                        { 
                          name: 'phone', 
                          icon: (
                            <svg className="w-5 h-5 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          )
                        }
                      ].map((contact) => (
                        <a
                          key={contact.name}
                          href="https://wa.me/919738371651"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-white hover:text-primary-600 shadow-md transition-all duration-200"
                          aria-label={contact.name}
                        >
                          {contact.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Values Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Engineering Values</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in structural rigidity, mechanical durability, and prompt after-sales field support to ensure maximum customer uptime.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Deflection-Free Design', 
                  desc: 'Ensuring structural integrity using ultrasonic-tested IS:2062 grade heavy plates.',
                  icon: (
                    <svg className="w-10 h-10 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                { 
                  title: 'Proven Repeatability', 
                  desc: 'High-precision hydraulic circuits ensuring consistent output force variations within ±2%.',
                  icon: (
                    <svg className="w-10 h-10 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  title: 'Operator Safety', 
                  desc: 'Integrating optoelectronic guards, physical side walls, and emergency kill switches.',
                  icon: (
                    <svg className="w-10 h-10 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team Section */}
          <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Manufacturing Unit</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              We are constantly seeking talented machinists, hydraulic technicians, and design engineers committed to engineering quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/careers'}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wider text-xs font-bold"
              >
                View Job Openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;