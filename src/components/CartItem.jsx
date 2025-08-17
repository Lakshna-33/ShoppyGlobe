// CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <span>{item.title}</span>
      <div className="flex gap-2">
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={(e) =>
            dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
          }
          className="border w-12 text-center"
        />
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
