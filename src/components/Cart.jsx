// Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const items = useSelector(state => state.cart.items);

  if (!items.length) return <p className="text-center">Your cart is empty Please shop for more!!</p>;

  return (
    <div className="p-4">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
