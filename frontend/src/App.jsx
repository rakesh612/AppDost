import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/Stats'
import AboutSection from './components/About'
import ServicesSection from './components/Servies'
import ProcessSection from './components/Process'
import PortfolioSection from './components/Portfolio'
import OpenSourceSection from './components/OpenSource'
import ActiveUsers from './components/ActiveUsers'
import TechnologiesSection from './components/Technologies'
import WhatsAppFloat from './components/WattsApp'
import BlogSection from './components/Blog'
import Footer from './components/Footer'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'

const App = () => {
  return (
    <div>
      {/* <ActiveUsers />
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <OpenSourceSection />
      <TechnologiesSection />
      <BlogSection />
      <WhatsAppFloat />
      <Footer /> */}
      <Layout />
      <Home />
    </div>
  )
}

export default App
