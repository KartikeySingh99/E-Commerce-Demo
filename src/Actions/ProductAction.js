import {
    FETCH_ALL_PRODUCTS_PENDING,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_ALL_PRODUCTS_REJECTED,
    SINGLE_PRODUCTS_PENDING,
    SINGLE_PRODUCTS_SUCCESS,
    SINGLE_PRODUCTS_REJECTED
} from "../Constans/ProductConstants";
import axios from "axios";

export const FetchProducts = async (dispatch) => {
    try {
        dispatch({ type: FETCH_ALL_PRODUCTS_PENDING });
        const { data } = await axios.get('https://fakestoreapi.com/products');
        dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: data });
    }
    catch (err) {
        dispatch({ type: FETCH_ALL_PRODUCTS_REJECTED });
    }

}

export const getSingleProduct = (productID) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_PRODUCTS_PENDING });
        const { data } = await axios.get(`https://fakestoreapi.com/products/${productID}`);
        dispatch({ type: SINGLE_PRODUCTS_SUCCESS, payload: data })
    }
    catch (err) {
        dispatch({ type: SINGLE_PRODUCTS_REJECTED, eror: err });
    }
}