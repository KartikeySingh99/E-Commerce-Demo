import {
    ADD_TO_CART_PENDING,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_REJECTED,
    REMOVE_CART_PENDING,
    REMOVE_CART_SUCCESS,
    REMOVE_CART_REJECTED,
    GET_CART_PENDING,
    GET_CART_SUCCESS,
    GET_CART_REJECTED,
    INCR_CART,
    DECR_CART,
    ERROR_CART
} from "../Constans/CartConstants"
// import axios from "axios";

export const addToCart = (product) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_PENDING });

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const checkCart = cart.find(item => item.id === product.id);
        let updatedCartItems = [];


        if (checkCart) {
            updatedCartItems = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
        }
        else {
            updatedCartItems = [...cart, {
                ...product,
                quantity: 1
            }];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        dispatch({ type: ADD_TO_CART_SUCCESS, payload: updatedCartItems });
    }
    catch (err) {
        dispatch({ type: ADD_TO_CART_REJECTED, error: err })
    }
}

export const increaseQty = (product) => async (dispatch) => {
    try {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: ++item.quantity };
            }
            return item;
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        dispatch({ type: INCR_CART, payload: updatedCart })
    }
    catch (err) {
        dispatch({ type: ERROR_CART, error: err })
    }
}
export const decreaseQty = (product) => async (dispatch) => {
    try {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: --item.quantity };
            }
            return item;
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        dispatch({ type: DECR_CART, payload: updatedCart })
    }
    catch (err) {
        dispatch({ type: ERROR_CART, error: err })
    }
}

export const removeCart = (product) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_CART_PENDING });
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const checkCart = cart.find(item => item.id === product.id);
        let cartItems;
        if (checkCart) {
            cartItems = cart.filter((item) => item.id !== product.id)
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }

        dispatch({ type: REMOVE_CART_SUCCESS, payload: cartItems })
    }
    catch (err) {
        dispatch({ type: REMOVE_CART_REJECTED, error: err });
    }
}

export const getCart = async (dispatch) => {
    try {
        dispatch({ type: GET_CART_PENDING });
        const cart = JSON.parse(localStorage.getItem("cart"));
        dispatch({ type: GET_CART_SUCCESS, payload: cart })
    }
    catch (err) {
        dispatch({ type: GET_CART_REJECTED, error: err })
    }
}
