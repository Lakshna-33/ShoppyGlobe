import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={product.thumbnail} alt={product.title} className="h-40 object-cover mb-2" />

      <h3 className="font-bold text-2xl">{product.title}</h3>
      <p>${product.price}</p>
      <div className="mt-auto flex gap-2">
        <Link to={`/product/${product.id}`} className="text-red-500 text-2xl">View</Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-500 text-white px-2 py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
