'use client';

import React, { useState } from 'react';
import ProductImageGallery from '../components/ProductImageGallery';

const BendingRolling: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'section' | 'slip'>('section');

  const sectionModels = [
    {
      model: 'HM-SB50',
      specs: {
        squarePipe: '60 x 40 x 3mm',
        rectangularPipe: '60 x 40 x 3mm',
        angle: '50 x 5mm',
        flatBar: '50 x 10mm',
        roundPipe: 'Ø50 x 3mm',
        squareProfile: '50 x 50 x 3mm',
        motorPower: '3 HP'
      }
    },
    {
      model: 'HM-SB50H (Hydraulic Upper Roll)',
      specs: {
        squarePipe: '60 x 40 x 3mm',
        rectangularPipe: '60 x 40 x 3mm',
        angle: '50 x 5mm',
        flatBar: '50 x 10mm',
        roundPipe: 'Ø50 x 3mm',
        squareProfile: '50 x 50 x 3mm',
        motorPower: '3 HP & 1 HP'
      }
    },
    {
      model: 'HM-SB75 (Heavy Duty)',
      specs: {
        squarePipe: '80 x 60 x 5mm',
        rectangularPipe: '80 x 60 x 5mm (estimated)',
        angle: '50 x 6mm',
        flatBar: '60 x 10mm',
        roundPipe: 'Ø75 x 5mm',
        squareProfile: '75 x 75 x 5mm',
        motorPower: '5 HP & 1 HP'
      }
    }
  ];

  const slipModels = [
    {
      model: 'HM-SR212',
      maxThickness: '2 mm',
      maxWidth: '1200 mm',
      rollDiameter: '90 mm',
      minRollingDiameter: '110 mm',
      motor: '2 HP'
    },
    {
      model: 'HM-SR312',
      maxThickness: '3 mm',
      maxWidth: '1200 mm',
      rollDiameter: '100 mm',
      minRollingDiameter: '120 mm',
      motor: '3 HP'
    },
    {
      model: 'HM-SR315',
      maxThickness: '3 mm',
      maxWidth: '1500 mm',
      rollDiameter: '115 mm',
      minRollingDiameter: '145 mm',
      motor: '3 HP'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-steel-100/10 text-steel-200 border border-steel-200/20 rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">
            Heavy Forming Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">
            Bending & Slip Rolling Machines
          </h1>
          <p className="text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            From profiles to plates — precision-designed section bending and asymmetrical plate slip rolling machineries.
          </p>
        </div>
      </div>

      <div className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-steel-200 rounded-lg">
              <button
                onClick={() => setActiveTab('section')}
                className={`px-6 py-2.5 rounded-md font-semibold transition-all ${
                  activeTab === 'section' 
                    ? 'bg-primary-700 text-white shadow-md' 
                    : 'text-primary-700 hover:text-primary-900'
                }`}
              >
                Hydraulic Section Bending
              </button>
              <button
                onClick={() => setActiveTab('slip')}
                className={`px-6 py-2.5 rounded-md font-semibold transition-all ${
                  activeTab === 'slip' 
                    ? 'bg-primary-700 text-white shadow-md' 
                    : 'text-primary-700 hover:text-primary-900'
                }`}
              >
                Electric Slip Rolling
              </button>
            </div>
          </div>

          {activeTab === 'section' ? (
            <div>
              {/* Section Bending Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
                <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-steel-200 shadow-sm">
                  <ProductImageGallery 
                    images={['/images/section_bending_machine.jpg']} 
                    productName="Hydraulic Section Bending Machine" 
                  />
                  <div className="mt-4 border-t border-steel-100 pt-4">
                    <h4 className="font-bold text-primary-700 mb-2 font-montserrat">Key Design Features:</h4>
                    <ul className="text-xs text-steel-400 space-y-2">
                      <li>• Horizontal and Vertical operation (For HV Series)</li>
                      <li>• Hardened rolls for standard profiles (angle, flat, pipe)</li>
                      <li>• Shafts runs in high-precision roller bearings</li>
                      <li>• Welded steel construction for structural rigidness</li>
                      <li>• Foot switch control with reverse/forward starter</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white p-8 rounded-xl border border-steel-200 shadow-sm">
                    <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">HV Series</span>
                    <h2 className="text-3xl font-bold font-montserrat text-primary-700 mt-1 mb-4">Hydraulic Section Bending Machine</h2>
                    <p className="text-steel-400 text-sm leading-relaxed mb-6">
                      Engineered to bend standard profiles including round pipes, square pipes, angle bars, flat bars, and structural shapes. Suitable for medium to heavy fabrication projects, allowing both vertical and horizontal operations.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="bg-steel-100 text-primary-700 font-bold uppercase tracking-wider border-b border-steel-200">
                            <th className="py-2.5 px-4">Profile Type</th>
                            <th className="py-2.5 px-4">HM-SB50 / 50H Cap</th>
                            <th className="py-2.5 px-4">HM-SB75 Cap</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-steel-100 text-steel-400">
                          <tr>
                            <td className="py-3 px-4 font-semibold text-primary-700">Square Pipe</td>
                            <td className="py-3 px-4">60 x 40 x 3 mm</td>
                            <td className="py-3 px-4">80 x 60 x 5 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-primary-700">Rectangular Pipe</td>
                            <td className="py-3 px-4">60 x 40 x 3 mm</td>
                            <td className="py-3 px-4">80 x 60 x 5 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-primary-700">Angle Iron</td>
                            <td className="py-3 px-4">50 x 5 mm</td>
                            <td className="py-3 px-4">50 x 6 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-primary-700">Flat Bar</td>
                            <td className="py-3 px-4">50 x 10 mm</td>
                            <td className="py-3 px-4">60 x 10 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-primary-700">Round Pipe</td>
                            <td className="py-3 px-4">Ø50 x 3 mm</td>
                            <td className="py-3 px-4">Ø75 x 5 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-primary-700">Motor Power</td>
                            <td className="py-3 px-4">3 HP (50) | 3+1 HP (50H)</td>
                            <td className="py-3 px-4">5 HP & 1 HP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-8">
                      <a 
                        href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20a%20quote%20for%20a%20Section%20Bending%20Machine.%20Please%20send%20details."
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg shadow-md transition-colors"
                      >
                        Inquire Section Bending Models
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Slip Rolling Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
                <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-steel-200 shadow-sm">
                  <ProductImageGallery 
                    images={['/images/plate_rolling_machine.jpg']} 
                    productName="Electric Slip Rolling Machine" 
                  />
                  <div className="mt-4 border-t border-steel-100 pt-4">
                    <h4 className="font-bold text-primary-700 mb-2 font-montserrat">Key Design Features:</h4>
                    <ul className="text-xs text-steel-400 space-y-2">
                      <li>• Asymmetrical roll design with 3 rolls</li>
                      <li>• High-strength steel rolls, ground and hardened</li>
                      <li>• Worm gear and motor for reliable pre-bending</li>
                      <li>• Quick-release top roller for fast workpiece discharge</li>
                      <li>• Adjustable lower and rear rollers</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white p-8 rounded-xl border border-steel-200 shadow-sm">
                    <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">Slip Roll Series</span>
                    <h2 className="text-3xl font-bold font-montserrat text-primary-700 mt-1 mb-4">Electric Slip Rolling Machine</h2>
                    <p className="text-steel-400 text-sm leading-relaxed mb-6">
                      Specifically designed for thin sheet metal rolling. The motor-driven asymmetrical system allows quick pre-bending and rolling of cylindrical parts. The top roller features a quick-release mechanism to lift and pull out finished workpieces easily.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="bg-steel-100 text-primary-700 font-bold uppercase tracking-wider border-b border-steel-200">
                            <th className="py-2.5 px-4">Model</th>
                            <th className="py-2.5 px-4">Max Width</th>
                            <th className="py-2.5 px-4">Max Thickness</th>
                            <th className="py-2.5 px-4">Roll Dia</th>
                            <th className="py-2.5 px-4">Min Roll Dia</th>
                            <th className="py-2.5 px-4">Motor</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-steel-100 text-steel-400">
                          {slipModels.map((row, idx) => (
                            <tr key={idx} className="hover:bg-steel-50/50">
                              <td className="py-3 px-4 font-semibold text-primary-700">{row.model}</td>
                              <td className="py-3 px-4">{row.maxWidth}</td>
                              <td className="py-3 px-4 text-primary-500 font-bold">{row.maxThickness}</td>
                              <td className="py-3 px-4">{row.rollDiameter}</td>
                              <td className="py-3 px-4">{row.minRollingDiameter}</td>
                              <td className="py-3 px-4 font-medium">{row.motor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-8">
                      <a 
                        href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20a%20quote%20for%20an%20Electric%20Slip%20Rolling%20Machine.%20Please%20send%20specifications."
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg shadow-md transition-colors"
                      >
                        Inquire Slip Rolling Models
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BendingRolling;
