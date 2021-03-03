import * as actionTypes from '../actions/cartActions';

const initialState = {
  basket: [],
};

export const getCartTotal = (basket) =>
  basket?.reduce((quantity, item) => item.price + quantity, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const i = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (i >= 0) {
        console.log(`item is already in cart, check cart to add more!`);
      }

      localStorage.setItem('basket', JSON.stringify(state.basket));
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_ITEM:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    case actionTypes.INCREASE:
      let tempBasket = state.basket.map((item) => {
        if (item.id === action.id) {
          item = {
            ...item,
            quantity: item.quantity + 1,
            price: item.price * item.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        basket: tempBasket,
      };
    case actionTypes.DECREASE:
      let tempCart = [];

      tempCart = state.basket.map((item) => {
        if (item.quantity === 1) {
          return item;
        } else if (item.id === action.id) {
          item = {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

      return { ...state, basket: tempCart };

    default:
      return state;
  }
};

export default cartReducer;
