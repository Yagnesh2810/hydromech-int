'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Product {
  name: string;
  category: string;
  specs: { label: string; value: string }[];
  image: string;
  link: string;
  badge: string;
  details: string;
}

const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Busbar Processing', 'Clinching & Insertion', 'Bending & Rolling'];

  const featuredProducts: Product[] = [
    {
      name: 'Hydraulic Busbar Machine HMB-303',
      category: 'Busbar Processing',
      specs: [
        { label: 'Punching Force', value: '16 Tons' },
        { label: 'Bending Force', value: '16 Tons' },
        { label: 'Shearing Force', value: '12 Tons' },
        { label: 'Motor Power', value: '5 HP' }
      ],
      image: '/images/busbar_3in1.jpg',
      link: '/products/busbar',
      badge: 'Best Seller',
      details: 'Integrated 3-in-1 workstation allowing simultaneous punching, bending, and cutting operations with zero interference.'
    },
    {
      name: 'Hydraulic Clinching Machine HM-640',
      category: 'Clinching & Insertion',
      specs: [
        { label: 'Insertion Force', value: '53 KN' },
        { label: 'Working Pressure', value: '0.5 - 4 Tons' },
        { label: 'Motor Power', value: '3 HP' },
        { label: 'Throat Depth', value: '450 mm' }
      ],
      image: '/images/clinching_machine.jpg',
      link: '/products/clinching',
      badge: 'High Precision',
      details: 'Deflection-free C-frame structure featuring positive stop system and state-of-the-art optical safety guards.'
    },
    {
      name: 'Section Bending Machine HM-SB50',
      category: 'Bending & Rolling',
      specs: [
        { label: 'Pipe Capacity', value: 'Ø50 x 3mm' },
        { label: 'Shaft Diameter', value: '50 mm' },
        { label: 'Motor Power', value: '3 HP' },
        { label: 'Bending Direction', value: 'Horiz & Vert' }
      ],
      image: '/images/section_bending_machine.jpg',
      link: '/products/bending-rolling',
      badge: 'Heavy Duty',
      details: 'Versatile profile bending machine with hardened standard rolls for pipes, flat bars, channels, and angles.'
    },
    {
      name: 'Electric Slip Rolling HM-SR312',
      category: 'Bending & Rolling',
      specs: [
        { label: 'Rolling Width', value: '1200 mm' },
        { label: 'Plate Capacity', value: '3.0 mm' },
        { label: 'Motor Power', value: '3 HP' },
        { label: 'Roll Diameter', value: 'Ø90 mm' }
      ],
      image: '/images/plate_rolling_machine.jpg',
      link: '/products/bending-rolling',
      badge: 'Popular',
      details: 'Asymmetrical three-roll slip bending machine with quick release top rollers for precision cylindrical forming.'
    }
  ];

  const filteredProducts = activeCategory === 'All'
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-slate-50 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-extrabold uppercase tracking-widest">
            Featured Machineries
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-primary-900 tracking-tight">
            Engineered For Industrial Performance
          </h2>
          <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
            Discover our high-precision forming and sheet metal processing equipment trusted by manufacturers across the country.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-700 text-white shadow-md shadow-primary-700/30'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden glow-border glow-shadow-hover border border-slate-200 flex flex-col xl:flex-row transition-all duration-300"
            >
              {/* Product Visual Frame */}
              <div className="xl:w-1/2 relative bg-slate-100/50 p-6 flex flex-col justify-between border-b xl:border-b-0 xl:border-r border-slate-200 min-h-[300px]">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary-700 text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                </div>

                <div className="my-auto flex items-center justify-center h-48 xl:h-full relative z-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo.png';
                    }}
                  />
                </div>
                
                {/* Product Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-800 border border-slate-200 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info & Specification Matrix */}
              <div className="xl:w-1/2 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold font-montserrat text-primary-900 leading-snug group-hover:text-primary-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 font-light leading-relaxed">
                    {product.details}
                  </p>
                </div>
                
                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {spec.label}
                      </span>
                      <span className="block text-xs font-bold text-slate-700">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Primary Actions */}
                <div className="flex gap-3 pt-2">
                  <Link 
                    href={product.link}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-primary-800 text-center py-3.5 px-3 rounded-xl transition-all duration-200 font-bold text-xs uppercase tracking-wider border border-slate-200"
                  >
                    Specifications
                  </Link>
                  <a 
                    href={`https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20need%20a%20quote%20for%20the%20${product.name}.%20Please%20provide%20pricing%20and%20delivery%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-700 text-white text-center py-3.5 px-3 rounded-xl hover:bg-primary-600 transition-all duration-200 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg shadow-primary-700/10"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Panel */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-12 -mr-12 w-48 h-48 bg-primary-100/30 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-600">Tailored Projects</span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-montserrat text-primary-900">
                Need A Custom Forming Solution?
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Our in-house engineering team designs and manufactures bespoke hydraulic machinery, custom bending profiles, and precision tools mapped directly to your manufacturing drafting requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto justify-center">
              <a 
                href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20need%20expert%20guidance%20for%20selecting%20forming%20machinery%20for%20my%20plant.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-700 text-white font-bold rounded-xl hover:bg-primary-650 transition-colors text-xs uppercase tracking-wider shadow-md"
              >
                Inquire Design
              </a>
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-355 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs uppercase tracking-wider"
              >
                Contact Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;