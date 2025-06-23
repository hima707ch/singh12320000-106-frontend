import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-57,75.6,-44.2C83.5,-31.4,87.6,-15.7,86.8,-0.4C86,14.8,80.4,29.6,72.5,42.9C64.6,56.2,54.3,68,41.4,75.7C28.5,83.4,14.2,87,-0.7,88.1C-15.6,89.2,-31.2,87.8,-44.8,81.2C-58.4,74.6,-70,62.8,-77.8,48.6C-85.6,34.4,-89.7,17.2,-89.2,0.3C-88.7,-16.6,-83.6,-33.2,-74.9,-47.2C-66.2,-61.2,-53.9,-72.6,-39.9,-77.7C-25.9,-82.8,-12.9,-81.6,1.3,-84.1C15.6,-86.6,31.2,-92.7,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Transform Your Digital
                <span className="animate-bounce inline-block ml-2">Presence</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-xl mb-8 animate-fade-in">
              Create stunning web experiences that captivate your audience and drive results.
            </p>
            <button id="Hero_4" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img id="Hero_5" src={images[0] || 'https://via.placeholder.com/600x400'} alt="Digital Solutions" className="rounded-lg shadow-2xl animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;