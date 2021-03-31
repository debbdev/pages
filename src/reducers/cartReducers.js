import { CART_ADD_DISH, CART_REMOVE_DISH, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/cartTypes";

function cartReducer(state = { cartItems: [], shipping: {}, payment: {} }, action) {
    switch (action.type) {
        case CART_ADD_DISH:
            const dish = action.payload;
            const fooddie = state.cartItems.find(x => x.food === dish.food);
      if (fooddie) {
        return {
          cartItems:
            state.cartItems.map(x => x.food === fooddie.food ? dish : x)
        };
      }
      return { cartItems: [...state.cartItems, dish] };
      case CART_REMOVE_DISH:
        return { cartItems: state.cartItems.filter(x => x.food !== action.payload) };   
        case CART_SAVE_SHIPPING:
          return { ...state, shipping: action.payload };
        case CART_SAVE_PAYMENT:
          return { ...state, payment: action.payload };  
      default: return state;
    }
}

export {cartReducer}