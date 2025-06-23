import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';

const Body = () => {
  const { handleSearch, handleContact } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <CallToAction onAction={handleContact} />
      <Footer />
    </div>
  );
};

export default Body;