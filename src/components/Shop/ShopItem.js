import React from 'react';
import './Shop.css';

const ShopItem = ({ title, price, image }) => {
  return (
    <div className="product-cover">
      <img className="product-image" src={image} alt={title} />
      <p>{title.length > 45 ? title.substring(0, 40) + '...' : title}</p>
      <h3>NGN {price}</h3>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ShopItem;
