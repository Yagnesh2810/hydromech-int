import React from 'react';

const ServicesSection: React.FC = () => {
  const productCategories = [
    { 
      title: 'TMT Bar Bending Machines', 
      desc: 'Professional rebar bending machines (GW-42, GW-42P, GW-52P) with precise control, 6-42mm capacity, and reliable performance for construction industry.',
      icon: '🔧',
      image: '/images/products/02. Construction Product Photos/01. GW42-32mm Bar Bending Machine.png',
      link: '/products/fabrication-construction',
      models: ['GW-42', 'GW-42P', 'GW-52P']
    },
    { 
      title: 'TMT Bar Cutting Machines', 
      desc: 'High-speed cutting machines (GQ-40, GQ-50, GQ-52) with phase loss preventer, 32 times/min cutting speed, and 6-40mm rebar capacity.',
      icon: '✂️',
      image: '/images/products/02. Construction Product Photos/04. GQ40-32mm Bar Cutting Machine.png',
      link: '/products/fabrication-construction',
      models: ['GQ-40', 'GQ-50', 'GQ-52']
    },
    { 
      title: 'Chaff Cutter Machines', 
      desc: 'Advanced agricultural chaff cutters (AI-3B, AI-4B, AI-4B1, AI-4B2) with 300-800 Kg/hr capacity, suitable for 2-15 animals, trusted by farmers worldwide.',
      icon: '🌾',
      image: '/images/products/03. Chaff Cutter Machine Photos/02. Model_AI – 4B.png',
      link: '/products/agriculture',
      models: ['AI-3B', 'AI-4B', 'AI-4B1', 'AI-4B2']
    },
    { 
      title: 'Ironworker Machines', 
      desc: 'Multi-function ironworker machines (AI-32-8B, AI-32-10B, AI-32-12B) for angle cutting, punching, notching with 360-900kN force capacity.',
      icon: '🏢',
      image: '/images/products/01. Fabrication Product Photos/01. Model_AI32-08B.png',
      link: '/products/fabrication-construction',
      models: ['AI-32-8B', 'AI-32-10B', 'AI-32-12B']
    },
    { 
      title: 'Specialized Machines', 
      desc: 'Ring making, spiral bending, scrap straightening and rebar threading machines for diverse construction and fabrication needs.',
      icon: '⚙️',
      image: '/images/products/02. Construction Product Photos/07. GF20 - 3P TMT Ring Making Machine.png',
      link: '/products/fabrication-construction',
      models: ['GF20-3P', 'GWH-10', 'GX6-14', 'CDRG-45']
    },
    { 
      title: 'Global Export & Support', 
      desc: 'Complete installation support, after-sales service, and global export to 50+ countries with 17+ years of experience and trusted partnerships.',
      icon: '🌍',
      image: '/images/products/02. Construction Product Photos/09. HCD110 Tamping Rammer.png',
      link: '/contact-us',
      models: ['Global Reach', 'Expert Support', 'Quality Assurance']
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary-600 font-semibold mb-4">Explore Our Products</h6>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            World-Class Agricultural & Industrial Machinery
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 animate-fadeInRight">
              Delivering excellence, innovation, and trusted solutions for agriculture, fabrication, and construction industries. Our comprehensive range of machinery empowers businesses worldwide with superior performance and reliability.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 text-3xl bg-white/90 p-2 rounded-lg">{product.icon}</div>
              </div>
              
              <div className="p-6">
                {/* Product Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{product.desc}</p>
                
                {/* Models */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.models.map((model, idx) => (
                      <span key={idx} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={product.link}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  <span>View Products</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;