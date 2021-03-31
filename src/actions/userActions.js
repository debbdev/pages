import axios from "../axios"
import Cookie from "js-cookie";
import { USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userTypes";


const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
        try {
        const { data } = await axios.post("/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
            Cookie.set("userInfo", JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    }
}

const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } })
        try {
        const { data } = await axios.post("/users/register", { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data})
            Cookie.set("userInfo", JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}
const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }

export { signin, register, logout };