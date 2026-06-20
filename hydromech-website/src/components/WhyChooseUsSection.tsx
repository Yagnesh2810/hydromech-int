import React from 'react';
import Link from 'next/link';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Engineering Excellence',
      description: 'Devoted to developing and manufacturing high-quality machines and press brake tools for sheet metal solutions.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Deflection-Free Frame Design',
      description: 'Built with high-tensile IS:2062 Grade steel frames, ultrasonically and tensile tested to ensure optimal stability under heavy stress.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partner Relationships',
      description: 'We maintain frequent contact with customers to address their requirements and build long-term trust.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Deflection-Free Structuring',
      description: 'Our machinery design focuses on frame rigidity and hydraulic alignment to secure repeatable output over a lifetime.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Technical Customization',
      description: 'Equipped to tailor and design profile bending systems, custom tooling, and bespoke hydraulic press limits.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Complete Setup & Support',
      description: 'Excellent after-sales support ensuring prompt service response, machine setup assistance, and reliable tooling guidance.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-extrabold uppercase tracking-widest">
            Uncompromised Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-primary-900 tracking-tight">
            Why Manufacturers Choose <span className="gradient-text-blue">ETHICS</span>
          </h2>
          <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
            Every machine is built on principles of structural stability, reliability, and precision engineering.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-slate-200 glow-border glow-shadow-hover hover:border-primary-200 transition-all duration-300 space-y-4"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-primary-50 text-primary-700 border border-primary-100 rounded-2xl flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-montserrat text-primary-900">{feature.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-900 to-slate-900 rounded-3xl shadow-2xl p-8 md:p-14 text-center relative overflow-hidden border border-white/5">
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-800/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-extrabold font-montserrat text-white tracking-tight">
                Ready to Upgrade Your Production Line?
              </h3>
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                From switchgear fabrication shops to heavy industrial metal structures, let ETHICS empower your daily factory output with machines trusted for lifetime rigidity.
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
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;