import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../../Actions/ProductAction";
import Rating from '@mui/material/Rating';
import { addToCart } from "../../Actions/CartAction";
import Loading from "../Loader/Loading";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productID } = useParams();

    const { isAuthenticated } = useSelector((state) => state.user);
    const { product, loading } = useSelector((state) => state.product);
    const { cartItems } = useSelector((state) => state.cartItems);

    const [showAdded, setShowAdded] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    
    useEffect(() => {
        dispatch(getSingleProduct(productID));
    }, [dispatch, productID]);

    useEffect(() => {
        if (cartItems && cartItems.some(item => item?.id === product?.id)) {
            setShowAdded(true);
        }
        else {
            setShowAdded(false);
        }
    }, [cartItems, product?.id])

    const handleSubmit = (product) => {
        if (isAuthenticated) {
            dispatch(addToCart(product))
        }
        else {
            navigate('/login');
        }
    }

    return (
        <>
            {
                loading ?
                    <Loading />
                    :
                    <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-between">
                                <img alt="ecommerce" className="w-1/4 lg:w-1/4 object-cover object-center rounded" src={product?.image} />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
                                    <div className="flex items-center mb-4">
                                        <Rating name="read-only" size="medium" value={product?.rating?.rate} readOnly />
                                        <p className="font-semibold ml-2">{product?.rating?.rate}</p>
                                    </div>
                                    <p className="leading-relaxed">{product?.description}</p>

                                    <div className="flex items-center mt-6">
                                        <span className="title-font font-medium text-2xl text-gray-900">₹{Math.round(product.price)}</span>
                                        {
                                            showAdded ?
                                                <button className="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded" >Added</button>
                                                :
                                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => handleSubmit(product)}>Buy Now</button>
                                        }
                                        {/* {
                                showAdded &&
                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => handleSubmit(product)}>Remove</button>
                            } */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default ProductDetails;