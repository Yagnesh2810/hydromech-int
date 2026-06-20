'use client';

import React, { useState } from 'react';
import ProductImageGallery from '../components/ProductImageGallery';

const BusbarProcessing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3in1' | 'single'>('3in1');

  const mainModels = [
    {
      model: 'HMB-303 / HMB-303M',
      title: 'Hydraulic Busbar Processing Machine (3-in-1 Manual)',
      image: '/images/busbar_3in1.jpg',
      specs: {
        punching: 'Copper: ø18 x 16T | Aluminum: ø20 x 16T',
        bending: 'Copper: 12T x W200mm | Aluminum: 16T x W200mm',
        shearing: 'Copper: 12T x W200mm | Aluminum: 16T x W200mm',
        stroke: 'Punching: 60mm | Bending: 60mm | Shearing: 40mm',
        motor: '5 HP',
        capacity: 'Max 16T x W200 (Punching/Bending), Max 12T x W200 (Cutting)'
      },
      features: [
        'Squaring arm for shearing and bending station.',
        'Fine Stroke Manual adjustment for bending station.',
        'Manual Gauge Stopper for punching station with faster working speed.'
      ],
      description: 'Designed to give effective solutions for Punching, Bending and Cutting of Bus Bars. Easy to adjust each unit to shorten setup time and improve production efficiency.'
    },
    {
      model: 'HMB-303NC',
      title: 'NC Controlled Hydraulic Busbar Processing Machine',
      image: '/images/busbar_3in1.jpg',
      specs: {
        punching: 'Copper: ø20 x 16T | Aluminum: ø20 x 16T',
        bending: 'Copper: 16T x W200mm | Aluminum: 16T x W200mm',
        shearing: 'Copper: 16T x W200mm | Aluminum: 16T x W200mm',
        stroke: 'Punching: 60mm | Bending: 80mm | Shearing: 80mm',
        motor: '5 HP',
        capacity: 'Max 16T x W200'
      },
      features: [
        'Fine Adjusting Squaring arm for Bending & Shearing Station.',
        'Vertical axis adjustment based on Bus bar size (width).',
        'Bending angle is numerically controlled by Digital input unit (NC).'
      ],
      description: 'High-end series featuring digital angle control. Ideal for manufacturing plants requiring high precision and quick repeat bends.'
    }
  ];

  const singleModels = [
    {
      model: 'HM-BM20',
      title: 'Compact Hydraulic Busbar Bending Machine',
      image: '/images/busbar_single_bending.jpg',
      specs: {
        capacity: 'Copper: 10T x W200mm | Aluminum: 14T x W200mm',
        cylinderStroke: '80mm',
        motor: '2 HP',
        dimensions: 'Lightweight & Portable'
      },
      features: [
        'Stroke control on punch movement for pre-set degree of bend.',
        'Compact and light weight with low maintenance requirements.',
        'Speedy, accurate bends and inexpensive tooling.'
      ],
      description: 'This is a compact and portable Bus Bar Bending machine designed for user-friendly operation with better controls.'
    },
    {
      model: 'HM-PM20',
      title: 'Compact Hydraulic Busbar Punching Machine',
      image: '/images/busbar_single_punching.jpg',
      specs: {
        capacity: 'Copper: Ø14 x 12T | Aluminum: Ø16 x 14T (Max 16T x ø16)',
        cylinderStroke: '60mm',
        motor: '2 HP',
        dimensions: 'Lightweight & Portable'
      },
      features: [
        'Manual gauge bar stoppers for precise positioning.',
        'Speedy and accurate punch execution.',
        'Compact footprint for workshop or site operation.'
      ],
      description: 'A compact and portable Bus Bar Punching machine designed for user-friendly operation with better controls.'
    }
  ];

  const stationImages = [
    { src: '/images/busbar_3in1.jpg', label: '3-in-1 Combined System' },
    { src: '/images/busbar_bending_station.jpg', label: 'Bending Station Close-up' },
    { src: '/images/busbar_punching_station.jpg', label: 'Punching Station Close-up' },
    { src: '/images/busbar_shearing_station.jpg', label: 'Shearing Station Close-up' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-steel-100/10 text-steel-200 border border-steel-200/20 rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">
            Forming & Cutting Precision
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">
            Hydraulic Busbar Processing Machines
          </h1>
          <p className="text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            Ultimate 3-in-1 combined and portable machines for punching, bending, and shearing of copper and aluminum busbars.
          </p>
        </div>
      </div>

      <div className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-montserrat text-primary-700 text-center mb-8">Product Media & Gallery</h2>
            <ProductImageGallery 
              images={stationImages.map(img => img.src)} 
              productName="Hydraulic Busbar Processing Machine Stations" 
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {stationImages.map((station, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-steel-200 text-center shadow-sm">
                  <p className="text-xs font-semibold text-primary-700 uppercase tracking-wider">{station.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-steel-200 rounded-lg">
              <button
                onClick={() => setActiveTab('3in1')}
                className={`px-6 py-2.5 rounded-md font-semibold transition-all ${
                  activeTab === '3in1' 
                    ? 'bg-primary-700 text-white shadow-md' 
                    : 'text-primary-700 hover:text-primary-900'
                }`}
              >
                3-in-1 Integrated Machines
              </button>
              <button
                onClick={() => setActiveTab('single')}
                className={`px-6 py-2.5 rounded-md font-semibold transition-all ${
                  activeTab === 'single' 
                    ? 'bg-primary-700 text-white shadow-md' 
                    : 'text-primary-700 hover:text-primary-900'
                }`}
              >
                Single Station Portable Machines
              </button>
            </div>
          </div>

          {/* Models Showcase */}
          <div className="space-y-12">
            {(activeTab === '3in1' ? mainModels : singleModels).map((machine, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg border border-steel-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="lg:col-span-5 bg-steel-100 flex items-center justify-center p-8 relative">
                  <img 
                    src={machine.image} 
                    alt={machine.model} 
                    className="max-h-72 object-contain hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/logo.png';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">Model {machine.model}</span>
                        <h3 className="text-2xl font-bold font-montserrat text-primary-700 mt-1">{machine.title}</h3>
                      </div>
                      <span className="px-3 py-1 bg-steel-100 text-primary-700 text-xs font-bold rounded-full border border-steel-200">
                        {machine.specs.motor || '2 HP'} Motor
                      </span>
                    </div>

                    <p className="text-steel-400 text-sm mb-6 leading-relaxed">{machine.description}</p>

                    {/* Features list */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-primary-700 uppercase tracking-widest mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {machine.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-steel-400">
                            <span className="text-primary-500 mr-2">✔</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specifications Table */}
                  <div className="border-t border-steel-200 pt-6">
                    <h4 className="text-xs font-bold text-primary-700 uppercase tracking-widest mb-3">Technical Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {Object.entries(machine.specs).map(([key, val], idx) => (
                        <div key={idx} className="flex justify-between py-1.5 border-b border-steel-100">
                          <span className="text-steel-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-semibold text-primary-700">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <a 
                        href={`https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20a%20quote%20for%20Busbar%20Machine%20Model%20${machine.model}.%20Please%20send%20specifications%20and%20pricing.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex w-full md:w-auto items-center justify-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg shadow-md transition-colors"
                      >
                        Request Quote & Callback
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusbarProcessing;
