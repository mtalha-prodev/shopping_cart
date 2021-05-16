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

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
