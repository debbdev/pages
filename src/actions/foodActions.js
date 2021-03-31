import axios from '../axios';
import { FOOD_LIST_FAIL, FOOD_LIST_REQUEST, FOOD_LIST_SUCCESS, FOOD_DETAILS_REQUEST, FOOD_DETAILS_SUCCESS,FOOD_DETAILS_FAIL  } from '../constants/foodTypes';


export const listFood = () => async (dispatch) => {
    try {
        dispatch({ type: FOOD_LIST_REQUEST });
        const { data } = await axios.get("/food");
        console.log({ data });
        dispatch({ type: FOOD_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FOOD_LIST_FAIL, payload: error.message });
    }
};

export const detailsFood = (foodId) => async (dispatch) => {
    try {
        dispatch({ type: FOOD_DETAILS_REQUEST, payload: foodId});
        const { data } = await axios.get("/food" + '/' + foodId);
        console.log({ data });
        dispatch({ type: FOOD_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FOOD_DETAILS_FAIL, payload: error.message });
    }
};

export default { listFood, detailsFood };