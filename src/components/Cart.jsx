import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart, increaseQty, decreaseQty } from "../Actions/CartAction";

const Cart = () => {
    const { cartItems } = useSelector((state => state.cartItems));
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [totalPrice, settotalPrice] = useState(Number);

    useEffect(() => {
        let total = cartItems && cartItems.reduce((acc, item) => item.quantity*(acc + item.price), 0)
        settotalPrice(Math.round(total));
        if(cartItems?.length===0){
            navigate('/');
        }
    }, [cartItems,navigate])

    const incrQty = (product) => {
        dispatch(increaseQty(product));
    }

    const decrQty = (product) => {
        if (product.quantity >=1) {
            dispatch(decreaseQty(product));
        }
    }

    return (
        <div>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cartItems?.length} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        </div>
                        {
                            cartItems && cartItems.map((product, i) => (

                                <div key={i} className="flex items-center -mx-8 px-6 py-5">
                                    <div className="flex w-2/5"> {/* product */}
                                        <div className="w-20">
                                            <img className="h-24" src={product.image} alt="product_image" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{product.title}</span>
                                            <span className="text-red-500 text-xs">Apple</span>
                                            <button className="font-semibold text-red-500  text-xs" onClick={() => dispatch(removeCart(product))}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <button className="text-xl font-semibold px-2 py-1" onClick={() => decrQty(product)}>-</button>
                                        <input className="mx-2 border text-center w-8" type="text" value={product.quantity} readOnly />
                                        <button className="text-xl font-semibold px-2 py-1" onClick={() => incrQty(product)}>+</button>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">{Math.round(product.price)}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {cartItems?.length}</span>
                            <span className="font-semibold text-sm">₹{totalPrice}</span>
                        </div>

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;