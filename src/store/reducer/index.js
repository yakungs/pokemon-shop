import { combineReducers } from "redux";
import { cart } from "./cart";

const Reducers = combineReducers({
  cartState: cart,
});

export default Reducers;
