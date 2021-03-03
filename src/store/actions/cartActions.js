export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EMPTY_BASKET = 'EMPTY_BASKET';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const addItem = (product) => {
  return { type: ADD_ITEM, item: product };
};

export const removeItem = (id) => {
  return { type: REMOVE_ITEM, id: id };
};

export const clearBasket = () => {
  return { type: EMPTY_BASKET };
};

export const increase = (id) => {
  return { type: INCREASE, id: id };
};

export const decrease = (id) => {
  return { type: DECREASE, id: id };
};
