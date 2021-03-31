import axios from '../axios';
import Cookie from 'js-cookie';
import { CART_ADD_DISH, CART_REMOVE_DISH, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from '../constants/cartTypes';


export const addToCart = (foodId, qty) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get("/food/" + foodId);
      dispatch({
        type: CART_ADD_DISH, payload: {
          food: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
         category: data.category,
        barcode: data.barcode,
        description: data.description,
          qty
        }
      });
      const { cart: { cartItems } } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
  
    } catch (error) {
  
    }
}

export const removeFromCart = (foodId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_DISH, payload: foodId });
  
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  }
  export const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}
  export const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data });
  }
export default {addToCart, removeFromCart, saveShipping, savePayment}