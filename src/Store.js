import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { allProductsReducer, getProductDetails } from "./Reducer/ProductReducer";
import { AddToCartReducer } from "./Reducer/CartReducer";
import { getUserReducer } from "./Reducer/UserReducer";


const rootReducer = combineReducers({
    products: allProductsReducer,
    cartItems: AddToCartReducer,
    user: getUserReducer,
    product: getProductDetails
})

const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;