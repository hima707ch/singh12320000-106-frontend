import React from 'react';
import images from '../assets/images';

const PropertyListings = ({ properties }) => {
  if (!properties?.length) {
    return (
      <div id="PropertyListings_1" className="text-center text-gray-600 py-8">
        No properties found matching your criteria.
      </div>
    );
  }

  return (
    <div id="PropertyListings_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div
          key={property.id}
          id={`PropertyListings_${index + 3}`}
          className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
        >
          <img
            src={images[index % images.length] || property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">${property.price.toLocaleString()}</span>
              <span className="text-gray-500 text-sm">{property.type}</span>
            </div>
            <div className="mt-4 flex space-x-4 text-sm">
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.beds} beds
              </span>
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {property.baths} baths
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;