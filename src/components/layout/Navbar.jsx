import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Actions/UserAction";
import { useEffect, useState } from "react";

const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cartItems);
    const [isAuth, setAuth] = useState(false);
    const [totalQty, setQty] = useState(0);

    useEffect(() => {
        if (isAuthenticated) {
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    }, [isAuthenticated])

    useEffect(() => {
        if (cartItems && cartItems.length > 0) {
            setQty(cartItems.length);
        }
        else{
            setQty()
        }
    }, [cartItems?.length])

    return (
        <>
            <nav className="w-full bg-white sticky top-0 left-0 z-30 flex flex-col md:flex-row items-center shadow-md md:py-6 h-20">
                <div className="w-full flex items-center justify-around">
                    <Link to="/"><h1 className="text-3xl font-bold text-[#6a74d2]">Sell It</h1></Link>
                    <div className="hidden md:block">
                        <div className="w-full">
                            <input type="text" placeholder="search products" className="bg-gray-100 sm:w-full md:w-[20rem] px-4 py-3 rounded-lg" />
                        </div>
                    </div>
                    <ul className="flex items-center justify-center">
                        <Link to="/cart"><li className="px-4 py-3 text-lg hover:text-purple-500 hover:border-b-2 border-purple-500 cursor-pointer">Cart <span>{totalQty}</span></li></Link>
                        {isAuth ?
                            <li className="px-4 py-3 text-lg hover:text-purple-500 hover:border-b-2 border-purple-500 cursor-pointer" onClick={() => dispatch(logout)}>Logout</li>
                            :
                            <Link to="/login"><li className="px-4 py-3 text-lg hover:text-purple-500 hover:border-b-2 border-purple-500 cursor-pointer">Login</li></Link>
                        }
                    </ul>
                </div>
                <div className="w-full md:hidden">
                    <input type="text" placeholder="search products" className="bg-gray-100 w-full md:w-[20rem] px-4 py-3 rounded-lg" />
                </div>
            </nav>
        </>
    )
}
export default Navbar;