import React from 'react';
import ProductImageGallery from '../components/ProductImageGallery';

const ClinchingMachinery: React.FC = () => {
  const specs = {
    'Drive Model': 'Hydraulic',
    'Hydraulic Force': '53 KN',
    'Output Pressure Range': '0.5 - 4 Tons',
    'Throat Depth': '450 mm (C-frame) / 400 mm (Standard)',
    'Clinching/Insertion Capacity': 'Up to 6mm Nut (Below M8 of steel)',
    'Motor Power': '3 HP',
    'Holding Time': '1 - 5 Seconds',
    'Open Height': '250 mm',
    'Anti-Rotation Design': 'Yes (Standard)',
    'Force Repeatability': '±2% (Energy efficient hydraulic system)',
    'Die Dimensions (L x W x H)': '950mm x 950mm x 2000mm',
    'Safety Protection System': 'Positive Stop Function & Guarding System'
  };

  const keyFeatures = [
    {
      title: 'IS: 2062 Grade Steel Frame',
      description: 'Ultrasonically and tensile tested C-Frame steel structure ensures high rigidity and completely avoids deflection under heavy force loads.'
    },
    {
      title: 'Precision Force Repeatability',
      description: 'Energy efficient hydraulic design guarantees highly repeatable force matching (within ±2%) for consistent fastener insertion quality.'
    },
    {
      title: 'Integrated Safety Features',
      description: 'Equipped with a positive mechanical stop function and safety protection shield to safeguard operators during fast-paced production cycles.'
    },
    {
      title: 'Multi-Fastener Capacity',
      description: 'Robust force capability allows inserting studs, standoffs, nuts, and other fasteners below M8 of steel sheet materials.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-steel-100/10 text-steel-200 border border-steel-200/20 rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">
            Fastener Insertion Technology
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">
            Hydraulic Clinching Machines
          </h1>
          <p className="text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            Model HM-640: The ultimate solution for high-rigidity, deflection-free, and energy-efficient fastener insertion in sheet metals.
          </p>
        </div>
      </div>

      <div className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Main Showcase */}
          <div className="bg-white rounded-xl shadow-lg border border-steel-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16">
            {/* Gallery / Image Column */}
            <div className="lg:col-span-6 p-8 bg-steel-100 flex flex-col justify-center">
              <ProductImageGallery 
                images={['/images/clinching_machine.jpg', '/images/clinching_station.jpg']} 
                productName="Hydraulic Clinching Machine HM-640" 
              />
              <div className="mt-4 text-center text-xs text-steel-400 font-semibold uppercase tracking-wider">
                Model HM-640 Clinching Machine & Work Station
              </div>
            </div>

            {/* Product Details Column */}
            <div className="lg:col-span-6 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">Model: HM-640</span>
                <h2 className="text-3xl font-bold font-montserrat text-primary-700 mt-1 mb-4">
                  Hydraulic Fastener Insertion Machine
                </h2>
                <p className="text-steel-400 text-sm leading-relaxed mb-6">
                  Engineered with an ultrasonically and tensile tested C-Frame structure to guarantee minimal deflection. The highly efficient hydraulic system ensures precise and repeatable force delivery, perfect for self-clinching fasteners like nuts, studs, and standoffs up to M8 sizes.
                </p>

                {/* Key specs inline list */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-steel-50 p-4 rounded-lg border border-steel-200">
                    <span className="text-xs text-steel-400 uppercase tracking-wider block">Max Capacity</span>
                    <span className="text-lg font-bold text-primary-700">6mm Nut / Stud</span>
                  </div>
                  <div className="bg-steel-50 p-4 rounded-lg border border-steel-200">
                    <span className="text-xs text-steel-400 uppercase tracking-wider block">Output Force</span>
                    <span className="text-lg font-bold text-primary-700">53 KN (0.5 - 4T)</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Button */}
              <div className="mt-4">
                <a 
                  href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20a%20quote%20for%20the%20Hydraulic%20Clinching%20Machine%20HM-640.%20Please%20provide%20pricing%20and%20specifications."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center block px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg shadow-md transition-colors"
                >
                  Request Brochure & Quote via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-montserrat text-primary-700 text-center mb-8">Design & Construction Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-primary-500 font-bold mr-2 text-lg">✦</span>
                  <h4 className="inline-block text-lg font-bold text-primary-700 mb-2 font-montserrat">{feat.title}</h4>
                  <p className="text-steel-400 text-sm mt-2 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="bg-white rounded-xl shadow-md border border-steel-200 p-8">
            <h3 className="text-2xl font-bold font-montserrat text-primary-700 mb-6 text-center">HM-640 Technical Specifications</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-steel-100 text-primary-700 font-semibold uppercase tracking-wider text-xs border-b border-steel-200">
                    <th className="py-3 px-6 text-left">Parameter</th>
                    <th className="py-3 px-6 text-left">Specification Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-100">
                  {Object.entries(specs).map(([key, val], idx) => (
                    <tr key={idx} className="hover:bg-steel-50/50 transition-colors">
                      <td className="py-3.5 px-6 font-medium text-steel-400">{key}</td>
                      <td className="py-3.5 px-6 font-semibold text-primary-700">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClinchingMachinery;
