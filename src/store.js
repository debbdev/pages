import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'
import { cartReducer } from './reducers/cartReducers';
import { foodDetailsReducer, foodListReducer } from './reducers/foodReducers';
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";
import { orderCreateReducer } from './reducers/orderReducers';

const userInfo = Cookie.getJSON('userInfo') || null;
const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = {
    cart: {cartItems},
    userSignin: { userInfo },
};

const reducer = combineReducers({
    foodList: foodListReducer,
    foodDetails: foodDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
