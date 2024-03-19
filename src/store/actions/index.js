import { ADD_CART, ADD_ITEM, CLEAR_ALL } from "../constants/";

//add Card in Cart
export const addCart = (item) => {
  const newItem = {
    item: item,
    qty: 1,
  };
  return async (dispatch) => {
    dispatch({
      type: ADD_CART,
      item: newItem,
    });
  };
};

//add cards inside of cart Section (add,delete)
export const addItem = (item) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      item: item,
    });
  };
};

export const clearAll = (item) => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_ALL,
      item: [],
    });
  };
};
