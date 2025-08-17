import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <header className="flex justify-between p-4 bg-red-700 text-2xl text-white">
      <Link to="/" className="text-3xl font-bold text-gray-700">ShoppyGlobe</Link>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;