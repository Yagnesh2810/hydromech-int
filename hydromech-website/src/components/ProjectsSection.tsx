'use client';

import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Waste Heat Recovery',
      desc: 'In fusce dignissim ornare potenti conubia taciti dictum egestas ante at ut neque mattis',
      image: 'https://new.creativemox.com/oeelco/wp-content/uploads/sites/11/2025/07/petrochemical-complex.jpg'
    },
    {
      title: 'Crude Flexibility',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      image: 'https://new.creativemox.com/oeelco/wp-content/uploads/sites/11/2025/07/oil-refinery-factory-at-the-cloudy-sky-petrochemical-plant-petroleum.jpg'
    },
    {
      title: 'Unconventional Gas',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      image: 'https://new.creativemox.com/oeelco/wp-content/uploads/sites/11/2025/07/offshore-oil-rig-in-sea-against-sky.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h6 className="text-sky-400 font-semibold mb-4">Our Awesome Projects</h6>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fadeInLeft">
              We Take All Related Oil & Gas Projects
            </h2>
          </div>
          <div className="animate-fadeInUp">
            <p className="text-gray-600 mb-6">
              Interdum lobortis nascetur aliquet tristique montes nisl nec nullam diam taciti rutrum. Fermentum metus nibh aenean ad eros lobortis dictumst tempus letius luctus. Eget diam mauris vitae consectetuer letius magna dapibus ultricies vehicula lorem penatibus.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors">
              All Project
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-151${8 + index}709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <button className="inline-flex items-center px-4 py-2 bg-violet-400 text-white font-semibold rounded text-sm hover:bg-violet-500 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;