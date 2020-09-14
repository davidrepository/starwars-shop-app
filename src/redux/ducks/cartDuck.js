import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
} from '../constants';
import Cookie from 'js-cookie';

const initialState = {
  cartProducts: [],
  loading: true,
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      const existingItem = state.cartProducts.find(
        x => x.productDetails.id === payload.productDetails.id,
      );

      if (existingItem) {
        if (existingItem.quantity === payload.quantity) return { ...state };

        return {
          ...state,
          cartProducts: state.cartProducts.map(x =>
            x.productDetails.id === existingItem.productDetails.id
              ? payload
              : x,
          ),
        };
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts, payload],
      };

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          item => item.productDetails.id !== payload,
        ),
      };
    case REMOVE_ALL_PRODUCTS_FROM_CART:
      return {
        ...state,
        cartProducts: [],
      };
    default:
      return state;
  }
};

export const addProductToCart = (productDetails, quantity) => async (
  dispatch,
  getState,
) => {
  console.log(productDetails);

  if (quantity <= 0) return;

  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: { productDetails, quantity },
  });

  const {
    cartDuck: { cartProducts },
  } = getState();
  Cookie.set('cartProducts', JSON.stringify(cartProducts));
};

export const removeProductFromCart = productId => async (
  dispatch,
  getState,
) => {
  dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: productId });

  const {
    cartDuck: { cartProducts },
  } = getState();
  Cookie.set('cartProducts', JSON.stringify(cartProducts));
};

export const removeAllProductsFromCart = () => async dispatch => {
  dispatch({ type: REMOVE_ALL_PRODUCTS_FROM_CART });
};

// export const updateProductQuantity = (
//   productId,
//   quantity,
// ) => async dispatch => {
//   dispatch({ type: UPDATE_PRODUCT_QUANTITY, payload: { productId, quantity } });
// };
