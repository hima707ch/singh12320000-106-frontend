import React from 'react';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="AboutUs_2" className="text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p id="AboutUs_3" className="text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate digital creators dedicated to transforming ideas into powerful online experiences. With years of expertise, we craft solutions that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div id="AboutUs_4" className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing boundaries with cutting-edge solutions</p>
          </div>
          
          <div id="AboutUs_5" className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Precision</h3>
            <p className="text-gray-600">Attention to detail in every project we handle</p>
          </div>
          
          <div id="AboutUs_6" className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Partnership</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;