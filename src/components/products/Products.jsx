import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FetchProducts } from "../../Actions/ProductAction";

import ProductCard from "./ProductCard";
import Loading from "../Loader/Loading";

const Products = () => {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    // const [showAdded, setShowAdded] = useState(false);

    useEffect(() => {
        dispatch(FetchProducts)
    }, [dispatch])

    useEffect(() => {
        if (error) {
            alert(error)
        }
    })

    return (
        <>{
            loading ? <Loading />   
                :
                <div>
                    <h1 className="text-center py-8">Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {products && products.map((data) => (
                            <ProductCard key={data.id} data={data} />
                        ))}

                    </div>
                </div>
        }
        </>
    )
}
export default Products;