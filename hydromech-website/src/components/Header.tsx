'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Main Header */}
      <div className="py-4 border-b border-steel-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/logo.png"
                  alt="ETHICS Metal Forming Machineries India" 
                  className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-primary-700 font-medium py-2 border-b-2 border-transparent hover:border-primary-700 transition-colors">Home</Link>
                <Link href="/about-us" className="text-gray-700 hover:text-primary-700 font-medium py-2 border-b-2 border-transparent hover:border-primary-700 transition-colors">About Us</Link>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-primary-700 font-medium py-2 border-b-2 border-transparent hover:border-primary-700 transition-colors flex items-center">
                    Products
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-steel-100">
                    <div className="py-2">
                      <Link href="/products/busbar" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-steel-50 hover:text-primary-700 transition-colors font-medium">
                        Hydraulic Busbar Processing
                      </Link>
                      <Link href="/products/clinching" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-steel-50 hover:text-primary-700 transition-colors font-medium">
                        Hydraulic Clinching Machines
                      </Link>
                      <Link href="/products/bending-rolling" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-steel-50 hover:text-primary-700 transition-colors font-medium">
                        Section Bending & Slip Rolling
                      </Link>
                      <Link href="/products/other" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-steel-50 hover:text-primary-700 transition-colors font-medium">
                        C-Frame, H-Frame & Tools
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/why-choose-us" 
                  className="text-gray-700 hover:text-primary-700 font-medium py-2 border-b-2 border-transparent hover:border-primary-700 transition-colors"
                >
                  Why Choose Us
                </Link>

                <Link href="/contact-us" className="text-gray-700 hover:text-primary-700 font-medium py-2 border-b-2 border-transparent hover:border-primary-700 transition-colors">Contact Us</Link>
              </nav>

              {/* Search/WhatsApp Button */}
              <button 
                onClick={() => window.open('https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20am%20interested%20in%20your%20industrial%20machines.%20Can%20you%20please%20share%20details?', '_blank')}
                className="p-2 text-gray-600 hover:text-primary-700 transition-colors"
                title="Inquire via WhatsApp"
              >
                <svg className="w-6 h-6 text-green-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.592-1.01-5.031-2.846-6.87C16.398 2.1 13.962 1.096 11.397 1.096c-5.405 0-9.81 4.403-9.813 9.807-.001 1.547.387 3.053 1.127 4.387l-1.074 3.92 4.02-1.054zm11.315-6.804c-.301-.15-1.782-.88-2.056-.98-.275-.1-.475-.15-.674.15-.199.3-.775.98-.949 1.18-.175.2-.349.224-.65.074-.3-.15-1.267-.467-2.414-1.493-.893-.797-1.496-1.78-1.672-2.08-.175-.3-.019-.463.131-.612.134-.134.3-.349.449-.523.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.674-1.62-.924-2.225-.244-.589-.492-.51-.674-.519-.172-.008-.371-.01-.57-.01-.2 0-.524.075-.798.374-.275.3-1.047 1.022-1.047 2.493 0 1.47 1.072 2.892 1.222 3.092.15.2 2.11 3.22 5.11 4.515.714.308 1.272.492 1.707.63.717.228 1.369.196 1.885.119.575-.085 1.782-.73 2.03-1.433.249-.704.249-1.307.175-1.433-.075-.125-.275-.199-.575-.349z"/>
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white shadow-lg rounded-md border border-steel-100">
              <div className="py-2">
                <Link href="/" className="block px-4 py-2.5 text-gray-700 hover:bg-steel-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/about-us" className="block px-4 py-2.5 text-gray-700 hover:bg-steel-50" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link href="/products/busbar" className="block px-4 py-2 text-gray-700 hover:bg-steel-50 pl-8" onClick={() => setIsMenuOpen(false)}>Hydraulic Busbar Processing</Link>
                <Link href="/products/clinching" className="block px-4 py-2 text-gray-700 hover:bg-steel-50 pl-8" onClick={() => setIsMenuOpen(false)}>Hydraulic Clinching Machines</Link>
                <Link href="/products/bending-rolling" className="block px-4 py-2 text-gray-700 hover:bg-steel-50 pl-8" onClick={() => setIsMenuOpen(false)}>Section Bending & Slip Rolling</Link>
                <Link href="/products/other" className="block px-4 py-2 text-gray-700 hover:bg-steel-50 pl-8" onClick={() => setIsMenuOpen(false)}>C-Frame, H-Frame & Tools</Link>
                <Link 
                  href="/why-choose-us" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2.5 text-gray-700 hover:bg-steel-50 font-medium"
                >
                  Why Choose Us
                </Link>
                <Link href="/contact-us" className="block px-4 py-2.5 text-gray-700 hover:bg-steel-50" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;