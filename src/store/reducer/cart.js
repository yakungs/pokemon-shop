import { ADD_CART, ADD_ITEM, CLEAR_ALL } from "../constants";

const initialState = {
  carts: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.item],
      };
    case ADD_ITEM:
      return {
        ...state,
        carts: action.item,
      };
    case CLEAR_ALL:
      return {
        ...state,
        carts: action.item,
      };

    default:
      return state;
  }
};
