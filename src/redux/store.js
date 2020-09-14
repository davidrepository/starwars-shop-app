import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

// DUCKS
import productsDuck from './ducks/productsDuck';
import productDetailsDuck from './ducks/productDetailsDuck';
import cartDuck from './ducks/cartDuck';

const cartProducts = Cookie.getJSON('cartProducts') || [];

const initialState = { cartDuck: { cartProducts } };

const middleware = [thunk];

const reducers = combineReducers({
  productsDuck,
  productDetailsDuck,
  cartDuck,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
