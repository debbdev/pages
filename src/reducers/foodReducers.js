import { FOOD_DETAILS_FAIL, FOOD_DETAILS_REQUEST, FOOD_DETAILS_SUCCESS, FOOD_LIST_FAIL, FOOD_LIST_REQUEST, FOOD_LIST_SUCCESS } from "../constants/foodTypes";


export function foodListReducer(state = { foods: [] }, action) {
    switch (action.type) {
        case FOOD_LIST_REQUEST:
            return { loading: true };
        case FOOD_LIST_SUCCESS:
                return { loading: false, foods: action.payload };  
         case FOOD_LIST_FAIL:
            return { loading: false, error: action.payload };  
        
        default:
            return state;
    }
}

export function foodDetailsReducer(state = { food: {} }, action) {
    switch (action.type) {
        case FOOD_DETAILS_REQUEST:
            return { loading: true };
        case FOOD_DETAILS_SUCCESS:
                return { loading: false, food: action.payload };  
         case FOOD_DETAILS_FAIL:
            return { loading: false, error: action.payload };  
        
        default:
            return state;
    }
}

export default { foodListReducer, foodDetailsReducer };