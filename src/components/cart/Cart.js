import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.css';
import { getCartTotal } from '../../store/reducers/cartReducer';
import * as actionTypes from '../../store/actions/cartActions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const basket = useSelector((state) => state.cart.basket);

  const dispatch = useDispatch();

  const removeFromBasket = (id) => {
    dispatch(actionTypes.removeItem(id));
  };

  const clearCart = () => {
    dispatch(actionTypes.clearBasket());
  };

  const increaseQuantity = (id) => {
    dispatch(actionTypes.increase(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(actionTypes.decrease(id));
  };

  return (
    <div className="cart-wrapper">
      <h3>Shopping Cart</h3>
      <div className="cart-row">
        <div className="cart-row-1">
          {basket.length === 0 ? (
            <h3>Cart is empty</h3>
          ) : (
            basket.map((item) => (
              <>
                <div className="item-details-display">
                  <img src={item.image} alt={item.title} />
                  <div className="desc">
                    <p className="title">{item.title}</p>
                    <p>{item.category}</p>
                  </div>

                  <div className="count">
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  </div>
                  <h4>NGN {item.price}</h4>

                  <div
                    className="remove-button"
                    onClick={() => removeFromBasket(item.id)}
                  >
                    X
                  </div>
                </div>
              </>
            ))
          )}
        </div>
        <div className="cart-row-2">
          <div>
            <h3>Total Items</h3>
            <p> {basket.length}</p>
          </div>
          <div>
            <h3>Total Payment</h3>
            <p>NGN {getCartTotal(basket).toFixed(2)}</p>
          </div>
          <hr />
          <div className="bottom-part">
            <button className="button">Check out</button>
            <div className="clear-cart" onClick={() => clearCart()}>
              <p>Clear Cart</p>
            </div>
          </div>
        </div>
      </div>
      <button className="button">
        <Link to="/">Back to shop</Link>
      </button>
    </div>
  );
};

export default Cart;
