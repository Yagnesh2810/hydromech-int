import React from 'react';

const OtherProducts: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-steel-100/10 text-steel-200 border border-steel-200/20 rounded-full text-sm font-semibold mb-4 tracking-wider uppercase">
            Custom Industrial Presses & Tooling
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">
            Industrial Presses & CNC Tooling
          </h1>
          <p className="text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            Hydraulic C-Frame and H-Frame presses engineered to specification, alongside premium CNC press brake tooling.
          </p>
        </div>
      </div>

      <div className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* C-Frame / H-Frame Card */}
            <div className="bg-white rounded-xl shadow-lg border border-steel-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all">
              <div className="p-8">
                <span className="text-xs font-bold text-primary-700 uppercase tracking-widest block mb-2">Hydraulic Presses</span>
                <h3 className="text-2xl font-bold font-montserrat text-primary-700 mb-4">C-Frame & H-Frame Press Machines</h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-6">
                  Our custom-built H-Frame and C-Frame hydraulic presses are engineered for heavy-duty metal stampings, assembly, deep-draw forming, bending, and punching operations. We design and manufacture presses with customized bed size, stroke length, throat depth, and daylight capacity.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-primary-700 uppercase tracking-wider">Capabilities & Range:</h4>
                  <ul className="text-xs text-steel-400 space-y-2">
                    <li>• <strong className="text-primary-700">Capacity Range:</strong> 10 Tons to 500 Tons</li>
                    <li>• <strong className="text-primary-700">Frames:</strong> High-tensile steel welded structures, stress-relieved</li>
                    <li>• <strong className="text-primary-700">Safety Features:</strong> Dual-hand operation buttons, photo-electric light guards, and emergency interlocks</li>
                    <li>• <strong className="text-primary-700">Controls:</strong> PLC-controlled parameters for stroke speed, dwell time, and pressure</li>
                  </ul>
                </div>
              </div>
              <div className="p-8 border-t border-steel-100 bg-steel-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary-700">10T to 500T Custom Range</span>
                <a 
                  href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20your%20Custom%20Hydraulic%20C-Frame/H-Frame%20Presses.%20Please%20provide%20more%20details."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-700 hover:bg-primary-800 text-white text-xs font-bold rounded shadow transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>

            {/* CNC Press Brake Tooling Card */}
            <div className="bg-white rounded-xl shadow-lg border border-steel-200 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all">
              <div className="p-8">
                <span className="text-xs font-bold text-primary-700 uppercase tracking-widest block mb-2">Precision Tooling</span>
                <h3 className="text-2xl font-bold font-montserrat text-primary-700 mb-4">CNC Press Brake Tools</h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-6">
                  We specialize in developing and manufacturing high-precision press brake tools for all sheet metal forming demands. All tools are made from high-grade alloy steel, hardened and precision-ground to guarantee perfect linearity and maximum service life.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-primary-700 uppercase tracking-wider">Tooling Solutions:</h4>
                  <ul className="text-xs text-steel-400 space-y-2">
                    <li>• <strong className="text-primary-700">Punches:</strong> Gooseneck, straight, acute angle, sash punches</li>
                    <li>• <strong className="text-primary-700">Dies:</strong> Single V-dies, Multi-V blocks, self-centering dies, hemming tables</li>
                    <li>• <strong className="text-primary-700">Material Grade:</strong> 42CrMo / T8 / T10, induction hardened (47±2 HRC)</li>
                    <li>• <strong className="text-primary-700">Customization:</strong> Modification to fit Amada, Trumpf, LVD, and European style clamping</li>
                  </ul>
                </div>
              </div>
              <div className="p-8 border-t border-steel-100 bg-steel-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary-700">Standard & Custom Profiles</span>
                <a 
                  href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20your%20CNC%20Press%20Brake%20Tooling.%20Please%20provide%20more%20information."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-700 hover:bg-primary-800 text-white text-xs font-bold rounded shadow transition-colors"
                >
                  Request Catalog
                </a>
              </div>
            </div>
          </div>

          {/* Quality Highlight */}
          <div className="bg-primary-900 text-white rounded-xl p-8 md:p-12 border border-steel-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Uncompromising Quality & Engineering Precision</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Whether you need a custom-stroke hydraulic press or custom-designed press brake dies for specialized bends, our engineering team works directly with your drawings to deliver the exact specifications needed for your production. Contact us today with your requirements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
