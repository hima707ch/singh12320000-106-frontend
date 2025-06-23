import { useState } from 'react';

const useHome = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    try {
      setLoading(true);
      const response = await fetch('/api/properties/search?' + new URLSearchParams(searchParams));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContact = async (contactData) => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Contact error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSearch,
    handleContact,
  };
};

export default useHome;