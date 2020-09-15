import axios from 'axios';
import { API_URL, PRODUCTS_LIST_QUERY } from '../api';

import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  RESET_PRODUCTS_LIST,
} from '../constants';

const initialState = {
  productsList: [],
  loading: true,
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LIST_REQUEST:
      return { ...state, loading: true };

    case PRODUCTS_LIST_SUCCESS:
      return { ...state, loading: false, productsList: payload };

    case PRODUCTS_LIST_FAIL:
      return { ...state, loading: false, error: payload };

    case RESET_PRODUCTS_LIST:
      return { ...state, productsList: [], loading: true, error: '' };

    default:
      return state;
  }
};

export const fetchProducts = () => async dispatch => {
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST });

    const { data } = await axios.post(API_URL, {
      query: PRODUCTS_LIST_QUERY,
    });
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data.data.allStarships.starships,
    });
  } catch (error) {
    dispatch({ type: PRODUCTS_LIST_FAIL, payload: error.message });
  }
};

export const resetProductsList = () => async dispatch => {
  dispatch({ type: RESET_PRODUCTS_LIST });
};
