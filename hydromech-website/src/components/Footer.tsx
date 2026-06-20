import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h5 className="text-xl font-semibold mb-6">Company</h5>
              <div className="w-12 h-1 bg-primary-500 mb-6"></div>
              <ul className="space-y-3">
                <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</Link></li>
                <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Details</Link></li>
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h5 className="text-xl font-semibold mb-6">Products</h5>
              <div className="w-12 h-1 bg-primary-500 mb-6"></div>
              <ul className="space-y-3">
                <li><Link href="/products/busbar" className="text-gray-400 hover:text-white transition-colors">Hydraulic Busbar Processing</Link></li>
                <li><Link href="/products/clinching" className="text-gray-400 hover:text-white transition-colors">Hydraulic Clinching Machines</Link></li>
                <li><Link href="/products/bending-rolling" className="text-gray-400 hover:text-white transition-colors">Section Bending Machines</Link></li>
                <li><Link href="/products/bending-rolling" className="text-gray-400 hover:text-white transition-colors">Slip Rolling Machines</Link></li>
                <li><Link href="/products/other" className="text-gray-400 hover:text-white transition-colors">C-Frame & H-Frame Press</Link></li>
                <li><Link href="/products/other" className="text-gray-400 hover:text-white transition-colors">CNC Press Brake Tools</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="mb-6 flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="ETHICS Logo" 
                  className="h-10 w-auto object-contain bg-white p-1 rounded"
                />
                <span className="text-xl font-bold text-white font-montserrat">ETHICS Metal Forming</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Engineering precision, industrial trust, and manufacturing strength. We specialize in durable, high-quality, and reliable metal forming machineries designed for sheet metal solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-400 text-sm">#10, 1st Main, 1st Cross, Doddanekundi Industrial Area, Opp to NGEF Ancillary, Mahadevapura Post, Bangalore - 560 048.</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400 text-sm">+91 973 837 1651</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400 text-sm">hydromechengineer@gmail.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-6">
                <h6 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Inquire Now</h6>
                <div className="flex flex-wrap gap-3">
                  <a href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20your%20machinery%20products.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-colors" title="WhatsApp">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                <div className="flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-wider font-semibold">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span>Engineering Grade</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-wider font-semibold">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>High Quality Materials</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-wider font-semibold">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>After-Sales Support</span>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                Copyright © 2026 ETHICS Metal Forming Machineries India, All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
