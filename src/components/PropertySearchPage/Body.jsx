import React from 'react';
import SearchForm from './SearchForm';
import PropertyListings from './PropertyListings';
import usePropertySearch from './usePropertySearch';

const Body = () => {
  const { properties, loading, error, handleSearch } = usePropertySearch();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect Property</h1>
        <SearchForm onSearch={handleSearch} />
        {error && <div id="Body_4" className="text-red-600 text-center my-4">{error}</div>}
        {loading ? (
          <div id="Body_5" className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <PropertyListings properties={properties} />
        )}
      </div>
    </div>
  );
};

export default Body;