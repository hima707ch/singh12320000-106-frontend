import React from 'react';

const CallToAction = ({ onAction }) => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
      <div className="container mx-auto px-6 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">
          Ready to Transform Your Business?
        </h2>
        <p id="CTA_3" className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied clients who have taken their digital presence to the next level.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            id="CTA_4"
            onClick={onAction}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105"
          >
            Get Started Now
          </button>
          <button
            id="CTA_5"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;