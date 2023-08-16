import { Link, useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeCart } from "../../Actions/CartAction";
import { useEffect, useState } from "react";

const ProductCard = ({ data }) => {
    const { isAuthenticated } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cartItems);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        let isProductInCart = cartItems && cartItems.some(item => item?.id === data?.id);
        setIsAdded(isProductInCart);
    }, [cartItems, data?.id])

    const handleCart = (product, action) => {
        if (isAuthenticated) {
            if (action === "add") {
                dispatch(addToCart(product));
            }
            else if (action === "remove") {
                dispatch(removeCart(product))
            }
        }
        else {
            navigate('/login');
        }
    }


    return (
        <div key={data.id} className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <Link to={`/product/${data.id}`} className="h-56 flex items-center justify-center ">
                <img className="p-4 rounded-t-lg object-contain hover:scale-110 transition-all duration-300 ease-in-out mix-blend-multiply" width={150} height={200} src={data.image} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <Link>
                    <h5 title={data.title} className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{data.title}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating name="read-only" size="small" value={data.rating.rate} readOnly />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{data.rating.rate}</span>
                    <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{data.rating.count}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">₹{Math.round(data.price)}</span>
                    {
                        isAdded ?
                            <button key={data.id} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleCart(data, "remove")}>Remove</button>
                            :
                            <button key={data.id} className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleCart(data, "add")}>Add</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard