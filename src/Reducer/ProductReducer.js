import {
    FETCH_ALL_PRODUCTS_PENDING,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_ALL_PRODUCTS_REJECTED,
    SINGLE_PRODUCTS_PENDING,
    SINGLE_PRODUCTS_SUCCESS,
    SINGLE_PRODUCTS_REJECTED
} from "../Constans/ProductConstants";

export const allProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS_PENDING:
            return {
                loading: true
            }
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case FETCH_ALL_PRODUCTS_REJECTED:
            return {
                loading: false,
                // products: state.products
            }
        default: return { ...state }
    }
}

export const getProductDetails = (state = { product: {} }, action) => {
    switch (action.type) {
        case SINGLE_PRODUCTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case SINGLE_PRODUCTS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            }
        case SINGLE_PRODUCTS_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return { ...state }
    }
}