import {
    ADD_TO_CART_PENDING,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_REJECTED,
    GET_CART_PENDING,
    GET_CART_SUCCESS,
    GET_CART_REJECTED,
    REMOVE_CART_PENDING,
    REMOVE_CART_SUCCESS,
    REMOVE_CART_REJECTED,
    INCR_CART,
    DECR_CART,
    ERROR_CART
} from "../Constans/CartConstants"

export const AddToCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {

        case ADD_TO_CART_PENDING:
        case GET_CART_PENDING:
        case REMOVE_CART_PENDING:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_CART_SUCCESS:
        case GET_CART_SUCCESS:
        case REMOVE_CART_SUCCESS:
        case INCR_CART:
        case DECR_CART:
            return {
                loading: false,
                cartItems: action.payload
            }
        case ADD_TO_CART_REJECTED:
        case GET_CART_REJECTED:
        case REMOVE_CART_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default: return { ...state }
    }

}
