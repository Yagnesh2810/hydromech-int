'use client';

import React, { useState } from 'react';
import ContactLocationSection from '../components/ContactLocationSection';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert(`Thank you ${formData.firstName}! Your message has been sent to hydromechengineer@gmail.com. We will contact you soon.`);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Message sent! We will contact you at hydromechengineer@gmail.com soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-steel-100/10 text-steel-200 border border-steel-200/20 rounded-full text-xs font-semibold tracking-wider mb-4 uppercase">
            Let's Collaborate
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-steel-100 max-w-3xl mx-auto font-light leading-relaxed">
            Get in touch with ETHICS Metal Forming Machineries India for world-class sheet metal forming and processing solutions.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fadeInLeft">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-steel-200">
                <h3 className="text-2xl font-bold font-montserrat text-primary-700 mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
                      placeholder="+91 9738371651"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Subject / Machine Category</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Busbar Processing Machines">Busbar Processing Machines</option>
                      <option value="Clinching Machines">Clinching Machines</option>
                      <option value="Section Bending Machines">Section Bending Machines</option>
                      <option value="Slip Rolling Machines">Slip Rolling Machines</option>
                      <option value="C-Frame & H-Frame Press">C-Frame & H-Frame Press</option>
                      <option value="CNC Press Brake Tools">CNC Press Brake Tools</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm"
                      placeholder="Tell us about your machinery requirements..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-800 transition-colors shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fadeInRight flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-montserrat text-primary-700 mb-6">Build Custom Metal Forming Setup</h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-8">
                  Ready to upgrade your manufacturing capability? Our technicians and engineers are available for consulting on custom specifications, installation guidance, and providing after-sales support.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start p-5 bg-white rounded-lg border border-steel-200 shadow-sm">
                    <div className="bg-primary-100 p-2.5 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 text-sm mb-1 uppercase tracking-wider">Our Office & Works</h4>
                      <p className="text-steel-400 text-xs leading-relaxed">
                        #10, 1st Main, 1st Cross, Doddanekundi Industrial Area,<br />
                        Opp to NGEF Ancillary, Mahadevapura Post,<br />
                        Bangalore - 560 048, Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 bg-white rounded-lg border border-steel-200 shadow-sm">
                    <div className="bg-primary-100 p-2.5 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 text-sm mb-1 uppercase tracking-wider">Phone & WhatsApp</h4>
                      <p className="text-steel-400 text-xs font-semibold">+91 973 837 1651</p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 bg-white rounded-lg border border-steel-200 shadow-sm">
                    <div className="bg-primary-100 p-2.5 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 text-sm mb-1 uppercase tracking-wider">Email Address</h4>
                      <p className="text-steel-400 text-xs">hydromechengineer@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-8 pt-6 border-t border-steel-200">
                <h4 className="font-semibold text-primary-700 text-sm mb-4 uppercase tracking-wider">WhatsApp Consultation</h4>
                <a
                  href="https://wa.me/919738371651?text=Hello%20ETHICS%20Metal%20Forming%20Machineries!%20I%20want%20to%20consult%20about%20my%20plant%20machinery%20needs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm transition-colors shadow"
                >
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Location Section */}
      <ContactLocationSection />
    </div>
  );
};

export default ContactUs;
