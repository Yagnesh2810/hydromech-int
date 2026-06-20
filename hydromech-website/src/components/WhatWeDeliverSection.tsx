import React from 'react';

const WhatWeDeliverSection: React.FC = () => {
  const deliverables = [
    {
      title: 'Product Sourcing Solutions',
      description: 'Reliable suppliers and quality products sourced globally',
      icon: '🔍'
    },
    {
      title: 'Export Documentation',
      description: 'Complete paperwork and customs clearance services',
      icon: '📋'
    },
    {
      title: 'Logistics Coordination',
      description: 'End-to-end shipping and delivery management',
      icon: '🚢'
    },
    {
      title: 'Trade Finance Support',
      description: 'Payment solutions and financial risk management',
      icon: '💳'
    },
    {
      title: 'Compliance Assurance',
      description: 'Every shipment designed with regulatory compliance',
      icon: '✅'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Deliver
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We analyze your specific trade requirements, recommend the best market approach, and deliver solutions 
            that work reliably in global markets. No unnecessary complexity, no overselling services you don't need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;