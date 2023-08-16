import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";


const Trending = () => {

    const [products, setProducts] = useState([]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 428 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 428, min: 0 },
            items: 1,
        }
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    console.log(products);
    return (
        <>
            <section className="my-4 px-20 flex flex-col items-center">
                <h1 className="my-12">Trending Section</h1>
                <Carousel className="overflow-hidden"
                    // PrevtIcon={<ArrowBackIos />}
                    // NextIcon={<ArrowForwardIos />}
                    additionalTransfrom={0}
                    containerClass="banner-carousel"
                    arrows={true}
                    draggable
                    focusOnSelect={false}
                    slidesToSlide={1}
                    removeArrowOnDeviceType={["mobile"]}
                    autoPlay
                    infinite
                    itemClass="banner-carousel"
                    // minimumTouchDrag={80}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    responsive={responsive}
                >
                    {products && products.map((data) => (

                        <div key={data.id} className=" flex flex-col items-center p-2 sm:p-4 rounded-lg border-solid border border-gray-200" >

                            <Link className="flex flex-col items-center text-center" >

                                <div className="md:w-36 md:h-36 w-28 h-28 relative">
                                    <img src={data.image} alt="product" draggable="false" className="md:w-36 md:h-36 w-28 h-28" />
                                </div>
                                <div className="boNTXX h-[37px]">{data.title}</div>

                            </Link>

                            <div className=" flex justify-between items-center w-full">
                                <div className="text-sm">₹{data.price}</div>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Add</button>
                            </div>
                        </div>
                    ))}

                </Carousel>
            </section>
        </>
    )
}
export default Trending;