import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';

const Header = () => {
  const items = useSelector((state) => state.cart.basket);
  return (
    <nav>
      <h3>
        <Link to="/">Shop</Link>
      </h3>
      <div className="end">
        <h3>
          <Link to="/cart">Cart({items.length})</Link>
        </h3>
      </div>
    </nav>
  );
};

export default Header;
