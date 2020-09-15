import axios from 'axios';
import { API_URL, PRODUCT_DETAILS_QUERY } from '../api';

import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  RESET_PRODUCT_DETAILS,
} from '../constants';

const initialState = {
  productDetails: {},
  loading: true,
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };

    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, productDetails: payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: payload };
    case RESET_PRODUCT_DETAILS:
      return { ...state, loading: true, error: '', productDetails: {} };

    default:
      return state;
  }
};

export const fetchProductDetails = productId => async dispatch => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.post(API_URL, {
      query: PRODUCT_DETAILS_QUERY(productId),
    });

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.data.starship,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

export const resetProductDetails = () => async dispatch => {
  dispatch({ type: RESET_PRODUCT_DETAILS });
};
