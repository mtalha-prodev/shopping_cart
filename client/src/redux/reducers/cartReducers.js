import * as actionTypes from "../constants/cartConstants";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cart) => cart.product === action.payload
        ),
      };
    default:
      return state;
  }
};
