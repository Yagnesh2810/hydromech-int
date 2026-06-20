'use client';

import React from 'react';

const TeamSection: React.FC = () => {
  const team = [
    { 
      name: 'Development Team', 
      role: 'Software Engineers & Architects', 
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop&crop=face'
    },
    { 
      name: 'Security Specialists', 
      role: 'Cybersecurity & Compliance', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face'
    },
    { 
      name: 'Cloud Engineers', 
      role: 'Infrastructure & DevOps', 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
    },
    { 
      name: 'Project Managers', 
      role: 'Client Relations & Delivery', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h6 className="text-sky-400 font-semibold mb-4 animate-fadeInRight">Our Team</h6>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fadeInRight">
              Continuous Learning & Collaborative Approach
            </h2>
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              Technology changes rapidly. Our team stays current through ongoing training, professional development, and practical experience with new technologies as they become relevant to client needs. We work as integrated teams where developers, system administrators, and security specialists collaborate from the beginning of each project.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors">
              Discover more
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-150${7 + index}003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face`;
                  }}
                />
                
                {/* Social Media Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-violet-400 transition-colors transform hover:scale-110"
                      >
                        <span className="text-xs">📱</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;