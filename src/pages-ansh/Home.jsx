import React from 'react';
import Footer from '../components-ansh/Footer';
import ServicesSection from '../components-ansh/ServiceSection';
import HeroSection from '../components-ansh/HeroSection';

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <ServicesSection />
      <Footer/>
    </div>
  );
}
