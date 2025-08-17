import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        let json = await res.json();
        setProduct(json);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center">Loading product...</p>;

  return (
    <div className="p-4">
      <img src={product.thumbnail} alt={product.title} className="w-60 mx-auto" />
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
