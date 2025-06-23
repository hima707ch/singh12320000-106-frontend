import React, { useState } from 'react';
import images from '../assets/images';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: 'all'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form id="SearchForm_1" onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div id="SearchForm_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div id="SearchForm_3" className="flex flex-col">
          <label className="text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>
        
        <div id="SearchForm_4" className="flex flex-col">
          <label className="text-gray-700 mb-2">Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={formData.minPrice}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Minimum price"
          />
        </div>

        <div id="SearchForm_5" className="flex flex-col">
          <label className="text-gray-700 mb-2">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Maximum price"
          />
        </div>

        <div id="SearchForm_6" className="flex flex-col">
          <label className="text-gray-700 mb-2">Property Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        id="SearchForm_7"
        className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Search Properties
      </button>
    </form>
  );
};

export default SearchForm;