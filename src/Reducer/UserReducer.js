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
} from "../Constans/UserConstants";

export const getUserReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case GET_USER_PENDING:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: action.payload,
                success: action.success
            }
        case GET_USER_SUCCESS:
            console.log("get user success");
            return {
                ...state,
                loading: false,
                isAuthenticated: action.payload,
                token: action.token
            }
        case GET_USER_REJECTED:
            console.log("get user rejected");
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                success: false,
            }
        case USER_LOGIN_REJECTED:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                success: false,
                error: action.error
            }
        case USER_LOGIN_PENDING:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGOUT_PENDING:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false
            }
        case USER_LOGOUT_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: return { ...state }
    }
}
