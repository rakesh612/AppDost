// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from '../common/WattsApp';
import PageLoader from '../common/PageLoader';
import ScrollProgress from '../common/ScrollProgress';
import CursorTrail from '../common/CursorTrail';
import FloatingElements from '../common/FloatingElements';

const Layout = ({ children }) => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Cursor Trail Effect (Desktop Only) */}
      <CursorTrail />

      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Scroll Progress Indicators */}
      <ScrollProgress />

      <div className="min-h-screen flex flex-col relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Float Button */}
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Layout;