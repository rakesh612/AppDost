// src/components/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import StatsSection from '../sections/Stats';
import AboutSection from '../sections/About';
import ServicesSection from '../sections/Servies';
import ProcessSection from '../sections/Process';
import PortfolioSection from '../sections/Portfolio';
import OpenSourceSection from '../sections/OpenSource';
import TechnologiesSection from '../sections/Technologies';
import BlogSection from '../sections/Blog';
import CTASection from '../sections/Contact';
import ActiveUsers from '../ActiveUsers';

const Home = () => {
  return (
    <>
      <ActiveUsers />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <OpenSourceSection />
      <TechnologiesSection />
      <BlogSection />
      <CTASection />
    </>
  );
};

export default Home;