import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../index.css';

export const metadata = {
  title: 'ETHICS Metal Forming Machineries India',
  description: 'Engineering precision, industrial trust, and manufacturing strength. High-quality sheet metal, clinching, profile bending, and busbar processing machinery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-inter antialiased">
        <a className="skip-link" href="#content">Skip to content</a>
        <Header />
        <main id="content" className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
