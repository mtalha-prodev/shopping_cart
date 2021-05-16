import * as actionTypes from "../constants/productConstants";

const initialState = {
  loading: false,
  products: [],
  error: "",
};
const initialStateDetail = {
  loading: false,
  product: {},
  error: "",
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCTS_REQUEST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case actionTypes.PRODUCTS_REQUEST_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailReducer = (state = initialStateDetail, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: "",
      };
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        product: {},
        error: action.payload,
      };

    case actionTypes.PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };

    default:
      return state;
  }
};
