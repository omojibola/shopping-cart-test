import React from 'react';
import './Shop.css';

import { useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/cartActions';

const ShopItem = ({ title, price, image, id, category }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      actionTypes.addItem({
        id,
        title,
        price,
        image,
        category,
        quantity: 1,
      })
    );
  };
  return (
    <div className="product-cover">
      <img className="product-image" src={image} alt={title} />
      <p>{title.length > 45 ? title.substring(0, 40) + '...' : title}</p>
      <h3>NGN {price}</h3>
      <button className="add-to-cart" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ShopItem;
