import React from 'react';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'CNC Machine Operator', department: 'Production', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'Hydraulic Design Engineer', department: 'R&D Engineering', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'Quality Assurance Inspector', department: 'Quality Control', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'Sales & Service Engineer', department: 'Customer Support', location: 'Bangalore, India', type: 'Full-time' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">Careers</h1>
          <p className="text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            Join our team and help build high-precision metal forming machineries
          </p>
        </div>
      </div>

      <div className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Why Work With Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold font-montserrat text-primary-700 mb-6">Why Choose ETHICS?</h2>
              <p className="text-steel-400 text-sm leading-relaxed mb-8 font-light">
                Join a dynamic engineering team that's building the future of sheet metal solutions. We offer exciting opportunities to develop cutting-edge hydraulic forming systems and work on custom manufacturing projects.
              </p>
              <ul className="space-y-4">
                {[
                  'Competitive salary and comprehensive benefits',
                  'International exposure and travel opportunities',
                  'Professional development and training programs',
                  'Work with cutting-edge trade technologies',
                  'Collaborative and diverse work environment',
                  'Career advancement opportunities'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fadeInRight">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Career opportunities"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Company Culture Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Company Culture</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We foster a hands-on environment where innovation, quality craftsmanship, and engineering safety are central to everything we build.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Engineering Innovation', 
                  desc: 'We design custom hydraulic components, deflection-free frame structures, and tooling dies to solve real manufacturing floor challenges.',
                  icon: (
                    <svg className="w-10 h-10 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                { 
                  title: 'Precision Craftsmanship', 
                  desc: 'Our machinists and welders align and fabricate frame elements to tolerances of fractions of a millimeter.',
                  icon: (
                    <svg className="w-10 h-10 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                { 
                  title: 'Technical Growth', 
                  desc: 'We support our teams with advanced training on CNC operations, hydraulic system assembly, and CAD engineering software.',
                  icon: (
                    <svg className="w-10 h-10 text-primary-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-650 text-sm font-light leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-light">
                Explore exciting engineering and technical career opportunities with the ETHICS family.
              </p>
            </div>
            
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 md:mb-0">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                        View Details
                      </button>
                      <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities that match your skills and interests in machinery manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Submit General Application
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;