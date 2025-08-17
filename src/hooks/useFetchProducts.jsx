import { useState, useEffect } from 'react';

const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch the products');
        let json = await res.json();
        setData(json.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  return { data, loading, error };
};

export default useFetchProducts;
