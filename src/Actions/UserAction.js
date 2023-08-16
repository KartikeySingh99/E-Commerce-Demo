import {
    GET_USER_PENDING,
    GET_USER_SUCCESS,
    GET_USER_REJECTED,
    USER_LOGIN_PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REJECTED,
    USER_LOGOUT_PENDING,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_REJECTED
} from "../Constans/UserConstants"
import axios from "axios";
import {toast} from "react-toastify";

export const getUser = async (dispatch) => {
    dispatch({ type: GET_USER_PENDING });
    let userToken = localStorage.getItem("userToken")
    let isAuthenticated = false;
    if (userToken !== null) {
        isAuthenticated = true;
        dispatch({ type: GET_USER_SUCCESS, payload: isAuthenticated, token: userToken });
    }
    else {
        dispatch({ type: GET_USER_REJECTED })
    }
}

export const login = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_PENDING });
        const { data } = await axios.post('https://fakestoreapi.com/auth/login', userData)
        let isAuthenticated;
        if (data.token) {
            localStorage.setItem("userToken", data.token);
            isAuthenticated = true;
        }
        dispatch({ type: USER_LOGIN_SUCCESS, payload: isAuthenticated, success: true });
    }
    catch (err) {
        dispatch({ type: USER_LOGIN_REJECTED, error: "Invalid Credentials" });
    }
}
export const logout = async (dispatch) => {
    try {
        dispatch({ type: USER_LOGOUT_PENDING });
        localStorage.removeItem("userToken");
        dispatch({ type: USER_LOGOUT_SUCCESS });
        toast.success("Logged Out Successfully!",{autoClose:1000});
    }
    catch (err) {
        dispatch({ type: USER_LOGOUT_REJECTED, error: err });
    }
}