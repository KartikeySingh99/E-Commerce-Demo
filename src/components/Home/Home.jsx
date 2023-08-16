import { Link } from "react-router-dom";
import Hero_BG from "../../assets/hero_section-removebg-preview.png";
import Products from "../products/Products";
import { useSelector } from "react-redux";
import Loading from "../Loader/Loading";
import { useEffect } from "react";

const Home = () => {
    // const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.cartItems)
    // const { cartItems } = useSelector((state) => state.getCartItem);

    // const { user } = useSelector((state) => state.user);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])


    return (
        <>
            {
                loading ? <Loading />
                    :
                    <>
                        <section className="hidden gradient-background relative bg-violet-300 py-4 md:flex items-center justify-around w-full h-full md:px-10 xl:px-20">
                            <div className="custom-shape-divider-bottom-1691852962">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
                                </svg>
                            </div>

                            <div className="hidden sm:flex flex-col items-center justify-center">

                                <p className="text-[2rem] lg:text-[3rem] font-bold tracking-wide text-black heading text-center leading-tight">
                                    Best Place To Find Amazing <span className="text-white drop-shadow-lg">Products</span>
                                </p>

                                <Link to='/products'
                                    className="relative z-30 mt-6 cursor-pointer text-white bg-[#868ed3] hover:text-white hover:bg-[#6a74d2] w-full md:w-auto px-4 py-2 rounded-lg">
                                    Explore Now
                                </Link>
                            </div>


                            <div className="hidden sm:flex items-center justify-center">
                                <img
                                    src={Hero_BG}
                                    width="1024"
                                    height="1024"
                                    className="md:w-[15rem] md:h-[15rem] lg:w-[30rem] lg:h-[20rem] object-contain relative left-28"
                                    alt="hero-bg"
                                />
                                <div className="relative text-right font-semibold text-white">
                                    <p className="lg:text-2xl xl:text-4xl drop-md drop-shadow-lg">Your One-Stop&nbsp;<span>Online Shop for</span> Endless Possibilities.</p>
                                </div>
                            </div>


                        </section>
                        {/* <Trending /> */}
                        <section className="px-20 overflow-auto">
                            <Products />
                        </section>
                    </>
            }

        </>
    )
}

export default Home;