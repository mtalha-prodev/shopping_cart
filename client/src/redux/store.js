import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  productDetailReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  productDetails: productDetailReducer,
});

// save to localStorage cart user add to cart

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// and save in cartItems to cartReducer

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
