import { useState } from 'react';

const usePropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        location: searchParams.location,
        minPrice: searchParams.minPrice,
        maxPrice: searchParams.maxPrice,
        type: searchParams.type
      });

      const response = await fetch(`/api/properties/search?${queryParams}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch properties');
      }

      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { properties, loading, error, handleSearch };
};

export default usePropertySearch;