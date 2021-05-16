import * as actionTypes from "../constants/productConstants";

import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCTS_REQUEST });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: actionTypes.PRODUCTS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCTS_REQUEST_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const resetProduct = () => (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_DETAILS_RESET,
  });
};
